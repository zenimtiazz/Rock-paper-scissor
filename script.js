let array = ["rock", "paper", "scissors", "lizard", "spock"];

//Variables
var playerChoice = "";
var computerChoice;
var playerScore = 0;
var computerScore = 0;

//Container to display results
const container = document.querySelector("#container");
const content = document.createElement("div");
content.style.textAlign = "center";

//Displaying scores
const player = document.querySelector(".player-score");
player.style.fontWeight = "bold";
const computer = document.querySelector(".computer-score");
computer.style.fontWeight = "bold";

//computer chooses random item from array above
var computerGo = () => {
  computerChoice = array[Math.floor(Math.random() * array.length)];
};

// Button: Rock
var btn = document.querySelector("#rock");
btn.onclick = () => {
  playerChoice = "rock";
  playRound();
};

// Button: Paper
var btn = document.querySelector("#paper");
btn.onclick = () => {
  playerChoice = "paper";
  playRound();
};

// Button: Scissors
var btn = document.querySelector("#scissors");
btn.onclick = () => {
  playerChoice = "scissors";
  playRound();
};

// Button: Lizard
var btn = document.querySelector("#lizard");
btn.onclick = () => {
  playerChoice = "lizard";
  playRound();
};

// Button: Spock
var btn = document.querySelector("#spock");
btn.onclick = () => {
  playerChoice = "spock";
  playRound();
};

// Checks score and ends game if either player reaches 5 points
var check = () => {
  if (playerScore == 5) {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
    document.getElementById("lizard").disabled = true;
    document.getElementById("spock").disabled = true;
    content.textContent =
      "Woot! Are you a robot or something? Refresh to play again!";
  } else if (computerScore == 5) {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
    document.getElementById("lizard").disabled = true;
    document.getElementById("spock").disabled = true;
    content.textContent = "Game over! Great, now computers will rule us. Refresh to play again!";
  }
};

//After the user selects an option, this function runs to play the game.
var playRound = () => {
  computerGo();
  if (playerChoice === "rock" && computerChoice === "rock") {
    content.textContent = "Rock vs rock! That's a tie!";
    check();
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    content.textContent = "You lose! Paper covers rock!";
    container.appendChild(content);
    computerScore++;
    computer.textContent = "Computer score: " + computerScore;
    check();
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    content.textContent = "You win! Rock smashes scissors!";
    container.appendChild(content);
    playerScore++;
    player.textContent = "Player score: " + playerScore;
    check();
  } else if (playerChoice === "rock" && computerChoice === "lizard") {
    content.textContent = "You win! Rock smashes lizard!";
    container.appendChild(content);
    playerScore++;
    player.textContent = "Player score: " + playerScore;
    check();
  } else if (playerChoice === "rock" && computerChoice === "spock") {
    content.textContent = "You lose! Spock vaporizes rock!";
    container.appendChild(content);
    computerScore++;
    computer.textContent = "Computer score: " + computerScore;
    check();
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    content.textContent = "You win! Paper covers rock!";
    container.appendChild(content);
    playerScore++;
    player.textContent = "Player score: " + playerScore;
    check();
  } else if (playerChoice === "paper" && computerChoice === "paper") {
    content.textContent = "Paper vs Paper! That's a tie!";
    check();
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    content.textContent = "You lose! Scissors cut paper!";
    container.appendChild(content);
    computerScore++;
    computer.textContent = "Computer score: " + computerScore;
    check();
  } else if (playerChoice === "paper" && computerChoice === "lizard") {
    content.textContent = "You lose! Lizard eats paper!";
    container.appendChild(content);
    computerScore++;
    computer.textContent = "Computer score: " + computerScore;
    check();
  } else if (playerChoice === "paper" && computerChoice === "spock") {
    content.textContent = "You win! Paper disproves Spock!";
    container.appendChild(content);
    playerScore++;
    player.textContent = "Player score: " + playerScore;
    check();
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    content.textContent = "You lose! Rock smashes scissors!";
    container.appendChild(content);
    computerScore++;
    computer.textContent = "Computer score: " + computerScore;
    check();
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    content.textContent = "You win! Scissors cut paper!";
    container.appendChild(content);
    playerScore++;
    player.textContent = "Player score: " + playerScore;
    check();
  } else if (playerChoice === "scissors" && computerChoice === "scissors") {
    content.textContent = "Scissors vs Scissors! That's a tie!";
    check();
  } else if (playerChoice === "scissors" && computerChoice === "lizard") {
    content.textContent = "You win! Scissors decapitate lizard!";
    container.appendChild(content);
    playerScore++;
    player.textContent = "Player score: " + playerScore;
    check();
  } else if (playerChoice === "scissors" && computerChoice === "spock") {
    content.textContent = "You lose! Spock smashes scissors!";
    container.appendChild(content);
    computerScore++;
    computer.textContent = "Computer score: " + computerScore;
    check();
  } else if (playerChoice === "lizard" && computerChoice === "rock") {
    content.textContent = "You lose! Rock crushes lizard!";
    container.appendChild(content);
    computerScore++;
    computer.textContent = "Computer score: " + computerScore;
    check();
  } else if (playerChoice === "lizard" && computerChoice === "paper") {
    content.textContent = "You win! Lizard eats paper!";
    container.appendChild(content);
    playerScore++;
    player.textContent = "Player score: " + playerScore;
    check();
  } else if (playerChoice === "lizard" && computerChoice === "scissors") {
    content.textContent = "You lose! Scissors decapitate lizard!";
    container.appendChild(content);
    computerScore++;
    computer.textContent = "Computer score: " + computerScore;
    check();
  } else if (playerChoice === "lizard" && computerChoice === "lizard") {
    content.textContent = "Lizard vs lizard! Don't let them fight!";
    check();
  } else if (playerChoice === "lizard" && computerChoice === "spock") {
    content.textContent = "You win! Lizard poisons Spock!";
    container.appendChild(content);
    playerScore++;
    player.textContent = "Player score: " + playerScore;
    check();
  } else if (playerChoice === "spock" && computerChoice === "rock") {
    content.textContent = "You win! Spock vaporizes rock!";
    container.appendChild(content);
    playerScore++;
    player.textContent = "Player score: " + playerScore;
    check();
  } else if (playerChoice === "spock" && computerChoice === "paper") {
    content.textContent = "You lose! Paper disproves Spock!";
    container.appendChild(content);
    computerScore++;
    computer.textContent = "Computer score: " + computerScore;
    check();
  } else if (playerChoice === "spock" && computerChoice === "scissors") {
    content.textContent = "You win! Spock smashes scissors!";
    container.appendChild(content);
    playerScore++;
    player.textContent = "Player score: " + playerScore;
    check();
  } else if (playerChoice === "spock" && computerChoice === "lizard") {
    content.textContent = "You lose! Lizard poisons Spock!";
    container.appendChild(content);
    computerScore++;
    computer.textContent = "Computer score: " + computerScore;
    check();
  } else if (playerChoice === "spock" && computerChoice === "spock") {
    content.textContent = "Spock vs Spock? What is going on?!";
    check();
  } else {
    content.textContent = "Something went wrong!";
  }
};










