document.addEventListener('DOMContentLoaded', function () {
    // Trigger the loader when the page initially loads
    showLoader();

    // Add a small delay before hiding the loader (adjust the time as needed)
    setTimeout(function () {
        hideLoader();
    }, 10); // Adjust the time as needed
});

function showLoader() {
    // Display the loader
    document.getElementById('loader').style.display = 'block';

    // Add any additional initialization logic here if needed
}

function hideLoader() {
    // Hide the loader
    document.getElementById('loader').style.display = 'none';
}

// Additional code for other functionalities if needed
