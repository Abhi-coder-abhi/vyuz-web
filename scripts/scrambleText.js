let resetText = false;
const textRef = "Go to Metaverse";
setInterval(function () {
    resetText = !resetText;
}, 15000);

// Scramble text function
function handleScrambleComplete() {
    resetText = false;
}

// Initial setup for text scrambling
handleScrambleComplete();

// Render initial text
const scrambleTextElement = document.getElementById('scrambleText');
if (scrambleTextElement) {
    scrambleTextElement.innerText = textRef;
}
