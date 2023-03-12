function generateGreeting() {
  var currentDate = new Date();
  var currentHour = currentDate.getHours();
  var greetingMessage;

  if (currentHour < 12) {
    greetingMessage = "Selamat Pagi!";
  } else if (currentHour < 18) {
    greetingMessage = "Selamat Siang!";
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
