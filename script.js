let firstCard = 5
let secondCard = 8 
let sum = firstCard + secondCard


if (sum <= 20) {
    console.log("do you want to draw a new card?")
}
else if (sum === 21) {
    console.log("You got Blackjack")
}
else {
    console.log("You failed")
}