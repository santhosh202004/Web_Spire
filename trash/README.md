# Trash / Archive Directory

This directory contains archived, unused CSS classes and legacy components that were safely decoupled and removed from the active stylesheets of **WebSpire Labs**.

## Archived Files by Page:

1. **[home.css](home.css)**
   - Archived from: `css/home.css` (for `index.html`)
   - Contains: Legacy 2-column hero visual column, SVG artwork card, floating animation nodes, bottom tab switcher, old 4-pillar grid media queries, and redundant `.testimonials-header .section-eyebrow`/`.section-title` overrides (unified in common `css/style.css`).

2. **[about.css](about.css)**
   - Archived from: `css/about.css` (for `about.html`)
   - Contains: Hero circular arrow CTA row, legacy polygon neutralizers, and floating trust badge text classes.

3. **[services.css](services.css)**
   - Archived from: `css/services.css` (for `services.html`)
   - Contains: Tech stack empty state fallback, legacy outline/white CTA button styles, old static tech stack grid media queries, and page-level `.section-eyebrow`/`.section-title` overrides (unified in common `css/style.css`).

4. **[contact.css](contact.css)**
   - Archived from: `css/contact.css` (for `contact.html`)
   - Contains: Hero circular CTA row, legacy polygon neutralizers, the omitted "Why Work With Us" section cards/grid, and floating glass diamond accents.
   - *Note: `.work-card-underline` was preserved in the active `css/contact.css` as it is actively used below the "How Can We Help?" heading.*

5. **[web-development.css](web-development.css)**
   - Archived from: `css/web-development.css` (for `web-development.html`)
   - Contains:
     - Page-level `.section-eyebrow` and `.section-title` overrides (unified in common `css/style.css`).
     - Performance Vitals Feature Strip (`.vitals-strip-section`, `.vitals-grid`, `.vitals-card`, etc.).
     - Specialized Capabilities Grid (`.capabilities-section`, `.capabilities-grid`, `.capability-card`, etc.).
     - Featured Project Showcase (`.project-showcase-section`, `.project-cards-grid`, `.project-card`, etc.).
     - Technology Stack Ecosystem (`.tech-ecosystem-section`, `.tech-categories-grid`, `.tech-cat-card`, etc.).
     - 5-Stage Engineering Lifecycle (`.engineering-lifecycle-section`, `.lifecycle-steps-grid`, etc.).
     - Why Choose WebSpire Labs (`.why-web-section`, `.why-features-grid`, `.why-feature-card`, etc.).
     - Full-Bleed Call to Action Banner (`.about-cta-banner-section`, `.about-cta-title`, etc.).
     - Blueprint Modal & unused industry card sub-elements (`.blueprint-modal`, `.industry-desc`, `.industry-features-list`, etc.).
     - Hero Constellation & Network Backdrop (`.hero-network-backdrop`, `.hero-constellation-svg`).
     - Core Engineering Standards Wavy Connected Roadmap (`.standards-section`, `.standards-roadmap-wrap`, `.standards-wave-svg`, `.standards-nodes-track`, `.standards-node-item`, `.standards-circle`, etc.).

6. **[style.css](style.css)** *(Archived: 2026-09-21)*
   - Archived from: `css/style.css` (global stylesheet)
   - Contains:
     - Legacy header right actions & pill button (`.header-nav-actions`, `.btn-nav-pill`).
     - Legacy custom dropdown menu, outline button & hamburger (`.nav-dropdown-chevron`, `.custom-dropdown-menu`, `.custom-dropdown-item`, `.btn-nav-outline`, `.btn-nav-hamburger`).
     - Legacy minimal footer (`.footer-simple`).
     - Obsolete responsive diamond frame & stats-grid media queries (`.diamond-image-frame`, `.stats-grid`, `.stat-card-item`, `.stat-icon-wrap`, `.stat-number`, `.stat-label`).
     - Obsolete 4-column Why Pillars flex grid (`.why-pillars-grid`, `.pillar-card`, `.pillar-icon-wrap`, etc.).
     - Obsolete feature / about block collage (`.feature-block-section`, `.feature-image-collage`, `.feature-img-main`, `.feature-img-secondary`, `.feature-clients-badge`, `.feature-checklist`, etc.).
     - Obsolete portfolio CTA button (`.portfolio-cta-wrap`, `.btn-portfolio-cta`).
     - Obsolete old CTA banner (`.cta-banner-section`, `.cta-banner-inner`, `.cta-banner-pixels`, `.btn-cta-banner`).
     - Corresponding responsive media query rules across 1199px, 991px, and 767px breakpoints.

7. **[law-firm-website-design.css](law-firm-website-design.css)** *(Archived: 2026-09-21)*
   - Archived from: `css/law-firm-website-design.css` (for `law-firm-website-design.html`)
   - Contains: Unused `.featured` state rules for `.legal-why-card.featured`.

---

## Archive Log
- **2026-09-10**: Initial cleanup and decoupling of unused classes across `home.css`, `about.css`, `services.css`, `contact.css`, and `web-development.css`.
- **2026-09-21**: Comprehensive audit, decoupling of 109 dead rules, and Mission & Vision redesign:
  - Created `trash/style.css` with legacy navigation, stats, collage, and CTA banner rules.
  - Updated `trash/home.css` with legacy `.portfolio-cta-wrap`, `.btn-portfolio-cta`, and `.btn-about-cta`.
  - Updated `trash/about.css` with legacy `.btn-about-cta`, `.mv-center-donut`, `.mv-donut-svg`, and `.mv-title-underline`.
  - Updated `trash/services.css` with legacy `.btn-about-cta`.
  - Created `trash/law-firm-website-design.css` with unused `.featured` card rules.
