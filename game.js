function goBack() {
    window.location.href = "index.html";
}

let playerScore = 0;
let computerScore = 0;

function getBtn(choice) {
    const originalButton = document.getElementById(choice + "-btn");

    return originalButton.outerHTML.replace(/onclick="[^"]*"/g, '');

}



function playerChoice(choice) {

    document.getElementById("battleContainer").style.display = "none";
    document.getElementById("result").style.display = "none";
    document.getElementById("againBtn").style.display = "none"
    document.getElementById("vs").style.display = "none"

    const options = ['rock', 'paper', 'scissors'];
    const computerChoice = options[Math.floor(Math.random() * 3)];

    let result = "";

    document.getElementById("player-choice").innerHTML = getBtn(choice);
    document.getElementById("computer-choice").innerHTML = getBtn(computerChoice)

    document.getElementById("battleContainer").style.display = "flex";
    document.getElementById("result").style.display = "block"
    document.getElementById("againBtn").style.display = "block"
    document.getElementById("vs").style.display = "block"

    if (choice === computerChoice) {
        result = "It's a Draw!";
    } else if (
        (choice === 'scissors' && computerChoice === 'paper') ||
        (choice === 'rock' && computerChoice === 'scissors') ||
        (choice === 'paper' && computerChoice === 'rock') 
        
    ) {
        result = "You`ve Won!";
        playerScore++;
    } else {
        result = "Computer wins!";
        computerScore++;
    }

    document.getElementById("result").innerText = `${result}`

    drawScore();
    drawCompScore();
}

function playAgain() {
    window.location.href = "game.html"
}

