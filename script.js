function rollDice() {

// Create a random number between 1 and 6 using Math.random() and store it in a variable called "diceRoll".
var diceRoll = Math.floor(Math.random() * 6) + 1;
var diceRoll2 = Math.floor(Math.random() * 6) + 1;

// Change both <img> to a random image from the "dice" folder using the "diceRoll" variable.
document.querySelector(".img1").src = "./images/dice" + diceRoll + ".png";
document.querySelector(".img2").src = "./images/dice" + diceRoll2 + ".png";

// The player that gets the highest score when the page is refreshed wins.
var title = document.querySelector("h1");

if (diceRoll > diceRoll2) {
    title.textContent = "Player 1 Wins 🏁";
} else if (diceRoll < diceRoll2) {
    title.textContent = "🏁 Player 2 is the best";
} else {
    title.textContent = "It's a draw! 😐";
}

}
