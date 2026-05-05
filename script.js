document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // stops page refresh
            alert("Thank you! Your message has been sent. Please allow 24-48 hours for a response.");
        });
    }

    const images = document.querySelectorAll(".product-img");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const closeBtn = document.querySelector(".close");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentImages = [];
let currentIndex = 0;

// open modal
images.forEach(img => {
    img.addEventListener("click", function() {
        modal.style.display = "block";

        currentImages = this.dataset.images.split(",");
        currentIndex = 0;

        modalImg.src = currentImages[currentIndex];
        modalTitle.textContent = this.dataset.title;
    });
});

// next image
nextBtn.onclick = function() {
    currentIndex = (currentIndex + 1) % currentImages.length;
    modalImg.src = currentImages[currentIndex];
};

// previous image
prevBtn.onclick = function() {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    modalImg.src = currentImages[currentIndex];
};

// close modal
closeBtn.onclick = function() {
    modal.style.display = "none";
};
