document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       🔐 PASSWORD CONFIG HERE
       ========================= */
    const correctPassword = "Anvi"; // 👈 CHANGE THIS

    /* ========================= */

    // LOGIN PAGE LOGIC
    const button = document.getElementById("unlockBtn");
    const passwordInput = document.getElementById("password");
    const errorText = document.getElementById("error");

    if (button) {
        button.addEventListener("click", function () {
            const entered = passwordInput.value.trim();

            if (entered === correctPassword) {
                localStorage.setItem("unlocked", "yes");
                window.location.href = "home.html";
            } else {
                errorText.innerText = "That’s not it ❤️";
            }
        });
    }

    // HOME PAGE LOGIC
    if (window.location.pathname.includes("home.html")) {
        if (localStorage.getItem("unlocked") !== "yes") {
            window.location.href = "index.html";
            return;
        }

        loadPhotos();
        createHearts();
    }
});

/* =========================
   PHOTOS
   ========================= */
function loadPhotos() {
    if (!window.encryptedImages || encryptedImages.length === 0) return;

    const container = document.getElementById("photos");

    encryptedImages.slice(0, -1).forEach(img => {
        const image = document.createElement("img");
        image.src = "data:image/jpeg;base64," + img.data;

        image.style.position = "absolute";
        image.style.top = Math.random() * 120 + "vh";
        image.style.left = Math.random() * 80 + "vw";
        image.style.width = "170px";
        image.style.borderRadius = "20px";

        container.appendChild(image);
    });

    // CENTER PHOTO
    document.getElementById("centerPhoto").src =
        "data:image/jpeg;base64," + encryptedImages[encryptedImages.length - 1].data;
}

/* ===============================
   FLOATING HEARTS LOGIC
   =============================== */

function createFloatingHearts() {
    const container = document.getElementById("floating-hearts");
    if (!container) return;

    const emojis = ["❤️", "💖", "💕", "💗", "💘"];
    const heartCount = 22; // calm, not crowded

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];

        // random start position
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = Math.random() * 100 + "vh";

        // random slow movement
        heart.style.setProperty("--dx", (Math.random() * 120 - 60) + "px");
        heart.style.setProperty("--dy", (Math.random() * 120 - 60) + "px");

        // random speed
        heart.style.animationDuration = (18 + Math.random() * 20) + "s";

        container.appendChild(heart);
    }
}

/* run only on home page */
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.includes("home.html")) {
        createFloatingHearts();
    }
});
