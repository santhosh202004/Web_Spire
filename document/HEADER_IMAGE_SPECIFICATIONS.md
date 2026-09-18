# Full-Screen Header Image Specifications & Guidelines
**Project:** WebSpire Labs Website  
**Scope:** Home, About Us, Services, Contact Us, and Individual Pages  
**Date:** 2026-09-10  
**Status:** Approved Architectural Standard

---

## 1. Executive Summary & Viewport Concept

When designing a full-screen header image situated immediately below the site navigation bar:
- **Navbar Height Allowance:** The global header navbar (`.header-navbar`) has a rendered height of **~74px** (`min-height: calc(100dvh - 74px)`).
- **Usable Screen Height:** The header image fills **100% width** and **100% remaining screen height** (`100vw` × `calc(100vh - 74px)` or `calc(100dvh - 74px)`).
- **CSS Rule for Perfect Coverage:**
  ```css
  .hero-full-screen-img {
    width: 100%;
    height: calc(100dvh - 74px);
    object-fit: cover;
    object-position: center center;
    display: block;
  }
  ```

---

## 2. Master Dimension & Resolution Matrix by Page

| Page | Recommended Desktop Dimensions (1x) | Retina / High-DPI Dimensions (2x) | Recommended Aspect Ratio | Mobile Dimensions (`< 576px`) | Max File Weight (WebP/AVIF) | Recommended Visual Treatment |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Home Page** (`index.html`) | **1920 × 1080 px** | **2560 × 1440 px** | **16:9** | **1080 × 1920 px** (9:16) | **≤ 220 KB** | High-impact tech visual, 3D abstract digital render, high-contrast dark/cyan gradient backdrop. |
| **About Us Page** (`about.html`) | **1920 × 1080 px** *(or 1920 × 750 px)* | **2560 × 1440 px** | **16:9** | **1080 × 1600 px** (2:3) | **≤ 180 KB** | Corporate engineering lab, collaborative tech workspace, architectural innovation ambiance. |
| **Services Page** (`services.html`) | **1920 × 1080 px** *(or 1920 × 800 px)* | **2560 × 1440 px** | **16:9** | **1080 × 1600 px** (2:3) | **≤ 180 KB** | Abstract cloud matrix, digital architecture nodes, structured geometric network illustration. |
| **Contact Us Page** (`contact.html`) | **1920 × 1080 px** *(Full)* / **1920 × 600 px** *(Compact)* | **2560 × 1440 px** | **16:9** *(Full)* / **16:5** *(Compact)* | **1080 × 1400 px** | **≤ 160 KB** | Ambient network overlay, world connectivity mesh with subtle blue vignette (form remains clear). |
| **Individual / Detail Pages** (`web-development.html`, `blog-detail.html`) | **1920 × 1080 px** *(Hero)* / **1920 × 650 px** *(Banner)* | **2560 × 1440 px** | **16:9** *(Full)* / **16:5.5** | **1080 × 1500 px** | **≤ 160 KB** | Specialized discipline artwork (e.g. code terminals, UI/UX blueprints, server racks). |

---

## 3. Page-by-Page Detailed Guidelines

### 1. Home Page (`index.html`)
* **Primary Objective:** Immediate "WOW" factor, brand authority, and instant conversion engagement.
* **Canvas Size:** `1920 × 1080 px` (Standard) or `2560 × 1440 px` (2K Retina).
* **Safe Content Zone:** Keep key focal subjects within the central **1240 × 700 px** to guarantee that headline text and CTA buttons remain legible on ultra-wide (21:9) and compact laptop (16:10) screens.
* **Contrast Requirement:** If dark text is placed on top, use a dark-tinted or blue-gradient overlay:
  `background: linear-gradient(180deg, rgba(11,27,50,0.7) 0%, rgba(11,27,50,0.4) 100%)`.

---

### 2. About Us Page (`about.html`)
* **Primary Objective:** Convey credibility, organizational maturity, and high-standard digital engineering.
* **Canvas Size:** `1920 × 1080 px` for 100% viewport coverage, or `1920 × 750 px` if using a hybrid hero.
* **Composition:** Clean, expansive composition with plenty of negative space. Avoid overly crowded photos where the eye cannot distinguish between the image details and the hero typography.
* **Focal Anchor:** Center-right or subtle background texture so left-aligned headings ("Building Technology With Purpose") pop cleanly.

---

### 3. Services Page (`services.html`)
* **Primary Objective:** Introduce the breadth of digital and software engineering capabilities.
* **Canvas Size:** `1920 × 1080 px`.
* **Composition:** Geometric technology art, abstract particle flows, or futuristic software delivery pipelines.
* **Integration:** Should transition seamlessly into the 20px section gap before the `.capabilities-strip` or `.services-catalog-section`.

---

### 4. Contact Us Page (`contact.html`)
* **Primary Objective:** Direct engagement and inquiry submission.
* **Critical Design Consideration:**
  * **Option A (Full 100% Height):** If the image is 100% screen height, the contact form will either sit inside a floating card *on top of* the image backdrop, OR be pushed below the fold. For optimal conversion, a dark/clean backdrop (`1920 × 1080 px`) with the form overlaid as a frosted glass / white elevation card is recommended.
  * **Option B (Compact Banner):** If the form is placed directly below the hero, a `1920 × 600 px` header image allows users to immediately see the contact options without excessive scrolling.

---

### 5. Individual Pages (e.g., `web-development.html`, `blog-detail.html`)
* **Primary Objective:** Showcase topic-specific depth (e.g. Full-Stack Web Development, Mobile Apps, Cloud Engineering).
* **Canvas Size:** `1920 × 1080 px` (Full viewport) or `1920 × 650 px` (Hero banner).
* **Composition:** Clean engineering diagrams, modern IDE wireframes, or high-performance code data streams.

---

## 4. Performance & Core Web Vitals (LCP Optimization)

Because a full-screen hero image is the **Largest Contentful Paint (LCP)** element on the page, the following standards are mandatory:

1. **Next-Gen File Formats:**
   * **WebP:** Recommended primary format (85% quality provides visually lossless fidelity at 1/4 the file size of PNG).
   * **AVIF:** Highly compressed alternative for modern browsers (quality 80–82).
   * **Never use raw PNG or uncompressed JPG** for full-screen hero banners (raw PNGs often exceed 3MB–5MB and degrade Google PageSpeed scores).

2. **File Size Budget:**
   * **Target:** Between **100 KB and 180 KB**.
   * **Hard Ceiling:** **250 KB maximum**.

3. **Preload in HTML Head:**
   Add a high-priority preload tag in the `<head>` of the page:
   ```html
   <link rel="preload" as="image" href="assets/hero-home.webp" fetchpriority="high" type="image/webp">
   ```

4. **Image Loading Attribute:**
   * **Always use `loading="eager"`** (or omit `loading` attribute).
   * **Never use `loading="lazy"`** on above-the-fold hero images.

---

## 5. Responsive `<picture>` Implementation Example

To guarantee pixel-perfect sharpness across mobile, tablet, and 4K desktop screens while keeping bandwidth minimal:

```html
<section class="hero-section" id="heroBanner">
  <picture class="hero-picture-wrapper">
    <!-- Mobile Screens (< 576px) -->
    <source media="(max-width: 575.98px)" srcset="assets/hero-mobile.webp 1x, assets/hero-mobile@2x.webp 2x" type="image/webp">
    
    <!-- Tablet Screens (576px - 991px) -->
    <source media="(max-width: 991.98px)" srcset="assets/hero-tablet.webp 1x, assets/hero-tablet@2x.webp 2x" type="image/webp">
    
    <!-- Desktop / 4K Screens (>= 992px) -->
    <source media="(min-width: 992px)" srcset="assets/hero-desktop.webp 1x, assets/hero-desktop@2x.webp 2x" type="image/webp">
    
    <!-- Fallback Image -->
    <img src="assets/hero-desktop.jpg" 
         alt="WebSpire Labs - Full-Stack Digital Engineering & Technology Solutions"
         class="hero-full-screen-img"
         width="1920" 
         height="1006" 
         fetchpriority="high">
  </picture>
</section>
```

---

## 6. Checklist Before Exporting Images

- [ ] Canvas dimension is exactly **1920 × 1080 px** (or **2560 × 1440 px** for 2K).
- [ ] Color profile is set to **sRGB** (prevents color shifts across different monitors).
- [ ] Visual focal elements reside safely inside the **center 1240 × 700 px** safe area.
- [ ] Contrast tested against white text headings (`#FFFFFF` with shadow or dark overlay).
- [ ] Exported in **.webp** format with quality set to **82–88%**.
- [ ] Total file size verified under **220 KB**.
- [ ] Preload tag placed in `<head>` with `fetchpriority="high"`.
