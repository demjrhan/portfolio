export function setupNavbarToggle() {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbar = document.querySelector('.navbar');

    navbarToggle.addEventListener('click', () => {
        navbar.classList.toggle('show');
        document.body.classList.toggle('mobile-nav-open');
    });
}
