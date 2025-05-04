import { initLandingText } from './landingText.js';
import { setupNavbarObserver } from './navbarObserver.js';
import { setupNavbarToggle } from './mobileNavbarToggle.js';
import { renderRansomText } from './ransomText.js';

document.addEventListener('DOMContentLoaded', () => {
    initLandingText();
    setupNavbarObserver();
    //setupNavbarToggle();
    renderRansomText();
});
