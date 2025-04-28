document.addEventListener('DOMContentLoaded', () => {
    const resumeBtn = document.querySelector('.resume-btn');
    const resumeContainer = document.querySelector('.resume-container');
    const downloadLink = document.querySelector('.download-link');

    if (resumeContainer && resumeBtn && downloadLink) {
        resumeContainer.addEventListener('mouseenter', () => {
            resumeBtn.style.top = '-15px';
            downloadLink.style.opacity = '1';
            downloadLink.style.pointerEvents = 'all';
        });

        resumeContainer.addEventListener('mouseleave', () => {
            resumeBtn.style.top = '0';
            downloadLink.style.opacity = '0';
            downloadLink.style.pointerEvents = 'none';
        });
    }

    const nameText = "Demirhan";
    const surnameText = "Yalcin"; // Corrected here
    const container = document.getElementById("name-title");

    const fonts = ["'Poppins'", "'Press Start 2P'"];
    const bgColors = [
        "#ff4757",
        "#1e90ff",
        "#2ed573",
        "#ffa502",
        "#5352ed",
        "#ff6b81",
        "#3742fa",
        "#70a1ff",
        "#7bed9f",
        "#ff4757",
        "#1e90ff",
        "#2ed573",
        "#ffa502",
        "#5352ed",
        "#ff6b81",
        "#3742fa",
        "#70a1ff",
        "#7bed9f",
        "#eccc68",
    ];

    const fgColors = [
        "#2f3542",
        "#ffffff",
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
            const fgIndex = Math.floor(Math.random() * fgColors.length);

            const rotation = (Math.random() * 30 - 15).toFixed(1);
            const fontSize = 35 + Math.floor(Math.random() * 15);

            span.style.fontFamily = fonts[fontIndex];
            span.style.backgroundColor = bgColors[bgIndex];
            span.style.color = fgColors[fgIndex];
            span.style.transform = `rotate(${rotation}deg)`;
            span.style.fontSize = `${fontSize}px`;

            line.appendChild(span);
        }
        return line;
    }

    container.appendChild(createRansomLine(nameText));
    container.appendChild(document.createElement('br'));
    container.appendChild(createRansomLine(surnameText));
});
