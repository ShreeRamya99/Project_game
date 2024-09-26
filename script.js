// Get HTML elements
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const resultText = document.getElementById('result-text');

// Choices
const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

// Load the scores from localStorage if available
let userScore = localStorage.getItem('userScore') ? parseInt(localStorage.getItem('userScore')) : 0;
let computerScore = localStorage.getItem('computerScore') ? parseInt(localStorage.getItem('computerScore')) : 0;

// Update the score display
userScoreSpan.textContent = userScore;
computerScoreSpan.textContent = computerScore;

// Game rules
const rules = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'rock']
};

// Function to get computer choice
function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// Function to play the game
function game(userChoice) {
  const computerChoice = getComputerChoice();

  if (userChoice === computerChoice) {
    resultText.textContent = 'Its a tie! Both chose ${userChoice}.';
  } else if (rules[userChoice].includes(computerChoice)) {
    userScore++;
    resultText.textContent = 'You win! ${userChoice} beats ${computerChoice}.';
  } else {
    computerScore++;
    resultText.textContent = 'You lose! ${computerChoice} beats ${userChoice}.';
  }

  // Update the score
  userScoreSpan.textContent = userScore;
  computerScoreSpan.textContent = computerScore;

  // Save the scores in localStorage
  localStorage.setItem('userScore', userScore);
  localStorage.setItem('computerScore', computerScore);
}

// Add event listeners to buttons
document.querySelectorAll('.choice').forEach(button => {
  button.addEventListener('click', () => game(button.id));
});