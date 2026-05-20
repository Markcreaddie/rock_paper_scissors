console.log("Hello world")

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"]
    let makeChoice = (options) => {
        randval = Math.floor(Math.random() * options.length)
        return (options[randval])
    }

    return makeChoice(options)
}

function getHumanChoice() {
    let choice = prompt("Select 'rock', 'paper' or 'scissors'")
    return choice
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    /*Winner declaration*/
    humanChoice = humanChoice.toLowerCase()
    const winningMoves = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    }
    if (winningMoves[humanChoice] == computerChoice) {
        humanScore++
        return (`You win! ${humanChoice} beats ${computerChoice}`)

    } else {
        computerScore++
        return (`You lose! ${computerChoice} beats ${humanChoice}`)
    }
}

function playGame() {
    humanScore = 0
    computerScore = 0

    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice()
        const humanSelection = getHumanChoice()
        playRound(humanSelection, computerSelection)
    }
    result = (humanScore > computerScore) ? `Congratulation, you won with a score of ${humanScore} : ${computerScore}` : `Sorry, you lost this time by ${computerScore}:${humanScore}`
    return result
}
console.log(playGame())