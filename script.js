// Check theme preference immediately to avoid flash
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var drawer = document.querySelector('.nav-drawer');

  if (toggle && drawer) {
    toggle.addEventListener('click', function () {
      var isOpen = drawer.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    drawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        drawer.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Hidden Dark Mode Toggle Easter Egg
  var devCredits = document.querySelectorAll('.developer-credit');
  devCredits.forEach(function (credit) {
    credit.addEventListener('click', function (e) {
      e.preventDefault();
      var isDark = document.body.classList.toggle('dark-mode');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  });

  // Simple enquiry form handler (static site placeholder)
  var form = document.querySelector('.enquiry-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = form.querySelector('.form-success');
      if (note) {
        note.hidden = false;
      }
      form.reset();
    });
  }
});



 // Scroll reveal
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
