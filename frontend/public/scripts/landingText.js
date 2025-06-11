const keywordList = [
    'Programmer',
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

function sleep(ms) {
    return new Promise(res => setTimeout(res, ms));
}

export async function initLandingText() {
    const landing = document.getElementById('landing');
    let idx = 0;
    while (true) {
        const word = keywordList[idx];

        const container = document.createElement('span');
        container.className = 'typed-keyword';
        landing.appendChild(container);

        const cursor = document.createElement('span');
        cursor.className = 'cursor';
        cursor.textContent = '|';
        landing.appendChild(cursor);

        for (let i = 0; i < word.length; i++) {
            const letterSpan = document.createElement('span');
            letterSpan.textContent = word[i];
            letterSpan.style.color = gradientColors[
                Math.floor(Math.random() * gradientColors.length)
                ];
            letterSpan.style.fontFamily = "'Pixelify Sans', sans-serif";
            container.appendChild(letterSpan);
            await sleep(200);
        }

        const excl = document.createElement('span');
        excl.style.color = 'black';
        excl.textContent = '!';
       
        excl.style.fontFamily = "'Pixelify Sans', sans-serif";
        container.appendChild(excl);

        await sleep(2000);

        while (container.lastChild) {
            container.removeChild(container.lastChild);
            await sleep(100);
        }

        landing.removeChild(container);
        landing.removeChild(cursor);

        idx = (idx + 1) % keywordList.length;
    }
}
