// Dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Simple form submission handler
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Collect form data
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMessage = document.getElementById('formMessage');

  // Basic validation check
  if (name && email && message) {
    formMessage.innerText = `Thank you for your message, ${name}!`;
    // Reset the form
    this.reset();
  } else {
    formMessage.innerText = 'Please fill out all fields.';
  }
});
