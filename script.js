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

function loadImages() {
    const container = document.getElementById("photos");

    if (typeof encryptedImages === "undefined" || encryptedImages.length === 0) {
        console.log("No images to load");
        return;
    }

    encryptedImages.forEach((img, i) => {
        const image = document.createElement("img");
        image.src = "data:image/jpeg;base64," + img.data;
        image.style.animationDelay = `${i + 1}s`;
        container.appendChild(image);
    });
}
