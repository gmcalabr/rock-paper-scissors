// ROCK PAPER SCISSORS in CONSOLE

// Start game with 0, 0, declare global variables
var computerPoints = 0;
var humanPoints = 0;
var roundNumber = 1;

while (roundNumber < 6) {
    playRound();
}
    gameFinalScore();
// CODE ENDS HERE




    
// functions!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Root function to play a round
function playRound() {
    // Collect the human player's choice
    let humanChoice = "0";
    humanChoice = getHumanChoice();

    console.log("DEBUG Testing step 2: human choice");
    console.log("DEBUG Your choice is: ", humanChoice); 

    // Calculate the computer player's choice
    let computerChoice = "0";
    computerChoice = getComputerChoice();

    console.log("DEBUG Testing step 1: computer choice");
    console.log("DEBUG computer chooses: ", computerChoice);

    // Run function to compare choices
    let roundPoint = determineRoundWinner(humanChoice, computerChoice);
    console.log("DEBUG roundPoint : ",roundPoint);
    scoreChange(roundPoint)
    console.log("Current Score")
    console.log("Human: ", humanPoints);
    console.log("Computer: ", computerPoints);
    return
}

// Main function to select winner of a round
function determineRoundWinner(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return 0;
    } else if ((humanChoice == "rock" && computerChoice == "scissors") || 
               (humanChoice == "paper" && computerChoice == "rock") || 
               (humanChoice == "scissors" && computerChoice == "paper")) {
        return 1;
    } else {
        return -1;
    }
}

// Main function to calculate and display the winner @EoG
function gameFinalScore() {
    console.log("The game is over. The score is...");
    console.log("Computer: ", computerPoints);
    console.log("Human: ", humanPoints);
    if (computerPoints === humanPoints) {
        console.log("It is a Tie");
    } else if (computerPoints > humanPoints) {
        console.log("The computer has won");
    } else {
        console.log("You have won");
    }
}

// Function for handling scores
function scoreChange(roundPoint) {
    roundNumber = roundNumber + 1;
    //if roundPoints is 0, output existing score
    if (roundPoint == 0) {
        return
    } else if (roundPoint > 0) {
        humanPoints = humanPoints + 1;
        return
    } else {
        computerPoints = computerPoints + 1;
        return
    }
}

// Main Function to get the human player's choice
function getHumanChoice() {

    let humanChoice = "0";
    let keepGoing = true;

    while (keepGoing) {
        console.log("--------------------------------------------");
        console.log("Round number ",roundNumber);
        humanChoice = prompt("Let's play! Please enter: Rock, Paper, or Scissors");
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
            keepGoing = false;
            return humanChoice;
        } else {
            humanChoice = alert("You have entered your choice incorrectly. You must enter either Rock, Paper, or Scissors");
        }
    }
}

// Main Function to get a computer's RPS choice getComputerChoice
function getComputerChoice() {
    
    // Create a random number from 1-3
    let cpuChoiceNum = 0;
    cpuChoiceNum = randomOneThree();
    
    // Assign that number to a choice, Rock, Paper, Scissors
    let computerChoice = "0";
    computerChoice = convertNumRPSStr(cpuChoiceNum);

    return computerChoice;
}

// Sub Function to create a random number from 1-3
function randomOneThree() {
    let randomNum = 0;
    randomNum = Math.ceil(Math.random() * 3);
    return randomNum;
}

// Sub Function to convert a random number from 1-3 to Rock, Paper, or Scissors
function convertNumRPSStr(cpuChoiceNum) {
    if (cpuChoiceNum === 1) {
        computerChoice = "rock"
    } else if (cpuChoiceNum === 2) {
        computerChoice = "paper"        
    } else if (cpuChoiceNum === 3) {
        computerChoice = "scissors"       
    } else {
        console.log("ERROR, cpuChoiceNum is out of range")
        console.log("cpuChoiceNum = ${cpuChoiceNum}")
    }
    return computerChoice;
}

// Function to Set Scores to zero
function resetScore() {
    computerPoints = 0;
    humanPoints = 0;
}
