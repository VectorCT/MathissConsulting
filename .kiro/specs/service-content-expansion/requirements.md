# Requirements Document

## Introduction

MATHISS Consulting is a South African multidisciplinary consulting firm operating in the built environment. The firm's website has 7 service detail pages, each currently containing a 3-image carousel and a brief summary paragraph with a 6-item checklist. This feature expands each service page by adding more relevant imagery (sourced from Unsplash) to the carousels and enriching the written content with detailed descriptions covering value propositions, processes, and outcomes.

## Glossary

- **Service_Page**: An individual HTML page dedicated to one of the 7 MATHISS Consulting service disciplines (Township & Urban Planning, Architecture, Civil & Structural Engineering, Construction Management, Quantity Surveying, Land Surveying, Related Services)
- **Carousel**: The image slideshow component on each Service_Page, driven by `data-carousel` attributes and controlled by arrow buttons and JavaScript in `main.js`
- **Service_Detail_Panel**: The `<article>` element on each Service_Page containing the service summary text, checklist, and call-to-action buttons
- **Unsplash_Image**: A royalty-free photograph sourced from Unsplash (https://unsplash.com), referenced via direct Unsplash URLs using the `https://images.unsplash.com/` CDN format
- **Expanded_Content**: The enriched text content for each service, including an overview paragraph, a value proposition section, a process/approach description, and an outcomes summary, in addition to the existing checklist

## Requirements

### Requirement 1: Expand Carousel Image Count

**User Story:** As a website visitor, I want to see more relevant images on each service page, so that I get a richer visual understanding of the service discipline.

#### Acceptance Criteria

1. WHEN a visitor loads a Service_Page, THE Carousel SHALL display a minimum of 5 and a maximum of 6 images for that service discipline.
2. THE Carousel SHALL include the existing local images already present on each Service_Page as the first images in the sequence.
3. WHEN new Unsplash_Images are added to a Carousel, THE Service_Page SHALL reference Unsplash_Images using the `https://images.unsplash.com/` CDN URL format with appropriate size parameters.
4. THE Carousel SHALL include descriptive `alt` text on every `<img>` element that accurately describes the image content relevant to the service discipline.
5. THE Carousel SHALL apply `loading="lazy"` to all images except the first visible image in the sequence.

### Requirement 2: Source Relevant Unsplash Images Per Service

**User Story:** As a website visitor, I want the additional images to be visually relevant to each specific service, so that the imagery reinforces the service's professional identity.

#### Acceptance Criteria

1. THE Township_Planning Service_Page Carousel SHALL include Unsplash_Images depicting urban planning, aerial city views, or township development scenes.
2. THE Architecture Service_Page Carousel SHALL include Unsplash_Images depicting architectural design, building facades, or interior spaces.
3. THE Engineering Service_Page Carousel SHALL include Unsplash_Images depicting structural engineering, civil infrastructure, or construction machinery.
4. THE Construction Service_Page Carousel SHALL include Unsplash_Images depicting active construction sites, building progress, or construction teams.
5. THE Quantity_Surveying Service_Page Carousel SHALL include Unsplash_Images depicting cost estimation, blueprints with measurements, or financial planning in construction contexts.
6. THE Land_Surveying Service_Page Carousel SHALL include Unsplash_Images depicting land surveying equipment, topographic fieldwork, or aerial terrain mapping.
7. THE Related_Services Service_Page Carousel SHALL include Unsplash_Images depicting project management, consulting meetings, or governance and advisory contexts.

### Requirement 3: Expand Service Description Content

**User Story:** As a website visitor, I want to read detailed descriptions of each service, so that I can understand the full scope, value, and process before making an enquiry.

#### Acceptance Criteria

1. WHEN a visitor views a Service_Detail_Panel, THE Service_Page SHALL display an expanded overview paragraph (minimum 3 sentences) describing the service discipline and its relevance to the South African built environment.
2. THE Service_Detail_Panel SHALL include a "Why This Matters" or value proposition section (minimum 2 sentences) explaining the benefit of the service to clients.
3. THE Service_Detail_Panel SHALL include an "Our Approach" or process section (minimum 2 sentences) describing how MATHISS Consulting delivers the service.
4. THE Service_Detail_Panel SHALL retain the existing "What's Included" checklist with all current items preserved.
5. THE Service_Detail_Panel SHALL present the expanded content sections in a consistent order across all 7 Service_Pages: overview, value proposition, approach, checklist, and call-to-action buttons.

### Requirement 4: Maintain Existing Page Structure and Styling

**User Story:** As a developer, I want the expanded content to integrate seamlessly with the existing site design, so that no visual regressions or layout breaks occur.

#### Acceptance Criteria

1. THE Service_Page SHALL preserve the existing HTML structure including the `page-hero` section, `service-showcase` container, `service-detail-panel` article, and `service-media-shell` aside.
2. THE Service_Page SHALL use CSS classes consistent with the existing `css/styles.css` stylesheet for all new content elements.
3. THE Carousel SHALL continue to function with the existing `data-carousel` attribute pattern and `main.js` carousel logic after images are added.
4. IF a new Unsplash_Image fails to load, THEN THE Carousel SHALL continue to display the remaining images without breaking the slideshow functionality.
5. THE Service_Page SHALL maintain responsive layout behaviour on mobile, tablet, and desktop viewports after content expansion.

### Requirement 5: Apply Content Expansion Consistently Across All Service Pages

**User Story:** As a website visitor, I want a consistent experience across all service pages, so that navigating between services feels cohesive and professional.

#### Acceptance Criteria

1. THE expanded content structure SHALL follow the same section order and heading hierarchy on all 7 Service_Pages.
2. THE Carousel image count SHALL be within the range of 5 to 6 images on every Service_Page.
3. WHEN a visitor navigates between Service_Pages, THE content layout and visual density SHALL appear consistent in structure and proportion.

### Requirement 6: Ensure Accessibility of New Content and Images

**User Story:** As a visitor using assistive technology, I want all new images and content to be accessible, so that I can understand the service offerings regardless of how I browse.

#### Acceptance Criteria

1. THE Service_Page SHALL include descriptive `alt` attributes on all new Unsplash_Image elements that convey the image subject matter.
2. THE Service_Detail_Panel SHALL use semantic HTML heading elements (`h2`, `h3`) for new content section titles, maintaining a logical heading hierarchy.
3. THE Carousel arrow buttons SHALL retain their existing `aria-label` attributes after the image count changes.
