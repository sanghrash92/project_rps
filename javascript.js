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


let win = 0;
let loss = 0;
let tie = 0;

const playRound = (playerSelection, computerSelection) => {

    if (playerSelection === computerSelection) {
        return tie += 1;
    };
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return loss += 1;
            
        } else {
            return win += 1;
        };
        
    };
    if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return loss += 1;
        } else {
            return win += 1;
        };
    }
    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return loss += 1;
        } else {
            return win += 1;
        };
    }
};

const score = () => {
    const w = document.querySelector('.win');
    w.textContent = win;
    const l = document.querySelector('.loss');
    l.textContent = loss;
    const t = document.querySelector('.tie');
    t.textContent = tie;
};

function winOrLoss() {
    if (win === 5) {
        const declare = document.querySelector('.declaration');
        declare.textContent = 'You win!'
        return player.removeEventListener('click', game);
    } else if (loss === 5) {
        const declare = document.querySelector('.declaration');
        declare.textContent = 'Computer wins!';
        return player.removeEventListener('click', game);
    };
};

const player= document.querySelector('#player');


const game = (e) => {
    const playerSelection = e.target.id;
    const computerSelection = getComputerChoice();
    const play = playRound(playerSelection, computerSelection);
    score();
    winOrLoss();
};

player.addEventListener('click', game);
