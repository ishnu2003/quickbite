document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const registerModal = document.getElementById('registerModal');
  const openRegisterBtn = document.getElementById('openRegister');
  const closeModalBtn = document.querySelector('.close-modal');

  // Toggle password visibility (unchanged UX)
  document.querySelectorAll('.toggle-password').forEach(toggle => {
    toggle.addEventListener('click', function() {
      const passwordInput = this.previousElementSibling;
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        this.textContent = '🔒';
      } else {
        passwordInput.type = 'password';
        this.textContent = '👁️';
      }
    });
  });

  // Modal open/close (unchanged UX)
  openRegisterBtn.addEventListener('click', function(e) {
    e.preventDefault();
    registerModal.style.display = 'flex';
  });
  closeModalBtn.addEventListener('click', function() {
    registerModal.style.display = 'none';
  });
  window.addEventListener('click', function(e) {
    if (e.target === registerModal) registerModal.style.display = 'none';
  });

  // Login with real API
  loginForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    let isValid = true;
    document.querySelectorAll('#loginForm .error').forEach(el => el.textContent = '');

    const emailInput = document.getElementById('loginEmail');
    const passwordInput = document.getElementById('loginPassword');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailInput.value.trim()) { document.getElementById('loginEmailError').textContent = 'Please enter your email address'; isValid = false; }
    else if (!emailRegex.test(emailInput.value)) { document.getElementById('loginEmailError').textContent = 'Please enter a valid email address'; isValid = false; }
    if (!passwordInput.value.trim()) { document.getElementById('loginPasswordError').textContent = 'Please enter your password'; isValid = false; }
    else if (passwordInput.value.length < 6) { document.getElementById('loginPasswordError').textContent = 'Password must be at least 6 characters'; isValid = false; }
    if (!isValid) return;

    const submitBtn = loginForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Signing in...'; submitBtn.disabled = true;

    try {
      const resp = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify({ email: emailInput.value.trim(), password: passwordInput.value })
      });
      const data = await resp.json();
      if (!resp.ok || !data.ok) throw new Error(data.error || 'Login failed');
      alert('Login successful! Welcome back to QuickBite.');
      // optional redirect to dashboard
      // window.location.href = 'admin.html';
    } catch (err) {
      alert(err.message || 'Login failed');
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      // keep values or clear as you like
    }
  });

  // Register with real API
  registerForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    let isValid = true;
    document.querySelectorAll('#registerForm .error').forEach(el => el.textContent = '');

    const nameInput = document.getElementById('regName');
    const regEmailInput = document.getElementById('regEmail');
    const regPasswordInput = document.getElementById('regPassword');
    const phoneInput = document.getElementById('regPhone');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameInput.value.trim()) { document.getElementById('regNameError').textContent = 'Please enter your full name'; isValid = false; }
    if (!regEmailInput.value.trim()) { document.getElementById('regEmailError').textContent = 'Please enter your email address'; isValid = false; }
    else if (!emailRegex.test(regEmailInput.value)) { document.getElementById('regEmailError').textContent = 'Please enter a valid email address'; isValid = false; }
    if (!regPasswordInput.value.trim()) { document.getElementById('regPasswordError').textContent = 'Please create a password'; isValid = false; }
    else if (regPasswordInput.value.length < 8) { document.getElementById('regPasswordError').textContent = 'Password must be at least 8 characters'; isValid = false; }
    if (phoneInput.value.trim()) {
      const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
      if (!phoneRegex.test(phoneInput.value) || phoneInput.value.replace(/\D/g, '').length < 10) {
        document.getElementById('regPhoneError').textContent = 'Please enter a valid phone number'; isValid = false;
      }
    }
    if (!isValid) return;

    const submitBtn = registerForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Creating account...'; submitBtn.disabled = true;

    try {
      const resp = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify({
          name: nameInput.value.trim(),
          email: regEmailInput.value.trim(),
          password: regPasswordInput.value
        })
      });
      const data = await resp.json();
      if (!resp.ok || !data.ok) throw new Error(data.error || 'Registration failed');
      alert('Registration successful! You are now logged in.');
      registerForm.reset();
      registerModal.style.display = 'none';
    } catch (err) {
      alert(err.message || 'Registration failed');
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
});
