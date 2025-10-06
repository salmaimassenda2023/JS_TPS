// localStorage.clear()
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

//JSON.parse(localStorage.getItem('score')) ||
updateScoreElement();



document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('rock');
  });

document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('paper');
  });

document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playGame('scissors');
  });

  /*
  Add an event listener
  if the user presses the key r => play rock
  if the user presses the key p => play paper
  if the user presses the key s => play scissors
  */
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  }
});

// Auto playing part
let isAutoPlaying = false ;
let intervalId ;
const autoPlayButton = document.querySelector('.auto-play-button');
autoPlayButton.addEventListener('click',
    ()=>{
       if(!isAutoPlaying){
         intervalId= setInterval(
             ()=>{
               let playMove =pickComputerMove() ;
               playGame(playMove);
               isAutoPlaying=true;
               autoPlayButton.textContent='Stop Auto Play'
             }

         ),9000

       }else{
         clearInterval(intervalId);
         isAutoPlaying = false;
         autoPlayButton.textContent='Auto Play'
       }

    }
)





function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';
  // calculate result
  if(playerMove==computerMove){
    score.ties++;
    result='You Tie'
  }
  if( (computerMove== 'scissors')&& (playerMove=='paper')|| ( (computerMove== 'paper')&& (playerMove=='rock')) || ((computerMove== 'rock')&& (playerMove=='scissors')) ) {
    score.losses++ ;
    result='you lose '
  }
  if( (computerMove== 'scissors')&& (playerMove=='rock') || ( (computerMove== 'paper')&& (playerMove=='scissors') ) || ( (computerMove== 'rock')&& (playerMove=='paper') )  )  {
    score.wins++
    result='you win'
  }
  // update the score and store it using localStorage.setItem
  localStorage.setItem('score', JSON.stringify(score));
  // show the new score and the updated images using "document.querySelector"
  const imgPlayer = playerMove+'-emoji.png';
  const imgComputer = computerMove+'-emoji.png';
  document.querySelector('.js-result').innerHTML =`<img src="images/${imgPlayer}" class="move-icon"> <img src="images/${imgComputer}" class="move-icon">`
  updateScoreElement()
}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}
