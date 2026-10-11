
const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissors = document.querySelector("#btnScissors");
const computerComment = document.querySelector("#computerComment");
const spanHumanScore = document.querySelector("#humanScore");
const spanComputerScore = document.querySelector("#computerScore");

let humanScore = 0;
let computerScore = 0;
let gameOver = false;

btnRock.addEventListener("click", () => playRound("Rock", getComputerChoice()));
btnPaper.addEventListener("click", () => playRound("Paper", getComputerChoice()));
btnScissors.addEventListener("click", () => playRound("Scissors", getComputerChoice()));


function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            throw new Error("Logic error: randomNumber should be \
                an integer between 0 and 2");
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    let choices = computerChoice + humanChoice;
    switch (choices) {
        case "rockrock": 
            computerComment.textContent = "Our rocks have touched! it is a tie.";
            break;
        case "rockpaper":
            computerComment.textContent = "Paper beats rock, I have been defeated.";
            humanScore++;
            break;
        case "rockscissors":
            computerComment.textContent = "I have destroyed your scissors, puny human.";
            computerScore++;
            break;
        case "paperrock":
            computerComment.textContent = "You are smothered, yield.";
            computerScore++;
            break;
        case "paperpaper":
            computerComment.textContent = "The outcome of this paper battle is irrelevant";
            break;
        case "paperscissors":
            computerComment.textContent = "I have been cut, you have bested me.";
            humanScore++;
            break;
        case "scissorsrock":
            computerComment.textContent = "NO! It cannot be. I have been crushed.";
            humanScore++;
            break;
        case "scissorspaper":
            computerComment.textContent = "You are no match for my blade.";
            computerScore++;
            break;
        case "scissorsscissors":
            computerComment.textContent = "Our blades have met, neither can make progress.";
            break;
        default:
            throw new Error(`LogicError: invalid choices, ${choices}`);
    }

    spanHumanScore.textContent = humanScore
    spanComputerScore.textContent = computerScore;

    if (!gameOver) {
        if (humanScore >= 5) {
            gameOver = true;
            alert("You have won the game! Refresh the browser to start again.")
        }
        else if (computerScore >= 5) {
            gameOver = true;
            alert("You have lost the game. Refresh the browser to start again.")
        }
    }

}