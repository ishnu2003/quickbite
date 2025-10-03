// app.js
const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const session = require("express-session");
const bcrypt = require("bcryptjs");

const app = express();
const PORT = 3000;

// ---------- middleware ----------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "quickbite_dev_secret",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 2 }
  })
);
app.use(express.static(path.join(__dirname)));

const DB_PATH = path.join(__dirname, "quickbite.sqlite3");
const db = new sqlite3.Database(DB_PATH);

// ---------- helpers ----------
function run(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function (err) {
      if (err) reject(err);
      else resolve(this);
    });
  });
}
function get(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) => (err ? reject(err) : resolve(row)));
  });
}
function all(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => (err ? reject(err) : resolve(rows)));
  });
}
function requireAuth(req, res, next) {
  if (!req.session.user) return res.status(401).json({ error: "Not logged in" });
  next();
}

// ---------- ROUTES ----------

// Health check
app.get("/api/health", (req, res) => res.json({ ok: true }));

// Register
app.post("/api/register", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ error: "Missing fields" });
    const exists = await get(`SELECT id FROM users WHERE email = ?`, [email]);
    if (exists) return res.status(400).json({ error: "Email already registered" });
    const hash = await bcrypt.hash(password, 10);
    const ins = await run(`INSERT INTO users (name, email, password) VALUES (?, ?, ?)`, [name, email, hash]);
    req.session.user = { id: ins.lastID, name, email };
    res.json({ ok: true, user: req.session.user });
  } catch (e) { next(e); }
});

// Login
app.post("/api/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await get(`SELECT * FROM users WHERE email = ?`, [email]);
    if (!user) return res.status(401).json({ error: "Invalid credentials" });
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ error: "Invalid credentials" });
    req.session.user = { id: user.id, name: user.name, email: user.email };
    res.json({ ok: true, user: req.session.user });
  } catch (e) { next(e); }
});

// Logout
app.post("/api/logout", (req, res) => {
  req.session.destroy(() => res.json({ ok: true }));
});

// Current session
app.get("/api/me", (req, res) => res.json({ user: req.session.user || null }));

// Add feedback
app.post("/api/feedback", requireAuth, async (req, res, next) => {
  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: "Message required" });
    await run(`INSERT INTO feedbacks (user_id, message) VALUES (?, ?)`, [req.session.user.id, message]);
    res.json({ ok: true });
  } catch (e) { next(e); }
});

// Place order (Add item to cart)
app.post("/api/order-item", requireAuth, async (req, res, next) => {
  try {
    const { restaurantSlug, itemName, category, price } = req.body;
    if (!restaurantSlug || !itemName) return res.status(400).json({ error: "Missing fields" });

    // ensure restaurant
    let r = await get(`SELECT * FROM restaurants WHERE slug = ?`, [restaurantSlug]);
    if (!r) {
      const ins = await run(`INSERT INTO restaurants (slug, name) VALUES (?, ?)`, [restaurantSlug, restaurantSlug]);
      r = { id: ins.lastID, slug: restaurantSlug, name: restaurantSlug };
    }

    // ensure menu item
    let mi = await get(`SELECT * FROM menu_items WHERE restaurant_id = ? AND name = ?`, [r.id, itemName]);
    if (!mi) {
      const ins = await run(
        `INSERT INTO menu_items (restaurant_id, name, category, price) VALUES (?, ?, ?, ?)`,
        [r.id, itemName, category || "uncategorized", price || null]
      );
      mi = { id: ins.lastID };
    }

    // create order + add item
    const ord = await run(`INSERT INTO orders (user_id) VALUES (?)`, [req.session.user.id]);
    await run(`INSERT INTO order_items (order_id, menu_item_id, qty) VALUES (?, ?, 1)`, [ord.lastID, mi.id]);

    res.json({ ok: true });
  } catch (e) { next(e); }
});

// Get logged-in user's data
app.get("/api/my-data", requireAuth, async (req, res, next) => {
  try {
    const userId = req.session.user.id;
    const user = await get(`SELECT id, name, email FROM users WHERE id = ?`, [userId]);

    const orders = await all(
      `SELECT mi.name AS item_name, mi.category, mi.price, oi.qty
       FROM orders o
       JOIN order_items oi ON o.id = oi.order_id
       JOIN menu_items mi ON mi.id = oi.menu_item_id
       WHERE o.user_id = ?`,
      [userId]
    );

    const feedbacks = await all(
      `SELECT message FROM feedbacks WHERE user_id = ?`,
      [userId]
    );

    res.json({ user, orders, feedbacks });
  } catch (e) { next(e); }
});

// Stats for most-ordered items
app.get("/api/stats/most-ordered", async (req, res, next) => {
  try {
    const stats = await all(
      `SELECT mi.name AS item, COUNT(*) AS total
       FROM order_items oi
       JOIN menu_items mi ON mi.id = oi.menu_item_id
       GROUP BY mi.id
       ORDER BY total DESC
       LIMIT 7`
    );
    res.json({ ok: true, stats });
  } catch (e) { next(e); }
});

// Error test
app.get("/api/error-test", (req, res, next) => {
  next(new Error("Simulated server error"));
});

// Error handler
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err.message);
  res.status(500).json({ error: "Internal Server Error", detail: err.message });
});

app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
