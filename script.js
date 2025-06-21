let secret = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
  let guess = document.getElementById("guess").value;
  let message = document.getElementById("message");

  if (guess == secret) {
    message.textContent = "🎉 Correct!";
  } else {
    message.textContent = "❌ Try again!";
  }
}
