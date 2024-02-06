// Function to toggle dark mode
function toggleDarkMode() {
    document.querySelector('.theme-color-stuff').setAttribute('content', '#01020A');

    document.body.classList.add('dark-mode');
    document.getElementById('moon').style.display = 'none';
    document.getElementById('sun').style.display = 'inline-block';

    localStorage.setItem('theme', 'dark');
}

function toggleLightMode() {
    document.querySelector('.theme-color-stuff').setAttribute('content', '#fff');

    document.body.classList.remove('dark-mode');
    document.getElementById('moon').style.display = 'inline-block';
    document.getElementById('sun').style.display = 'none';

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

// Set the theme in the head of the HTML document
document.addEventListener('DOMContentLoaded', function () {
    setThemeFromLocalStorage();
    // Add other code related to your content here
});
