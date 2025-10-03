document.addEventListener('DOMContentLoaded', async () => {
  // ---------------- USER SNAPSHOT ----------------
  try {
    const resp = await fetch('/api/my-data');
    if (!resp.ok) {
      // not logged in, go back to login
      window.location.href = 'login.html';
      return;
    }
    const data = await resp.json();

    // user card
    const userDiv = document.getElementById('userInfo');
    userDiv.innerHTML = `
      <div class="card p-3 mb-3">
        <h5 class="card-title mb-1">${data.user.name}</h5>
        <p class="mb-0"><strong>Email:</strong> ${data.user.email}</p>
      </div>
    `;

    // orders
    const ordersList = document.getElementById('ordersList');
    if (data.orders && data.orders.length > 0) {
      ordersList.innerHTML = data.orders.map(o =>
        `<li class="list-group-item">
          ${o.item_name} (${o.category}) - $${o.price ? o.price.toFixed(2) : '-'} x${o.qty}
        </li>`
      ).join('');
    } else {
      ordersList.innerHTML = `<li class="list-group-item">No orders yet</li>`;
    }

    // feedback
    const feedbackList = document.getElementById('feedbackList');
    if (data.feedbacks && data.feedbacks.length > 0) {
      feedbackList.innerHTML = data.feedbacks.map(f =>
        `<li class="list-group-item">${f.message}</li>`
      ).join('');
    } else {
      feedbackList.innerHTML = `<li class="list-group-item">No feedback yet</li>`;
    }

  } catch (err) {
    console.error("Error fetching my-data:", err);
    alert("❌ Failed to load your dashboard data");
  }

  // ---------------- MOST ORDERED ITEMS CHART ----------------
  try {
    const resp = await fetch('/api/stats/most-ordered');
    const json = await resp.json();

    if (!resp.ok || !json.ok) throw new Error(json.error || "Stats fetch failed");

    const labels = (json.stats || []).map(s => s.item);
    const values = (json.stats || []).map(s => s.total);

    if (labels.length > 0) {
      const ctx = document.getElementById('ordersChart').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels,
          datasets: [{
            label: 'Most Ordered Items',
            data: values
          }]
        },
        options: {
          responsive: true,
          plugins: { legend: { display: true } },
          scales: { y: { beginAtZero: true, ticks: { precision: 0 } } }
        }
      });
    }
  } catch (err) {
    console.error("Error loading chart:", err);
    // do not break page if chart fails
  }

  // ---------------- SIGN OUT ----------------
  document.getElementById('logoutBtn').addEventListener('click', async () => {
    await fetch('/api/logout', { method: 'POST' });
    window.location.href = 'login.html';
  });
});
