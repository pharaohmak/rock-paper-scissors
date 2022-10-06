const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('Error!');
    }
};

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return console.log('the game was a tie')
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'computer wins';
        } else {
            return 'user wins'
        }
    }

    if (userChoice === 'paper') {
        computerChoice === 'rock' || 'scissors';
        if (computerChoice === 'rock') {
            return 'user wins';
        } else if (computerChoice === 'scissors') {
            return 'computer wins'
        }
    }

    if (userChoice === 'scissors') {
        computerChoice === 'paper' || 'rock';
        if (computerChoice === 'paper') {
            return 'user wins';
        } else if (computerChoice === 'rock') {
            return 'computer wins'
        }
    }
}

const playGame = () => {
    const userChoice = getUserChoice('rock' || 'paper' || 'scissors');
    const computerChoice = getComputerChoice();
    console.log('you chose: ' + userChoice);
    console.log('computer chose: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice))
};

playGame();