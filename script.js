const words = ["scientist", "engineer", "analyst"];
let index = 0;

function changeWord() {
    const dynamicWord = document.getElementById("dynamic-word");

    // Fade out
    dynamicWord.style.opacity = 0;

    setTimeout(() => {
        // Change the word after fade out is done
        dynamicWord.textContent = words[index];
        index = (index + 1) % words.length;

        // Fade in
        dynamicWord.style.opacity = 1;
    }, 500); // Match this with the CSS transition duration
}

// Change word every 3 seconds
setInterval(changeWord, 3000);
