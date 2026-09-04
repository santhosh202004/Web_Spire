/**
 * WebSpire Labs - Client Testimonials Infinite Carousel
 * Feature: 6-Card clone-buffered infinite continuous carousel with automatic center card highlighting
 * Scope: Homepage (index.html) — Section 7: Client Testimonials
 */

function initTestimonialsSlider() {
  const prevBtn = document.getElementById('testimonialPrevBtn');
  const nextBtn = document.getElementById('testimonialNextBtn');
  const track = document.getElementById('testimonialsTrack');
  const initialCards = Array.from(document.querySelectorAll('.testimonial-card'));
  if (!track || initialCards.length === 0 || !prevBtn || !nextBtn) return;

  const originalCount = initialCards.length; // 6 cards

  // Prevent multiple initializations if called repeatedly
  if (track.getAttribute('data-slider-initialized') === 'true') return;
  track.setAttribute('data-slider-initialized', 'true');

  // Clone cards before and after for infinite seamless looping
  // Structure: [6 Pre-Clones, 6 Original Cards, 6 Post-Clones] -> 18 total items
  const preClones = initialCards.map((card) => {
    const clone = card.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    clone.classList.remove('testimonial-card-active');
    return clone;
  });

  const postClones = initialCards.map((card) => {
    const clone = card.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    clone.classList.remove('testimonial-card-active');
    return clone;
  });

  // Prepend preClones in order
  preClones.forEach((clone) => track.insertBefore(clone, track.firstChild));
  // Append postClones in order
  postClones.forEach((clone) => track.appendChild(clone));

  let allCards = Array.from(track.querySelectorAll('.testimonial-card'));
  let currentIndex = originalCount; // Start at index 6 (Card 1 of original set)

  const getVisibleCount = () => {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1200) return 2;
    return 3;
  };

  const getStepSize = () => {
    if (allCards.length >= 2) {
      const rect0 = allCards[0].getBoundingClientRect();
      const rect1 = allCards[1].getBoundingClientRect();
      const diff = rect1.left - rect0.left;
      if (diff > 0) return diff;
    }
    const cardWidth = allCards[0].offsetWidth;
    const gap = window.innerWidth < 768 ? 16 : 24;
    return cardWidth + gap;
  };

  const updateActiveHighlight = (index) => {
    const visibleCount = getVisibleCount();
    let activeIndex;
    if (visibleCount === 3) {
      activeIndex = index + 1; // Center card of the 3 visible cards
    } else {
      activeIndex = index; // Primary card on tablet / mobile
    }

    allCards.forEach((card, i) => {
      if (i === activeIndex) {
        card.classList.add('testimonial-card-active');
      } else {
        card.classList.remove('testimonial-card-active');
      }
    });
  };

  const moveTo = (index, animate = true) => {
    const stepSize = getStepSize();
    const offset = index * stepSize;

    if (animate) {
      track.style.transition = 'transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)';
    } else {
      track.style.transition = 'none';
    }

    track.style.transform = `translateX(-${offset}px)`;
    updateActiveHighlight(index);
  };

  // Check boundary reset after transition completes
  const handleTransitionEnd = () => {
    // If navigated into the post-clone territory (index >= 12)
    if (currentIndex >= originalCount * 2) {
      currentIndex = currentIndex - originalCount; // Snap back to original set (6..11)
      moveTo(currentIndex, false);
    }
    // If navigated into the pre-clone territory (index < 6)
    else if (currentIndex < originalCount) {
      currentIndex = currentIndex + originalCount; // Snap forward to original set (6..11)
      moveTo(currentIndex, false);
    }
  };

  track.addEventListener('transitionend', handleTransitionEnd);

  // Automatic Scroll (Right to Left every 4 seconds)
  let autoplayTimer = null;
  const AUTOPLAY_DELAY = 4000; // 4 seconds

  const startAutoplay = () => {
    stopAutoplay();
    autoplayTimer = setInterval(() => {
      currentIndex++;
      moveTo(currentIndex, true);
    }, AUTOPLAY_DELAY);
  };

  const stopAutoplay = () => {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  };

  nextBtn.addEventListener('click', () => {
    currentIndex++;
    moveTo(currentIndex, true);
    startAutoplay(); // Reset 4s timer after manual navigation
  });

  prevBtn.addEventListener('click', () => {
    currentIndex--;
    moveTo(currentIndex, true);
    startAutoplay(); // Reset 4s timer after manual navigation
  });

  // Pause on hover over testimonials wrapper or touch interaction
  const wrapper = document.querySelector('.testimonials-wrapper') || track;
  wrapper.addEventListener('mouseenter', stopAutoplay);
  wrapper.addEventListener('mouseleave', startAutoplay);
  wrapper.addEventListener('touchstart', stopAutoplay, { passive: true });
  wrapper.addEventListener('touchend', startAutoplay, { passive: true });

  // Pause when browser tab is hidden to save resources
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  });

  // Re-align smoothly on window resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      moveTo(currentIndex, false);
    }, 80);
  }, { passive: true });

  // Initial positioning at original card 1 and start autoplay
  moveTo(currentIndex, false);
  startAutoplay();
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTestimonialsSlider);
} else {
  initTestimonialsSlider();
}

// Expose globally for modular access
window.initTestimonialsSlider = initTestimonialsSlider;
