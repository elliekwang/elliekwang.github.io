const words = ["aspiring data scientist", "engineer", "analyst"];
let index = 0;

function changeSubtitle() {
    const dynamicText = document.getElementById("dynamic-text");
    dynamicText.textContent = words[index];
    index = (index + 1) % words.length;
}

setInterval(changeSubtitle, 3000); // Change subtitle every 3 seconds
