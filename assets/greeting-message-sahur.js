function generateGreeting() {
  var currentDate = new Date();
  var currentHour = currentDate.getHours();
  var greetingMessage;

  if (currentHour < 3) {
    greetingMessage = "Selamat Pagi!";
  } else if (currentHour < 4) {
    greetingMessage = "Sahur! Sahur! Sahur!";
  } else if (currentHour < 10) {
    greetingMessage = "Selamat Pagi!";
  } else if (currentHour < 15) {
    greetingMessage = "Selamat Siang!";
  } else if (currentHour < 19) {
    greetingMessage = "Selamat Sore!";
  } else {
    greetingMessage = "Selamat Malam!";
  }

  return greetingMessage;
}
var greetingMessage = document.getElementById("greeting-message");

setInterval(function() {
  var newGreeting = generateGreeting();
  greetingMessage.innerHTML = newGreeting;
}, 5000);
