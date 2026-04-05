# Implementation Plan: Website Redesign

## Overview

Incrementally add scroll-triggered animations, refined hover transitions, and animation data attributes to the existing MATHISS Consulting static site. All changes target `css/styles.css`, `js/main.js`, and HTML files — no new frameworks or build tools. Existing functionality (contact form, gallery, carousel, nav) is preserved as-is.

## Tasks

- [x] 1. Add scroll-animation CSS classes and prefers-reduced-motion support
  - [x] 1.1 Add `.scroll-animate`, `.scroll-animate-left`, `.scroll-animate-right` base classes to `css/styles.css`
    - `.scroll-animate`: `opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease;`
    - `.scroll-animate-left`: `opacity: 0; transform: translateX(-24px);`
    - `.scroll-animate-right`: `opacity: 0; transform: translateX(24px);`
    - `.scroll-animate.is-visible`: `opacity: 1; transform: none;`
    - Support `transition-delay` via inline style or `data-delay` attribute
    - _Requirements: 4.2, 4.3_

  - [x] 1.2 Add `prefers-reduced-motion` media query to `css/styles.css`
    - Inside `@media (prefers-reduced-motion: reduce)`, set `.scroll-animate, .scroll-animate-left, .scroll-animate-right` to `opacity: 1; transform: none; transition: none; animation: none;`
    - Also disable `.card-hover` transition, `.gallery-item` transition, and any other animated classes
    - _Requirements: 4.6, 13.6_

  - [ ]* 1.3 Write property test for reduced motion disabling all animations
    - **Property 4: Reduced motion disables all animations**
    - **Validates: Requirements 4.6, 13.6**

- [x] 2. Implement Intersection Observer scroll animation system in `js/main.js`
  - [x] 2.1 Add `initScrollAnimations()` function to `js/main.js`
    - Query all elements with `[data-animate]` attribute
    - Check `prefers-reduced-motion`: if active, add `is-visible` to all elements immediately and return
    - Create `IntersectionObserver` with `threshold: 0.1` and `rootMargin: "0px 0px -50px 0px"`
    - On intersection: read `data-delay` attribute, set `transition-delay` as `data-delay * 80ms`, add `is-visible` class, then `unobserve` the element
    - Call `initScrollAnimations()` at end of the IIFE
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.6_

  - [ ]* 2.2 Write property test for scroll animations firing only once
    - **Property 3: Scroll animations fire only once per element**
    - **Validates: Requirements 4.4**

  - [ ]* 2.3 Write property test for staggered delays being monotonically increasing
    - **Property 2: Staggered animation delays are monotonically increasing**
    - **Validates: Requirements 4.3**

- [x] 3. Add animation data attributes to Homepage (`index.html`)
  - [x] 3.1 Add `data-animate` attributes to Homepage sections and elements
    - Hero left column: `data-animate="fade-left"` with class `scroll-animate-left`
    - Hero right panel: `data-animate="fade-right"` with class `scroll-animate-right`
    - Metrics `.feature-item` cards: `data-animate="fade-up"` with class `scroll-animate` and sequential `data-delay="0"`, `data-delay="1"`, `data-delay="2"`
    - Delivery Flow `.suite-item` rows: `data-animate="fade-up"` with class `scroll-animate` and sequential delays
    - Persona `.persona-card` items: `data-animate="fade-up"` with class `scroll-animate` and sequential delays
    - Featured Services `.featured-item` rows: `data-animate="fade-up"` with class `scroll-animate` and sequential delays
    - Affiliates `.affiliate-card` items: `data-animate="fade-up"` with class `scroll-animate` and sequential delays
    - Tools `.tool-card` items: `data-animate="fade-up"` with class `scroll-animate` and sequential delays
    - Module `.module-card` items: `data-animate="fade-up"` with class `scroll-animate` and sequential delays
    - Section headings `.section-title`: `data-animate="fade-up"` with class `scroll-animate`
    - _Requirements: 4.1, 4.2, 4.3, 4.5_

- [x] 4. Checkpoint - Verify homepage animations
  - Ensure all tests pass, ask the user if questions arise.

- [x] 5. Add animation data attributes to subpages
  - [x] 5.1 Add `data-animate` attributes to `about.html`
    - Founder section, core value cards, qualification/registration cards: `data-animate="fade-up"` with class `scroll-animate` and sequential delays where grouped
    - _Requirements: 4.5, 11.3_

  - [x] 5.2 Add `data-animate` attributes to `portfolio.html`
    - Project cards: `data-animate="fade-up"` with class `scroll-animate` and sequential delays
    - _Requirements: 4.5, 11.3_

  - [x] 5.3 Add `data-animate` attributes to `impact.html`
    - Impact initiative cards: `data-animate="fade-up"` with class `scroll-animate` and sequential delays
    - _Requirements: 4.5, 11.3_

  - [x] 5.4 Add `data-animate` attributes to `contact.html`
    - Contact form card and info panel: `data-animate="fade-up"` with class `scroll-animate` and sequential delays
    - _Requirements: 4.5, 11.3_

  - [x] 5.5 Add `data-animate` attributes to `gallery.html`
    - Gallery header and filter bar: `data-animate="fade-up"` with class `scroll-animate`
    - Note: individual gallery items already have their own `is-visible` animation in `gallery.js` — do not double-animate
    - _Requirements: 4.5, 10.4, 11.3_

- [x] 6. Refine hover transitions in `css/styles.css`
  - [x] 6.1 Standardize card hover timing and lift values
    - Ensure `.card-hover` uses `transition: transform 0.3s ease, box-shadow 0.3s ease;` with `translateY(-6px)` on hover (already close, verify consistency)
    - Ensure `.btn-primary:hover` transition is 200ms
    - Ensure `.site-nav > a` and `.nav-dropdown-toggle` hover transition is 200ms (already set, verify)
    - Ensure `.social-btn:hover` applies `translateY(-2px)` and increased background opacity (already set, verify)
    - Ensure `.gallery-item:hover` scales image to 1.1x and reveals overlay with fade-in (already set, verify)
    - Ensure `.service-card:hover .service-splash` applies `scale(1.03)` and `saturate(1.08)` (already set, verify)
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6_

- [x] 7. Verify section background alternation and padding
  - [x] 7.1 Audit and fix section background alternation on Homepage
    - Verify consecutive `<section>` elements within `<main>` alternate between no class and `.section-alt`
    - Fix any consecutive sections that both have or both lack `.section-alt`
    - _Requirements: 6.1_

  - [x] 7.2 Verify minimum vertical padding on all `.section` elements
    - Ensure all `.section` rules have `padding-top` and `padding-bottom` of at least 3rem (48px)
    - The current value is `4rem` which satisfies this — verify no overrides reduce it below 3rem
    - _Requirements: 6.2_

  - [ ]* 7.3 Write property test for consecutive sections alternating background
    - **Property 5: Consecutive sections alternate background treatment**
    - **Validates: Requirements 6.1**

  - [ ]* 7.4 Write property test for minimum section padding
    - **Property 6: Content sections have minimum vertical padding**
    - **Validates: Requirements 6.2**

- [x] 8. Checkpoint - Verify all pages have animations and consistent styling
  - Ensure all tests pass, ask the user if questions arise.

- [x] 9. Verify and fix consistent page structure across all pages
  - [x] 9.1 Audit header/footer consistency across all HTML pages
    - Verify every page has the same header nav links and footer structure
    - Verify MATHISS logo is present in both header and footer on every page
    - _Requirements: 7.4, 11.1, 11.2, 11.4_

  - [x] 9.2 Verify subpage hero structure
    - Ensure about.html, contact.html, gallery.html, portfolio.html, impact.html each have `.page-hero` with `.hero-chip`, `<h1>`, and `.lead`
    - _Requirements: 11.3_

  - [ ]* 9.3 Write property test for consistent header/footer with logo
    - **Property 7: Consistent header and footer with logo across all pages**
    - **Validates: Requirements 7.4, 11.1, 11.2**

  - [ ]* 9.4 Write property test for subpage hero structure
    - **Property 8: Subpages have page hero with required elements**
    - **Validates: Requirements 11.3**

  - [ ]* 9.5 Write property test for active navigation link matching current page
    - **Property 9: Active navigation link matches current page**
    - **Validates: Requirements 11.4**

- [x] 10. Verify accessibility and performance attributes
  - [x] 10.1 Audit lazy loading on below-fold images across all pages
    - Verify all `<img>` elements outside header/hero have `loading="lazy"`
    - Add missing `loading="lazy"` attributes where needed
    - _Requirements: 13.1_

  - [x] 10.2 Audit alt attributes on all images across all pages
    - Verify content images have descriptive non-empty `alt` text
    - Verify decorative images (inside `aria-hidden="true"` containers) have empty `alt=""`
    - _Requirements: 13.2_

  - [x] 10.3 Audit semantic HTML and ARIA attributes across all pages
    - Verify each page has exactly one `<header>`, one `<main>`, one `<footer>`, and at least one `<nav>` with `aria-label`
    - Verify all social media links and icon-only buttons have `aria-label` attributes
    - _Requirements: 13.3, 13.5_

  - [x] 10.4 Audit keyboard accessibility across all pages
    - Verify no interactive element (button, link, input) has a negative `tabindex`
    - _Requirements: 13.4_

  - [ ]* 10.5 Write property test for below-fold images using lazy loading
    - **Property 13: Below-fold images use lazy loading**
    - **Validates: Requirements 13.1**

  - [ ]* 10.6 Write property test for appropriate alt attributes
    - **Property 14: All images have appropriate alt attributes**
    - **Validates: Requirements 13.2**

  - [ ]* 10.7 Write property test for semantic HTML structure
    - **Property 15: Semantic HTML structure on all pages**
    - **Validates: Requirements 13.3, 13.5**

  - [ ]* 10.8 Write property test for keyboard accessibility
    - **Property 16: All interactive elements are keyboard accessible**
    - **Validates: Requirements 13.4**

- [x] 11. Verify alternating layout correctness
  - [x] 11.1 Audit Delivery Flow and Featured Services alternating image positions
    - Verify `.suite-item` rows alternate between `.suite-image-left` and `.suite-image-right`
    - Verify `.featured-item` rows alternate between `.featured-image-left` and `.featured-image-right`
    - Fix any incorrect ordering
    - _Requirements: 2.1, 2.2, 2.3, 2.4_

  - [ ]* 11.2 Write property test for alternating layout sections
    - **Property 1: Alternating layout sections alternate image position**
    - **Validates: Requirements 2.2, 2.4**

- [x] 12. Verify existing functionality is preserved
  - [x] 12.1 Verify contact form validation still works
    - Ensure no changes broke form field validation, submission, success modal, or error display
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6_

  - [x] 12.2 Verify gallery filtering still works
    - Ensure filter buttons still show/hide items correctly with transitions
    - _Requirements: 10.1, 10.2, 10.3, 10.5_

  - [x] 12.3 Verify service detail page carousel still works
    - Ensure carousel arrow navigation and auto-scroll still function
    - _Requirements: 12.3, 12.4_

  - [ ]* 12.4 Write property test for contact form validation rejecting empty required fields
    - **Property 10: Contact form validation rejects empty required fields**
    - **Validates: Requirements 9.1, 9.2**

  - [ ]* 12.5 Write property test for gallery filter showing only matching items
    - **Property 11: Gallery filter shows only matching items**
    - **Validates: Requirements 10.2**

  - [ ]* 12.6 Write property test for service detail page structural elements
    - **Property 12: Service detail pages contain required structural elements**
    - **Validates: Requirements 12.2, 12.3**

- [x] 13. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties using fast-check
- Existing functionality (contact form, gallery, carousel, nav) needs verification but not reimplementation
- All changes are to existing files only — no new files except test files
