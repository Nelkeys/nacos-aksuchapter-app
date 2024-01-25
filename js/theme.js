function toggleDarkMode() {
    document.body.classList.add('dark-mode');
    document.getElementById('moon').style.display = 'none';
    document.getElementById('sun').style.display = 'inline-block';
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#222');

    localStorage.setItem('theme', 'dark');
}

function toggleLightMode() {
    document.body.classList.remove('dark-mode');
    document.getElementById('moon').style.display = 'inline-block';
    document.getElementById('sun').style.display = 'none';
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#fff');

    localStorage.setItem('theme', 'light');
}

function setThemeFromLocalStorage() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        toggleDarkMode();
    } else {
        toggleLightMode();
    }
}

document.addEventListener('DOMContentLoaded', setThemeFromLocalStorage);

// Apply the theme to dynamically loaded content
const observer = new MutationObserver(() => {
    setThemeFromLocalStorage();
});

observer.observe(document.body, {
    childList: true,
    subtree: true,
});
