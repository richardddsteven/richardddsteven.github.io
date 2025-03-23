var title = document.querySelector(".title");
var courseFeatureElements = document.querySelectorAll(".course-feature");
var startButton = document.getElementById("start-again-btn");
var installButton = document.getElementById("install-btn");
var deferredPrompt; // Menyimpan event "beforeinstallprompt"

navigator.serviceWorker.register("/sw.js").then(() => {
  console.log("Service Worker registered!");
});

function animate() {
  title.classList.remove("animate-in");
  courseFeatureElements.forEach((element) => element.classList.remove("animate-in"));
  startButton.classList.remove("animate-in");
  installButton.classList.remove("animate-in");

  setTimeout(() => title.classList.add("animate-in"), 1000);
  setTimeout(() => courseFeatureElements[0].classList.add("animate-in"), 3000);
  setTimeout(() => courseFeatureElements[1].classList.add("animate-in"), 4500);
  setTimeout(() => courseFeatureElements[2].classList.add("animate-in"), 6000);
  setTimeout(() => courseFeatureElements[3].classList.add("animate-in"), 7500);
  setTimeout(() => courseFeatureElements[4].classList.add("animate-in"), 9000);
  setTimeout(() => courseFeatureElements[5].classList.add("animate-in"), 10500);
  setTimeout(() => courseFeatureElements[6].classList.add("animate-in"), 12000);
  setTimeout(() => startButton.classList.add("animate-in"), 13500);
  setTimeout(() => installButton.classList.add("animate-in"), 15000);
}

button.addEventListener("click", animate);
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault(); // Mencegah prompt otomatis muncul
  deferredPrompt = event; // Simpan event
  installButton.style.display = "inline-block"; // Tampilkan tombol Install

  installButton.addEventListener("click", () => {
    deferredPrompt.prompt(); // Tampilkan prompt install
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
      deferredPrompt = null; // Reset event setelah digunakan
      installButton.style.display = "none"; // Sembunyikan tombol setelah dipakai
    });
  });
});

animate();


