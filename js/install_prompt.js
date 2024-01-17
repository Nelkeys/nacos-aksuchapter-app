// installPrompt.js

let deferredPrompt;

function handleBeforeInstallPrompt(event) {
    // Prevent the default prompt
    event.preventDefault();

    // Stash the event so it can be triggered later
    deferredPrompt = event;

    // You can display an alert or a custom UI element here
    // For simplicity, we'll use an alert in this example
    alert('Install our PWA for a better experience!');
}

function showInstallPrompt() {
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

            // Clear the deferredPrompt variable
            deferredPrompt = null;
        });
    }
}

// Attach the event listener to the window
window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
