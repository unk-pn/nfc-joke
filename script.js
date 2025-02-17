const audio = document.getElementById("audio");
        const button = document.getElementById("audioButton");
        let isPlayed = false;

button.addEventListener("click", () => {
    if (!isPlayed) {
        audio.play();
        isPlayed = true;
    }
});