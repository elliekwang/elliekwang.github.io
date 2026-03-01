document.addEventListener("DOMContentLoaded", () => {
    const words = ["scientist", "engineer", "analyst"];
    let index = 0;
  
    const dynamicWord = document.getElementById("dynamic-word");
    if (!dynamicWord) return;
  
    function changeWord() {
      dynamicWord.style.opacity = 0;
  
      setTimeout(() => {
        dynamicWord.textContent = words[index];
        index = (index + 1) % words.length;
        dynamicWord.style.opacity = 1;
      }, 500);
    }
  
    setInterval(changeWord, 3000);
  });