const form = document.getElementById('signupForm');
const successMsg = document.getElementById('successMessage');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent actual form submission
  if (form.checkValidity()) {
    successMsg.classList.remove('hidden');
    form.reset(); // Optional: clear the form after submission
  }
});
