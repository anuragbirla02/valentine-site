console.log("JS loaded");

document.addEventListener("DOMContentLoaded", function () {

    // PASSWORD PAGE
    const btn = document.getElementById("unlockBtn");
    if (btn) {
        btn.addEventListener("click", function () {
            const entered = document.getElementById("password").value.trim();
            const correctPassword = "Anvi"; // 🔴 CHANGE THIS

            if (entered === correctPassword) {
                localStorage.setItem("unlocked", "yes");
                window.location.href = "home.html";
            } else {
                document.getElementById("error").innerText = "That’s not it ❤️";
            }
        });
    }

    // HOME PAGE PROTECTION
    if (window.location.pathname.includes("home.html")) {
        if (localStorage.getItem("unlocked") !== "yes") {
            window.location.href = "index.html";
            return;
        }
        loadImages();
    }
});

// RANDOM IMAGE PLACEMENT
function loadImages() {
    if (!window.encryptedImages || encryptedImages.length === 0) return;

    const container = document.getElementById("photos");

    encryptedImages.forEach(img => {
        const image = document.createElement("img");
        image.src = "data:image/jpeg;base64," + img.data;

        image.style.position = "absolute";
        image.style.top = Math.random() * 70 + "%";
        image.style.left = Math.random() * 70 + "%";
        image.style.width = "180px";

        container.appendChild(image);
    });
}
