const elementsFadingIn = document.querySelectorAll(".fade-in");

const appearOptions = {
    threshold: 0.9
};

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

elementsFadingIn.forEach(element => appearOnScroll.observe(element));
