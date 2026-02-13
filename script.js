document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("unlockBtn");
    const passwordInput = document.getElementById("password");
    const errorText = document.getElementById("error");

    const correctPassword = "Anvi"; // 🔴 CHANGE THIS

    if (button) {
        button.addEventListener("click", function () {
            const entered = passwordInput.value.trim();

            if (entered === correctPassword) {
                localStorage.setItem("unlocked", "yes");
                window.location.href = "home.html";
            } else {
                errorText.innerText = "That’s not it my Love ❤️";
            }
        });
    }
});
