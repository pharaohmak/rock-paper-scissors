const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        alert('Error! Invalid choice.');
        return null;
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
};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'The game is a tie!';
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer wins!';
        } else {
            return 'User wins!';
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'User wins!';
        } else {
            return 'Computer wins!';
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'paper') {
            return 'User wins!';
        } else {
            return 'Computer wins!';
        }
    }

    if (userChoice === 'bomb') {
        return 'User wins by default!';
    }
};

const playGame = () => {
    const userChoice = getUserChoice(document.getElementById('userChoice').value);
    if (!userChoice) {
        return; // Stop the game if the user input is invalid
    }

    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    document.getElementById('result').innerHTML = `You chose: ${userChoice}<br>Computer chose: ${computerChoice}<br>${result}`;
};