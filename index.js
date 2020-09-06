
var diceDivs = document.getElementsByClassName("dice-div");
var playerOneDiceTag = appendChildToDiv(diceDivs[0]);
var playerTwoDiceTag = appendChildToDiv(diceDivs[1]);

// For starting images when screen loads
playerOneDiceTag.setAttribute("src", "images/dice6.png");
playerTwoDiceTag.setAttribute("src", "images/dice6.png");



document.querySelector("button").onclick = getWinner;

// Added img tag to the desired location and get its reference.
function appendChildToDiv(parent) {
  var diceImg = document.createElement("img");
  parent.appendChild(diceImg);
  return diceImg;
}

// Set random dice images and returns num on the dice.
function setRandomDiceImages(imageTag) {
  var diceNum = Math.floor(Math.random() * 6) + 1;
  imageTag.setAttribute("src", "images/dice" + diceNum + ".png");
  imageTag.classList.toggle("animate");
  return diceNum;
}

// Simply calls the above two functions as needed and returns result.
function getWinner() {
  var playerOneScore = setRandomDiceImages(playerOneDiceTag);
  var playerTwoScore = setRandomDiceImages(playerTwoDiceTag);

  if (playerOneScore === playerTwoScore) {
    document.querySelector(".main-heading").textContent = "Its a draw!";
  } else if (playerOneScore > playerTwoScore) {
    document.querySelector(".main-heading").textContent = "🚩 Player One Wins";
  } else {
    document.querySelector(".main-heading").textContent = "Player Two Wins 🚩";
  }
}
