// var user_number = document.getElementById("user_number");
// var random_number = document.getElementById("random_number");
// var result = document.getElementById("result");
// var info_box_result = document.getElementById("info_box_result");
// var win_html = document.getElementById("win");
// var loss_html = document.getElementById("loss");
// var total = document.getElementById("total");
// var msg = document.getElementById("msg");

// var count = 10;
// var win = 0;
// var loss = 0;
// var gameEnded = false;

// function tryMyLuck(userNumber) {
//   if (gameEnded) return; // Stop the game if it has already ended

//   var randomNumber = Math.floor(Math.random() * 6) + 1; // Generate random number between 1 and 6
//   console.log(randomNumber);
//   user_number.innerText = userNumber;
//   random_number.innerText = randomNumber;

//   total.innerText = --count;

//   if (randomNumber === userNumber) {
//     console.log("user wins");
//     result.innerText = "You won";
//     info_box_result.style.backgroundColor = "Green";
//     result.style.color = "White";
//     win_html.innerText = ++win;
//   } else {
//     result.innerText = "You lost";
//     info_box_result.style.backgroundColor = "red";
//     result.style.color = "White";
//     loss_html.innerText = ++loss;
//   }

//   if (count === 0) {
//     gameEnded = true;
//     checkResult();
//   }
// }

// function checkResult() {
//   if (win >= 3) {
//     msg.innerText = "Congrats! You won";
//     gameEnded = true; // End the game if the player wins three times
//   } else {
//     msg.innerText = "Sorry! You lost. Try again.";
//   }
//   count = 10;
//   win = 0;
//   loss = 0;
//   total.innerText = count;
//   win_html.innerText = win;
//   loss_html.innerText = loss;
// }


var user_number = document.getElementById("user_number");
var random_number = document.getElementById("random_number");
var result = document.getElementById("result");
var info_box_result = document.getElementById("info_box_result");
var win_html = document.getElementById("win");
var loss_html = document.getElementById("loss");
var total = document.getElementById("total");
var msg = document.getElementById("msg");

var count = 10;
var win = 0;
var loss = 0;
var gameEnded = false;
var score = 0; // New variable to track the player's score

function tryMyLuck(userNumber) {
  if (gameEnded) return; // Stop the game if it has already ended

  var randomNumber = Math.floor(Math.random() * 6) + 1; // Generate random number between 1 and 6
  console.log(randomNumber);
  user_number.innerText = userNumber;
  random_number.innerText = randomNumber;

  total.innerText = --count;

  if (randomNumber === userNumber) {
    console.log("user wins");
    result.innerText = "You won";
    info_box_result.style.backgroundColor = "Green";
    result.style.color = "White";
    win_html.innerText = ++win;

    // Add reward when the player wins
    score += 10; // Increase the score by 10
    updateScore(); // Update the score display
    msg.innerText = "Congratulations! You earned 10 points.";
  } else {
    result.innerText = "You lost";
    info_box_result.style.backgroundColor = "red";
    result.style.color = "White";
    loss_html.innerText = ++loss;
  }

  if (count === 0) {
    gameEnded = true;
    checkResult();
  }
}

function checkResult() {
  if (win >= 3) {
    msg.innerText = "Congrats! You won";

    // Add additional reward for winning the game
    score += 50; // Increase the score by 50 for winning the game
    updateScore(); // Update the score display
    msg.innerText += "\nYou earned an additional 50 points.";

    gameEnded = true; // End the game if the player wins three times
  } else {
    msg.innerText = "Sorry! You lost. Try again.";
  }
  count = 10;
  win = 0;
  loss = 0;
  total.innerText = count;
  win_html.innerText = win;
  loss_html.innerText = loss;
}

function updateScore() {
  msg.innerText += "\nYour total score: " + score; // Display the score on a separate line
}

