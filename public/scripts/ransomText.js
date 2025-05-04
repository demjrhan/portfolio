const fonts = ["'Press Start 2P'"];
const bgColors = [
    "#1e1e2f", "#2d2d44", "#3b3b5b", "#1a1a1a", "#121212", "#232323", "#2f2f2f",
    "#343a40", "#20232a", "#242424", "#262626", "#2c2c2c", "#1c1c1c", "#1b1f23",
    "#2e3440", "#3a3f4b", "#2a2a2a", "#303030", "#383838"
];

function createRansomLine(text) {
    const line = document.createElement('div');
    line.classList.add('ransom-line');

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const span = document.createElement("span");
        span.classList.add("ransom-letter");
        span.textContent = char === " " ? "\u00A0" : char;

        const fontIndex = Math.floor(Math.random() * fonts.length);
        const bgIndex = Math.floor(Math.random() * bgColors.length);
        const rotation = (Math.random() * 35 - 15).toFixed(1);
        const fontSize = 40 + Math.floor(Math.random() * 18);

        span.style.fontFamily = fonts[fontIndex];
        span.style.backgroundColor = bgColors[bgIndex];
        span.style.color = "#ffffff";
        span.style.transform = `rotate(${rotation}deg)`;
        span.style.fontSize = `${fontSize}px`;

        line.appendChild(span);
    }
    return line;
}

export function renderRansomText() {
    const nameText = "DEMIRHAN";
    const surnameText = "YALCIN";
    const container = document.querySelector(".ransom-text");

    container.appendChild(createRansomLine(nameText));
    container.appendChild(createRansomLine(surnameText));
}
