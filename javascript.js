const getComputerChoice = () => {
    random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    };
};

const getPlayerChoice = () => {
    const playerSelection = prompt('Please choose rock, paper or sissors?').toLowerCase();
    return playerSelection;
};

let player = 0;
let computer = 0;
let tie = 0;

const playRound = (playerSelection, computerSelection) => {

    if (playerSelection === computerSelection) {
        tie += 1;
        return `It's a tie! Tie: ${tie}`;
    };
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computer += 1;
            return `You lose! Computer: ${computer}.`;
        } else {
            player += 1;
            return `You win! Player: ${player}`;
        };
        
    };
    if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            computer += 1;
            return `You lose! Computer: ${computer}.`;
        } else {
            player += 1;
            return `You win! Player: ${player}`;
        };
    }
    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computer += 1;
            return `You lose! Computer: ${computer}.`;
        } else {
            playerSelection += 1;
            return `You win! Player: ${player}`;
        };
    }
    };

const game = () => {
    for (let i = 0; i < 10; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(`You chose ${playerSelection}!`);
        console.log(`Opponent chose ${computerSelection}!`)
        console.log(playRound(playerSelection, computerSelection));
        console.log('Player:', player, 'Computer:', computer, 'Tie:', tie);
    };
};


game();
