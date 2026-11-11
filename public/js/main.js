
// Project Image Lightbox
const projectImages = document.querySelectorAll("[data-lightbox]");
const lightbox = document.getElementById("projectLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

projectImages.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    lightboxImage.src = link.href;
    lightboxImage.alt = link.querySelector("img").alt;

    lightbox.classList.add("active");
    lightbox.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
    lightboxClose.focus();
  });
});

function closeLightbox() {
  lightbox.classList.remove("active");
  lightbox.setAttribute("aria-hidden", "true");

  lightboxImage.src = "";
  document.body.style.overflow = "";
}

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("active")) {
    closeLightbox();
  }
});
