console.log("Hello world")

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"]
    let makeChoice = (options) => {
        randindex = Math.floor(Math.random() * options.length)
        return (options[randindex])
    }

    return makeChoice(options)
}

console.log(getComputerChoice())