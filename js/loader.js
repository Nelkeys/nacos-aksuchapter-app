function loadPage(page) {
    // Display the loader
    document.getElementById('loader').style.display = 'block';

    // Hide the loader immediately and load the new page
    document.getElementById('loader').style.display = 'none';
    window.location.href = page;
}
