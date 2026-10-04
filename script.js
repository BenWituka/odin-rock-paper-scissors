
playGame();

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

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice, puny human.");
    while (humanChoice != "rock" && humanChoice != "paper"
        && humanChoice!= "scissors") {
            humanChoice = prompt("Fool! You must choose rock, \
                paper or scissors");
    }
    return humanChoice;
}



function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`Human score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
    }

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        let choices = computerChoice + humanChoice;
        switch (choices) {
            case "rockrock": 
                console.log("Our rocks have touched! it is a tie.");
                return;
            case "rockpaper":
                console.log("Paper beats rock, I have been defeated.");
                humanScore++;
                return;
            case "rockscissors":
                console.log("I have destroyed your scissors, puny human.");
                computerScore++;
                return;
            case "paperrock":
                console.log("You are smothered, yield.");
                computerScore++;
                return;
            case "paperpaper":
                console.log("The outcome of this paper battle is irrelevant");
                return;
            case "paperscissors":
                console.log("I have been cut, you have bested me.");
                humanScore++;
                return;
            case "scissorsrock":
                console.log("NO! It cannot be. I have been crushed.");
                humanScore++;
                return;
            case "scissorspaper":
                console.log("You are no match for my blade.");
                computerScore++;
                return;
            case "scissorsscissors":
                console.log("Our blades have met, neither can make progress.");
                return;
            default:
                throw new Error(`LogicError: invalid choices, ${choices}`);
        }
    }

}