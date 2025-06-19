function enforceLightMode() {
    // Verwijder dark mode switch knop – ons dataverhaal is geoptimaliseerd voor licht thema.
    const switchButton = document.querySelector('.theme-switch-button');
    if (switchButton) {
        switchButton.remove();
    }

    // Zet de modus op licht als dat nog niet het geval is
    const htmlEl = document.querySelector('html');
    if (htmlEl.getAttribute('data-theme') !== 'light') {
        htmlEl.setAttribute('data-theme', 'light');

        // Sla voorkeur voor toekomstige bezoeken op
        localStorage.setItem('mode', 'light');
        localStorage.setItem('theme', 'light');
    }
}

// Activeer bij laden van de pagina
window.addEventListener('load', enforceLightMode);
