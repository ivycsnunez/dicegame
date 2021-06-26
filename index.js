// Player One Dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var dice1 = "images"+"/"+"dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src", dice1);

//Player Two Dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var dice2 = "images"+"/"+"dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src", dice2);

//Random Scenarios When Played
//If Player One Wins
if (randomNumber1 > randomNumber2) {
  var heading = document.querySelector("h1").innerHTML;
  heading = document.querySelector("h1").innerHTML = "Player One Wins! 🚩";
}

//If Player Two Wins
if (randomNumber2 > randomNumber1) {
  var heading = document.querySelector("h1").innerHTML;
  heading = document.querySelector("h1").innerHTML = "Player Two Wins! 🚩";
}

//If The Result is Draw
if (randomNumber1 === randomNumber2) {
  var heading = document.querySelector("h1").innerHTML;
  heading = document.querySelector("h1").innerHTML = "Draw!";
}
