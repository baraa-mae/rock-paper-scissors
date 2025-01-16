let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
  let input = prompt(
    "Do you want to play Rock, paper, or scissors?"
  ).toLowerCase();
  if (input == "rock") return 0;
  if (input == "paper") return 1;
  if (input == "scissors") return 2;
}

function playGame() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();

  function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) console.log("Draw");

    else if (humanChoice == 0 && computerChoice == 1) {
      console.log("You lose, Paper beats Rock");
      computerScore++;
    }

    else if (humanChoice == 0 && computerChoice == 2) {
      console.log("You win!! Rock beats Scissors");
      humanScore++;
    }

    else if (humanChoice == 1 && computerChoice == 0) {
      console.log("You win, Paper beats Rock");
      humanScore++;
    }

    else if (humanChoice == 1 && computerChoice == 2) {
      console.log("You lose, Scissors beat Paper");
      computerScore++;
    }

    else if (humanChoice == 2 && computerChoice == 0) {
      console.log("You lose, Rock beats Scissors");
      computerScore++;
    }

    else {
      console.log("You Win!! Scissors beat Paper");
      humanScore++;
    }
  }

  for (let i = 0; i < 5; i++) {
    playRound();
    if (humanScore == 3 || computerScore == 3) {
      console.log();
      break;
    }
  }
  if (humanScore > computerScore) {
    console.log("You win the game!!");
  } else if (computerScore > humanScore) {
    console.log("Computer wins the game");
  } else {
    console.log("it's a tie");
  }
}

playGame();
