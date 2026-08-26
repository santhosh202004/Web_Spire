/**
 * WebSpire Labs - Main JavaScript Interactions
 * Handles animations, navbar behavior, counters, and accessibility.
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyNavbar();
  initStatsCounter();
  initSmoothScroll();
  initAccessibility();
});

/**
 * Sticky Navbar Behavior on Scroll
 */
function initStickyNavbar() {
  const navbar = document.querySelector('.header-navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check
}

/**
 * Animated Number Counter for Stats Section
 * Uses IntersectionObserver for smooth trigger on viewport entry
 */
function initStatsCounter() {
  const statElements = document.querySelectorAll('.stat-number[data-target]');
  if (!statElements.length) return;

  const animateCount = (el) => {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const suffix = el.getAttribute('data-suffix') || '+';
    const duration = 1800; // milliseconds
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      // Ease out cubic calculation
      const progress = frame / totalFrames;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.round(easeOut * target);

      el.textContent = `${currentVal}${suffix}`;

      if (frame >= totalFrames) {
        clearInterval(counter);
        el.textContent = `${target}${suffix}`;
      }
    }, frameRate);
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          obs.unobserve(entry.target); // Trigger only once
        }
      });
    }, { threshold: 0.2 });

    statElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback if IntersectionObserver not supported
    statElements.forEach((el) => {
      const target = el.getAttribute('data-target');
      const suffix = el.getAttribute('data-suffix') || '+';
      el.textContent = `${target}${suffix}`;
    });
  }
}

/**
 * Smooth Scroll for In-Page Anchor Links
 */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const navbarHeight = document.querySelector('.header-navbar')?.offsetHeight || 80;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Close mobile navbar if open
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) bsCollapse.hide();
        }
      }
    });
  });
}

/**
 * Accessibility & Keyboard Navigation Enhancements
 */
function initAccessibility() {
  // Ensure dropdowns are accessible via keyboard
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const dropdown = bootstrap.Dropdown.getOrCreateInstance(toggle);
        dropdown.toggle();
      }
    });
  });
}
