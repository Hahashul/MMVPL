/* ============================================================
   Contact Page — contact-page.js
   Scroll-reveal observer for Contact.html
   ============================================================ */

(function () {
  'use strict';

  const revealEls = document.querySelectorAll('.reveal');

  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(function (el) {
    io.observe(el);
  });
}());
