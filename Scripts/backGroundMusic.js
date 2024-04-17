// backGroundMusic.js

// Initialize the audio element
var audio = new Audio('Assets/backgroundMusicMainPage.weba');
audio.loop = true;
audio.volume = 0.3;
// Event listener for the play button
$(document).ready(function() {
    $('.play-btn').click(function() {
        // Checks if the audio is currently paused
        // If it is, plays the audio and changes the button text to "Pause"
        // If it isn't, pauses the audio and changes the button text to "Play"
        if (audio.paused) {
            audio.play();
            $('.play-btn').html('Pause');
        } else {
            audio.pause();
            $('.play-btn').html('Play');
        }
    });
});
// Play the audio when the page loads
$(document).ready(function() {
    audio.play();
});
