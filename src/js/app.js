var title = document.querySelector('.title');
var courseFeatureElements = document.querySelectorAll('.course-feature');
var startbutton = document.querySelector('#start-btn');
var installButton = document.querySelector('#install-btn');
var deferredPrompt;



navigator.serviceWorker.register('/sw.js');



function animate() {
  title.classList.remove('animate-in');
  for (var i = 0; i < courseFeatureElements.length; i++) {
    courseFeatureElements[i].classList.remove('animate-in');
  }
  startbutton.classList.remove('animate-in');
  installButton.classList.remove('animate-in');

  setTimeout(function () {
    title.classList.add('animate-in');
  }, 1000);

  setTimeout(function () {
    courseFeatureElements[0].classList.add('animate-in');
  }, 3000);

  setTimeout(function () {
    courseFeatureElements[1].classList.add('animate-in');
  }, 4500);

  setTimeout(function () {
    courseFeatureElements[2].classList.add('animate-in');
  }, 6000);

  setTimeout(function () {
    courseFeatureElements[3].classList.add('animate-in');
  }, 7500);

  setTimeout(function () {
    courseFeatureElements[4].classList.add('animate-in');
  }, 9000);

  setTimeout(function () {
    courseFeatureElements[5].classList.add('animate-in');
  }, 10500);

  setTimeout(function () {
    courseFeatureElements[6].classList.add('animate-in');
  }, 12000);

  setTimeout(function () {
    startbutton.classList.add('animate-in');
  }, 13500);

  setTimeout(function () {
    installButton.classList.add('animate-in');
  }, 13500);
}

animate();


window.addEventListener('beforeinstallprompt', function(event) {
  console.log('beforeinstallprompt fired');
  event.preventDefault();
  deferredPrompt = event;
  installButton.style.display = 'block'; // Show the install button
});

installButton.addEventListener('click', function() {
  installButton.style.display = 'none'; // Hide the install button
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then(function(choiceResult) {
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the A2HS prompt');
    } else {
      console.log('User dismissed the A2HS prompt');
    }
    deferredPrompt = null;
  });
});

startbutton.addEventListener('click', function() {
  animate();
});