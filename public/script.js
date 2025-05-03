document.addEventListener('DOMContentLoaded', () => {


    const languageList = [
        'Hello, x!'
    ];

    const keywordList = [
        'World',
        'Programmer',
        'Developer',
        'Coder',
        'Recruiter',
        'Friend'
    ];
    const gradientColors = [
        'hsla(120, 40%, 30%, 1)',
        'hsla(30, 60%, 40%, 1)',
        'hsla(200, 70%, 35%, 1)',
        'hsla(90, 50%, 35%, 1)',
        'hsla(20, 70%, 30%, 1)',
        'hsla(160, 40%, 30%, 1)',
        'hsla(220, 50%, 35%, 1)'
    ];



    const landing = document.getElementById('landing');
    const languageIndex = Math.floor(Math.random() * languageList.length);
    const baseSyntax = languageList[languageIndex];
    const content = document.querySelector('.content');
    let keywordIndex = 0;

    landing.innerHTML = "Welcome to my portfolio!";

    setInterval(() => {
        const randomColor = gradientColors[Math.floor(Math.random() * gradientColors.length)];
        const coloredKeyword = `<span class="animated-keyword" style="color: ${randomColor}; font-family: 'Pixelify Sans', sans-serif">${keywordList[keywordIndex]}</span>`;
        landing.innerHTML = baseSyntax.replace("x", coloredKeyword);
        keywordIndex = (keywordIndex + 1) % keywordList.length;
    }, 2500);






    const navbar = document.querySelector('.navbar');
    const landingSection = document.getElementById('landing');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (window.innerWidth > 768) {
                if (entry.isIntersecting) {
                    navbar.classList.add('hidden');
                    navbar.style.opacity = '0';
                    content.style.marginLeft = '0px';
                    content.style.filter = 'blur(3px)';
                } else {
                    navbar.classList.remove('hidden');
                    navbar.style.opacity = '1';
                    content.style.marginLeft = '250px';
                    content.style.filter = 'blur(0px)';
                }
            } else {
                content.style.marginLeft = '0px';
            }

        });
    }, {
        threshold: 0.8
    });

    observer.observe(landingSection);

    const navbarToggle = document.querySelector('.navbar-toggle');

    navbarToggle.addEventListener('click', () => {
        navbar.classList.toggle('show');
        document.body.classList.toggle('mobile-nav-open');
    });


    const nameText = "DEMIRHAN";
    const surnameText = "YALCIN";
    const container = document.querySelector(".ransom-text");

    const fonts = ["'Press Start 2P'"];
    const bgColors = [
        "#1e1e2f",
        "#2d2d44",
        "#3b3b5b",
        "#1a1a1a",
        "#121212",
        "#232323",
        "#2f2f2f",
        "#343a40",
        "#20232a",
        "#242424",
        "#262626",
        "#2c2c2c",
        "#1c1c1c",
        "#1b1f23",
        "#2e3440",
        "#3a3f4b",
        "#2a2a2a",
        "#303030",
        "#383838"
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
            const fontSize = 35 + Math.floor(Math.random() * 18);

            span.style.fontFamily = fonts[fontIndex];
            span.style.backgroundColor = bgColors[bgIndex];
            span.style.color = "#ffffff";
            span.style.transform = `rotate(${rotation}deg)`;
            span.style.fontSize = `${fontSize}px`;

            line.appendChild(span);
        }
        return line;
    }

    container.appendChild(createRansomLine(nameText));
    container.appendChild(createRansomLine(surnameText));


});

