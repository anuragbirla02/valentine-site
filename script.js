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
    }
});

/* =========================
   PHOTOS
   ========================= */
function loadPhotos() {
console.log("Photos loaded:", encryptedImages.length); // 👈 ADD THIS
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

// ===============================
// FLOATING HEARTS — ULTRA SAFE
// ===============================

function startFloatingHearts() {
    const container = document.getElementById("floating-hearts");
    if (!container) return;

    const emojis = ["❤️","💖","💕","💗","💘"];

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = Math.random() * 100 + "vh";

        container.appendChild(heart);

        const dx = Math.random() * 200 - 100;
        const dy = Math.random() * 200 - 100;

        heart.animate(
            [
                { transform: "translate(0,0)" },
                { transform: `translate(${dx}px, ${dy}px)` }
            ],
            {
                duration: 12000 + Math.random() * 8000,
                iterations: Infinity,
                direction: "alternate",
                easing: "linear"
            }
        );
    }
}

// RUN ONLY ON HOME PAGE, AFTER LOAD
window.addEventListener("load", function () {
    if (window.location.pathname.includes("home.html")) {
        startFloatingHearts();
    }
});
/* ===============================
   PHOTO LOGIC
   =============================== */

function loadPhotos() {
    if (!window.encryptedImages || encryptedImages.length === 0) return;
    console.log("Base64 length:", encryptedImages[0].data.length);

    // TEST: show first image in center
    const center = document.getElementById("center-photo").src =
    "data:image/*;base64," +
    encryptedImages[0].data;
}

window.addEventListener("load", function () {
    if (window.location.pathname.includes("home.html")) {
        loadPhotos();
    }
});










