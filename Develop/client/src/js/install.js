const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

    // store the events
    window.deferredPrompt = event;
    // remove the hidden class from the button
    butInstall.classList.toggle('hidden', false)
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }

    // show prompt
    promptEvent.prompt();

    // reset the prompt
    window.deferredprompt = null;
    butInstall.classList.toggle ('hedden', true);
});

// Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {

    // clear prompt
    window.deferredPrompt= null;
});
