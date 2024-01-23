// JavaScript (script.js)

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.add('dark-mode');
    document.getElementById('moon').style.display = 'none';
    document.getElementById('sun').style.display = 'inline-block';

    // Save user preference to localStorage
    localStorage.setItem('theme', 'dark');

    // Update meta theme-color for dark mode
    updateThemeColor('#000');
}

// Function to toggle light mode
function toggleLightMode() {
    document.body.classList.remove('dark-mode');
    document.getElementById('moon').style.display = 'inline-block';
    document.getElementById('sun').style.display = 'none';

    // Save user preference to localStorage
    localStorage.setItem('theme', 'light');

    // Update meta theme-color for light mode
    updateThemeColor('#fff');
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

// Function to update meta theme-color dynamically
function updateThemeColor(color) {
    const themeColorMetaTag = document.querySelector('meta[name="theme-color"]');
    if (themeColorMetaTag) {
        themeColorMetaTag.content = color;
    }
}


// Set the theme when the page loads
document.addEventListener('DOMContentLoaded', setThemeFromLocalStorage);
