# WebSpire Labs — Removed Hover Effects Log

**Date:** September 2, 2026  
**Target File Modified:** [`css/style.css`](file:///d:/St_website/Web_spire/css/style.css)  
**Trash / Archive File:** [`document/trash_hover_effects.css`](file:///d:/St_website/Web_spire/document/trash_hover_effects.css)

---

## 📋 Summary of Removed Hover Effects

The following 10 hover effects and micro-interactions have been removed from the main stylesheet and archived into the trash file:

### 1. Header & Nav
* **Logo Zoom**: Removed `.brand-logo-img:hover { transform: scale(1.02); }` and `transition: transform` on the logo image.
* **Glow Buttons**: 
  * Removed `box-shadow: var(--shadow-cta);` from `.btn-nav-outline:hover`.
  * Removed `transform: scale(1.05);` zoom from `.btn-nav-hamburger:hover`.

### 2. Hero Section
* **Button Micro-lifts (`-2px`)**: Removed `transform: translateY(-2px);` from both `.btn-primary-hero:hover` and `.btn-secondary-hero:hover`.
* **Glow Expansions**: 
  * Removed `box-shadow: 0 12px 24px rgba(0, 98, 254, 0.35);` from `.btn-primary-hero:hover`.
  * Removed `box-shadow: var(--shadow-sm);` from `.btn-secondary-hero:hover`.

### 3. Stats Strip
* **Icon Badge Zoom & Background Tint**: Removed the entire `.stat-card-item:hover .stat-icon-wrap` rule (`transform: scale(1.08)` and `background-color: #DDEBFF`).

### 4. Services Grid
* **Card Lift (`-6px`)**: Removed `transform: translateY(-6px);` from `.service-card:hover`.
* **Top Gradient Accent Bar**: Removed `.service-card::before` and `.service-card:hover::before` top gradient reveal.

### 5. Why Choose Us (Pillars Grid)
* **Card Lift (`-6px`)**: Removed `transform: translateY(-6px);` from `.pillar-card:hover`.
* **Bottom Gradient Accent Bar**: Removed `.pillar-card::before` and `.pillar-card:hover::before` bottom gradient reveal.

### 6. Feature Block
* **CTA Button Hover Micro-lift & Glow**: Removed `transform: translateY(-2px);` and `box-shadow: 0 12px 24px rgba(0, 98, 254, 0.38);` from `.btn-feature-primary:hover`.
* **CTA Button Arrow Motion**: Removed `.btn-feature-primary:hover svg { transform: translateX(4px); }`.

### 7. Process Steps (Our Process)
* **Card Lift & Shadow (`-5px`)**: Removed `transform: translateY(-5px);` and `box-shadow: var(--shadow-card-hover);` from `.process-step-item:hover`.
* **Top Accent Reveal**: Removed `.process-step-item::before` and `.process-step-item:hover::before` gradient line reveal.
* **Stage Badge Inversion & Glow**: Removed `.process-step-item:hover .process-step-badge` color flip and glow shadow.
* **Icon Glow & Scale**: Removed `.process-step-item:hover .process-step-icon` background color swap and `scale(1.04)`.
* **Tag Highlight**: Removed `.process-step-item:hover .process-tag` active border and color highlight.

### 8. Portfolio Grid
* **3D Card Lift (`-6px`)**: Removed `transform: translateY(-6px);` from `.portfolio-card:hover`.
* **Image Overlay**: Removed `.portfolio-card-img-overlay` and `.portfolio-card:hover .portfolio-card-img-overlay` gradient reveal.

### 9. Full-Bleed CTA Banner
* **Navy Color Flip & Button Lift**: Removed `.btn-cta-banner:hover` and `.btn-about-cta:hover` (`background-color: var(--color-midnight); color: var(--color-white); transform: translateY(-2px); box-shadow: ...;`).
* **CTA Arrow Motion**: Removed `.btn-cta-banner:hover svg` and `.btn-about-cta:hover svg` (`transform: translateX(4px); stroke: var(--color-white);`).

### 10. Site Footer
* **Nav Links Horizontal Nudge**: Removed `padding-left: 4px;` from `.footer-nav-list a:hover` (links now transition color cleanly without shifting layout).

---

## 🗄️ Restoration Reference

All removed CSS rules are preserved intact in [`document/trash_hover_effects.css`](file:///d:/St_website/Web_spire/document/trash_hover_effects.css).
