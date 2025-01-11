const gameBoard = document.querySelector("#game-board");
const startButton = document.querySelector("#start-btn");
const scoreDisplay = document.querySelector("#score");
const buttons = document.querySelectorAll(".btn");

let sequence = [];
let userSequence = [];
let score = 0;
let gameActive = false;

// Play sound for a button
const playSound = (color) => {
  const audio = new Audio(https://s3.amazonaws.com/freecodecamp/simonSound${color}.mp3);
  audio.play();
};

// Flash the button
const flashButton = (button) => {
  button.classList.add("active");
  setTimeout(() => button.classList.remove("active"), 300);
};

// Generate a random color sequence
const generateSequence = () => {
  const colors = ["green", "red", "yellow", "blue"];
  const randomColor = colors[Math.floor(Math.random() * 4)];
  sequence.push(randomColor);
};

// Play the sequence for the user
const playSequence = async () => {
  for (let color of sequence) {
    const button = document.querySelector(#${color});
    flashButton(button);
    playSound(sequence.indexOf(color) + 1);
    await new Promise((resolve) => setTimeout(resolve, 600));
  }
};

// Start the game
const startGame = () => {
  score = 0;
  sequence = [];
  userSequence = [];
  gameActive = true;
  scoreDisplay.textContent = score;
  generateSequence();
  playSequence();
};

// Check user input
const handleUserInput = (color) => {
  userSequence.push(color);
  playSound(userSequence.indexOf(color) + 1);

  if (userSequence[userSequence.length - 1] !== sequence[userSequence.length - 1]) {
    alert("Game Over! Your score: " + score);
    gameActive = false;
    return;
  }

  if (userSequence.length === sequence.length) {
    score++;
    scoreDisplay.textContent = score;
    userSequence = [];
    generateSequence();
    setTimeout(playSequence, 1000);
  }
};

// Attach event listeners to buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (gameActive) handleUserInput(button.id);
  });
});

// Start button event listener
startButton.addEventListener("click", startGame);
