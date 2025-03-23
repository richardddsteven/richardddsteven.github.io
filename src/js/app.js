var title = document.querySelector(".title");
var courseFeatureElements = document.querySelectorAll(".course-feature");
var button = document.querySelector(".start-over button");
var installButton = document.getElementById("install-btn");

navigator.serviceWorker.register("/sw.js").then(() => {
  console.log("Service Worker registered!");
});

function animate() {
  title.classList.remove("animate-in");
  courseFeatureElements.forEach((element) => element.classList.remove("animate-in"));
  button.classList.remove("animate-in");

  setTimeout(() => title.classList.add("animate-in"), 1000);
  setTimeout(() => courseFeatureElements[0].classList.add("animate-in"), 3000);
  setTimeout(() => courseFeatureElements[1].classList.add("animate-in"), 4500);
  setTimeout(() => courseFeatureElements[2].classList.add("animate-in"), 6000);
  setTimeout(() => courseFeatureElements[3].classList.add("animate-in"), 7500);
  setTimeout(() => courseFeatureElements[4].classList.add("animate-in"), 9000);
  setTimeout(() => courseFeatureElements[5].classList.add("animate-in"), 10500);
  setTimeout(() => courseFeatureElements[6].classList.add("animate-in"), 12000);
  setTimeout(() => button.classList.add("animate-in"), 13500);
}

animate();

button.addEventListener("click", animate);

// Handling install prompt
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;
  installButton.style.display = "inline-block";

  installButton.addEventListener("click", () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
      deferredPrompt = null;
    });
  });
});
