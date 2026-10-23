
const answers = [
"Absolutely, starlight says yes",
"Not today, cosmic clouds say no",
"Your future is looking sparkly",
"The vibes are still loading",
"Ask after a little snack",
"Something lovely is on its way",
"Trust your curious heart",
"The universe says: maybe!",
"Plot twist incoming",
"Try again when the moon feels right",
];

const answerDisplay = document.querySelector("#answer");
const shakeButton = document.querySelector("#shake-button");
const ball = document.querySelector("#ball");

shakeButton.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * answers.length);

  // Restart the wiggle, even on the first click.
  ball.classList.remove("shaking");
  void ball.offsetWidth;
  ball.classList.add("shaking");

  answerDisplay.textContent = "…";

  setTimeout(function () {
    answerDisplay.textContent = answers[randomIndex];
    ball.classList.remove("shaking");
  }, 600);
});
