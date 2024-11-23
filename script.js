const pianoKeys = document.querySelectorAll(".key");
const volumeSlider = document.getElementById("volume-slider");
const keysCheckbox = document.getElementById("toggle-keys");
let allKeys = [],
    audio = new Audio();

const playTune = (key) => {
    audio.src = `audio/${key}.wav`; // Set audio source
    audio.play(); // Play audio

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150); // Add playing class to key
};

// Add click event listeners to each key
pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
    audio.volume = e.target.value / 100; // Adjust volume to 0-1 range
};

const showHideKeys = () => {
    pianoKeys.forEach(key => {
        key.classList.toggle("hide");
    });
};

const pressedKeys = (e) => {
   if (allKeys.includes(e.key)) playTune(e.key);
};

document.addEventListener("keydown", pressedKeys);
volumeSlider.addEventListener("input", handleVolume);
keysCheckbox.addEventListener("click", showHideKeys);
