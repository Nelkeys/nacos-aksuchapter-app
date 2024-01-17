 // Check if the app is already installed
 window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent Chrome 76 and later from showing the default install prompt
    event.preventDefault();
    // Display your custom install banner/modal
    document.getElementById('pwa-install-banner').style.display = 'flex';

    // Auto-hide the banner after 5 seconds
    setTimeout(() => {
        document.getElementById('pwa-install-banner').style.display = 'none';
    }, 5000);

    // Store the event for later use
    let deferredPrompt = event;
    
    // Handle the install button click
    document.getElementById('install-button').addEventListener('click', () => {
        // Show the browser's install prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            // If the user accepted the prompt
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
            // Reset the deferredPrompt variable
            deferredPrompt = null;
            // Hide the custom install banner/modal
            document.getElementById('pwa-install-banner').style.display = 'none';
        });
    });
});