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

console.log(getComputerChoice())
