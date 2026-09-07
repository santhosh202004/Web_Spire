/**
 * WebSpire Labs — Blog Interactive Engine (js/blog.js)
 * Manages category filtering, live keyword search, reading progress bar,
 * Table of Contents (TOC) scrollspy, code snippet clipboard copying, and share link toasts.
 */

document.addEventListener('DOMContentLoaded', () => {
  initBlogFilterAndSearch();
  initReadingProgressBar();
  initTocScrollspy();
  initCopyCodeAction();
  initShareArticleActions();
});

/**
 * Category Filtering and Real-time Keyword Search for Blog Archive
 */
function initBlogFilterAndSearch() {
  const filterBtns = document.querySelectorAll('.blog-filter-btn, .sidebar-category-btn');
  const searchInput = document.getElementById('blogSearchInput');
  const blogCards = document.querySelectorAll('.blog-card');
  const featuredCard = document.querySelector('.featured-article-card');
  const noResultsMsg = document.querySelector('.blog-no-results');
  const countDisplay = document.getElementById('blogArticleCount');
  const countTag = document.querySelector('.article-count-tag');

  if (!filterBtns.length && !searchInput) return;

  let currentCategory = 'all';
  let currentQuery = '';

  const updateDisplay = () => {
    let visibleCount = 0;

    // Filter Grid Cards
    blogCards.forEach((card) => {
      const cardCategory = card.getAttribute('data-category') || '';
      const cardTitle = (card.querySelector('.blog-card-title')?.textContent || '').toLowerCase();
      const cardExcerpt = (card.querySelector('.blog-card-excerpt')?.textContent || '').toLowerCase();
      const cardCategoryTag = (card.querySelector('.category-tag-pill')?.textContent || '').toLowerCase();

      const matchesCategory = (currentCategory === 'all' || cardCategory === currentCategory);
      const matchesSearch = !currentQuery || 
        cardTitle.includes(currentQuery) || 
        cardExcerpt.includes(currentQuery) || 
        cardCategoryTag.includes(currentQuery);

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // Handle Featured Card visibility
    if (featuredCard) {
      const featCategory = featuredCard.getAttribute('data-category') || '';
      const featTitle = (featuredCard.querySelector('.featured-headline')?.textContent || '').toLowerCase();
      const featExcerpt = (featuredCard.querySelector('.featured-excerpt')?.textContent || '').toLowerCase();
      const featTag = (featuredCard.querySelector('.category-tag-pill')?.textContent || '').toLowerCase();

      const featMatchesCategory = (currentCategory === 'all' || featCategory === currentCategory);
      const featMatchesSearch = !currentQuery || 
        featTitle.includes(currentQuery) || 
        featExcerpt.includes(currentQuery) || 
        featTag.includes(currentQuery);

      if (featMatchesCategory && featMatchesSearch) {
        featuredCard.style.display = 'grid';
        visibleCount++;
      } else {
        featuredCard.style.display = 'none';
      }
    }

    // Toggle No Results Message
    if (noResultsMsg) {
      if (visibleCount === 0) {
        noResultsMsg.classList.add('show');
      } else {
        noResultsMsg.classList.remove('show');
      }
    }

    // Update Counter Display
    const countText = `Showing ${visibleCount} article${visibleCount === 1 ? '' : 's'}`;
    if (countDisplay) {
      countDisplay.textContent = countText;
    }
    if (countTag) {
      countTag.textContent = countText;
    }
  };

  // Category Filter Click Events
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetCategory = btn.getAttribute('data-category') || 'all';
      filterBtns.forEach(b => {
        if ((b.getAttribute('data-category') || 'all') === targetCategory) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });
      currentCategory = targetCategory;
      updateDisplay();
    });
  });

  // Keyword Search Input Events
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentQuery = e.target.value.trim().toLowerCase();
      updateDisplay();
    });
  }
}

/**
 * Reading Progress Indicator Bar
 */
function initReadingProgressBar() {
  const progressBar = document.getElementById('readingProgressBar');
  const articleContent = document.querySelector('.article-main-content');
  if (!progressBar || !articleContent) return;

  const updateProgress = () => {
    const totalHeight = articleContent.clientHeight;
    const articleOffsetTop = articleContent.offsetTop;
    const scrollPosition = window.scrollY - articleOffsetTop + (window.innerHeight / 2);

    let progressPercentage = (scrollPosition / totalHeight) * 100;
    progressPercentage = Math.max(0, Math.min(100, progressPercentage));

    progressBar.style.width = `${progressPercentage}%`;
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}

/**
 * Table of Contents (TOC) Scrollspy & Smooth Anchor Navigation
 */
function initTocScrollspy() {
  const tocLinks = document.querySelectorAll('.toc-link');
  const headings = document.querySelectorAll('.article-main-content h2, .article-main-content h3');
  if (!tocLinks.length || !headings.length) return;

  // Smooth click scroll
  tocLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const navHeight = 90;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Scrollspy observer
  const observerOptions = {
    root: null,
    rootMargin: '-100px 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        if (id) {
          tocLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      }
    });
  }, observerOptions);

  headings.forEach(heading => observer.observe(heading));
}

/**
 * Interactive Code Snippet Copy Action
 */
function initCopyCodeAction() {
  const copyBtns = document.querySelectorAll('.btn-copy-code');
  if (!copyBtns.length) return;

  copyBtns.forEach(btn => {
    btn.addEventListener('click', async () => {
      const codeBlock = btn.closest('.article-code-block');
      if (!codeBlock) return;
      const codeElement = codeBlock.querySelector('pre code') || codeBlock.querySelector('pre');
      if (!codeElement) return;

      const codeText = codeElement.innerText;

      try {
        await navigator.clipboard.writeText(codeText);
        const originalHtml = btn.innerHTML;
        btn.innerHTML = `
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Copied!
        `;
        btn.style.color = '#38BDF8';
        btn.style.borderColor = '#38BDF8';

        setTimeout(() => {
          btn.innerHTML = originalHtml;
          btn.style.color = '';
          btn.style.borderColor = '';
        }, 2200);
      } catch (err) {
        console.error('Failed to copy code: ', err);
      }
    });
  });
}

/**
 * Social Share & Copy Link Actions with Toast Notification
 */
function initShareArticleActions() {
  const copyLinkBtns = document.querySelectorAll('.btn-copy-article-link');
  const toast = document.getElementById('blogToast');

  const showToast = (message = 'Article link copied to clipboard!') => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  };

  copyLinkBtns.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText(window.location.href);
        showToast();
      } catch (err) {
        showToast('Press Ctrl+C to copy link');
      }
    });
  });
}
