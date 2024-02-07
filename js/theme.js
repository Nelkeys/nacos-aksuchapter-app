// Function to toggle dark mode
function toggleDarkMode() {
    document.querySelector('.theme-color-stuff').setAttribute('content', '#01020A');
    if ((document.title).includes("Home")) {

        //Not the best practice; but help mitigate the errors
        //by chechking the screens current title
        document.querySelector('.theme-color-stuff').setAttribute('content', '#01020A');

        document.getElementById('moon').style.display = 'none';
        document.getElementById('sun').style.display = 'inline-block';

        localStorage.setItem('theme', 'dark');
    }
    document.body.classList.add('dark-mode');
}

function toggleLightMode() {
    document.querySelector('.theme-color-stuff').setAttribute('content', '#fff');
    if ((document.title).includes("Home")) {
        document.querySelector('.theme-color-stuff').setAttribute('content', '#fff');

        document.getElementById('moon').style.display = 'inline-block';
        document.getElementById('sun').style.display = 'none';

        localStorage.setItem('theme', 'light');
    }
    document.body.classList.remove('dark-mode');
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