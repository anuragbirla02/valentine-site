document.addEventListener("DOMContentLoaded", function () {

    // RANDOM PHOTOS
    if (window.encryptedImages && encryptedImages.length > 0) {
        const container = document.getElementById("photos");

        encryptedImages.slice(0, encryptedImages.length - 1).forEach(img => {
            const image = document.createElement("img");
            image.src = "data:image/jpeg;base64," + img.data;

            image.style.top = Math.random() * 120 + "vh";
            image.style.left = Math.random() * 80 + "vw";

            container.appendChild(image);
        });

        // CENTER PHOTO (LAST IMAGE)
        document.getElementById("centerPhoto").src =
            "data:image/jpeg;base64," + encryptedImages[encryptedImages.length - 1].data;
    }

    // FLOATING HEARTS
    const hearts = document.getElementById("hearts");
    const emojis = ["❤️","💖","💕","💗","💘"];

    for (let i = 0; i < 25; i++) {
        const heart = document.createElement("span");
        heart.innerText = emojis[Math.floor(Math.random()*emojis.length)];
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = Math.random() * 100 + "vh";
        heart.style.animationDuration = (15 + Math.random()*20) + "s";
        hearts.appendChild(heart);
    }
});
