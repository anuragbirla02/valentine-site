// Updated script.js

// Function to load images properly
function loadImages() {
    const imageContainer = document.getElementById('image-container');
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
    images.forEach((src) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Valentine Image';
        imageContainer.appendChild(img);
    });
}

// Function to play music
function playMusic() {
    const audio = new Audio('valentine-music.mp3');
    audio.play();
}

// Initialize hearts on page load
function initializeHearts() {
    const heartContainer = document.getElementById('heart-container');
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heartContainer.appendChild(heart);
    }
}

// Add support for more message boxes
function addMessageBox(message) {
    const messageContainer = document.getElementById('message-container');
    const messageBox = document.createElement('div');
    messageBox.className = 'message-box';
    messageBox.textContent = message;
    messageContainer.appendChild(messageBox);
}

// Event listeners
window.onload = function() {
    loadImages();
    initializeHearts();
    playMusic();
};

// Example usage of addMessageBox
addMessageBox('Happy Valentine’s Day!');
addMessageBox('Sending you lots of love!');
