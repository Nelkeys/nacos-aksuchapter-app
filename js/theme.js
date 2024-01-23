// JavaScript (script.js)

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.add('dark-mode');
    document.getElementById('moon').style.display = 'none';
    document.getElementById('sun').style.display = 'inline-block';

    // Save user preference to localStorage
    localStorage.setItem('theme', 'dark');

     // Update theme-color meta tag for dark mode
     updateThemeColor('#333333'); // Dark gray color
}

// Function to toggle light mode
function toggleLightMode() {
    document.body.classList.remove('dark-mode');
    document.getElementById('moon').style.display = 'inline-block';
    document.getElementById('sun').style.display = 'none';

    // Save user preference to localStorage
    localStorage.setItem('theme', 'light');

    // Update theme-color meta tag for light mode
    updateThemeColor('#ffffff'); // White color
}

// Function to set the theme based on user preference in localStorage
function setThemeFromLocalStorage() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        toggleDarkMode();
    } else {
        toggleLightMode();
    }
}

// Function to update theme-color meta tag
function updateThemeColor(color) {
    const themeColorMetaTag = document.querySelector('meta[name="theme-color"]');
    if (themeColorMetaTag) {
        themeColorMetaTag.setAttribute('content', color);
    }
}

// Set the theme when the page loads
document.addEventListener('DOMContentLoaded', setThemeFromLocalStorage);
