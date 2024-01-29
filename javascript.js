
function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);

  switch (randomNum) {
      case 0:
          return 'rock';
      case 1:
          return 'paper';
      case 2:
          return 'scissors';
  };
};

const wins = document.querySelector('.winGrid');
const lose = document.querySelector('.lossGrid');
const tied = document.querySelector('.tieGrid');
const games = document.querySelector('.gameProgress');
const resetBtn = document.querySelector('#reset');
const btns = document.querySelectorAll('.buttons');
const startPara = document.querySelector('.firstPara');
const icon = document.querySelectorAll('i');

let win = 0;
let loss = 0;
let tie = 0;

function playRound(playerChoice, computerChoice) {

  if (playerChoice === computerChoice) {
      games.textContent = `Player choice ${playerChoice} ties with Computer choice ${computerChoice}.`
      return tie += 1;
  };
 if (playerChoice === 'rock' && computerChoice === 'scissors'
 || playerChoice === 'paper' && computerChoice === 'rock'
 || playerChoice === 'scissors' && computerChoice === 'paper') {
  games.textContent = `Player choice ${playerChoice} wins Computer choice ${computerChoice}`;
  return win += 1;
 } else {
  games.textContent = `Player choice ${playerChoice} loses to Computer choice ${computerChoice}.`
  return loss += 1;
 }
};

function updateScore() {
  wins.textContent= `Player: ${win}`;
  lose.textContent = `Computer: ${loss}`;
  tied.textContent = `Tie: ${tie}`;
}

function updateGame() {
  if (win === 5) {
      games.textContent = 'You Win! Would you like to start a new game?(y/n)';
      btns.forEach(btn => btn.removeEventListener('click', game));
  }
  if (loss === 5) {
      games.textContent = 'You lose! Would you like to start a new game?(y/n)'
      btns.forEach(btn => btn.removeEventListener('click', game));
  };
};

function resetGame() {
  win = 0;
  loss = 0;
  tie = 0;
  wins.textContent = 'Win: 0';
  lose.textContent = 'Loss: 0';
  tied.textContent = 'Tie: 0';
  games.textContent = 'First to score 5 points wins the game'
}

function game(e) {
  let playerChoice = e.target.id;
  let computerChoice = getComputerChoice();
  addIcon(playerChoice);
  playRound(playerChoice, computerChoice);
  updateScore();
  updateGame();
};

function addIcon(player) {
  const rock = document.querySelector('.fa-hand-back-fist');
  const paper = document.querySelector('.fa-hand');
  const scissor = document.querySelector('.fa-hand-scissors');

  if(player === 'rock' || player === 'Rock') {
    removeIcon(icon);
    rock.classList.add('active');
  } else if(player === 'paper' || player === 'Paper') {
    removeIcon(icon);
    paper.classList.add('active')
  } else {
    removeIcon(icon);
    scissor.classList.add('active');
  }
}

function removeIcon(icons) {
  icons.forEach(icon => {
    if(icon.classList.contains('active')) {
      icon.classList.remove('active')
    }
  })
}


function keydownEvent(e) {
  let keyboard = e.key;
  if (keyboard === 'y' || keyboard === 'Y') {
      resetGame();
      btns.forEach(btn => btn.addEventListener('click', game));
  };
  if (keyboard === 'n' || keyboard === 'N') {
      btns.forEach(btn => btn.removeEventListener('click', game))
  }
};

btns.forEach(btn => btn.addEventListener('click', game));
resetBtn.addEventListener('click', resetGame);
document.addEventListener('keydown', keydownEvent);
