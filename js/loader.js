document.addEventListener('DOMContentLoaded', function () {
    // Trigger the loader when the page initially loads
    showLoader();

    // Add a small delay before hiding the loader (adjust the time as needed)
    setTimeout(function () {
        hideLoader();
    }, 0); // Adjust the time as needed
});

function showLoader() {
    document.getElementById('loader').style.display = 'block';
}

function hideLoader() {
    document.getElementById('loader').style.display = 'none';
}



function reloadHomePage() {
    showLoader();

    location.reload();
}
