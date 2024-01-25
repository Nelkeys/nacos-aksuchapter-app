var hideLoaderTimeout;

document.addEventListener('DOMContentLoaded', function () {
    // Trigger the loader when the page initially loads
    showLoader();

    // Add a small delay before hiding the loader (adjust the time as needed)
    hideLoaderTimeout = setTimeout(function () {
        hideLoader();
    }, 0); // Adjust the time as needed
});

function showLoader() {
    document.getElementById('loader').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function hideLoader() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    // Clear the timeout to stop hiding the loader
    clearTimeout(hideLoaderTimeout);
}

function reloadHomePage() {
    showLoader();
    
    // Clear the timeout before reloading
    clearTimeout(hideLoaderTimeout);

    location.reload();
}
