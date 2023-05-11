let random = 0;
let rollDice = document.querySelector(".roll");
let randomNumber = document.querySelector(".random-number");
let current1 = Number(document.querySelector(".current1").innerText);
let current2 = Number(document.querySelector(".current2").innerText);
let score1 = Number(document.querySelector(".score1").innerText);
let score2 = Number(document.querySelector(".score2").innerText);
let hold_score = document.querySelector(".hold");
let reset = document.querySelector(".reset");

let current_active = 1;
let current_score = 0;

rollDice.addEventListener("click", handleRollDice);
function handleRollDice() {
  random = Math.floor(Math.random() * 6) + 1;
  randomNumber.innerText = random;
  if (random !== 1) {
    current_score +=  random;
    document.querySelector(`.current${current_active}`).innerText = current_score;
  } else {
    document.querySelector(`.current${current_active}`).innerText = 0;
    current_score = 0;
    current_active = current_active === 1 ? 2 : 1;
     
    
  }
}
 
hold_score.addEventListener("click", handleHoldScore);
function handleHoldScore() {
  current_score = 0;
  let holdPlayer = Number(document.querySelector(`.score${current_active}`).innerText);
  let current = Number(document.querySelector(`.current${current_active}`).innerText);
  holdPlayer += current;
  document.querySelector(`.score${current_active}`).innerText = holdPlayer;
  let win = Number(document.querySelector(`.score${current_active}`).innerText);
  
  if (win >= 20) {
      document.querySelector(`.score${current_active}`).style.color = "red";
      document.querySelector(`.score${current_active}`).style.fontWeight = "bold";
      document.querySelector(`.win${current_active}`).innerText = `Player ${current_active} . You win`;
      rollDice.removeEventListener('click', handleRollDice);
      hold_score.removeEventListener('click', handleHoldScore);
    }
    current_active = current_active === 1 ? 2 : 1;
}


reset.addEventListener("click", handleReset)
function handleReset() {
    document.querySelector(".current1").innerText = 0;
    document.querySelector(".current2").innerText = 0
    document.querySelector(".score1").innerText = 0
    document.querySelector(".score2").innerText = 0;
    document.querySelector(`.win1`).innerText ="";
    document.querySelector(`.win2`).innerText ="";
    randomNumber.innerText = 0;
    rollDice.addEventListener('click', handleRollDice);
    hold_score.addEventListener('click', handleHoldScore);
    
}