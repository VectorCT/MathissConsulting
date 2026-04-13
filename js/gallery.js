// Gallery Data - sourced from WEBSITE 2026 subfolders
const galleryImages = [
  // Architecture 2026
  { id: 1, title: "Architectural Blueprints", category: "architecture", image: "assets/WEBSITE%202026/Architecture%202026/architectural-blueprints.jpg", description: "Detailed architectural blueprint drawings" },
  { id: 2, title: "Construction Plans & Tools", category: "architecture", image: "assets/WEBSITE%202026/Architecture%202026/construction-plans-with-helmet-drawing-tools-blueprints.jpg", description: "Construction plans with helmet and drawing tools" },
  { id: 3, title: "Architectural Concept", category: "architecture", image: "assets/WEBSITE%202026/Architecture%202026/istockphoto-1223049686-612x612.jpg", description: "Modern architectural concept design" },
  { id: 4, title: "Architecture Detail", category: "architecture", image: "assets/WEBSITE%202026/Architecture%202026/istockphoto-165966770-612x612.jpg", description: "Architectural detail and precision" },

  // Constructions 2026
  { id: 10, title: "Construction Site 1", category: "construction", image: "assets/WEBSITE%202026/Constructions%202026/247060838_7049211245104888_1886973455211366417_n.jpg", description: "Active construction site progress" },
  { id: 11, title: "Construction Site 2", category: "construction", image: "assets/WEBSITE%202026/Constructions%202026/249218233_7083379118354767_5766423619149931791_n.jpg", description: "On-site construction delivery" },
  { id: 12, title: "Construction Progress", category: "construction", image: "assets/WEBSITE%202026/Constructions%202026/249944359_7083632191662793_7821843049887988727_n.jpg", description: "Construction milestone achieved" },
  { id: 13, title: "Building Development", category: "construction", image: "assets/WEBSITE%202026/Constructions%202026/269690926_7421761961183146_6197800940118688680_n.jpg", description: "Building development phase" },
  { id: 14, title: "Infrastructure Works", category: "construction", image: "assets/WEBSITE%202026/Constructions%202026/269715343_7421761494516526_4870815217407215930_n.jpg", description: "Infrastructure development works" },
  { id: 15, title: "Site Coordination", category: "construction", image: "assets/WEBSITE%202026/Constructions%202026/269717874_7421761777849831_4075853275199868819_n.jpg", description: "Professional site coordination" },
  { id: 16, title: "Construction Quality", category: "construction", image: "assets/WEBSITE%202026/Constructions%202026/269755600_7421761447849864_8107637391633535660_n.jpg", description: "Quality construction delivery" },
  { id: 17, title: "Project Inspection", category: "construction", image: "assets/WEBSITE%202026/Constructions%202026/294153920_8509064252452906_7892530816465689936_n.jpg", description: "Construction project inspection" },
  { id: 18, title: "Completed Build", category: "construction", image: "assets/WEBSITE%202026/Constructions%202026/298365807_8615756228450374_6591803136998101464_n.jpg", description: "Completed construction project" },

  // 004 CONSTRUCTIONS IMAGES (additional construction photos)
  { id: 20, title: "Foundation Works", category: "construction", image: "assets/WEBSITE%202026/004%20CONSTRUCTIONS%20IMAGES/135204996_5566655560027138_6318977798212101370_n.jpg", description: "Foundation construction phase" },
  { id: 21, title: "Structural Framework", category: "construction", image: "assets/WEBSITE%202026/004%20CONSTRUCTIONS%20IMAGES/135294352_5566655320027162_2148285365875403465_n.jpg", description: "Structural framework erection" },
  { id: 22, title: "Wall Construction", category: "construction", image: "assets/WEBSITE%202026/004%20CONSTRUCTIONS%20IMAGES/135591193_5566654790027215_6263564154083821979_n.jpg", description: "Wall construction in progress" },
  { id: 23, title: "Brickwork Phase", category: "construction", image: "assets/WEBSITE%202026/004%20CONSTRUCTIONS%20IMAGES/135593144_5566655476693813_818358487704040759_n.jpg", description: "Professional brickwork execution" },
  { id: 24, title: "Roofing Stage", category: "construction", image: "assets/WEBSITE%202026/004%20CONSTRUCTIONS%20IMAGES/135767229_5566655456693815_1436901743766584803_n.jpg", description: "Roofing installation stage" },
  { id: 25, title: "Site Overview", category: "construction", image: "assets/WEBSITE%202026/004%20CONSTRUCTIONS%20IMAGES/135793666_5566624063363621_1727740903526391656_n.jpg", description: "Full construction site overview" },
  { id: 26, title: "Superstructure", category: "construction", image: "assets/WEBSITE%202026/004%20CONSTRUCTIONS%20IMAGES/173153658_6062352243790798_3696766980918182456_n.jpg", description: "Superstructure construction" },
  { id: 27, title: "Finishing Works", category: "construction", image: "assets/WEBSITE%202026/004%20CONSTRUCTIONS%20IMAGES/177129735_6102300089796013_925532728709000478_n.jpg", description: "Finishing works and detailing" },
  { id: 28, title: "Project Handover", category: "construction", image: "assets/WEBSITE%202026/004%20CONSTRUCTIONS%20IMAGES/248054493_7083631718329507_1879735154391948521_n.jpg", description: "Project nearing handover" },
  { id: 29, title: "Quality Assurance", category: "construction", image: "assets/WEBSITE%202026/004%20CONSTRUCTIONS%20IMAGES/250006637_7083631924996153_2720894788297365323_n.jpg", description: "Quality assurance inspection" },
  { id: 30, title: "Residential Build", category: "construction", image: "assets/WEBSITE%202026/004%20CONSTRUCTIONS%20IMAGES/273052076_7704094752949864_5161343470017538149_n.jpg", description: "Residential construction project" },
  { id: 31, title: "Commercial Build", category: "construction", image: "assets/WEBSITE%202026/004%20CONSTRUCTIONS%20IMAGES/292022893_8472482916111040_295796484925670992_n.jpg", description: "Commercial building construction" },
  { id: 32, title: "Site Progress", category: "construction", image: "assets/WEBSITE%202026/004%20CONSTRUCTIONS%20IMAGES/294008237_8509003959125602_4294747349535660605_n.jpg", description: "Construction site progress" },

  // Engineering 2026
  { id: 40, title: "Construction Silhouettes", category: "engineering", image: "assets/WEBSITE%202026/Engineering%202026/construction-site-silhouettes.jpg", description: "Engineering site at work" },
  { id: 41, title: "Excavator in Action", category: "engineering", image: "assets/WEBSITE%202026/Engineering%202026/excavator-action.jpg", description: "Civil engineering earthworks" },

  // Town Planning
  { id: 50, title: "Urban Planning Concept", category: "town-planning", image: "assets/WEBSITE%202026/Town%20Planning/istockphoto-1299224036-612x612.jpg", description: "Urban planning and zoning concept" },
  { id: 51, title: "Township Layout", category: "town-planning", image: "assets/WEBSITE%202026/Town%20Planning/istockphoto-528632239-612x612.jpg", description: "Township layout and master planning" },
  { id: 52, title: "Watercolour City Plan", category: "town-planning", image: "assets/WEBSITE%202026/Town%20Planning/watercolor-city-illustrated.jpg", description: "Illustrated city planning concept" },

  // Land Surveying 2026
  { id: 60, title: "Landscape Survey", category: "land-surveying", image: "assets/WEBSITE%202026/Land%20Surveying%202026/beautiful-landscape-with-small-village.jpg", description: "Land surveying across open terrain" },
  { id: 61, title: "Survey Equipment", category: "land-surveying", image: "assets/WEBSITE%202026/Land%20Surveying%202026/istockphoto-1302130054-612x612.jpg", description: "Professional surveying equipment in use" },
  { id: 62, title: "Topographic Survey", category: "land-surveying", image: "assets/WEBSITE%202026/Land%20Surveying%202026/magnificient-nature-view-with-camera.jpg", description: "Topographic survey and mapping" },

  // Quantity Surveying 2026
  { id: 70, title: "Cost Estimation", category: "quantity-surveying", image: "assets/WEBSITE%202026/Quantity%20Surveying%202026/close-up-house-blueprints.jpg", description: "Quantity surveying and cost estimation" },
  { id: 71, title: "Bill of Quantities", category: "quantity-surveying", image: "assets/WEBSITE%202026/Quantity%20Surveying%202026/istockphoto-1070119208-612x612.jpg", description: "BoQ preparation and budgeting" },

  // Gallery 2026 (Renders & Visualisations)
  { id: 80, title: "AI Visualisation", category: "renders", image: "assets/WEBSITE%202026/Gallery%202026/AI.jpg", description: "AI-assisted design visualisation" },
  { id: 81, title: "Upscaled Render", category: "renders", image: "assets/WEBSITE%202026/Gallery%202026/Image_upscale01.png", description: "High-resolution architectural render" },
  { id: 82, title: "Design Render 1", category: "renders", image: "assets/WEBSITE%202026/Gallery%202026/Image2_000.png", description: "Architectural design rendering" },
  { id: 83, title: "Surveying Visual", category: "renders", image: "assets/WEBSITE%202026/Gallery%202026/Image6.png", description: "Surveying and mapping visual" },
  { id: 84, title: "Community Project", category: "renders", image: "assets/WEBSITE%202026/Gallery%202026/Luvhimbi%202025.png", description: "Community development project render" },
  { id: 85, title: "Presentation Visual", category: "renders", image: "assets/WEBSITE%202026/Gallery%202026/Presentation1.png", description: "Project presentation visual" },
  { id: 86, title: "Interior Render", category: "renders", image: "assets/WEBSITE%202026/Gallery%202026/Scene%2014(1).png", description: "Interior design rendering" },
  { id: 87, title: "Exterior Render", category: "renders", image: "assets/WEBSITE%202026/Gallery%202026/Scene%2017.png", description: "Exterior architectural render" },
  { id: 88, title: "Commercial Render", category: "renders", image: "assets/WEBSITE%202026/Gallery%202026/Scene%203.png", description: "Commercial building render" },
  { id: 89, title: "Land Survey Visual", category: "renders", image: "assets/WEBSITE%202026/Gallery%202026/SSSSSSSS%20(2).png", description: "Land surveying visualisation" }
];


// Initialize gallery on DOM load
document.addEventListener("DOMContentLoaded", function() {
  renderGallery("all");
  setupFilterButtons();
  setupGalleryModal();
});

let activeFilter = "all";
let activeGalleryItems = galleryImages.slice();
let activeModalIndex = 0;

const galleryModal = {
  root: null, frame: null, title: null, description: null, prev: null, next: null
};

function renderGallery(filter) {
  const galleryGrid = document.getElementById("galleryGrid");
  galleryGrid.innerHTML = "";
  const filteredImages = filter === "all" ? galleryImages : galleryImages.filter(img => img.category === filter);
  activeFilter = filter;
  activeGalleryItems = filteredImages;

  filteredImages.forEach((image, index) => {
    const galleryItem = document.createElement("div");
    galleryItem.className = "gallery-item";
    galleryItem.setAttribute("role", "button");
    galleryItem.setAttribute("tabindex", "0");
    galleryItem.setAttribute("aria-label", "Open " + image.title);
    galleryItem.dataset.imageId = String(image.id);
    galleryItem.style.transitionDelay = (index * 0.04) + "s";
    galleryItem.innerHTML = '<div class="gallery-item-img-wrapper"><img src="' + image.image + '" alt="' + image.title + '" loading="lazy"><div class="gallery-overlay"><div class="gallery-content"><h3>' + image.title + '</h3><p>' + image.description + '</p></div></div></div>';
    galleryGrid.appendChild(galleryItem);
    requestAnimationFrame(() => { galleryItem.classList.add("is-visible"); });
    galleryItem.addEventListener("click", function() { openGalleryModalById(image.id); });
    galleryItem.addEventListener("keydown", function(event) {
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openGalleryModalById(image.id); }
    });
  });
}

function transitionGallery(filter) {
  const galleryGrid = document.getElementById("galleryGrid");
  galleryGrid.classList.add("is-transitioning");
  setTimeout(() => { renderGallery(filter); galleryGrid.classList.remove("is-transitioning"); }, 180);
}

function setupFilterButtons() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach(button => {
    button.addEventListener("click", function() {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      this.classList.add("active");
      transitionGallery(this.getAttribute("data-filter"));
      const galleryGrid = document.getElementById("galleryGrid");
      if (galleryGrid) { galleryGrid.scrollIntoView({ behavior: "smooth", block: "start" }); }
    });
  });
}

function setupGalleryModal() {
  galleryModal.root = document.getElementById("gallery-modal");
  galleryModal.frame = document.getElementById("gallery-modal-frame");
  galleryModal.title = document.getElementById("gallery-modal-title");
  galleryModal.description = document.getElementById("gallery-modal-description");
  galleryModal.prev = document.getElementById("gallery-prev");
  galleryModal.next = document.getElementById("gallery-next");
  if (!galleryModal.root || !galleryModal.frame) return;

  galleryModal.root.querySelectorAll("[data-gallery-modal-close]").forEach(function(el) { el.addEventListener("click", closeGalleryModal); });
  if (galleryModal.prev) galleryModal.prev.addEventListener("click", function() { navigateGalleryModal(-1); });
  if (galleryModal.next) galleryModal.next.addEventListener("click", function() { navigateGalleryModal(1); });

  document.addEventListener("keydown", function(event) {
    if (!galleryModal.root || galleryModal.root.hidden) return;
    if (event.key === "Escape") { closeGalleryModal(); return; }
    if (event.key === "ArrowLeft") { navigateGalleryModal(-1); return; }
    if (event.key === "ArrowRight") { navigateGalleryModal(1); }
  });
}

function openGalleryModalById(imageId) {
  if (!galleryModal.root || !activeGalleryItems.length) return;
  var idx = activeGalleryItems.findIndex(function(item) { return item.id === imageId; });
  if (idx === -1) return;
  activeModalIndex = idx;
  syncModalContent();
  galleryModal.root.hidden = false;
  galleryModal.root.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeGalleryModal() {
  if (!galleryModal.root || galleryModal.root.hidden) return;
  galleryModal.root.hidden = true;
  galleryModal.root.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  galleryModal.frame.removeAttribute("src");
  galleryModal.frame.removeAttribute("srcdoc");
}

function navigateGalleryModal(direction) {
  if (!activeGalleryItems.length) return;
  activeModalIndex = (activeModalIndex + direction + activeGalleryItems.length) % activeGalleryItems.length;
  syncModalContent();
}

function syncModalContent() {
  var item = activeGalleryItems[activeModalIndex];
  if (!item) return;
  galleryModal.title.textContent = item.title;
  galleryModal.description.textContent = item.description;
  var safeSrc = encodeURI(item.image);
  var safeAlt = item.title.replace(/"/g, "&quot;");
  galleryModal.frame.srcdoc = '<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><style>html,body{margin:0;width:100%;height:100%;overflow:hidden;background:#0b1f46}img{width:100%;height:100%;object-fit:cover;object-position:center;display:block}</style></head><body><img src="' + safeSrc + '" alt="' + safeAlt + '"></body></html>';
}
