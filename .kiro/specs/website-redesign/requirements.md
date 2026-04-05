# Requirements Document

## Introduction

Redesign the MATHISS Consulting website to follow the clean, modern SaaS-style design patterns of methvin.org while preserving the existing MATHISS navy/red brand identity, all existing content, and all page functionality. The redesign introduces scroll-triggered animations, hover transitions, and smooth visual effects throughout the site to create a polished, professional user experience.

## Glossary

- **Website**: The MATHISS Consulting static HTML/CSS/JS website consisting of index.html, about.html, contact.html, gallery.html, portfolio.html, impact.html, and service detail pages
- **Homepage**: The index.html page serving as the primary landing page for the Website
- **Header**: The sticky top navigation bar containing the brand logo, site navigation links, services dropdown, and mobile menu toggle
- **Hero_Section**: The full-width introductory banner at the top of each page containing a headline, description, and call-to-action buttons
- **Delivery_Flow_Section**: The Homepage section displaying the three-step process (Plan & Approve, Design & Engineer, Build & Handover) using alternating image/text layouts
- **Persona_Section**: The Homepage section displaying role-based cards (Executives, Project Managers, Engineers & Architects, Quantity Surveyors)
- **Featured_Services_Section**: The Homepage section showcasing the six core services with alternating left-right image/text layouts
- **Affiliates_Section**: The Homepage section displaying professional body logos (NHBRC, SACAP, SACPLAN, ECSA, CIDB)
- **Tools_Section**: The Homepage section displaying software tools used by the firm
- **Modules_Section**: The Homepage section with clickable service module cards linking to detail pages
- **CTA_Band**: A full-width call-to-action strip with a headline, description, and action button
- **Footer**: The site-wide footer containing brand info, service links, company links, contact details, and social media icons
- **Contact_Form**: The validated inquiry form on contact.html with fields for name, email, phone, company, service, budget, timeline, and message
- **Gallery_Page**: The gallery.html page with filterable photo grid and hover overlays
- **Animation_System**: The JavaScript and CSS system responsible for scroll-triggered entrance animations, hover transitions, and smooth visual effects
- **Brand_Theme**: The MATHISS color palette defined as CSS custom properties: navy deep (#072456), navy mid (#133b73), red (#c81d38), red light (#e1455c)
- **Intersection_Observer**: The browser API used to detect when elements enter the viewport for triggering scroll-based animations

## Requirements

### Requirement 1: Homepage Hero Section Redesign

**User Story:** As a visitor, I want to see a bold, clean hero section when I land on the Homepage, so that I immediately understand what MATHISS Consulting offers.

#### Acceptance Criteria

1. THE Hero_Section SHALL display a bold headline, a concise company description, and at least two call-to-action buttons on the Homepage
2. THE Hero_Section SHALL use a two-column grid layout with text content on the left and a summary panel on the right on viewports wider than 980px
3. WHEN the viewport width is 980px or narrower, THE Hero_Section SHALL stack the two columns into a single-column layout
4. THE Hero_Section SHALL apply the Brand_Theme navy deep color as the primary overlay gradient on the background image
5. THE Hero_Section SHALL include a chip/badge element identifying the firm as "Integrated Multidisciplinary Consulting"
6. THE Hero_Section SHALL include a service badge list in the summary panel showing all six service disciplines

### Requirement 2: Alternating Image-Text Feature Sections

**User Story:** As a visitor, I want to see services and delivery steps presented in alternating left-right image/text layouts, so that I can scan content in a visually engaging pattern similar to methvin.org.

#### Acceptance Criteria

1. THE Delivery_Flow_Section SHALL display each step as a horizontal row with an image on one side and text content on the other side
2. THE Delivery_Flow_Section SHALL alternate the image position between left and right for consecutive steps
3. THE Featured_Services_Section SHALL display each service as a horizontal row with an image on one side and descriptive text on the other side
4. THE Featured_Services_Section SHALL alternate the image position between left and right for consecutive service entries
5. WHEN the viewport width is 980px or narrower, THE Delivery_Flow_Section SHALL stack image and text vertically for each step
6. WHEN the viewport width is 980px or narrower, THE Featured_Services_Section SHALL stack image and text vertically for each service entry

### Requirement 3: Persona/Role-Based Cards Section

**User Story:** As a visitor, I want to see who MATHISS Consulting serves through role-based cards, so that I can identify whether the firm supports my professional needs.

#### Acceptance Criteria

1. THE Persona_Section SHALL display persona cards in a responsive grid layout with a minimum of two columns on viewports wider than 980px
2. THE Persona_Section SHALL display each persona card with a title, and a description of the value provided to that role
3. WHEN the viewport width is 980px or narrower, THE Persona_Section SHALL display persona cards in a single-column layout
4. WHEN a user hovers over a persona card, THE Persona_Section SHALL apply a vertical lift transform and enhanced box shadow to the hovered card

### Requirement 4: Scroll-Triggered Entrance Animations

**User Story:** As a visitor, I want page content to animate into view as I scroll, so that the browsing experience feels dynamic and polished.

#### Acceptance Criteria

1. THE Animation_System SHALL use Intersection_Observer to detect when elements with animation classes enter the viewport
2. WHEN an element with the animation class enters the viewport, THE Animation_System SHALL apply a fade-in transition with a vertical slide from below
3. THE Animation_System SHALL support staggered animation delays so that elements within a group appear sequentially rather than simultaneously
4. THE Animation_System SHALL trigger each entrance animation only once per element per page load
5. THE Animation_System SHALL apply entrance animations to section headings, cards, feature rows, persona cards, and metric items on the Homepage
6. WHILE the user has the prefers-reduced-motion accessibility setting enabled, THE Animation_System SHALL disable all entrance animations and display elements in their final visible state immediately

### Requirement 5: Hover Transitions and Interactive Effects

**User Story:** As a visitor, I want interactive hover feedback on cards, buttons, and links, so that the interface feels responsive and modern.

#### Acceptance Criteria

1. WHEN a user hovers over a card element, THE Website SHALL apply a translateY lift of between 4px and 8px and an enhanced box-shadow within 300ms
2. WHEN a user hovers over a primary button, THE Website SHALL transition the background gradient to a darker shade within 200ms
3. WHEN a user hovers over a navigation link, THE Website SHALL transition the link color and background within 200ms
4. WHEN a user hovers over a gallery item on the Gallery_Page, THE Website SHALL scale the image to 1.1x and reveal the text overlay with a fade-in transition
5. WHEN a user hovers over a service card image, THE Website SHALL apply a subtle scale transform of 1.03x and a slight saturation increase
6. WHEN a user hovers over a social media button in the Footer, THE Website SHALL apply a vertical lift of 2px and a background opacity increase

### Requirement 6: Smooth Section Transitions

**User Story:** As a visitor, I want smooth visual transitions between page sections, so that the page feels cohesive rather than abruptly segmented.

#### Acceptance Criteria

1. THE Website SHALL alternate section background colors between white and the gray-100 value to create visual separation between consecutive sections
2. THE Website SHALL apply consistent vertical padding of at least 3rem to each content section
3. THE CTA_Band SHALL use a gradient background transitioning between navy-cta-start and navy-cta-end Brand_Theme colors
4. THE Footer SHALL use a gradient background transitioning between navy-footer-start and navy-footer-end Brand_Theme colors

### Requirement 7: Brand Theme Preservation

**User Story:** As the site owner, I want the redesigned site to maintain the MATHISS navy/red brand identity, so that the visual refresh does not compromise brand recognition.

#### Acceptance Criteria

1. THE Website SHALL define and use the following CSS custom properties for the Brand_Theme: --brand-navy-deep (#072456), --brand-navy-mid (#133b73), --brand-red (#c81d38), --brand-red-light (#e1455c)
2. THE Website SHALL use Montserrat as the primary heading font family and Lato as the primary body font family
3. THE Website SHALL use the Brand_Theme red color for primary action buttons and the Brand_Theme navy colors for headings, navigation active states, and footer backgrounds
4. THE Website SHALL display the MATHISS Consulting logo in the Header and Footer on every page

### Requirement 8: Responsive Navigation

**User Story:** As a mobile visitor, I want a functional mobile navigation menu, so that I can access all pages on smaller screens.

#### Acceptance Criteria

1. WHEN the viewport width is 900px or narrower, THE Header SHALL display a hamburger menu toggle button and hide the desktop navigation links
2. WHEN the user activates the mobile menu toggle, THE Header SHALL reveal the navigation links in a vertical dropdown layout
3. WHEN the user selects a navigation link in the mobile menu, THE Header SHALL close the mobile menu
4. THE Header SHALL remain sticky at the top of the viewport during scrolling on all viewport sizes
5. THE Header SHALL include a services dropdown submenu listing all seven service detail pages

### Requirement 9: Contact Form Functionality

**User Story:** As a potential client, I want to submit an inquiry through a validated contact form, so that I can request a consultation from MATHISS Consulting.

#### Acceptance Criteria

1. THE Contact_Form SHALL validate the following required fields before submission: first name, last name, email address, service interest, and project details message
2. WHEN a required field is left empty or contains invalid data, THE Contact_Form SHALL display a field-level error message adjacent to the invalid field
3. WHEN all required fields contain valid data and the user submits the form, THE Contact_Form SHALL send the data as a JSON POST request to the /api/contact endpoint
4. WHEN the server responds with a success status, THE Contact_Form SHALL reset all fields and display a success confirmation modal
5. IF the server responds with an error status, THEN THE Contact_Form SHALL display the error message in the form status area without clearing the form fields
6. WHEN a user focuses on a form input, THE Contact_Form SHALL apply a visible focus ring using the Brand_Theme red color with a 3px box-shadow

### Requirement 10: Gallery Page with Filtering and Animations

**User Story:** As a visitor, I want to browse project photos with category filters and smooth visual transitions, so that I can explore MATHISS Consulting's work in an engaging way.

#### Acceptance Criteria

1. THE Gallery_Page SHALL display a filter bar with category buttons including "All Projects", "Construction", "Services", and "Architecture"
2. WHEN a user selects a filter category, THE Gallery_Page SHALL display only gallery items matching the selected category with a fade transition
3. THE Gallery_Page SHALL display gallery items in a responsive grid with a minimum column width of 265px on desktop and 200px on mobile
4. WHEN a gallery item enters the viewport during scrolling, THE Gallery_Page SHALL animate the item into view with a fade-in and upward slide
5. WHEN a user hovers over a gallery item, THE Gallery_Page SHALL reveal an overlay containing the project title and description with a slide-up transition

### Requirement 11: Consistent Page Structure Across All Pages

**User Story:** As a visitor, I want a consistent layout structure across all pages, so that navigation and orientation feel predictable throughout the site.

#### Acceptance Criteria

1. THE Website SHALL render the same Header component with identical navigation links on every page
2. THE Website SHALL render the same Footer component with brand info, service links, company links, contact details, and social icons on every page
3. THE Website SHALL display a page hero banner with a chip label, headline, and description at the top of every subpage (about, contact, gallery, portfolio, impact)
4. THE Website SHALL highlight the active page link in the Header navigation using the Brand_Theme navy gradient background

### Requirement 12: Service Detail Pages

**User Story:** As a visitor, I want dedicated pages for each service discipline, so that I can learn about specific service offerings in detail.

#### Acceptance Criteria

1. THE Website SHALL provide a dedicated detail page for each of the seven services: Township Planning, Architecture, Civil & Structural Engineering, Construction Management, Quantity Surveying, Land Surveying, and Related Services
2. THE Website SHALL display each service detail page with a service icon, title, summary description, and a checklist of included deliverables
3. THE Website SHALL include an image carousel on each service detail page showing relevant project photography
4. WHEN a user clicks a carousel navigation arrow, THE Website SHALL advance the carousel to the next or previous image with a fade transition

### Requirement 13: Performance and Accessibility

**User Story:** As a visitor, I want the site to load efficiently and be accessible, so that I can use the site regardless of my device capabilities or assistive technology needs.

#### Acceptance Criteria

1. THE Website SHALL use the loading="lazy" attribute on all images below the initial viewport fold
2. THE Website SHALL provide descriptive alt text on all content images and empty alt attributes on decorative images
3. THE Website SHALL use semantic HTML elements (header, nav, main, section, article, footer, aside) for page structure
4. THE Website SHALL ensure all interactive elements (buttons, links, form inputs) are reachable and operable via keyboard navigation
5. THE Website SHALL use aria-label attributes on navigation landmarks, icon-only buttons, and social media links
6. WHILE the user has the prefers-reduced-motion accessibility setting enabled, THE Animation_System SHALL skip all transition and animation effects
