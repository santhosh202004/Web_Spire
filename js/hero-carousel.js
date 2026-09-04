/**
 * WebSpire Labs - Interactive Ecosystem Hero Carousel
 * Inspired by Cognisive enterprise B2B layout.
 * Features:
 *  - 3-Slide dynamic solution showcase (Web & Cloud, Mobile Apps, Brand & Growth)
 *  - Interactive bottom tab switcher with animated indicator
 *  - Auto-advance rotation (5000ms) with hover-pause
 *  - Keyboard navigation (ArrowLeft, ArrowRight) and ARIA accessibility
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroCarousel();
});

function initHeroCarousel() {
  const heroSection = document.getElementById('hero');
  const slides = document.querySelectorAll('.hero-slide');
  const tabs = document.querySelectorAll('.hero-tab-btn');

  if (!heroSection || slides.length === 0) return;

  let currentIndex = 0;
  const slideCount = slides.length;
  const AUTO_PLAY_DELAY = 5000;
  let autoPlayTimer = null;
  let isPaused = false;

  /**
   * Switch to specific slide index
   * @param {number} targetIndex 
   */
  function goToSlide(targetIndex) {
    if (targetIndex === currentIndex) return;

    // Normalize index
    if (targetIndex >= slideCount) targetIndex = 0;
    if (targetIndex < 0) targetIndex = slideCount - 1;

    // Update slides
    slides.forEach((slide, idx) => {
      const isActive = idx === targetIndex;
      slide.classList.toggle('active', isActive);
      slide.setAttribute('aria-hidden', isActive ? 'false' : 'true');
    });

    // Update tabs if present
    if (tabs && tabs.length > 0) {
      tabs.forEach((tab, idx) => {
        const isActive = idx === targetIndex;
        tab.classList.toggle('active', isActive);
        tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
        tab.setAttribute('tabindex', isActive ? '0' : '-1');
      });
    }

    currentIndex = targetIndex;
  }

  /**
   * Start auto-advance cycle
   */
  function startAutoPlay() {
    stopAutoPlay();
    autoPlayTimer = setInterval(() => {
      if (!isPaused) {
        goToSlide((currentIndex + 1) % slideCount);
      }
    }, AUTO_PLAY_DELAY);
  }

  function stopAutoPlay() {
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
  }

  // Bind tab click events
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      goToSlide(index);
      startAutoPlay(); // Reset timer on user interaction
    });

    // Keyboard support for tabs
    tab.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        const nextIdx = (index + 1) % slideCount;
        tabs[nextIdx].focus();
        goToSlide(nextIdx);
        startAutoPlay();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIdx = (index - 1 + slideCount) % slideCount;
        tabs[prevIdx].focus();
        goToSlide(prevIdx);
        startAutoPlay();
      }
    });
  });

  // Pause on hover or touch
  heroSection.addEventListener('mouseenter', () => {
    isPaused = true;
  });

  heroSection.addEventListener('mouseleave', () => {
    isPaused = false;
  });

  heroSection.addEventListener('focusin', () => {
    isPaused = true;
  });

  heroSection.addEventListener('focusout', () => {
    isPaused = false;
  });

  // Touch Swipe Support for Mobile
  let touchStartX = 0;
  let touchEndX = 0;

  heroSection.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  heroSection.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swiped Left -> Next slide
        goToSlide((currentIndex + 1) % slideCount);
      } else {
        // Swiped Right -> Prev slide
        goToSlide((currentIndex - 1 + slideCount) % slideCount);
      }
      startAutoPlay();
    }
  }

  // Initialize auto play
  startAutoPlay();
}
