let firstCard = Math.floor(Math.random() * (1, 11)) 
let secondCard = Math.floor(Math.random() * (1, 11)) 
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let card = "";
let min = 1
let max = 11


function startGame() {
  renderGame();
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: " + firstCard + "," + secondCard + "," + card;
  if (sum <= 20) {
    message = "do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You got Blackjack";
    hasBlackJack = true;
  } else {
    message = "You failed";
    isAlive = false;
  }
  messageEl.textContent = message;
}
function newCard() {
  console.log("new card");
  card = Math.floor(Math.random() * (min, max)) 
  sum += card;
  renderGame();
}
