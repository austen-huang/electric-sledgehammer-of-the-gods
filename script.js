const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");
const year = document.getElementById("year");
const photos = document.querySelectorAll(".photo");

year.textContent = new Date().getFullYear();

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

photos.forEach((photo) => {
  photo.addEventListener("click", () => {
    alert("Replace this placeholder with a real band photo.");
  });
});