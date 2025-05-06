export function colorMode() {
    const button = document.querySelector('.color-mode');
    const body = document.body;
    const landing = document.getElementById('landing');

    button.addEventListener('click', () => {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        landing.innerHTML = 'white';
    });
}