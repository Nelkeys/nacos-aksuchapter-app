document.addEventListener('DOMContentLoaded', function () {
    // Trigger the loader when the page initially loads
    showLoader();

    // Add a small delay before hiding the loader (adjust the time as needed)
    setTimeout(function () {
        hideLoader();
    }, 10); // Adjust the time as needed
});

function showLoader() {
    document.getElementById('loader').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function hideLoader() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}



function reloadHomePage() {
    showLoader();

    location.reload();
}
