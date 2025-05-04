function isMobileView() {
    return window.innerWidth <= 768;
}
export function setupNavbarObserver() {
    //const navbar = document.querySelector('.navbar');
    const landingSection = document.getElementById('landing');
    const content = document.querySelector('.content');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!isMobileView()) {
                if (entry.isIntersecting) {
                    //navbar.classList.add('hidden');
                    //navbar.style.opacity = '0';
                    content.style.marginLeft = '0px';
                    content.style.filter = 'blur(3px)';
                } else {
                    //navbar.classList.remove('hidden');
                    //navbar.style.opacity = '1';
                    //content.style.marginLeft = '250px';
                    content.style.filter = 'blur(0px)';
                }
            } else {
                content.style.marginLeft = '0px';
                content.style.filter = entry.isIntersecting ? 'blur(3px)' : 'blur(0px)';
            }
        });
    }, {
        threshold: 0.8
    });

    observer.observe(landingSection);
}
