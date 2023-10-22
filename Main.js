// main.js

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}

// Add event listener to a button to toggle dark mode
document.addEventListener("DOMContentLoaded", function() {
    const darkModeButton = document.createElement("button");
    darkModeButton.innerText = "Toggle Dark Mode";
    darkModeButton.addEventListener("click", toggleDarkMode);
    document.body.appendChild(darkModeButton);
});
