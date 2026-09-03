/**
 * WebSpire Labs - Why Choose Us Interactive Accordion
 * Controls accordion expansion/collapse, active banner styling,
 * keyboard accessibility, and petal-link interaction.
 */

document.addEventListener('DOMContentLoaded', () => {
  initWhyChooseAccordion();
});

function initWhyChooseAccordion() {
  const accordion = document.getElementById('whyChooseAccordion');
  if (!accordion) return;

  const items = accordion.querySelectorAll('.why-acc-item');
  const petals = document.querySelectorAll('.why-petal-node');

  items.forEach((item, index) => {
    const trigger = item.querySelector('.why-acc-trigger');
    const content = item.querySelector('.why-acc-content');

    if (!trigger || !content) return;

    trigger.addEventListener('click', () => {
      const isAlreadyActive = item.classList.contains('active');

      // Close all items
      items.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherTrigger = otherItem.querySelector('.why-acc-trigger');
        const otherContent = otherItem.querySelector('.why-acc-content');
        if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
        if (otherContent) otherContent.style.maxHeight = null;
      });

      // If it was not already active, open it
      if (!isAlreadyActive) {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + 'px';
        highlightPetal(index);
      }
    });

    // Keyboard accessibility: Enter or Space
    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        trigger.click();
      }
    });
  });

  // Open the first item by default (matching Screenshot 2)
  const firstItem = items[0];
  if (firstItem) {
    firstItem.classList.add('active');
    const firstTrigger = firstItem.querySelector('.why-acc-trigger');
    const firstContent = firstItem.querySelector('.why-acc-content');
    if (firstTrigger) firstTrigger.setAttribute('aria-expanded', 'true');
    if (firstContent) {
      firstContent.style.maxHeight = firstContent.scrollHeight + 'px';
    }
    highlightPetal(0);
  }

  // Interactivity: clicking petals activates the corresponding accordion item
  petals.forEach(petal => {
    petal.addEventListener('click', () => {
      const targetIndex = parseInt(petal.getAttribute('data-accordion-target'), 10);
      if (!isNaN(targetIndex) && items[targetIndex]) {
        const trigger = items[targetIndex].querySelector('.why-acc-trigger');
        if (trigger && !items[targetIndex].classList.contains('active')) {
          trigger.click();
        }
      }
    });
  });

  function highlightPetal(index) {
    petals.forEach(p => p.classList.remove('highlighted'));
    if (petals[index]) {
      petals[index].classList.add('highlighted');
    }
  }
}
