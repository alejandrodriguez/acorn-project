// Grab relevant HTML elements
const elementsFadingIn = document.querySelectorAll(".fade-in");

// Define "options" object to be passed into the Intersection Observer API
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -50px 0px"
};

// Create new IntersectionObserver to add "appear" class on scroll
const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

// Apply IntersectionObserver to relevant HTML elements
elementsFadingIn.forEach(element => appearOnScroll.observe(element));
