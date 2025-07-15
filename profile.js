document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.account-nav a');
  const current = window.location.pathname.split('/').pop();
  navLinks.forEach(link => {
    if(link.getAttribute('href') === current) {
      link.classList.add('active');
    }
  });
}); 