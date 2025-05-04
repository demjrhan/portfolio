const languageList = [
    'Hello, x!'
];

const keywordList = [
    'Programmer',
    'World',
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

export function initLandingText() {
    const landing = document.getElementById('landing');
    const languageIndex = Math.floor(Math.random() * languageList.length);
    const baseSyntax = languageList[languageIndex];
    let keywordIndex = 0;

    landing.innerHTML = "Welcome to my portfolio!";

    setInterval(() => {
        const randomColor = gradientColors[Math.floor(Math.random() * gradientColors.length)];
        const coloredKeyword = `<span class="animated-keyword" style="color: ${randomColor}; font-family: 'Pixelify Sans', sans-serif">${keywordList[keywordIndex]}</span>`;
        landing.innerHTML = baseSyntax.replace("x", coloredKeyword);
        keywordIndex = (keywordIndex + 1) % keywordList.length;
    }, 2500);
}
