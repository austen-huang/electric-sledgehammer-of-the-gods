const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

// Toggle mobile navigation
menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// Lightbox logic
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.querySelector('.close-btn');
const galleryImages = document.querySelectorAll('.gallery .photo img');

// Open lightbox on image click
galleryImages.forEach((img) => {
  img.addEventListener('click', () => {
    lightbox.classList.add('active');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  });
});

// Close lightbox on button click
closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

// Close lightbox when clicking dark background
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove('active');
  }
});