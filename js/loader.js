var hideLoaderTimeout;

document.addEventListener('DOMContentLoaded', function () {
    // Trigger the loader when the page initially loads
    showLoader();

    // Add a small delay before hiding the loader (adjust the time as needed)
    hideLoaderTimeout = setTimeout(function () {
        hideLoader();
    },2000); // Adjust the time as needed
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

// Listen for the pageshow event to reset the loader when the page is shown again
window.addEventListener('pageshow', function (event) {
    // Check if the page is being loaded from the bfcache (back/forward cache)
    if (event.persisted) {
        // Reset the loader
        showLoader();

        // Add a small delay before hiding the loader (adjust the time as needed)
        hideLoaderTimeout = setTimeout(function () {
            hideLoader();
        }, 0); // Adjust the time as needed
    }
});




document.addEventListener('contextmenu', function(event) {
  // Check if the clicked element or its parent is a link
  const isLink = event.target.tagName === 'A' || event.target.parentElement.tagName === 'A';

  if (isLink) {
    // Prevent the default context menu for links
    event.preventDefault();
    // Optionally, add your custom logic or leave it empty to disable the context menu
  }
});