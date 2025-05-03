const words = ["Dream", "Build", "Share", "Leadership", "Grow"];
let index = 0;

const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");

function updateText2() {
    // Fade out
    text2.style.opacity = 0;

    setTimeout(() => {
        const newWord = words[index];
        text2.textContent = newWord;
        text2.style.opacity = 1;

        // Calculate pixel width of new word
        const tempSpan = document.createElement("span");
        tempSpan.style.visibility = "hidden";
        tempSpan.style.position = "absolute";
        tempSpan.style.fontSize = window.getComputedStyle(text2).fontSize;
        tempSpan.style.fontFamily = window.getComputedStyle(text2).fontFamily;
        tempSpan.textContent = newWord;

        document.body.appendChild(tempSpan);
        const newWidth = tempSpan.offsetWidth;
        document.body.removeChild(tempSpan);

        // Assume average word width for baseline (adjust if needed)
        const baselineWidth = 100; // e.g., width of a medium word

        const offset = (newWidth - baselineWidth) / 2;

        // Apply left/right shift to text1
        text1.style.transform = `translateX(${-offset}px)`;

        // Loop to next word
        index = (index + 1) % words.length;
    }, 300); // match transition
}

updateText2();
setInterval(updateText2, 1000);
