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
  var LOG_PREFIX = '[school-landing]';

  // Bail out on very old browsers; the page still works as plain HTML/CSS.
  if (!document.querySelector || !document.addEventListener || !window.addEventListener) {
    return;
  }

  /**
   * Logs an error with the feature name for easier debugging.
   */
  function logError(feature, error) {
    if (window.console && typeof window.console.error === 'function') {
      window.console.error(LOG_PREFIX + ' ' + feature + ' failed:', error);
    }
  }

  /**
   * Runs a feature initialiser so a failure in one feature never stops the others.
   */
  function safeInit(feature, fn) {
    try {
      fn();
    } catch (error) {
      logError(feature, error);
    }
  }

  /**
   * Element.closest with a fallback for browsers that lack it.
   */
  function closest(element, selector) {
    if (!element || element.nodeType !== 1) return null;
    if (typeof element.closest === 'function') return element.closest(selector);

    var matches = element.matches || element.msMatchesSelector || element.webkitMatchesSelector;
    if (!matches) return null;

    var node = element;
    while (node && node.nodeType === 1) {
      if (matches.call(node, selector)) return node;
      node = node.parentNode;
    }
    return null;
  }

  function supportsIntersectionObserver() {
    return 'IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window &&
      'isIntersecting' in window.IntersectionObserverEntry.prototype;
  }

  /**
   * True when the visitor has asked the operating system to minimise motion.
   */
  function prefersReducedMotion() {
    return typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  /**
   * 1) Smooth scrolling for in-page anchor links.
   * A single delegated listener handles every anchor, including ones added
   * later. Falls back to the browser's native jump when the target is
   * missing. Focus is moved to the target so keyboard and screen reader
   * users land in the right place, and the URL hash is kept in sync.
   */
  function initSmoothScroll(reduceMotion) {
    document.addEventListener('click', function (event) {
      if (event.defaultPrevented || event.button !== 0 ||
          event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      var link = closest(event.target, 'a[href^="#"]');
      if (!link) return;

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

      if (typeof target.scrollIntoView === 'function') {
        try {
          target.scrollIntoView({
            behavior: reduceMotion ? 'auto' : 'smooth',
            block: 'start'
          });
        } catch (error) {
          // Older engines only accept a boolean argument.
          target.scrollIntoView(true);
        }
      }

      if (!target.hasAttribute('tabindex')) {
        target.setAttribute('tabindex', '-1');
      }
      try {
        target.focus({ preventScroll: true });
      } catch (error) {
        target.focus();
      }

      if (window.history && typeof window.history.pushState === 'function') {
        window.history.pushState(null, '', hash);
      }
    });
  }

  /**
   * 2) Mobile menu toggle.
   * Toggles the 'open' class on the navigation and keeps aria-expanded and
   * aria-label in sync. Closes on Escape, on link selection, and on clicks
   * outside the header. Document-level listeners only exist while the menu
   * is open and are removed as soon as it closes.
   */
  function initMobileMenu() {
    var toggle = document.querySelector('.hamburger') ||
      document.querySelector('.nav-toggle');
    var nav = document.querySelector('.site-nav');
    if (!toggle || !nav || !nav.classList) return;

    function isOpen() {
      return toggle.getAttribute('aria-expanded') === 'true';
    }

    function onKeydown(event) {
      if (event.key === 'Escape' || event.key === 'Esc') {
        setOpen(false);
        toggle.focus();
      }
    }

    function onOutsideClick(event) {
      if (!toggle.contains(event.target) && !nav.contains(event.target)) {
        setOpen(false);
      }
    }

    function setOpen(open) {
      if (open) {
        nav.classList.add('open');
        document.addEventListener('keydown', onKeydown);
        document.addEventListener('click', onOutsideClick);
      } else {
        nav.classList.remove('open');
        document.removeEventListener('keydown', onKeydown);
        document.removeEventListener('click', onOutsideClick);
      }
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close main menu' : 'Open main menu');
    }

    setOpen(false);

    toggle.addEventListener('click', function () {
      setOpen(!isOpen());
    });

    nav.addEventListener('click', function (event) {
      if (isOpen() && closest(event.target, 'a')) setOpen(false);
    });
  }

  /**
   * 3) Scroll-triggered fade-in for sections.
   * Sections are only hidden once we know IntersectionObserver is available,
   * so content is never left invisible. Each section receives the 'visible'
   * class the first time 20% of it enters the viewport. The observer is
   * disconnected once every section has been revealed.
   */
  function initScrollAnimations() {
    if (!supportsIntersectionObserver()) return;

    var sections = document.querySelectorAll('main section');
    if (!sections.length) return;

    var remaining = sections.length;

    function reveal(section) {
      if (section.classList) section.classList.add('visible');
      section.style.opacity = '';
      section.style.transform = '';
    }

    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        reveal(entry.target);
        obs.unobserve(entry.target);
        remaining -= 1;
      });
      if (remaining <= 0) obs.disconnect();
    }, { threshold: REVEAL_THRESHOLD });

    Array.prototype.forEach.call(sections, function (section) {
      section.style.opacity = '0';
      section.style.transform = 'translateY(24px)';
      section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(section);
    });

    // Make sure nothing stays hidden when the page is printed.
    window.addEventListener('beforeprint', function () {
      observer.disconnect();
      Array.prototype.forEach.call(sections, reveal);
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
      var srcset = img.getAttribute('data-srcset');
      var src = img.getAttribute('data-src');
      if (srcset) {
        img.setAttribute('srcset', srcset);
        img.removeAttribute('data-srcset');
      }
      if (src) {
        img.setAttribute('src', src);
        img.removeAttribute('data-src');
      }
    }

    var supportsNativeLazy = 'HTMLImageElement' in window &&
      'loading' in window.HTMLImageElement.prototype;

    if (supportsNativeLazy || !supportsIntersectionObserver()) {
      Array.prototype.forEach.call(images, function (img) {
        if (supportsNativeLazy) img.setAttribute('loading', 'lazy');
        loadImage(img);
      });
      return;
    }

    var remaining = images.length;

    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        loadImage(entry.target);
        obs.unobserve(entry.target);
        remaining -= 1;
      });
      if (remaining <= 0) obs.disconnect();
    }, { rootMargin: LAZY_ROOT_MARGIN });

    Array.prototype.forEach.call(images, function (img) {
      observer.observe(img);
    });
  }

  function init() {
    // 4) Respect reduced-motion preferences: skip animations entirely.
    var reduceMotion = false;
    safeInit('reduced motion check', function () {
      reduceMotion = prefersReducedMotion();
    });

    safeInit('smooth scroll', function () { initSmoothScroll(reduceMotion); });
    safeInit('mobile menu', initMobileMenu);
    if (!reduceMotion) safeInit('scroll animations', initScrollAnimations);
    safeInit('lazy images', initLazyImages);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
