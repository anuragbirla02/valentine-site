function checkPassword() {
    const correctPassword = "Anvi"; // CHANGE THIS
    const entered = document.getElementById("password").value;

    if (entered === correctPassword) {
        localStorage.setItem("unlocked", "yes");
        window.location.href = "home.html";
    } else {
        document.getElementById("error").innerText = "That’s not it my Love ❤️";
    }
}

window.onload = function () {
    if (window.location.pathname.includes("home.html")) {
        if (localStorage.getItem("unlocked") !== "yes") {
            window.location.href = "index.html";
            return;
        }
        loadImages();
    }
};
function createHearts() {
    const heartContainer = document.getElementById("floating-hearts");

    for (let i = 0; i < 15; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerText = ["❤️","💖","💕","💗","💘"][Math.floor(Math.random()*5)];

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = Math.random() * 100 + "vh";
        heart.style.animationDuration = 15 + Math.random() * 15 + "s";

        heartContainer.appendChild(heart);
    }
}

function floatAnimation() {
    document.querySelectorAll(".heart").forEach(heart => {
        heart.animate(
            [
                { transform: "translate(0,0)" },
                { transform: `translate(${Math.random()*200-100}px, ${Math.random()*200-100}px)` }
            ],
            {
                duration: 20000,
                iterations: Infinity,
                direction: "alternate",
                easing: "linear"
            }
        );
    });
}function loadImages() {
    const container = document.getElementById("photos");

    if (!encryptedImages || encryptedImages.length === 0) return;

    encryptedImages.forEach(() => {
        const img = document.createElement("img");

        img.src = "data:image/jpeg;base64," + arguments[0]?.data;

        img.style.position = "absolute";
        img.style.top = Math.random() * 70 + "%";
        img.style.left = Math.random() * 70 + "%";

        img.style.width = "180px";
        img.style.borderRadius = "18px";
        img.style.boxShadow = "0 12px 30px rgba(0,0,0,0.2)";
        img.style.opacity = "0";
        img.style.animation = "fadeInUp 2s forwards";

        container.appendChild(img);
    });
}



