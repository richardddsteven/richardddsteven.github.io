var title = document.querySelector(".title");
var courseFeatureElements = document.querySelectorAll(".course-feature");
var restartButton = document.getElementById("restart-btn");
var installButton = document.getElementById("install-btn");
let deferredPrompt;

// Daftarkan Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("/sw.js").then(() => {
        console.log("Service Worker registered!");
    });
}

// Animasi elemen secara bertahap
function animate() {
    title.classList.remove("animate-in");
    courseFeatureElements.forEach((element) => element.classList.remove("animate-in"));
    restartButton.classList.remove("animate-in");
    installButton.classList.remove("animate-in");

    setTimeout(() => title.classList.add("animate-in"), 1000);
    setTimeout(() => courseFeatureElements[0].classList.add("animate-in"), 3000);
    setTimeout(() => courseFeatureElements[1].classList.add("animate-in"), 4500);
    setTimeout(() => courseFeatureElements[2].classList.add("animate-in"), 6000);
    setTimeout(() => courseFeatureElements[3].classList.add("animate-in"), 7500);
    setTimeout(() => courseFeatureElements[4].classList.add("animate-in"), 9000);
    setTimeout(() => courseFeatureElements[5].classList.add("animate-in"), 10500);
    setTimeout(() => courseFeatureElements[6].classList.add("animate-in"), 12000);
    setTimeout(() => restartButton.classList.add("animate-in"), 13500);
    setTimeout(() => installButton.classList.add("animate-in"), 15000);
}

// Event listener untuk restart animasi
restartButton.addEventListener("click", animate);

// Event listener untuk menangkap event "beforeinstallprompt"
window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;
    installButton.style.display = "inline-block"; // Tampilkan tombol install
});

// Event listener untuk menangani instalasi PWA
installButton.addEventListener("click", () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === "accepted") {
                console.log("User accepted the install prompt");
                installButton.style.display = "none"; // Sembunyikan tombol Install setelah instalasi
            } else {
                console.log("User dismissed the install prompt");
            }
            deferredPrompt = null;
        });
    }
});

// Event listener untuk mendeteksi jika aplikasi sudah diinstal
window.addEventListener("appinstalled", () => {
    console.log("PWA telah diinstal");
    installButton.style.display = "none"; // Sembunyikan tombol Install
});

// Panggil fungsi animasi pertama kali
animate();
