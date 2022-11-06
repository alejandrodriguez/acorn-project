// Grab relevant HTML elements
const darkModeBtn = document.querySelector(".dark-mode-btn");
const toggleImg = document.querySelector(".toggle-img");

// Check if dark mode is on or has been set
let isDarkModeEnabled = JSON.parse(localStorage.getItem("darkMode"));

// If not already in localStorage, default to off
if (isDarkModeEnabled === null) {
    localStorage.setItem("darkMode", "false");
    isDarkModeEnabled = JSON.parse(localStorage.getItem("darkMode"));
}

// Update dark mode button to match isDarkModeEnabled
function updateDarkModeBtn() {
    if (JSON.parse(localStorage.getItem("darkMode"))) {
        toggleImg.src = "img/icons/toggle-switch-on.svg";
    } else {
        toggleImg.src = "img/icons/toggle-switch-off.svg";
    }
}
updateDarkModeBtn();

// Handle Style Changes
function changeTheme() {
    updateDarkModeBtn();
    if (isDarkModeEnabled) {
        document.body.style.backgroundColor = "var(--black)";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
}
changeTheme();

// Toggle dark mode on click
darkModeBtn.addEventListener("click", () => {
    console.log("fired");
    if (!isDarkModeEnabled) {
        localStorage.setItem("darkMode", "true");
    } else {
        localStorage.setItem("darkMode", "false");
    }
    isDarkModeEnabled = JSON.parse(localStorage.getItem("darkMode"));
    changeTheme();
});
