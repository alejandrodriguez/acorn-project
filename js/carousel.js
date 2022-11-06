// Grab relevent HTML elements
const slidesContainer = document.querySelector(".carousel-slides-container");
const slides = document.querySelectorAll(".carousel-slide");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const dotsNav = document.querySelector(".dots-nav");
const dots = document.querySelectorAll(".dot-indicator");

// Arrange slides next to each other
const slideWidth = slides[0].getBoundingClientRect().width;
slides.forEach((slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
});

// Handle Changing Slides
function changeSlide(direction, userEvent = true) {
    if (userEvent) {
        clearInterval(autoPlay);
    }
    const currentSlide = document.querySelector(".current-slide");
    let newSlide;
    const currentDot = document.querySelector(".current-dot");
    let newDot;
    if (direction === "next") {
        newSlide = currentSlide.nextElementSibling
            ? currentSlide.nextElementSibling
            : slides[0];
        newDot = currentDot.nextElementSibling
            ? currentDot.nextElementSibling
            : dots[0];
    } else if (direction === "previous") {
        newSlide = currentSlide.previousElementSibling
            ? currentSlide.previousElementSibling
            : slides[slides.length - 1];
        newDot = currentDot.previousElementSibling
            ? currentDot.previousElementSibling
            : dots[dots.length - 1];
    } else {
        throw new Error(
            'First paramater must indicate direction with either "next" or "previous".'
        );
    }
    const newPosition = newSlide.style.left;
    slidesContainer.style.transform = `translateX(-${newPosition})`;
    currentSlide.classList.remove("current-slide");
    newSlide.classList.add("current-slide");
    currentDot.classList.remove("current-dot");
    newDot.classList.add("current-dot");
}

// Set up autoplay // TODO lookup standard name for autoplay
const autoPlay = setInterval(() => {
    changeSlide("next", false);
}, 5000);

// On nextBtn press, move slides to the right and update dotsNav
nextBtn.addEventListener("click", () => {
    changeSlide("next");
});

// On prevBtn press, move slides to the left and update dotsNav
prevBtn.addEventListener("click", () => {
    changeSlide("previous");
});

// On dot press, navigate to appropriate slide
dotsNav.addEventListener("click", e => {
    const targetDot = e.target;
    console.log(targetDot.node); // TODO look up how to check node type
});
