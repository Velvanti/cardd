const audio = document.getElementById('birthdayAudio');
audio.volume = 0.5;

function playAudio() {
    const audio = document.getElementById('birthdayAudio');
    if (audio.paused) {
        audio.play(); // Play the audio if it's paused
    } else {
        audio.pause(); // Pause the audio if it's already playing
    }
}