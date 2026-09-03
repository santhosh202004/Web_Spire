/**
 * WebSpire Labs - Header Interactions
 * Handles top announcement dismiss behavior and mobile navigation drawer interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  initAnnouncementStrip();
  initMobileNavCollapse();
});

/**
 * Top Announcement Strip
 * Checks sessionStorage to respect user dismissal during session
 */
function initAnnouncementStrip() {
  const strip = document.getElementById('announcementStrip');
  const dismissBtn = document.getElementById('announcementDismissBtn');
  if (!strip) return;

  // Check if dismissed previously in this session
  if (sessionStorage.getItem('webspire_announcement_dismissed') === 'true') {
    strip.classList.add('dismissed');
  }

  if (dismissBtn) {
    dismissBtn.addEventListener('click', () => {
      strip.classList.add('dismissed');
      sessionStorage.setItem('webspire_announcement_dismissed', 'true');
    });
  }
}

/**
 * Mobile Nav Auto-Close
 * Closes mobile navbar drawer when any nav link is clicked
 */
function initMobileNavCollapse() {
  const navbarCollapse = document.getElementById('navbarMainContent');
  if (!navbarCollapse) return;

  const navLinks = navbarCollapse.querySelectorAll('.nav-link-custom');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });
}

