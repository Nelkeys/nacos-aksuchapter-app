
// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.add('dark-mode');
    document.getElementById('moon').style.display = 'none';
    document.getElementById('sun').style.display = 'inline-block';
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#222');

    // Save user preference to localStorage
    localStorage.setItem('theme', 'dark');
}

// Function to toggle light mode
function toggleLightMode() {
    document.body.classList.remove('dark-mode');
    document.getElementById('moon').style.display = 'inline-block';
    document.getElementById('sun').style.display = 'none';
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#fff');

    // Save user preference to localStorage
    localStorage.setItem('theme', 'light');
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

// Set the theme when the page loads
document.addEventListener('DOMContentLoaded', setThemeFromLocalStorage);
