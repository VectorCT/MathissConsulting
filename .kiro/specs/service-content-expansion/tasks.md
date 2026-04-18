# Implementation Plan: Service Content Expansion

## Overview

Expand all 7 MATHISS Consulting service pages with enriched text content (overview, "Why This Matters", "Our Approach" sections) and additional Unsplash carousel images (2–3 per page, reaching 5–6 total). Each page follows the same modification pattern: expand the `service-detail-panel` article with new text sections, then append Unsplash `img.media-tile` elements to the `service-media-grid` carousel container. No JS or CSS changes are needed.

## Tasks

- [x] 1. Expand service-township-planning.html
  - [x] 1.1 Add expanded text content to the service-detail-panel
    - Replace the existing summary `<p>` with an expanded overview paragraph (min 3 sentences) about township and urban planning in the South African built environment
    - Add `<h3>Why This Matters</h3>` section with value proposition paragraph (min 2 sentences)
    - Add `<h3>Our Approach</h3>` section with process paragraph (min 2 sentences)
    - Preserve the existing "What's Included:" heading, 6-item checklist, and CTA buttons
    - Content order: h2 → overview p → "Why This Matters" h3 + p → "Our Approach" h3 + p → "What's Included:" h3 + ul → CTA buttons
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 5.1_
  - [x] 1.2 Add 3 Unsplash images to the carousel
    - Append 3 new `<img class="media-tile">` elements after the existing 3 images inside `div[data-carousel="township-planning"]`
    - Use `https://images.unsplash.com/photo-{id}?w=800&q=80` URL format
    - Images must depict urban planning, aerial city views, or township development scenes
    - Each image must have a descriptive `alt` attribute and `loading="lazy"`
    - Total carousel count: 6 images
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 6.1_

- [x] 2. Expand service-architecture.html
  - [x] 2.1 Add expanded text content to the service-detail-panel
    - Replace the existing summary `<p>` with an expanded overview paragraph (min 3 sentences) about architectural design services
    - Add "Why This Matters" and "Our Approach" sections following the same structure as task 1.1
    - Preserve existing checklist and CTA buttons
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 5.1_
  - [x] 2.2 Add 3 Unsplash images to the carousel
    - Append 3 new `<img class="media-tile">` elements after existing images inside `div[data-carousel="architecture"]`
    - Images must depict building facades, interior design, or modern architecture
    - Use Unsplash CDN format with `?w=800&q=80`, descriptive `alt` text, and `loading="lazy"`
    - Total carousel count: 6 images
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 2.2, 6.1_

- [x] 3. Expand service-engineering.html
  - [x] 3.1 Add expanded text content to the service-detail-panel
    - Replace the existing summary `<p>` with an expanded overview paragraph (min 3 sentences) about civil and structural engineering
    - Add "Why This Matters" and "Our Approach" sections following the same structure as task 1.1
    - Preserve existing checklist and CTA buttons
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 5.1_
  - [x] 3.2 Add 2 Unsplash images to the carousel
    - Append 2 new `<img class="media-tile">` elements after existing images inside `div[data-carousel="engineering"]`
    - Images must depict bridge/infrastructure or structural steel engineering
    - Use Unsplash CDN format with `?w=800&q=80`, descriptive `alt` text, and `loading="lazy"`
    - Total carousel count: 5 images
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 2.3, 6.1_

- [x] 4. Checkpoint — Verify first 3 pages
  - Ensure all 3 completed pages have correct content structure (overview → Why This Matters → Our Approach → checklist → CTA)
  - Verify carousel image counts (6, 6, 5) and that existing images are preserved as first items
  - Confirm all new images have descriptive `alt` text and `loading="lazy"`
  - Ensure all tests pass, ask the user if questions arise.

- [x] 5. Expand service-construction.html
  - [x] 5.1 Add expanded text content to the service-detail-panel
    - Replace the existing summary `<p>` with an expanded overview paragraph (min 3 sentences) about construction management
    - Add "Why This Matters" and "Our Approach" sections following the same structure as task 1.1
    - Preserve existing checklist and CTA buttons
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 5.1_
  - [x] 5.2 Add 3 Unsplash images to the carousel
    - Append 3 new `<img class="media-tile">` elements after existing images inside `div[data-carousel="construction"]`
    - Images must depict active construction sites, scaffolding, or building progress
    - Use Unsplash CDN format with `?w=800&q=80`, descriptive `alt` text, and `loading="lazy"`
    - Total carousel count: 6 images
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 2.4, 6.1_

- [x] 6. Expand service-quantity-surveying.html
  - [x] 6.1 Add expanded text content to the service-detail-panel
    - Replace the existing summary `<p>` with an expanded overview paragraph (min 3 sentences) about quantity surveying
    - Add "Why This Matters" and "Our Approach" sections following the same structure as task 1.1
    - Preserve existing checklist and CTA buttons
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 5.1_
  - [x] 6.2 Add 2 Unsplash images to the carousel
    - Append 2 new `<img class="media-tile">` elements after existing images inside `div[data-carousel="quantity-surveying"]`
    - Images must depict cost estimation, blueprints with measurements, or financial planning in construction
    - Use Unsplash CDN format with `?w=800&q=80`, descriptive `alt` text, and `loading="lazy"`
    - Total carousel count: 5 images
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 2.5, 6.1_

- [x] 7. Expand service-land-surveying.html
  - [x] 7.1 Add expanded text content to the service-detail-panel
    - Replace the existing summary `<p>` with an expanded overview paragraph (min 3 sentences) about land surveying
    - Add "Why This Matters" and "Our Approach" sections following the same structure as task 1.1
    - Preserve existing checklist and CTA buttons
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 5.1_
  - [x] 7.2 Add 3 Unsplash images to the carousel
    - Append 3 new `<img class="media-tile">` elements after existing images inside `div[data-carousel="land-surveying"]`
    - Images must depict surveying equipment, topographic fieldwork, or aerial terrain mapping
    - Use Unsplash CDN format with `?w=800&q=80`, descriptive `alt` text, and `loading="lazy"`
    - Total carousel count: 6 images
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 2.6, 6.1_

- [x] 8. Expand service-related-services.html
  - [x] 8.1 Add expanded text content to the service-detail-panel
    - Replace the existing summary `<p>` with an expanded overview paragraph (min 3 sentences) about related/advisory services
    - Add "Why This Matters" and "Our Approach" sections following the same structure as task 1.1
    - Preserve existing checklist and CTA buttons
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 5.1_
  - [x] 8.2 Add 2 Unsplash images to the carousel
    - Append 2 new `<img class="media-tile">` elements after existing images inside `div[data-carousel="related-services"]`
    - Images must depict consulting meetings, project governance, or advisory contexts
    - Use Unsplash CDN format with `?w=800&q=80`, descriptive `alt` text, and `loading="lazy"`
    - Total carousel count: 5 images
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 2.7, 6.1_

- [x] 9. Final checkpoint — Cross-page consistency and accessibility review
  - Verify all 7 pages follow identical content order: h2 → overview → "Why This Matters" → "Our Approach" → "What's Included:" → CTA buttons
  - Confirm carousel counts are within 5–6 range on every page (township: 6, architecture: 6, engineering: 5, construction: 6, quantity surveying: 5, land surveying: 6, related services: 5)
  - Verify all new `<img>` elements have non-empty descriptive `alt` attributes
  - Verify new `<h3>` headings maintain logical h2 → h3 hierarchy
  - Confirm existing `page-hero`, `service-showcase`, `service-media-shell` structure is preserved on all pages
  - Confirm carousel arrow `aria-label` attributes are unchanged
  - Ensure all tests pass, ask the user if questions arise.
  - _Requirements: 4.1, 4.2, 4.3, 5.1, 5.2, 5.3, 6.1, 6.2, 6.3_

## Notes

- No JS or CSS files are modified — `main.js` carousel auto-detects image count via `tiles.length`
- Existing local images are kept as the first items in each carousel; new Unsplash images are appended after them
- All Unsplash images use `https://images.unsplash.com/photo-{id}?w=800&q=80` format
- Property-based testing is not applicable — this feature is purely static HTML content changes
