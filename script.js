// ROCK PAPER SCISSORS, BROWSER CONSOLE EDITION

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
        console.log("--------------------------------------------");
        console.log("--------------------------------------------");
        console.log("--------------------------------------------");

        // Ask if user wants to play another game
        if (confirm("Would the human like to play another round?")) {
            resetGame();
            console.log("Great, let's play another. It's ", humanWins, " - ", computerWins);
            totalGamesPlayed = totalGamesPlayed + 1;
        } else {
            notDoneYet = false;
            totalGamesPlayed = totalGamesPlayed +1;
            console.log("Thanks for playing!");
            console.log("The human played ", totalGamesPlayed ,"game(s).");
            console.log("The human won ", humanWins, " games.");
            console.log("The computer won ", computerWins, " games.")
        }
}

// Game Ends Here //

// function declarations //

// MAIN FUNCTION Main Round Play Function
function playRound() {

    // Collect the human player's choice
    let humanChoice = "0";
    humanChoice = getHumanChoice();

    // Calculate the computer player's choice
    let computerChoice = "0";
    computerChoice = getComputerChoice();

    // Compare player hands and report
    let roundPoint = determineRoundWinner(humanChoice, computerChoice);

    // Change the scoreboard and report
    scoreChange(roundPoint);
    return ;
}

// L2 FUNCTION Poll human for RPS choice
function getHumanChoice() {
    // Declare local variables
    let hand = "0";
    let keepGoing = true;

    // Wait for the user to click a button
    
    return hand;
}

// L2 FUNCTION Generate computer's RPS choice
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
    // Let user know what the computer picked
    console.log("The computer chose: ", hand);
    return hand;
}

// L2 FUNCTION Select Round winner
function determineRoundWinner(humanChoice, computerChoice) {
    // Declare message style variable
    let compareVerb = "0";

    // Calculate who won and assign 0 (tie), 1 (human win), or -1 (computer win)
    if (humanChoice == computerChoice) {
        compareVerb = " ties ";
        console.log(capitalizeFirstLetter(humanChoice + compareVerb + computerChoice));
        console.log("Tie round")
        return 0;
    } else if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")) {
        compareVerb = compareVerbDecider(humanChoice);
        console.log(capitalizeFirstLetter(humanChoice + compareVerb + computerChoice));
        console.log("Human wins")
        return 1;
    } else {
        compareVerb = compareVerbDecider(computerChoice);
        console.log(capitalizeFirstLetter(computerChoice + compareVerb + humanChoice));
        console.log("Computer wins")
        return -1;
    }
}
// L3 Function decide what verb compares the losing and wining hands
function compareVerbDecider(winnerChoice) {

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
}


// L4 Function Captialize the first letter function
function capitalizeFirstLetter(statement) {
    return String(statement).charAt(0).toUpperCase() + String(statement).slice(1);
}

// L4 Function Score adder and messanger
function scoreChange(roundPoint) {
    roundNumber = roundNumber + 1;
    //if roundPoints is 0, output existing score
    if (roundPoint > 0) {
        humanPoints = humanPoints + 1;
    } else if (roundPoint < 0) {
        computerPoints = computerPoints + 1;
    }

    console.log("~~~~~Current Score");
    console.log("Human: ", humanPoints);
    console.log("Computer: ", computerPoints);
    return ;
}

// MAIN FUNCTION Calculate/display End of Game Score
function gameFinalScore() {

    // Declare game finals
    console.log("--------------------------------------------");
    console.log("~~~~~The game is over. ~~~~~ The final score is ~~~~~");

    console.log("Human: ", humanPoints);
    console.log("Computer: ", computerPoints);

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

// MAIN FUNCTION Reet Game
function resetGame() {
    computerPoints = 0;
    humanPoints = 0;
    computerPoints = 0;
    humanPoints = 0;
    roundNumber = 1;
    notDoneYet = true;
}
