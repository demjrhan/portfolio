window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const garageDoor = document.getElementById('garageDoor');
    const interior = document.querySelector('.interior');

    if (scrollY > 0) {
        garageDoor.style.transform = 'translateY(-100%)';
        garageDoor.style.backgroundColor = 'white'; // Make door white
        garageDoor.style.color = 'black'; // Optional: invert text color

        if (!interior.classList.contains('visible')) {
            interior.classList.add('visible');
        }
    } else {
        garageDoor.style.transform = 'translateY(0)';
        garageDoor.style.backgroundColor = '#333'; // Original door color
        garageDoor.style.color = 'white'; // Back to original
        interior.classList.remove('visible');
    }
});
