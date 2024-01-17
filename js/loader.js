function loadPage(page) {
    // Display the loader
    document.getElementById('loader').style.display = 'block';

    // Allow some time for the loader to be visible (adjust the time as needed)
    setTimeout(function() {
        // Hide the loader
        document.getElementById('loader').style.display = 'none';

        // Load the new page
        window.location.href = page;
    }, 100); // Adjust the time as needed
}
