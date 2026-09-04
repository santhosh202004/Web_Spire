# WebSpire Labs — Home Page Complete Specification & Documentation

> **Document Type:** Dedicated Page Architecture, UI/UX & Design Specification  
> **Target Page:** `index.html` (Homepage)
> **Associated Stylesheets:** `css/home.css`, `css/style.css`
> **JavaScript Modules:** `js/hero-carousel.js`, `js/testimonials-slider.js`, `js/why-choose-accordion.js`, `js/main.js`, `js/header.js`
> **Last Updated:** September 2026  
> **Status:** Production Ready / Active

---

## Table of Contents

1. Executive Overview
2. File Structure & Dependencies
3. Section-by-Section Specification
   - Section 0: Top Announcement Strip
   - Section 0.1: Header & Mega Menu Navigation
   - Section 1: Hero Section — 3-Slide Interactive Showcase
   - Section 2: Our Services Section
   - Section 3: Why Choose Us Section
   - Section 4: Client Testimonials Section
   - Section 5: Our Work / Portfolio Grid
   - Section 6: Full-Bleed Call to Action Banner
   - Section 7: Master Site Footer
   - Section 8: Floating Global Elements
4. JavaScript Behavior Modules
5. Background Color Palette & Contrast Matrix
6. Typography & Text Size Scale Matrix
7. Vertical Rhythm & Section Spacing
8. Responsive Breakpoints & Layout Adaptations
9. Asset Inventory
10. Accessibility & SEO Notes

---

## 1. Executive Overview

The WebSpire Labs homepage (`index.html`) is an enterprise-grade, modern B2B tech consulting landing page. It is structured as a single scrollable page with 8 distinct content sections plus a global header and footer.

### Core Design Philosophy:
- **Background Atmosphere:** Alternating cool gray #F4F5F7, clean white #FFFFFF, deep royal blue gradients, and midnight navy footer #0B1B32.
- **Section Boundaries:** Zero harsh divider lines — sections flow via intentional background color shifts and ambient SVG mesh backgrounds.
- **Typography:** Modern neo-grotesque Plus Jakarta Sans (Google Fonts) with fluid clamp() sizing for headlines.
- **Interactions:** Hardware-accelerated micro-animations on hovers, smooth slide cross-fades, and an infinite testimonials carousel with 4-second auto-scroll.
- **Color Accent System:** Primary Blue #0062FE, Cyan Accent #00A3C4, Midnight Navy #0B1B32.

### Page Section Order:
[Announcement Strip] -> [Header/Nav] -> [Hero] -> [Services] ->
[Why Choose Us] -> [Testimonials] -> [Our Work] -> [CTA Banner] -> [Footer]

---

## 2. File Structure & Dependencies

### Core Files:
| File | Role |
|:---|:---|
| index.html | Page structure and content (~1,235 lines) |
| css/home.css | All homepage-specific styles (~1,497 lines) |
| css/style.css | Global tokens, navbar, footer (~2,500+ lines) |

### JavaScript Modules (Homepage):
| File | Function | Init Trigger |
|:---|:---|:---|
| js/main.js | Sticky navbar, smooth scroll, accessibility, stat counter | DOMContentLoaded |
| js/header.js | Header mega-menu interactions | DOMContentLoaded |
| js/hero-carousel.js | 3-slide hero rotation (5s auto-advance) | DOMContentLoaded |
| js/why-choose-accordion.js | Accordion expand/collapse + petal interaction | DOMContentLoaded |
| js/testimonials-slider.js | 6-card infinite carousel (4s auto-scroll) | DOMContentLoaded |

### External Dependencies:
- Bootstrap 5.3.3 — Layout grid, responsive utilities (cdn.jsdelivr.net)
- Plus Jakarta Sans — Primary typeface (Google Fonts, weights: 400, 500, 600, 700, 800)

---

## 3. Section-by-Section Specification

---

### Section 0: Top Announcement Strip

**HTML Element:** `<aside class="announcement-strip" id="topAnnouncement">`
**CSS Location:** home.css Lines 15-100

**Purpose:** High-visibility promotional banner for urgent service announcements.
**Current Content:** "Now Offering Next-Gen AI & Cloud Migration Services -> Learn More"

| Property | Value |
|:---|:---|
| Background Color | #00A3C4 (var(--color-cyan-accent)) |
| Text Color | #FFFFFF |
| Font Size | 0.88rem (14.08px) |
| Font Weight | 500 (text), 700 (link) |
| Min Height | 42px |
| Inner Padding | 10px 36px 10px 16px |
| z-index | 1002 |

**Behavior:**
- Dismissible via x close button (.announcement-dismiss-btn)
- Collapse Animation: max-height 0.3s ease, opacity 0.3s ease, padding 0.3s ease
- Dismissed State Class: .dismissed — collapses to max-height: 0, opacity: 0, padding: 0

---

### Section 0.1: Header & Mega Menu Navigation

**HTML Element:** `<header class="header-navbar">`
**CSS Location:** style.css + home.css Lines 100-256

**Purpose:** Sticky global navigation with brand logo, nav links, dropdown services menu, and primary CTA pill.

| Property | Default State | Scrolled State (.scrolled) |
|:---|:---|:---|
| Background | #F4F5F7 | rgba(244,245,247,0.96) + backdrop-filter: blur(16px) |
| Shadow | None | 0 4px 20px rgba(11,27,50,0.08) |
| Padding | 16px 0 | 12px 0 |
| Position | Relative | Fixed (sticky) + body padding-top compensated |
| z-index | 1001 | 1001 |

**Sticky Trigger:** 630px scroll (set in main.js -> initStickyNavbar())

**Typography:**
| Element | Font Size | Weight | Color |
|:---|:---|:---|:---|
| Nav Links (.nav-link-custom) | 0.96rem (15.36px) | 600 | #0F172A |
| Nav Link Hover | — | — | #00A3C4 |
| Nav Link Active | — | — | #0062FE |
| CTA Pill (.btn-nav-pill) | 0.92rem (14.72px) | 700 | #FFFFFF on #0B1B32 |
| CTA Pill Hover | — | — | #FFFFFF on #00A3C4 |

**Layout:** Container max-width: 1240px, Logo height 42px / max-width 175px

---

### Section 1: Hero Section — 3-Slide Interactive Showcase

**HTML Element:** `<section class="hero-section" id="hero">`
**CSS Location:** home.css Lines 258-670
**JS File:** js/hero-carousel.js

**Purpose:** Primary full-viewport value proposition with 3 rotating slides.

**Background:**
- Canvas: #F4F5F7
- Overlay: SVG dot grid (1.2px dots, 36px spacing, rgba(11,27,50,0.045))
- Radial Glow: SVG radialGradient from rgba(0,163,196,0.035) to transparent

**Layout:**
| Property | Value |
|:---|:---|
| Min Height (Desktop) | calc(100vh - 74px) — full screen fold |
| Padding (Desktop) | 40px 0 |
| Text Column Width | col-12 col-md-10 col-lg-8 col-xl-7 mx-auto |
| Max Width | 820px |
| Alignment | CENTER — text-align: center, justify-content: center |
| Container | max-width: 1240px |

**3 Slides Content:**
| Slide | ID | Badge | Headline | Cyan Highlight |
|:---|:---|:---|:---|:---|
| 1 (Active) | heroSlide1 | ENTERPRISE WEB & CLOUD | Future-Proof | Digital Engineering. |
| 2 | heroSlide2 | NATIVE & CROSS-PLATFORM APPS | Seamless Mobile | Experiences. |
| 3 | heroSlide3 | DIGITAL MARKETING & IDENTITY | Data-Driven | Brand Acceleration. |

**Typography:**
| Element | Desktop Size | Mobile Size (<=575px) | Weight | Color |
|:---|:---|:---|:---|:---|
| Eyebrow Badge | 0.74rem (11.84px) | 0.72rem | 700 | #64748B |
| Headline | clamp(2.4rem,3.2vw,3.25rem) | clamp(1.8rem,6.5vw,2.2rem) | 800 | #0B1B32 |
| Highlight (.highlight-cyan) | — | — | — | #00A3C4 |
| Description | 1rem (16px), max-width 580px | 0.92rem | 400 | #64748B |
| Action Label | 0.95rem (15.2px) | 0.88rem | 700 | #0B1B32 |

**CTA Arrow Button (.hero-action-row):**
| Property | Idle | Hover |
|:---|:---|:---|
| Layout | inline-flex, gap: 14px, centered | — |
| Circle Size | 44px x 44px, border-radius: 50% | — |
| Circle BG | #00A3C4 | #0B1B32 |
| Circle Transform | — | scale(1.08) translateX(4px) |
| Label Color | #0B1B32 | #00A3C4 |

**Slide Transition:**
- Effect: opacity + transform: translateY(14px to 0), 0.45s cubic-bezier(0.16,1,0.3,1)
- Hidden: position absolute, opacity 0, visibility hidden
- Active: position relative, opacity 1, visibility visible

**Responsive Breakpoints:**
| Breakpoint | Padding | Min-Height | Headline Size |
|:---|:---|:---|:---|
| Desktop (>=992px) | 40px 0 | calc(100vh - 74px) | clamp(2.4rem,3.2vw,3.25rem) |
| Tablet (<=991px) | 32px 0 28px 0 | auto | clamp(2rem,4.5vw,2.75rem) |
| Mobile (<=575px) | 24px 0 20px 0 | auto | clamp(1.8rem,6.5vw,2.2rem) |

---

### Section 2: Our Services Section

**HTML Element:** `<section class="services-section" id="services">`
**CSS Location:** home.css Lines 674-808

**Purpose:** Showcase 6 core service offerings in a 3x2 frameless card grid.

**6 Services:** Web Development, Mobile Application, Digital Marketing, SEO, Branding, Video Editing

**Layout:**
| Property | Desktop | Tablet (<=991px) | Mobile (<=767px) |
|:---|:---|:---|:---|
| Columns | 3 (33.333% each) | 2 (50% each) | 1 (100%) |
| Grid Gap | 28px 24px | 20px | 16px |
| Section Padding | 68px 0 55px 0 | — | 48px 0 |
| Container Max-Width | 1240px | — | — |

**Service Card:**
| Property | Idle | Hover |
|:---|:---|:---|
| Background | transparent | #FFFFFF |
| Border | 1px solid transparent | 1px solid rgba(0,98,254,0.14) |
| Shadow | None | 0 12px 36px rgba(0,98,254,0.08) |
| Transform | — | translateY(-5px) |
| Border-Radius | 16px | — |
| Padding | 28px 24px 26px 24px | — |

**Service Icon Box (.service-icon-box) — UPDATED DESIGN:**
| Property | Idle | Hover |
|:---|:---|:---|
| Size | 56px x 56px circle | — |
| Background | rgba(0,98,254,0.07) — soft blue tint | #0062FE (solid blue) |
| Border | 1.5px solid rgba(0,98,254,0.12) | var(--color-primary) |
| Shadow | None | 0 8px 20px rgba(0,98,254,0.28) |
| Icon SVG Size | 26px x 26px | — |
| Icon Stroke | #0062FE | #FFFFFF |
| Icon Transform | — | scale(1.1) |

**Typography:**
| Element | Size | Weight | Color |
|:---|:---|:---|:---|
| Section Eyebrow | 0.84rem (13.44px) | 700 | #00A3C4 |
| Section Title | 2.35rem (37.6px) | 800 | #0B1B32 |
| Section Subtitle | 1.02rem (16.32px) | 400 | #555D6E |
| Card Title | 1.25rem (20px) | 700 | #0B1B32 |
| Card Description | 0.94rem (15.04px) | 400 | #555D6E |
| Card Link | 0.94rem (15.04px) | 600 | #00A3C4 |

---

### Section 3: Why Choose Us Section

**HTML Element:** `<section class="why-choose-section" id="why-choose-us">`
**CSS Location:** home.css Lines 796-1015
**JS File:** js/why-choose-accordion.js

**Purpose:** Competitive differentiation through a 2-column split: left 4-petal SVG graphic + right interactive accordion.

**Layout:**
| Property | Desktop | Tablet/Mobile (<=991px) |
|:---|:---|:---|
| Grid | 2-column, gap: 48px | Single column, gap: 42px |
| Section Padding | 55px 0 68px 0 | 48px 0 |
| Left Column | SVG 4-Petal Emblem (max-width: 480px) | Centered max-width: 420px |
| Right Column | Interactive Accordion (5 items) | Below petal graphic |

**4-Petal SVG Emblem:**
- SVG Size: 500x500 viewBox
- Petal Color: #DC2626 (Red) with 3D shadow fold #B91C1C at opacity: 0.95
- Center Badge: White circle (r: 82px), text in blue and navy
- Petals map to accordion items via data-accordion-target attribute
- Clicking a petal activates the corresponding accordion item

**Accordion (5 Items):**
| # | Title |
|:---|:---|
| 1 (Default Active) | Turn strategic vision into high-impact software |
| 2 | Adapt as your business changes |
| 3 | Scale without performance trade-offs |
| 4 | Anticipate issues before they impact you |
| 5 | Reduce operational friction and cost |

**Accordion States:**
| Property | Idle | Active |
|:---|:---|:---|
| Trigger BG | #F8FAFC | #0062FE |
| Trigger Border | 1px solid #E2E8F0 | 1px solid #0062FE |
| Trigger Text Color | #0B1B32 | #FFFFFF |
| Arrow Icon | Right arrow | Up arrow (white) |
| Content | max-height: 0 (hidden) | max-height: scrollHeight px |
| Shadow | None | 0 8px 24px rgba(0,98,254,0.22) |

**Typography:**
| Element | Size | Weight | Color |
|:---|:---|:---|:---|
| Section Eyebrow | 0.84rem | 700 | #00A3C4 |
| Section Title | 2.35rem | 800 | #0B1B32 |
| Section Subtitle | 1.02rem, max-width 680px | 400 | #555D6E |
| Accordion Trigger | 1.02rem, padding 16px 22px | 700 | #0B1B32 |
| Accordion Body | 1.02rem, line-height 1.7 | 400 | #475569 |

---

### Section 4: Client Testimonials Section

**HTML Element:** `<section class="testimonials-section" id="testimonials">`
**CSS Location:** home.css Lines 1016-1252
**JS File:** js/testimonials-slider.js

**Purpose:** Social proof via a 6-card infinite auto-scrolling carousel (4s interval, right-to-left).

**Visual:**
- BG Color: #FFFFFF
- Ambient Overlay: SVG web constellation (7 nodes, 6 connecting lines) in #0062FE and #38BDF8

**Spacing:**
| Property | Desktop | Mobile (<=767px) |
|:---|:---|:---|
| Margin-Top | 0 (no gap from Why Choose Us) | 0 |
| Padding | 0 0 68px 0 | 0 0 48px 0 |
| Header Margin-Bottom | 38px | 24px |
| Track Card Gap | 24px | 16px |

**6 Testimonial Cards:**
| # | Author | Role | Company |
|:---|:---|:---|:---|
| 1 | George Loyer | VP, Managed Services | KIBO Commerce |
| 2 (Initial Active) | Kirby Bosch | VP of Technology | Nor1 |
| 3 | Robert Stewart | CTO | Castlight Health |
| 4 | Sarah Jenkins | Director of Digital Strategy | Elevate Health |
| 5 | David Chen | Head of Engineering | FinTech Pulse |
| 6 | Elena Rostova | Chief Product Officer | OmniRetail Solutions |

**Carousel Architecture:**
- Clone Buffer: 6 pre-clones + 6 original + 6 post-clones = 18 total DOM items
- Starting Index: 6 (original Card 1)
- Auto-Scroll Delay: 4000ms (4 seconds), right-to-left
- Transition: 0.45s cubic-bezier(0.25,1,0.5,1)
- Active Card: center card (index + 1) on desktop when 3 cards visible
- Pause: mouseenter, touchstart, document.hidden (tab switch)
- Resume: mouseleave, touchend, tab visible
- Resize: 80ms debounce, repositions without animation

**Visible Card Count by Viewport:**
| Viewport | Visible Cards |
|:---|:---|
| >=1200px | 3 cards |
| 768px-1199px | 2 cards |
| <768px | 1 card |

**Card States:**
| Property | Idle | Active (.testimonial-card-active) |
|:---|:---|:---|
| Border | 1px solid #E8EFF8 | 1px solid rgba(0,98,254,0.18) |
| Shadow | 0 4px 14px rgba(7,28,53,0.06) | 0 14px 38px rgba(0,98,254,0.08) |
| Transform | — | translateY(-4px) |

**Nav Arrow Buttons:**
| Property | Idle | Hover |
|:---|:---|:---|
| Size | 44px x 44px, circle | — |
| Background | #FFFFFF | #0062FE |
| Border | 1.5px solid #E2E8F0 | #0062FE |
| Icon Stroke | #0B1B32 | #FFFFFF |
| Mobile (<=767px) | Hidden | — |

**Typography:**
| Element | Size | Weight | Color |
|:---|:---|:---|:---|
| Eyebrow | 0.84rem | 700 | #00A3C4 |
| Section Title | 2.35rem | 800 | #0B1B32 |
| Testimonial Quote | 0.92rem (14.72px) | 400 | #0B1B32 |
| Author Name | 0.96rem | 700 | #0B1B32 |
| Author Role | 0.80rem | 400 | #64748B |

---

### Section 5: Our Work / Portfolio Grid

**HTML Element:** `<section class="portfolio-section" id="our-work">`
**CSS Location:** home.css Lines 1253-1371

**Purpose:** Showcase 4 delivered client projects in a responsive 4-column card grid.

**Layout:**
| Property | Desktop (>=1200px) | Tablet (768-1199px) | Mobile (<=767px) | Small (<=480px) |
|:---|:---|:---|:---|:---|
| Columns | 4 | 2 | 2 | 1 |
| Grid Gap | 24px | 20px | 16px | — |
| Section Padding | 68px 0 45px 0 | — | 48px 0 | — |
| Header Margin-Bottom | 40px | — | — | — |

**4 Portfolio Projects:**
| # | Title | Category | Image File |
|:---|:---|:---|:---|
| 1 | Corporate Website | Web Development | asstes/project-corporate-website.jpg |
| 2 | E-commerce Platform | Web Development | asstes/project-ecommerce-platform.jpg |
| 3 | Business Dashboard | Software Development | asstes/project-business-dashboard.jpg |
| 4 | Mobile Application | Mobile App Development | asstes/project-mobile-app.jpg |

**Image Specifications:**
| Property | Value |
|:---|:---|
| Display Height (Desktop) | 180px |
| Display Height (Mobile <=767px) | 140px |
| Width | 100% |
| Object Fit | cover |
| Loading | lazy |
| Recommended Source | 1280x720px (16:9) |
| Overlay | Linear gradient transparent to rgba(7,28,53,0.6) |
| Hover Transform | scale(1.05) |

**"View All Projects" CTA Button — NEWLY ADDED:**
| Property | Value |
|:---|:---|
| Element | `<a class="btn-portfolio-cta" id="viewAllProjectsBtn">` |
| Wrapper | .portfolio-cta-wrap — text-align: center; margin-top: 10px |
| BG Color | #0062FE (var(--color-primary)) |
| Text Color | #FFFFFF |
| Padding | 13px 32px |
| Border-Radius | var(--radius-md) |
| Hover BG | var(--color-primary-hover) |
| Hover Transform | translateY(-2px) |
| Links To | #contact (footer) |

**Typography:**
| Element | Size | Weight | Color |
|:---|:---|:---|:---|
| Eyebrow | 0.84rem | 700 | #00A3C4 |
| Section Title | 2.35rem | 800 | #0B1B32 |
| Card Title | 1.00rem (16px) | 700 | #0B1B32 |
| Card Category | 0.82rem | 500 | #64748B |

---

### Section 6: Full-Bleed Call to Action Banner

**HTML Element:** `<section class="about-cta-banner-section" id="cta-banner">`
**CSS Location:** style.css

**Purpose:** High-energy full-width conversion banner above the footer.

| Property | Value |
|:---|:---|
| Outer Section BG | #F8FAFC (var(--color-bg-subtle)) |
| Inner Banner BG | linear-gradient(135deg, #0047C8 0%, #0062FE 55%, #1A74FF 100%) |
| Inner Padding | 60px 0 |

**CTA Button (.btn-about-cta):**
| Property | Idle | Hover |
|:---|:---|:---|
| Background | #FFFFFF | #0B1B32 |
| Text Color | #0062FE | #FFFFFF |
| Padding | 14px 34px | — |
| Border-Radius | 9999px (pill) | — |
| Font Size | 1.00rem | — |
| Font Weight | 700 | — |

**Typography:**
| Element | Size | Weight | Color |
|:---|:---|:---|:---|
| CTA Title | 2.3rem (36.8px) | 800 | #FFFFFF |
| Highlight (.highlight-amber) | — | — | #38BDF8 (sky blue) |
| CTA Subtitle | 1.05rem, max-width 520px | 400 | rgba(255,255,255,0.85) |

---

### Section 7: Master Site Footer

**HTML Element:** `<footer class="site-footer" id="contact">`
**CSS Location:** style.css

**Purpose:** 4-column footer with brand info, navigation, services list, and contact details.
Also serves as the #contact anchor target for CTA buttons.

**4 Columns:**
| Col | Content | Bootstrap Class |
|:---|:---|:---|
| 1 | Logo + Tagline + Social Icons | col-lg-3 col-md-6 |
| 2 | Quick Links (5 links) | col-lg-2 col-md-6 col-6 |
| 3 | Our Services (6 links) | col-lg-3 col-md-6 col-6 |
| 4 | Contact Info (email, phone, address) | col-lg-4 col-md-6 |

**Social Icons:** Facebook, LinkedIn, Twitter/X, Instagram

**Contact Details:**
- Email: info@webspirelabs.com
- Phone: +91 89056 43210
- Location: Coimbatore, Tamil Nadu, India

**Visual:**
| Property | Value |
|:---|:---|
| Background Color | #0B1B32 (var(--color-midnight)) |
| Top Padding | 70px |
| Divider Top Margin | 50px |
| Divider Border | 1px solid rgba(148,163,184,0.15) |
| Copyright Padding | 22px 0 |

**Typography:**
| Element | Size | Weight | Color |
|:---|:---|:---|:---|
| Column Title | 1.00rem (16px) | 700 | #FFFFFF |
| Company Tagline | 0.92rem, max-width 260px | 400 | #64748B |
| Nav Links | 0.90rem | 400 | #94A3B8 |
| Nav Link Hover | — | — | #FFFFFF + translateX(4px) |
| Contact Info | 0.90rem | 400 | #94A3B8 |
| Copyright | 0.84rem | 400 | #64748B |

**Footer Logo:** asstes/logo-footer.png — Display: Width 174px, Height 42px

---

### Section 8: Floating Global Elements

**WhatsApp Floating Action Button (.floating-whatsapp-btn):**
| Property | Value |
|:---|:---|
| Position | fixed; bottom: 28px; right: 28px; z-index: 9999 |
| Size | 56px x 56px, border-radius: 50% |
| Background | #25D366 (WhatsApp green) |
| Icon | 28px SVG #FFFFFF |
| Shadow | 0 6px 20px rgba(37,211,102,0.4) |
| Visibility | Hidden by default; shown after 630px scroll via .show class |
| Tooltip | .whatsapp-tooltip — "Chat with us", appears on hover |
| Link Target | https://wa.me/918905643210 |
| Hover Scale | scale(1.1) |

---

## 4. JavaScript Behavior Modules

### 4.1 js/main.js — Site-Wide Interactions

**Functions initialized on DOMContentLoaded:**

#### initStickyNavbar()
- Listens to window.scroll (passive)
- Threshold: 630px scroll
- Adds .scrolled to .header-navbar past threshold
- Adds body.paddingTop = navHeight for fixed positioning compensation
- Also toggles .show on .floating-whatsapp-btn

#### initStatsCounter()
- Targets .stat-number[data-target] elements
- Data Attributes: data-target (number), data-suffix (default: +)
- Animation: Ease-out cubic over 1800ms, ~60fps frame rate
- Trigger: IntersectionObserver at threshold: 0.2 — fires once per element
- Note: Stats section removed from homepage; available for other pages or future re-addition

#### initSmoothScroll()
- Selects a[href^="#"] links (excludes bare #)
- Smooth scrolls with navbar height offset compensation
- Also closes Bootstrap mobile navbar collapse if open

#### initAccessibility()
- Keyboard support (Enter/Space) for Bootstrap dropdown toggles

---

### 4.2 js/hero-carousel.js — Hero 3-Slide Rotation

| Property | Value |
|:---|:---|
| Slide Count | 3 |
| Auto-Advance Interval | 5000ms (5 seconds) |
| Pause on Hover | Yes (mouseenter / mouseleave) |
| Pause on Focus | Yes (focusin / focusout) |
| Touch Swipe | Yes — 50px threshold, swipe left -> next, right -> prev |
| Keyboard | ArrowLeft/ArrowRight on tab buttons |
| Tab Buttons | .hero-tab-btn (optional switcher UI, if present in HTML) |
| On User Interaction | Resets 5s auto-advance timer |

**Slide Switching Logic:** goToSlide(targetIndex) normalizes index (wraps around), toggles .active class and aria-hidden on each slide, and updates tab state.

---

### 4.3 js/why-choose-accordion.js — Accordion + Petal Interaction

| Property | Value |
|:---|:---|
| Accordion Container | #whyChooseAccordion |
| Items | 5 .why-acc-item elements |
| Default Open | Item 1 (index 0) — matches design screenshot |
| Open Behavior | One-at-a-time exclusive (closes others on open) |
| Toggle Close | Clicking active item again closes it |
| Content Animation | max-height: scrollHeight + px (CSS transition) |
| Petal Click | Maps data-accordion-target index to opens corresponding item |
| Petal Highlight | .highlighted class toggled on .why-petal-node |
| Keyboard | Enter / Space triggers click |

---

### 4.4 js/testimonials-slider.js — Infinite Testimonials Carousel

| Property | Value |
|:---|:---|
| Cards | 6 original cards |
| Clone Buffer | 6 pre + 6 post = 18 total DOM items |
| Auto-Scroll Direction | Left (rightward increment of currentIndex) |
| Auto-Scroll Delay | 4000ms (4 seconds) |
| Transition | 0.45s cubic-bezier(0.25,1,0.5,1) |
| Active Center Card | currentIndex + 1 on desktop (3 visible) |
| Boundary Reset | Silent snap via transitionend event |
| Pause Triggers | mouseenter, touchstart, document.hidden |
| Resume Triggers | mouseleave, touchend, tab visible |
| Resize Handler | 80ms debounce, repositions without animation |

---

### 4.5 js/header.js — Header Mega-Menu

Handles header-specific dropdown and mega-menu toggle interactions beyond Bootstrap defaults.

---

## 5. Background Color Palette & Contrast Matrix

| Section | Selector | Background | Text Color | WCAG Ratio |
|:---|:---|:---|:---|:---|
| Announcement Strip | .announcement-strip | #00A3C4 (Cyan) | #FFFFFF | 4.6:1 — AA Pass |
| Navbar | .header-navbar | #F4F5F7 | #0F172A | 15.2:1 — AAA Pass |
| Hero | .hero-section | #F4F5F7 + SVG Mesh | #0B1B32 | 14.8:1 — AAA Pass |
| Our Services | .services-section | #FFFFFF | #0B1B32 | 16.5:1 — AAA Pass |
| Why Choose Us | .why-choose-section | #FFFFFF | #0B1B32 | 16.5:1 — AAA Pass |
| Testimonials | .testimonials-section | #FFFFFF | #0B1B32 | 16.5:1 — AAA Pass |
| Our Work | .portfolio-section | #FFFFFF | #0B1B32 | 16.5:1 — AAA Pass |
| CTA Banner (inner) | .about-cta-banner-inner | linear-gradient(#0047C8 to #1A74FF) | #FFFFFF | 8.2:1 — AAA Pass |
| Site Footer | .site-footer | #0B1B32 (Midnight Navy) | #FFFFFF | 13.5:1 — AAA Pass |

---

## 6. Typography & Text Size Scale Matrix

**Global Font Family:** Plus Jakarta Sans (Google Fonts, loaded via preconnect)
**Weights Loaded:** 400, 500, 600, 700, 800

| Level | Selector | Desktop | Mobile (<=575px) | Weight | Line-Height | Letter-Spacing | Color |
|:---|:---|:---|:---|:---|:---|:---|:---|
| H1 Display | .hero-headline | clamp(2.4rem,3.2vw,3.25rem) | clamp(1.8rem,6.5vw,2.2rem) | 800 | 1.12 | -0.035em | #0B1B32 |
| H2 Section | .section-title | 2.35rem (37.6px) | 1.95rem | 800 | 1.20 | -0.025em | #0B1B32 |
| H2 CTA | .about-cta-title | 2.3rem (36.8px) | 1.9rem | 800 | 1.20 | -0.025em | #FFFFFF |
| H3 Card | .service-card-title | 1.25rem (20px) | 1.15rem | 700 | 1.35 | -0.015em | #0B1B32 |
| H3 Portfolio | .portfolio-card-title | 1.00rem (16px) | 0.95rem | 700 | 1.30 | -0.010em | #0B1B32 |
| H3 Author | .testimonial-author-name | 0.96rem (15.36px) | — | 700 | — | — | #0B1B32 |
| Accordion | .why-acc-trigger | 1.02rem (16.32px) | 0.95rem | 700 | 1.30 | 0 | #0B1B32 |
| Eyebrow | .section-eyebrow | 0.84rem (13.44px) | 0.80rem | 700 | 1.20 | +0.14em | #00A3C4 |
| Hero Badge | .hero-slide-badge | 0.74rem (11.84px) | 0.72rem | 700 | 1.20 | +0.12em | #64748B |
| Subtitle | .section-subtitle | 1.02rem (16.32px) | 0.95rem | 400 | 1.65 | 0 | #555D6E |
| Hero Desc | .hero-description | 1.00rem (16px) | 0.92rem | 400 | 1.62 | 0 | #64748B |
| Body/Card | .service-card-desc | 0.94rem (15.04px) | 0.90rem | 400 | 1.68 | 0 | #555D6E |
| Accordion Body | .why-acc-body p | 1.02rem (16.32px) | — | 400 | 1.70 | 0 | #475569 |
| Quote | .testimonial-quote | 0.92rem (14.72px) | — | 400 | 1.68 | 0 | #0B1B32 |
| Role/Meta | .portfolio-card-cat, .testimonial-author-role | 0.80-0.82rem | 0.78rem | 400-500 | 1.40 | +0.01em | #64748B |
| Nav Links | .nav-link-custom | 0.96rem (15.36px) | — | 600 | — | 0 | #0F172A |
| Footer Links | .footer-nav-list a | 0.90rem (14.4px) | — | 400 | — | 0 | #94A3B8 |
| Footer Copy | .footer-copyright | 0.84rem (13.44px) | — | 400 | — | 0 | #64748B |

---

## 7. Vertical Rhythm & Section Spacing

```
+--------------------------------------------------------------+
|  0.  Announcement Strip    Min-H: 42px, Padding: 10px 0     |
+--------------------------------------------------------------+
|  0.1 Header / Navbar       Padding: 16px 0 (12px scrolled)  |
+--------------------------------------------------------------+
|  1.  Hero Section          Padding: 40px 0                   |
|                            Min-H: calc(100vh - 74px)         |
|                            <- Full first screen fold         |
+--------------------------------------------------------------+
|  2.  Our Services          Padding: 68px 0 55px 0            |
+--------------------------------------------------------------+  <- 55px + 55px = 110px breathing room
|  3.  Why Choose Us         Padding: 55px 0 68px 0            |
+--------------------------------------------------------------+  <- margin-top: 0 on Testimonials
|  4.  Client Testimonials   Padding: 0 0 68px 0               |
+--------------------------------------------------------------+  <- 68px + 68px = 136px gap
|  5.  Our Work / Portfolio  Padding: 68px 0 45px 0            |
+--------------------------------------------------------------+  <- Direct background shift to blue
|  6.  CTA Banner            Inner Padding: 60px 0             |
+--------------------------------------------------------------+  <- Instant transition to midnight
|  7.  Site Footer           Top Padding: 70px, Bottom: 22px   |
+--------------------------------------------------------------+
```

### Section Transition Principles:
1. Hero to Services: Seamless gray (#F4F5F7) to white (#FFFFFF) shift
2. Services to Why Choose Us: 110px total vertical rhythm (55px + 55px)
3. Why Choose Us to Testimonials: Zero margin boundary (margin-top: 0) for continuous social proof flow
4. Testimonials to Our Work: Continuous white canvas
5. Our Work to CTA Banner: Sharp white to royal blue gradient contrast shift
6. CTA Banner to Footer: Blue to midnight #0B1B32 instant boundary

---

## 8. Responsive Breakpoints & Layout Adaptations

| Breakpoint | Width | Hero | Services | Why Choose | Testimonials | Portfolio |
|:---|:---|:---|:---|:---|:---|:---|
| Large Desktop | >=1200px | Centered, 100vh | 3 columns | 2-col split | 3 cards | 4 columns |
| Desktop | 992-1199px | Centered, 100vh | 3 columns | 2-col split | 2 cards | 2 columns |
| Tablet | 768-991px | Auto height, 32px pad | 2 columns | Single col (stacked) | 2 cards | 2 columns |
| Mobile | <=767px | Auto height, 24px pad | 1 column | Single col | 1 card, no arrows | 2 columns |
| Small Mobile | <=480px | — | — | — | — | 1 column |

### Key Mobile Adaptations:
- Hero text: Wraps cleanly, action row flex-wrap: wrap; justify-content: center
- Service icon boxes: Maintain 56px circle on all screens
- Testimonials track: Switches to column on mobile (flex-direction: column)
- Petal emblem: Centered, max-width: 420px on mobile
- Nav: Bootstrap collapse menu; CTA pill becomes full-width (width: 100%)

---

## 9. Asset Inventory

### Image Files (asstes/ directory):
| File | Used In | Recommended Dimensions |
|:---|:---|:---|
| logo-nav.png | Navbar | 175x42px display |
| logo-footer.png | Footer | 174x42px display |
| logo_1.png | SEO OG / Twitter meta tags | — |
| favicon.png | Browser tab | 32x32px |
| project-corporate-website.jpg | Portfolio card 1 | 1280x720px (16:9) |
| project-ecommerce-platform.jpg | Portfolio card 2 | 1280x720px (16:9) |
| project-business-dashboard.jpg | Portfolio card 3 | 1280x720px (16:9) |
| project-mobile-app.jpg | Portfolio card 4 | 1280x720px (16:9) |

### Inline SVG Assets:
| SVG | Location | Purpose |
|:---|:---|:---|
| Hero dot grid + radial glow | index.html — .hero-network-backdrop | Hero atmosphere |
| 4-Petal Emblem | index.html — .why-petal-svg | Why Choose Us graphic |
| Constellation lines | index.html — .testimonials-bg-accent | Testimonials ambient background |
| CTA paper plane + bullseye | index.html — .about-cta-svg-art | CTA banner decoration |
| Service icons | Inline SVG in each .service-icon-box | 6 service card icons |
| Accordion arrows | Inline SVG in .why-acc-icon | Up/right direction arrows |
| Quote marks | Inline SVG in .testimonial-quote-icon | Opening quotation marks |

### JavaScript File Sizes:
| File | Size |
|:---|:---|
| js/main.js | 5,184 bytes |
| js/header.js | 1,532 bytes |
| js/hero-carousel.js | 4,107 bytes |
| js/why-choose-accordion.js | 2,917 bytes |
| js/testimonials-slider.js | 5,887 bytes |

---

## 10. Accessibility & SEO Notes

### SEO Metadata:
- Title Tag: "WebSpire Labs | Building Digital Solutions, Empowering Businesses"
- Meta Description: Enterprise-grade IT solutions description targeting B2B audience
- OG Image: asstes/logo_1.png
- Schema.org JSON-LD: Organization type with service catalog and contact info
- Sitemap: sitemap.xml present at root
- Robots.txt: index, follow directives

### Accessibility Features:
- aria-label on all icon-only buttons and nav elements
- aria-expanded / aria-controls on accordion triggers
- aria-hidden="true" on all decorative SVGs and carousel clones
- aria-labelledby linking section headings to their containers
- role="region" on accordion content panels
- Keyboard navigation: Enter/Space for accordion; ArrowLeft/ArrowRight for hero and testimonial tabs
- Touch swipe: 50px threshold on hero; pause on touchstart for testimonials
- loading="lazy" on all below-fold portfolio images
- Dynamic year via document.getElementById("currentYear").textContent

### Performance Notes:
- All portfolio images use loading="lazy"
- Hero slide transitions use GPU-composited opacity + transform properties
- {passive: true} on all scroll and touch event listeners
- Bootstrap loaded from CDN with SRI integrity hash
- Google Fonts loaded via preconnect + deferred stylesheet

---

## Recent Design Changes Log

| Date | Change | Files Affected |
|:---|:---|:---|
| Sep 2026 | Hero section centered (was left-aligned) — text-align: center, justify-content: center | home.css, index.html |
| Sep 2026 | Service icon boxes updated: 56px circular blue-tinted container (was plain/no background) | home.css |
| Sep 2026 | "View All Projects" button added below portfolio grid (CSS existed, HTML was missing) | index.html |
| Sep 2026 | Testimonials auto-scroll enabled: 4-second right-to-left infinite carousel | js/testimonials-slider.js |
| Sep 2026 | Stats section (100+ Projects, 50+ Clients, etc.) removed from homepage | index.html |
| Sep 2026 | Hero section fills full viewport height on desktop (min-height: calc(100vh - 74px)) | home.css |
| Sep 2026 | Testimonials margin-top set to 0 to eliminate excess gap | home.css |

---

*Document maintained by WebSpire Labs Engineering Team — Updated September 2026.*
