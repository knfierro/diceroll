let playerOne = prompt("What is your name?");
let playerTwo = prompt("What is your opponent's name?");

document.getElementById("playerOne").textContent = playerOne;
document.getElementById("playerTwo").textContent = playerTwo;

document.getElementById("rollButton").addEventListener("click", function () {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  let diceImage1 = "dice" + randomNumber1 + ".png";
  let diceImage2 = "dice" + randomNumber2 + ".png";

  document.querySelector("img.img1").setAttribute("src", diceImage1);
  document.querySelector("img.img2").setAttribute("src", diceImage2);

  if (randomNumber1 > randomNumber2) {
    document.getElementById("rollButton").textContent = `${playerOne} Wins!`;
  } else if (randomNumber1 < randomNumber2) {
    document.getElementById("rollButton").textContent = `${playerTwo} Wins!`;
  } else {
    document.getElementById("rollButton").textContent = "It's a Draw. Play Again";
  }
});
