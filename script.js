function getComputerChoice() {
    let options = ["rock", "paper", "scissors"]
    let makeChoice = (options) => {
        randval = Math.floor(Math.random() * options.length)
        return (options[randval])
    }

    return makeChoice(options)
}


let options = document.querySelector(".options")
let humanScore = 0
let computerScore = 0
let dashboard = document.querySelector("#dashboard")
let runningScore = document.createElement("p")
let finalScore = document.createElement("p")

dashboard.appendChild(runningScore)
dashboard.appendChild(finalScore)

options.addEventListener("click", (e) => {
    humanChoice = e.target.textContent
    computerChoice = getComputerChoice()
    result = playRound(humanChoice, computerChoice)
    runningScore.textContent = result

    finalScore.textContent = ""

    if (humanScore == 5 || computerScore == 5) {
        finalScore.textContent =
            (humanScore > computerScore) ?
                `Congratulations! your won the game \nhuman ${humanScore}:${computerScore} computer ` :
                `Better luck next time.You lost...\n
        computer ${computerScore}:${humanScore} human`

        humanScore = 0
        computerScore = 0
    }
})

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
    } else if (humanChoice == computerChoice) {
        return (`It's a tie, you both picked ${humanChoice}`)
    }
    else {
        computerScore++
        return (`You lose! ${computerChoice} beats ${humanChoice}`)
    }
}


