document.addEventListener("DOMContentLoaded", function () {
    var pageLinks = document.querySelectorAll('.page-link');
    
    pageLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            showLoader();

            var targetPage = event.target.getAttribute('href');
            console.log('Target Page:', targetPage); // Add this line for debugging

            // Wait for the loader to be displayed before navigating
            setTimeout(function () {
                hideLoader();
                window.location.href = targetPage;
            }, 0);
        });
    });
});

function showLoader() {
    document.getElementById('loader').style.display = 'block';
}

function hideLoader() {
    document.getElementById('loader').style.display = 'none';
}
