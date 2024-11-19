var computerPoints = 0;
var humanPoints = 0;
var roundNumber = 1;
var totalGamesPlayed = 0;
var humanWins = 0;
var computerWins = 0;

document.addEventListener("DOMContentLoaded", restartGame());
let menu = document.querySelector('#menu');

menu.addEventListener('click', (event) => {
    // Starts round computation from button click
    let target = event.target.innerText;
    playRound(target);
});

function restartGame() {
    // restartGame() is used to zero out the variables at the beginning of page load/game restart
    // set variables to zero
    computerPoints = 0;
    humanPoints = 0;
    roundNumber = 1;

    // update gameStatus div

    clearDialog("gameStatus");

    if (totalGamesPlayed !== 0) {
        const message1 = `Out of ${totalGamesPlayed} games, the score is:`;
        const message2 = `Human: ${humanWins},    Computer: ${computerWins}`;
        displayMessage(message1, "gameStatus");
        displayMessage(message2, "gameStatus"); 
    }

};

function playRound(humanChoice) {
    // playRound() is triggered by the user clicking a hand button. It runs out
    // the length of each round and also checks the total number of rounds as to
    // be able to trigger a game end after round 5. Here, humanChoice is the
    // button clicked by the user

    // Calculate the computer player's choice
    let computerChoice = getComputerChoice();

    // Clear dialog and roundStatus displays
    clearDialog("roundStatus");
    clearDialog("dialog");

    //display hands is 'log' div
    const message = `You chose ${humanChoice} and the computer chose ${computerChoice}`;
    displayMessage(message, "dialog");

    // Compare player hands and report
    let roundWinner = determineRoundWinner(humanChoice, computerChoice);

    // Change the scoreboard and report
    scoreChange(roundWinner);

    //change/check round number - trigger end-game and restart-game if round 5
    if (roundNumber > 5) {
        endOfGame();
    }

    //run restartGame() to reset scores and start another round
    //clearDialog();
};

function getComputerChoice() {
    // L2 FUNCTION Generate computer's RPS choice
    
    // Declare variables
    let hand = "0";
    let randomOneToThree = 0;
    
    // Create a random number from 1-3
    randomOneToThree = Math.ceil(Math.random() * 3);
    
    // Assign that randomOneToThree to a choice, Rock, Paper, Scissors
    if (randomOneToThree === 1) {
        hand = "rock";
    } else if (randomOneToThree === 2) {
        hand = "paper";
    } else if (randomOneToThree === 3) {
        hand = "scissors";
    } else {
        displayMessage("ERROR, cpuChoiceNum is out of range", "dialog");
        displayMessage(`cpuChoiceNum = ${cpuChoiceNum}`, "dialog");
    }

    return hand;
};

function determineRoundWinner(humanChoice, computerChoice) {
    // L2 FUNCTION Select Round winner
    // Declare message style variable
    let compareVerb = "0";

    // Calculate who won and assign 0 (tie), 1 (human win), or -1 (computer win)
    if (humanChoice == computerChoice) {
        compareVerb = " ties ";
        displayMessage(capitalizeFirstLetter(humanChoice + compareVerb + computerChoice), "dialog");
        displayMessage("Tie round", "dialog")
        return 0;
    } else if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")) {
        compareVerb = compareVerbDecider(humanChoice);
        displayMessage(capitalizeFirstLetter(humanChoice + compareVerb + computerChoice), "dialog");
        displayMessage("Human wins", "dialog")
        return 1;
    } else {
        compareVerb = compareVerbDecider(computerChoice);
        displayMessage(capitalizeFirstLetter(computerChoice + compareVerb + humanChoice), "dialog");
        displayMessage("Computer wins", "dialog")
        return -1;
    }
};

function compareVerbDecider(winnerChoice) {
    // L3 Function decide what verb compares the losing and wining hands

    // define compareVerb for use
    let compareVerb = "0";

    // calulate the compare verb based on how the winner won 
    if (winnerChoice == "rock" ) {
        compareVerb = " crushes ";
    } else if (winnerChoice == "paper") {
        compareVerb = " covers ";
    } else if (winnerChoice == "scissors") {
        compareVerb = " cuts ";
    }
    
    return compareVerb;
};

function capitalizeFirstLetter(statement) {
    // L4 Function Captialize the first letter function
    return String(statement).charAt(0).toUpperCase() + String(statement).slice(1);
};

function scoreChange(roundWinner) {
    // L4 Function Score adder and messanger
    roundNumber = roundNumber + 1;
    //if roundWinners is 0, output existing score
    if (roundWinner > 0) {
        humanPoints = humanPoints + 1;
    } else if (roundWinner < 0) {
        computerPoints = computerPoints + 1;
    }

    displayMessage(`Current Round Score: Human: ${humanPoints}, 
        Computer: ${computerPoints}`, "roundStatus");

    return ;
};

function endOfGame() {
    // Main Function to end a 5 round game and choose restart
    //display end of game message and win counts
    let EOGMessage1 = "The game is over";
    let EOGMessage2 = "";

    if (humanPoints == computerPoints) {
        EOGMessage2 = "You have tied the computer";
    } else if (humanPoints > computerPoints) {
        EOGMessage2 = "You have won";
    } else {
        EOGMessage2 = "You have lost";
    };

    displayMessage(EOGMessage1, "gameStatus");
    displayMessage(EOGMessage2, "gameStatus");

    createRestartButton();

    //if yes trigger reset function to wipe dialog
    //print current game wins to dialog
};

function displayMessage(messageText, location) {
    // Creates and appends all messages upon request
    const messageDiv = document.querySelector(`#${location}`);

    const newMessage = document.createElement("p");
    newMessage.textContent = messageText;
    newMessage.style = "color: lightblue;";
    messageDiv.appendChild(newMessage);
};

function clearDialog(location) {
// L2 Function to clear dialog display
    // remove old dialog div
    const main =document.querySelector("#main");
    const messageDiv = document.querySelector(`#${location}`)
    main.removeChild(messageDiv);
    
    // create new empty dialog div
    const newMessageDiv = document.createElement("div")
    newMessageDiv.id = `${location}`;
    main.appendChild(newMessageDiv);
};

function createRestartButton() {
    // Creates and appends a button that restarts the game
    const messageDiv = document.querySelector("#gameStatus");

    const restartButton = document.createElement("button");
    restartButton.textContent = "Click here to play another game";
    restartButton.style = "color: green;";
    messageDiv.appendChild(restartButton);

    // temporarily disable RPS buttons
    removeEventListener('click');

    // enable restartButton
    // menu.addEventListener('click', (event) => {
    //     // Starts round computation from button click
    //     let target = event.target.innerText;
    //     playRound(target);
    // });
    // run next function

};