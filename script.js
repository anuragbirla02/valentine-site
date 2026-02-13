function checkPassword() {
    const correctPassword = "Anvi"; // CHANGE THIS
    const entered = document.getElementById("password").value;

    if (entered === correctPassword) {
        localStorage.setItem("unlocked", "yes");
        window.location.href = "home.html";
    } else {
        document.getElementById("error").innerText = "That's not it my Love ❤️";
    }
}

window.onload = function () {
    if (window.location.pathname.includes("home.html")) {
        if (localStorage.getItem("unlocked") !== "yes") {
            window.location.href = "index.html";
            return;
        }
        loadImages();
        createHearts();
        floatAnimation();
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
}

function playMusic() {
    const audio = document.getElementById("bgMusic");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function loadImages() {
    const container = document.getElementById("photos");

    if (!encryptedImages || encryptedImages.length === 0) return;

    encryptedImages.forEach((img, index) => {
        const image = document.createElement("img");
        image.src = "data:image/jpeg;base64," + img.data;

        image.style.position = "absolute";
        image.style.top = Math.random() * 70 + "%";
        image.style.left = Math.random() * 70 + "%";

        image.style.width = "180px";
        image.style.borderRadius = "18px";
        image.style.boxShadow = "0 12px 30px rgba(0,0,0,0.2)";
        image.style.opacity = "0";
        image.style.animation = "fadeInUp 2s forwards";

        container.appendChild(image);
    });
}
