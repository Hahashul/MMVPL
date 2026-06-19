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

  // ============================================================
  // Enquiry form handler — STATIC PLACEHOLDER, NOT WIRED UP YET
  // ============================================================
  // Right now this just fakes a "success" message and clears the
  // form — nothing is actually sent anywhere. Submissions are lost.
  //
  // TO CONNECT TO FORMSPREE:
  //   1. Sign up at https://formspree.io and create a new form to
  //      get an endpoint like https://formspree.io/f/yourFormId
  //   2. In the HTML, on the <form class="enquiry-form" ...> tag,
  //      add: action="https://formspree.io/f/yourFormId" method="POST"
  //   3. Delete (or comment out) the e.preventDefault() line below —
  //      with the action/method set, the browser will POST the form
  //      directly to Formspree and Formspree will redirect back to
  //      a thank-you page (you can set a custom redirect in your
  //      Formspree dashboard, or add a hidden <input type="hidden"
  //      name="_next" value="https://yoursite.com/contact.html"> ).
  //   4. OPTIONAL — keep the inline success message instead of a
  //      redirect: keep e.preventDefault(), then inside this handler
  //      do a fetch() POST to the Formspree endpoint with
  //      `headers: { Accept: 'application/json' }` and show the
  //      .form-success note only after the fetch resolves OK.
  //      Formspree's docs have a copy-paste AJAX example for this.
  var form = document.querySelector('.enquiry-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // <-- remove this line once action/method point to Formspree (step 3 above)
      var note = form.querySelector('.form-success');
      if (note) {
        note.hidden = false;
      }
      form.reset();
    });
  }

  // Scroll reveal (used by .reveal / .reveal-left / .reveal-right elements
  // across all pages — index, hr-solutions, project-sales-oem, contact)
  var revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  var io = new IntersectionObserver(function (entries) {
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
});