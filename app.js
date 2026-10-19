/*
 * School landing page enhancements.
 *
 * Every feature here is a progressive enhancement: the page is fully usable
 * without JavaScript (native anchor jumps, CSS-only menu reveal, visible
 * sections, eager images). Each feature checks for the browser APIs it needs
 * and quietly leaves the default behaviour in place when they are missing.
 */
(function () {
  'use strict';

  var REVEAL_THRESHOLD = 0.2;
  var LAZY_ROOT_MARGIN = '200px 0px';

  /**
   * True when the visitor has asked the operating system to minimise motion.
   */
  function prefersReducedMotion() {
    return typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  /**
   * 1) Smooth scrolling for in-page anchor links.
   * Falls back to the browser's native jump when the target is missing.
   * Focus is moved to the target so keyboard and screen reader users land
   * in the right place, and the URL hash is kept in sync.
   */
  function initSmoothScroll(reduceMotion) {
    var links = document.querySelectorAll('a[href^="#"]');

    Array.prototype.forEach.call(links, function (link) {
      link.addEventListener('click', function (event) {
        var hash = link.getAttribute('href');
        if (!hash || hash === '#') return;

        var target;
        try {
          target = document.querySelector(hash);
        } catch (error) {
          // Invalid selector in href: let the browser handle the click.
          return;
        }
        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({
          behavior: reduceMotion ? 'auto' : 'smooth',
          block: 'start'
        });

        if (!target.hasAttribute('tabindex')) {
          target.setAttribute('tabindex', '-1');
        }
        target.focus({ preventScroll: true });

        if (window.history && typeof window.history.pushState === 'function') {
          window.history.pushState(null, '', hash);
        }
      });
    });
  }

  /**
   * 2) Mobile menu toggle.
   * Toggles the 'open' class on the navigation and keeps aria-expanded and
   * aria-label in sync. Closes on Escape, on link selection, and on clicks
   * outside the header.
   */
  function initMobileMenu() {
    var toggle = document.querySelector('.hamburger') ||
      document.querySelector('.nav-toggle');
    var nav = document.querySelector('.site-nav');
    if (!toggle || !nav) return;

    function setOpen(isOpen) {
      nav.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Close main menu' : 'Open main menu');
    }

    function isOpen() {
      return toggle.getAttribute('aria-expanded') === 'true';
    }

    setOpen(false);

    toggle.addEventListener('click', function () {
      setOpen(!isOpen());
    });

    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && isOpen()) {
        setOpen(false);
        toggle.focus();
      }
    });

    document.addEventListener('click', function (event) {
      if (isOpen() && !toggle.contains(event.target) && !nav.contains(event.target)) {
        setOpen(false);
      }
    });
  }

  /**
   * 3) Scroll-triggered fade-in for sections.
   * Sections are only hidden once we know IntersectionObserver is available,
   * so content is never left invisible. Each section receives the 'visible'
   * class the first time 20% of it enters the viewport.
   */
  function initScrollAnimations() {
    if (!('IntersectionObserver' in window)) return;

    var sections = document.querySelectorAll('main section');
    if (!sections.length) return;

    function reveal(section) {
      section.classList.add('visible');
      section.style.opacity = '';
      section.style.transform = '';
    }

    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        reveal(entry.target);
        obs.unobserve(entry.target);
      });
    }, { threshold: REVEAL_THRESHOLD });

    Array.prototype.forEach.call(sections, function (section) {
      section.style.opacity = '0';
      section.style.transform = 'translateY(24px)';
      section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(section);
    });
  }

  /**
   * 5) Lazy loading fallback for images.
   * Images may declare their real source in data-src / data-srcset. Browsers
   * with native loading="lazy" get the source immediately and defer the
   * download themselves; others load images as they approach the viewport.
   * Without IntersectionObserver all images are loaded straight away.
   */
  function initLazyImages() {
    var images = document.querySelectorAll('img[data-src], img[data-srcset]');
    if (!images.length) return;

    function loadImage(img) {
      if (img.dataset.srcset) {
        img.srcset = img.dataset.srcset;
        img.removeAttribute('data-srcset');
      }
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      }
    }

    var supportsNativeLazy = 'loading' in HTMLImageElement.prototype;

    if (supportsNativeLazy || !('IntersectionObserver' in window)) {
      Array.prototype.forEach.call(images, function (img) {
        if (supportsNativeLazy) img.loading = 'lazy';
        loadImage(img);
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        loadImage(entry.target);
        obs.unobserve(entry.target);
      });
    }, { rootMargin: LAZY_ROOT_MARGIN });

    Array.prototype.forEach.call(images, function (img) {
      observer.observe(img);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    // 4) Respect reduced-motion preferences: skip animations entirely.
    var reduceMotion = prefersReducedMotion();

    initSmoothScroll(reduceMotion);
    initMobileMenu();
    if (!reduceMotion) initScrollAnimations();
    initLazyImages();
  });
})();
