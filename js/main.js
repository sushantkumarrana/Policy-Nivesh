/* =========================================================
   Policy Nivesh — main.js
   No dependencies. Static-host friendly.
   ========================================================= */

/* --- Where enquiries go. Change these two and nothing else. --- */
var PN = {
  whatsapp: '919915007431',          // country code + number, digits only
  email:    'info@policynivesh.com',
  formEndpoint: '',                   // optional: Formspree / Google Apps Script URL.
                                      // Empty = fall back to WhatsApp handoff.

  /* Every product the quote form offers. Add one here and it appears
     in the modal, on every page, automatically. */
  products: [
    'Motor Insurance', 'Health Insurance', 'Home Insurance', 'Travel Insurance',
    'Term Life Insurance', 'Personal Accident Cover', 'Fire Insurance',
    'Burglary Insurance', 'Group Health Insurance', 'Group Term Insurance',
    'Group Accidental Insurance', "Contractor's All Risk", 'Workmen Compensation',
    'Marine Insurance', "Doctor's Liability", 'Cyber Crime Insurance',
    'Professional Indemnity', "Directors' & Officers' Liability",
    'Mutual Fund Advisory'
  ]
};

/* --- Icon sprite: one definition, used across all pages via <use> --- */
var PN_SPRITE = [
  '<svg id="pn-sprite" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><defs>',
  '<symbol id="i-mail" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></symbol>',
  '<symbol id="i-phone" viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.3a2 2 0 0 1 2.1-.5c.9.4 1.8.6 2.7.8a2 2 0 0 1 1.7 2Z"/></symbol>',
  '<symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></symbol>',
  '<symbol id="i-pin" viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></symbol>',
  '<symbol id="i-check" viewBox="0 0 24 24"><path d="m4 12 5 5L20 6"/></symbol>',
  '<symbol id="i-arrow" viewBox="0 0 24 24"><path d="M5 12h14m-6-6 6 6-6 6"/></symbol>',
  '<symbol id="i-up" viewBox="0 0 24 24"><path d="M12 19V5m-7 7 7-7 7 7"/></symbol>',
  '<symbol id="i-menu" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></symbol>',
  '<symbol id="i-close" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></symbol>',
  '<symbol id="i-car" viewBox="0 0 24 24"><path d="M5 16h14M6.5 16V9.5l1.8-3.6A2 2 0 0 1 10.1 5h3.8a2 2 0 0 1 1.8 1l1.8 3.6V16"/><path d="M4 16v2.5M20 16v2.5M6.5 9.5h11"/><circle cx="8" cy="16" r="1.6"/><circle cx="16" cy="16" r="1.6"/></symbol>',
  '<symbol id="i-heart" viewBox="0 0 24 24"><path d="M12 20s-7.5-4.6-7.5-10A4.5 4.5 0 0 1 12 7.6 4.5 4.5 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10Z"/></symbol>',
  '<symbol id="i-home" viewBox="0 0 24 24"><path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1Z"/></symbol>',
  '<symbol id="i-plane" viewBox="0 0 24 24"><path d="M3 12.5 21 4l-6 17-3-7-9-1.5Z"/></symbol>',
  '<symbol id="i-shield" viewBox="0 0 24 24"><path d="M12 3 5 6v6c0 4.5 3 7.7 7 9 4-1.3 7-4.5 7-9V6Z"/><path d="m9 12 2 2 4-4"/></symbol>',
  '<symbol id="i-fire" viewBox="0 0 24 24"><path d="M12 3s5 4.5 5 9a5 5 0 0 1-10 0c0-2 1-3.5 1-3.5S9 11 10.5 11C10.5 8 12 5.5 12 3Z"/></symbol>',
  '<symbol id="i-users" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 5.5a3 3 0 0 1 0 5.5M17 14.5a6 6 0 0 1 4 5.5"/></symbol>',
  '<symbol id="i-crane" viewBox="0 0 24 24"><path d="M4 20h16M6 20V6h12M6 6l6 4M18 6v5l-3 2"/><rect x="13" y="15" width="5" height="4" rx="1"/></symbol>',
  '<symbol id="i-ship" viewBox="0 0 24 24"><path d="M3 17c1.6 1.4 3.2 2 5 2s3.4-.6 5-2c1.6 1.4 3.2 2 5 2M5 17l1.5-6h11L19 17M9 11V7h6v4M12 4v3"/></symbol>',
  '<symbol id="i-stetho" viewBox="0 0 24 24"><path d="M6 3v5a4 4 0 0 0 8 0V3"/><path d="M10 12v2a5 5 0 0 0 10 0v-1"/><circle cx="20" cy="10" r="2"/><circle cx="6" cy="3" r="1"/><circle cx="14" cy="3" r="1"/></symbol>',
  '<symbol id="i-lock" viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></symbol>',
  '<symbol id="i-chart" viewBox="0 0 24 24"><path d="M4 20V4M4 20h16M8 17v-5M12 17V8M16 17v-8M20 17v-3"/></symbol>',
  '<symbol id="i-briefcase" viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="12" rx="2"/><path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/></symbol>',
  '<symbol id="i-scale" viewBox="0 0 24 24"><path d="M12 4v16M6 20h12M4 9h16M4 9l-2 5a3 3 0 0 0 6 0Zm16 0-2 5a3 3 0 0 0 6 0Z"/></symbol>',
  '<symbol id="i-doc" viewBox="0 0 24 24"><path d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7Z"/><path d="M14 3v4h4M9 12h6M9 16h4"/></symbol>',
  '<symbol id="i-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="6"/><path d="m20 20-4.5-4.5"/></symbol>',
  '<symbol id="i-headset" viewBox="0 0 24 24"><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="2.5" y="13" width="4" height="6" rx="1.5"/><rect x="17.5" y="13" width="4" height="6" rx="1.5"/><path d="M19 19v1a3 3 0 0 1-3 3h-3"/></symbol>',
  '<symbol id="i-handshake" viewBox="0 0 24 24"><path d="m12 8-2.5-2a2 2 0 0 0-2.6.1L3 10l4 4 2-1.6"/><path d="m12 8 2.5-2a2 2 0 0 1 2.6.1L21 10l-4 4-2-1.6"/><path d="m9 12.4 2 2M11.5 10.9l2.5 2.5M14 9.4l2.5 2.5"/></symbol>',
  '<symbol id="i-star" viewBox="0 0 24 24"><path d="m12 4 2.5 5 5.5.8-4 3.9 1 5.5-5-2.7-5 2.7 1-5.5-4-3.9L9.5 9Z"/></symbol>',
  '<symbol id="i-quote" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M9 6c-3 1.4-5 4-5 7.5A4.5 4.5 0 0 0 8.5 18 3.5 3.5 0 0 0 12 14.5C12 12.6 10.6 11 8.7 11c-.3 0-.6 0-.8.1C8.4 9.5 9.6 8.2 11 7.4Zm10 0c-3 1.4-5 4-5 7.5a4.5 4.5 0 0 0 4.5 4.5 3.5 3.5 0 0 0 3.5-3.5c0-1.9-1.4-3.5-3.3-3.5-.3 0-.6 0-.8.1.5-1.6 1.7-2.9 3.1-3.7Z"/></symbol>',
  '<symbol id="i-wa" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm5.6 14.1c-.2.7-1.3 1.3-1.9 1.3-.5 0-1.1.2-3.6-.8-3-1.3-5-4.4-5.1-4.6-.2-.2-1.2-1.6-1.2-3.1s.8-2.2 1.1-2.5c.3-.3.6-.4.8-.4h.6c.2 0 .5-.1.7.5l1 2.4c.1.2.1.4 0 .6l-.4.6-.3.3c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.7-.1l.9-1c.2-.3.4-.2.7-.1l2.2 1.1c.3.2.5.2.6.4.1.1.1.6-.1 1.2Z"/></symbol>',
  '<symbol id="i-fb" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M14 8.5V7c0-.8.2-1.2 1.3-1.2H17V3h-2.6C11.6 3 11 4.6 11 6.6v1.9H9V12h2v9h3v-9h2.3l.4-3.5Z"/></symbol>',
  '<symbol id="i-in" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M6.9 8.5H3.6V21h3.3ZM5.3 3a1.9 1.9 0 1 0 0 3.9 1.9 1.9 0 0 0 0-3.9ZM21 13.9c0-3.4-1.8-5-4.3-5a3.7 3.7 0 0 0-3.3 1.8V8.5H10V21h3.4v-6.6c0-1.7 1-2.4 2-2.4s2.2.7 2.2 2.5V21H21Z"/></symbol>',
  '<symbol id="i-ig" viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r=".9" fill="currentColor" stroke="none"/></symbol>',
  '</defs></svg>'
].join('');

document.addEventListener('DOMContentLoaded', function () {

  /* ---- inject sprite ---- */
  document.body.insertAdjacentHTML('afterbegin', PN_SPRITE);

  /* ---- mobile nav ---- */
  var toggle = document.querySelector('.mobile-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.querySelector('use').setAttribute('href', open ? '#i-close' : '#i-menu');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a') && nav.classList.contains('open')) toggle.click();
    });
  }

  /* ---- active nav link ---- */
  var page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(function (a) {
    if (a.getAttribute('href') === page) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
  });

  /* ---- sticky header shadow ---- */
  var header = document.querySelector('.site-header');
  var topBtn = document.querySelector('.float-top');
  var onScroll = function () {
    var y = window.scrollY;
    if (header) header.classList.toggle('is-stuck', y > 8);
    if (topBtn) topBtn.classList.toggle('is-visible', y > 600);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (topBtn) {
    topBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---- scroll reveal + counters ---- */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var canObserve = !reduce && 'IntersectionObserver' in window;

  var animated = document.querySelectorAll('[data-anim]');
  if (canObserve) {
    document.documentElement.classList.add('js-anim');

    // stagger siblings inside the same grid/row
    document.querySelectorAll('[data-stagger]').forEach(function (group) {
      var kids = group.querySelectorAll(':scope > [data-anim]');
      kids.forEach(function (el, i) { el.style.setProperty('--i', i % 8); });
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { threshold: .1, rootMargin: '0px 0px -60px' });
    animated.forEach(function (el) { io.observe(el); });
  } else {
    animated.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---- hero photo parallax ---- */
  var heroImg = document.querySelector('[data-parallax]');
  if (heroImg && !reduce) {
    var ticking = false;
    var park = function () {
      var y = window.scrollY;
      if (y < 900) heroImg.style.transform = 'translate3d(0,' + (y * 0.12) + 'px,0) scale(1.06)';
      ticking = false;
    };
    heroImg.style.transform = 'scale(1.06)';
    window.addEventListener('scroll', function () {
      if (!ticking) { requestAnimationFrame(park); ticking = true; }
    }, { passive: true });
  }

  var counters = document.querySelectorAll('[data-count]');
  var runCount = function (el) {
    var target = parseFloat(el.getAttribute('data-count'));
    if (reduce) { el.textContent = target.toLocaleString('en-IN'); return; }
    var dur = 1600, t0 = null;
    var tick = function (ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString('en-IN');
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if ('IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { runCount(en.target); cio.unobserve(en.target); }
      });
    }, { threshold: .5 });
    counters.forEach(function (el) { cio.observe(el); });
  } else {
    counters.forEach(runCount);
  }

  /* ---- quote modal: opened by any [data-quote] control, product preselected ---- */
  var modal = document.createElement('dialog');
  modal.className = 'quote-modal';
  modal.id = 'pn-quote-modal';
  modal.innerHTML =
    '<div class="quote-modal-head">' +
      '<button class="quote-modal-close" type="button" data-quote-close aria-label="Close">' +
        '<svg class="icon icon-sm"><use href="#i-close"></use></svg></button>' +
      '<span class="kicker">Free · no obligation</span>' +
      '<h3 data-quote-title>Get a free quote</h3>' +
      '<p>Tell us the basics. A licensed advisor calls you back within 24 hours.</p>' +
    '</div>' +
    '<div class="quote-modal-body">' +
      '<form class="form-grid" data-enquiry="quote-modal">' +
        '<div class="form-group">' +
          '<label for="qm-product">Which cover do you need?</label>' +
          '<select class="form-control" id="qm-product" name="product" required>' +
            '<option value="">Select insurance type</option>' +
            PN.products.map(function (p) {
              var safe = p.replace(/&/g, '&amp;').replace(/</g, '&lt;');
              return '<option value="' + safe + '">' + safe + '</option>';
            }).join('') +
          '</select>' +
        '</div>' +
        '<div class="form-group">' +
          '<label for="qm-name">Full name</label>' +
          '<input class="form-control" id="qm-name" name="name" type="text" placeholder="Enter your name" required>' +
        '</div>' +
        '<div class="form-row">' +
          '<div class="form-group">' +
            '<label for="qm-phone">Phone</label>' +
            '<input class="form-control" id="qm-phone" name="phone" type="tel" inputmode="numeric" placeholder="10-digit mobile" required>' +
          '</div>' +
          '<div class="form-group">' +
            '<label for="qm-city">City</label>' +
            '<input class="form-control" id="qm-city" name="city" type="text" placeholder="Your city">' +
          '</div>' +
        '</div>' +
        '<div class="form-group">' +
          '<label for="qm-message">Anything we should know?</label>' +
          '<textarea class="form-control" id="qm-message" name="message" rows="3" placeholder="Vehicle, family size, sum insured, existing policy — whatever helps."></textarea>' +
        '</div>' +
        '<button class="btn btn-accent btn-block" type="submit">Send my request</button>' +
        '<p class="form-note">We use your details only to prepare this quote.</p>' +
        '<p class="form-status" role="status" aria-live="polite"></p>' +
      '</form>' +
    '</div>';
  document.body.appendChild(modal);

  var modalSelect = modal.querySelector('#qm-product');
  var modalTitle = modal.querySelector('[data-quote-title]');

  var openQuote = function (product) {
    var status = modal.querySelector('.form-status');
    status.classList.remove('is-visible', 'is-error');
    modalSelect.value = product && PN.products.indexOf(product) > -1 ? product : '';
    modalTitle.textContent = modalSelect.value ? 'Quote for ' + modalSelect.value : 'Get a free quote';
    if (typeof modal.showModal === 'function') {
      modal.showModal();
    } else {
      modal.setAttribute('open', '');   // very old browsers: renders inline, still usable
    }
    (modalSelect.value ? modal.querySelector('#qm-name') : modalSelect).focus();
  };

  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('[data-quote]');
    if (trigger) {
      e.preventDefault();
      openQuote(trigger.getAttribute('data-quote'));
      return;
    }
    if (e.target.closest('[data-quote-close]')) modal.close();
    // click on the backdrop area closes it
    if (e.target === modal) modal.close();
  });

  /* ---- enquiry forms ----
     No backend on a static host. Two supported modes:
     1. PN.formEndpoint set  -> POST JSON there.
     2. Otherwise            -> open a prefilled WhatsApp chat, mailto as fallback.
  */
  document.querySelectorAll('form[data-enquiry]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var status = form.querySelector('.form-status');
      var say = function (msg, isError) {
        if (!status) return;
        status.textContent = msg;
        status.classList.add('is-visible');
        status.classList.toggle('is-error', !!isError);
      };

      var data = {};
      new FormData(form).forEach(function (v, k) { data[k] = (v || '').toString().trim(); });
      data.source = form.getAttribute('data-enquiry') || 'website';
      data.page = document.title;

      var phone = (data.phone || '').replace(/\D/g, '');
      if (phone.length < 10) { say('Please enter a valid 10-digit phone number.', true); return; }

      var lines = ['New enquiry from the Policy Nivesh website', ''];
      Object.keys(data).forEach(function (k) {
        if (data[k]) lines.push(k.charAt(0).toUpperCase() + k.slice(1) + ': ' + data[k]);
      });
      var body = lines.join('\n');

      if (PN.formEndpoint) {
        say('Sending your enquiry…');
        fetch(PN.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        }).then(function (r) {
          if (!r.ok) throw new Error('bad response');
          form.reset();
          say('Thank you. Our advisor will call you within 24 hours.');
        }).catch(function () {
          say('Could not send just now. Call +91-9915007431 or WhatsApp us and we will pick it up.', true);
        });
        return;
      }

      window.open('https://wa.me/' + PN.whatsapp + '?text=' + encodeURIComponent(body), '_blank', 'noopener');
      form.reset();
      say('WhatsApp is opening with your details. Press send, or email ' + PN.email + ' instead.');
    });
  });

  /* ---- process: numbered steps behave as tabs ---- */
  document.querySelectorAll('[data-process]').forEach(function (root) {
    var tabs = [].slice.call(root.querySelectorAll('.process-step'));
    var panels = [].slice.call(root.querySelectorAll('.process-panel'));
    var track = root.querySelector('.process-track');
    if (!tabs.length) return;

    var select = function (i, focus) {
      tabs.forEach(function (tab, n) {
        var on = n === i;
        tab.setAttribute('aria-selected', on ? 'true' : 'false');
        tab.tabIndex = on ? 0 : -1;
        panels[n].classList.toggle('is-active', on);
      });
      // fill the rail up to the chosen step
      if (track) track.style.setProperty('--progress', (i / (tabs.length - 1)) * 76 + '%');
      if (focus) tabs[i].focus();
    };

    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { select(i); });
      tab.addEventListener('keydown', function (e) {
        var next = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 :
                   e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length - 1 : null;
        if (next === null) return;
        e.preventDefault();
        select((next + tabs.length) % tabs.length, true);
      });
    });

    select(0);
  });

  /* ---- year in footer ---- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
});
