// NOTES/TODO
//     XXX 1. fix the possible 5 ties game tie Scenario 
//     XXX 2. Reorganize functions more logically
//     XXX 3. Rename all variables inside functions based only on local function 
//     XXX 4. Clean/finish all comments
//     XXX 5. Implement setting score to zero
//     XXX 6. Clean DEBUG log lines
//     XXX 7. Create function to redeclare variables
//     XXX 8. Make "you" and "human" consistent (call the user human).
//     9. Add a total game counter at the end of each round and the end of all games
//     XXX 10. Relocate the Console log functions for ----- and Round number X
//     XXX 11. Make all lines end in ;
//     12. DEBUG SCORES ISSUES

// ROCK PAPER SCISSORS in CONSOLE

// Start game with 0, 0, declare global variables
var computerPoints = 0;
var humanPoints = 0;
var roundNumber = 1;
var notDoneYet = true;
var totalGamesPlayed = 0;
var humanWins = 0;
var computerWins = 0;

// Game Loop
while (notDoneYet) {
    // Loop for 5 rounds
    while (roundNumber < 6) {
        console.log("--------------------------------------------");
        console.log("~~~~~Round number ",roundNumber);
        playRound();
    }
        // Calculate game score and ask for replay
        gameFinalScore();
        console.log("Total games score: The human has ", humanPoints, " points. The computer has ", computerPoints, " points.");
        if (confirm("Would the human like to play another round?")) {
            resetGame();
            console.log("Great, let's play another. 0 - 0");
            totalGamesPlayed = totalGamesPlayed + 1;
        } else {
            notDoneYet = false;
            totalGamesPlayed = totalGamesPlayed +1;
            console.log("Thanks for playing!");
            console.log("The human has played a total of ", totalGamesPlayed ,"game(s).");
            console.log("The human has won ", humanWins, " total games and the computer has won ", computerWins, " total games.")
        }
}

// Game Ends Here

// functions!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Main Round Play Function
function playRound() {

    // Collect the human player's choice
    let humanChoice = "0";
    humanChoice = getHumanChoice();
    console.log("The human chose: ", humanChoice);

    // Calculate the computer player's choice
    let computerChoice = "0";
    computerChoice = getComputerChoice();
    console.log("The computer chose: ", computerChoice);

    // Compare player hands and report
    let roundPoint = determineRoundWinner(humanChoice, computerChoice);
    scoreChange(roundPoint);
    console.log("~~~~~Current Score");
    console.log("Human: ", humanPoints);
    console.log("Computer: ", computerPoints);
    return
}

// Poll human for RPS choice
function getHumanChoice() {
    // Declare local variables
    let hand = "0";
    let keepGoing = true;

    // loop to prompt for user's input
    while (keepGoing) {

        hand = prompt("Let's play! Please enter: Rock, Paper, or Scissors");
        hand = hand.toLowerCase();

        //check input
        if (hand === "rock" || hand === "paper" || hand === "scissors") {
            keepGoing = false;
            return hand;
        } else {
            hand = alert("The human has entered their choice incorrectly. The human must enter either Rock, Paper, or Scissors");
        }
    }
}

// Generate computer's RPS choice
function getComputerChoice() {
    
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
        console.log("ERROR, cpuChoiceNum is out of range");
        console.log("cpuChoiceNum = ${cpuChoiceNum}");
    }

    return hand;
}

// Select Round winner
function determineRoundWinner(humanChoice, computerChoice) {
    // Calculate who won and assign 0 (tie), 1 (human win), or -1 (computer win)
    if (humanChoice == computerChoice) {
        console.log("Tie round")
        return 0;
    } else if ((humanChoice == "rock" && computerChoice == "scissors") || 
               (humanChoice == "paper" && computerChoice == "rock") || 
               (humanChoice == "scissors" && computerChoice == "paper")) {
        console.log("Human wins")
        return 1;
    } else {
        console.log("Computer wins")
        return -1;
    }
}

// Score adder
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

// Calculate/display End of Game Score
function gameFinalScore() {

    // Declare game finals
    console.log("~~~~~The game is over. ~~~~~ The score is... ~~~~~");
    console.log("Computer: ", computerPoints);
    console.log("Human: ", humanPoints);

    // If statement to output correct endgame description
    if (computerPoints === humanPoints) {
        console.log("It is a Tie");
    } else if (computerPoints > humanPoints) {
        console.log("The computer has won");
        computerWins = computerWins + 1;
    } else if (humanPoints > computerPoints) {
        console.log("The human has won");
        humanWins = humanWins + 1;
    } else {
        console.log("There was a tie! There's only a 0.4% chance of that happening. Good thing I wrote this eventuality in or this computer would have just blown up.");
    }
}

// Reet Game
function resetGame() {
    computerPoints = 0;
    humanPoints = 0;
    computerPoints = 0;
    humanPoints = 0;
    roundNumber = 1;
    notDoneYet = true;
}
