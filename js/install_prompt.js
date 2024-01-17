// installPrompt.js

let deferredPrompt;

function handleBeforeInstallPrompt(event) {
    // Prevent the default prompt
    event.preventDefault();

    // Stash the event so it can be triggered later
    deferredPrompt = event;

    // Display a custom install banner
    showInstallBanner();
}

function showInstallBanner() {
    // Create a banner element
    const banner = document.createElement('div');
    banner.id = 'install-banner';
    banner.innerHTML = `
        <p>Install our PWA for a better experience!</p>
        <button onclick="installPWA()">Install</button>
        <button onclick="dismissBanner()">Cancel</button>
    `;

    // Add the banner to the document body
    document.body.appendChild(banner);
}

function installPWA() {
    if (deferredPrompt) {
        // Show the install prompt
        deferredPrompt.prompt();

        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }

            // Remove the banner
            removeInstallBanner();

            // Clear the deferredPrompt variable
            deferredPrompt = null;
        });
    }
}

function dismissBanner() {
    // Remove the banner
    removeInstallBanner();
}

function removeInstallBanner() {
    const banner = document.getElementById('install-banner');
    if (banner) {
        banner.remove();
    }
}

// Attach the event listener to the window
window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
