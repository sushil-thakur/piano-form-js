const pianoKeys = document.querySelectorAll(".key");
const volumeSlider = document.getElementById("volume-slider");
const toggleKeysCheckbox = document.getElementById("toggle-keys");
let audio = new Audio();

const playTune = (key) => {
    audio.src = `audio/${key}.wav`; // Set audio source
    audio.play(); // Play audio
};

// Add click event listeners to each key
pianoKeys.forEach(key => {
    key.addEventListener("click", () => playTune(key.dataset.key));
});