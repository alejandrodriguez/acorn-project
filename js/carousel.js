// Grab relevant HTML elements
const slidesContainer = document.querySelector(".carousel-slides-container");
const slides = [...document.querySelectorAll(".carousel-slide")];
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const dotsNav = document.querySelector(".dots-nav");
const dots = [...document.querySelectorAll(".dot-indicator")];

// Arrange slides next to each other
const slideWidth = slides[0].getBoundingClientRect().width;
slides.forEach((slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
});

// Handle Changing Slides
function changeSlide(targetSlide, userEvent = true) {
    if (userEvent) {
        clearInterval(autoPlay);
    }
    const currentSlide = document.querySelector(".current-slide");
    const currentDot = document.querySelector(".current-dot");
    const targetDot = dots[slides.findIndex(slide => slide === targetSlide)];
    const newPosition = targetSlide.style.left;
    slidesContainer.style.transform = `translateX(-${newPosition})`;
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
    currentDot.classList.remove("current-dot");
    targetDot.classList.add("current-dot");
}

// Set up autoplay // TODO lookup standard name for autoplay
const autoPlay = setInterval(() => {
    const currentSlide = document.querySelector(".current-slide");
    const targetSlide = currentSlide.nextElementSibling
        ? currentSlide.nextElementSibling
        : slides[0];
    changeSlide(targetSlide, false);
}, 5000);

// On nextBtn press, move slides to the right and update dotsNav
nextBtn.addEventListener("click", () => {
    const currentSlide = document.querySelector(".current-slide");
    const targetSlide = currentSlide.nextElementSibling
        ? currentSlide.nextElementSibling
        : slides[0];
    changeSlide(targetSlide);
});

// On prevBtn press, move slides to the left and update dotsNav
prevBtn.addEventListener("click", () => {
    const currentSlide = document.querySelector(".current-slide");
    const targetSlide = currentSlide.previousElementSibling
        ? currentSlide.previousElementSibling
        : slides[slides.length - 1];
    changeSlide(targetSlide);
});

// On dot press, navigate to appropriate slide
dotsNav.addEventListener("click", e => {
    const targetDot = e.target;
    if (targetDot.nodeName !== "BUTTON") {
        return;
    }
    const targetSlide = slides[dots.findIndex(dot => dot === targetDot)];
    changeSlide(targetSlide);
});
