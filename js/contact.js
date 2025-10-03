document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');

  // your original validation (kept)
  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    let isValid = true;

    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;

    if (!nameInput.value.trim()) {
      document.getElementById('nameError').textContent = 'Please enter your name';
      isValid = false;
    }
    if (!emailInput.value.trim()) {
      document.getElementById('emailError').textContent = 'Please enter your email address';
      isValid = false;
    } else if (!emailRegex.test(emailInput.value)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email address';
      isValid = false;
    }
    if (!phoneInput.value.trim()) {
      document.getElementById('phoneError').textContent = 'Please enter your phone number';
      isValid = false;
    } else if (!phoneRegex.test(phoneInput.value)) {
      document.getElementById('phoneError').textContent = 'Please enter a valid phone number';
      isValid = false;
    } else if (phoneInput.value.replace(/\D/g, '').length < 10) {
      document.getElementById('phoneError').textContent = 'Phone number must be at least 10 digits';
      isValid = false;
    }
    if (!messageInput.value.trim()) {
      document.getElementById('messageError').textContent = 'Please enter your message';
      isValid = false;
    } else if (messageInput.value.trim().length < 10) {
      document.getElementById('messageError').textContent = 'Message must be at least 10 characters long';
      isValid = false;
    }

    if (!isValid) return;

    // send ONLY the message as feedback (user must be logged in)
    try {
      const resp = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify({ message: messageInput.value.trim() })
      });
      const data = await resp.json();
      if (!resp.ok || !data.ok) throw new Error(data.error || 'Failed to send');
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    } catch (err) {
      // likely not logged in -> API returns 401
      alert(err.message || 'Please login to leave feedback.');
    }
  });

  // your original real-time checks (optional)
  document.getElementById('email').addEventListener('blur', function() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    document.getElementById('emailError').textContent =
      this.value && !emailRegex.test(this.value) ? 'Please enter a valid email address' : '';
  });

  document.getElementById('phone').addEventListener('blur', function() {
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    if (this.value && !phoneRegex.test(this.value)) {
      document.getElementById('phoneError').textContent = 'Please enter a valid phone number';
    } else if (this.value && this.value.replace(/\D/g, '').length < 10) {
      document.getElementById('phoneError').textContent = 'Phone number must be at least 10 digits';
    } else {
      document.getElementById('phoneError').textContent = '';
    }
  });
});
