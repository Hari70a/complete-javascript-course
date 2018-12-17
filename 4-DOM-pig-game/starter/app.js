/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var activePlayer, currentScore, globalScore, scores, gamePlaying;

init();
function init() {
  activePlayer = 0;
  globalScore = 0;
  currentScore = 0;
  scores = [0, 0];
  gamePlaying = true;

  document.querySelector("#dice-1").style.display = "none";
  document.querySelector("#dice-2").style.display = "none";

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}

document.querySelector(".btn-roll").addEventListener("click", function() {
  if (gamePlaying) {
    // 1. Random number
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    //2. Display the result
    var dice1DOM = document.querySelector("#dice-1");
    var dice2DOM = document.querySelector("#dice-2");
    dice1DOM.style.display = "block";
    dice2DOM.style.display = "block";
    dice1DOM.src = "dice-" + dice1 + ".png";
    dice2DOM.src = "dice-" + dice2 + ".png";
    console.log(dice1, dice2);
    //3. Update the round score IF the rolled number was NOT a 1
    if (dice1 !== 1 && dice2 !== 1) {
      //Add score
      //globalScore += dice;
      var diceVal = dice1 + dice2;
      scores[activePlayer] += diceVal;
      document.querySelector("#current-" + activePlayer).textContent = diceVal;
      document.querySelector("#score-" + activePlayer).textContent =
        scores[activePlayer];
    } else if (dice1 == 6 && dice2 == 6) {
      scores[activePlayer] = 0;
      document.querySelector("#score-" + activePlayer).textContent =
        scores[activePlayer];
      nextPlayer();
    } else {
      //Next player
      scores[activePlayer] = 0;
      document.querySelector("#score-" + activePlayer).textContent =
        scores[activePlayer];
      nextPlayer();
    }

    //if()
  }
});

document.querySelector(".btn-hold").addEventListener("click", function() {
  if (gamePlaying) {
    // Add CURRENT score to GLOBAL score
    scores[activePlayer] += globalScore;

    // Update the UI
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];

    //Get the value of target from user and give default target value if not entered
    var target = document.querySelector(".target").value
      ? document.querySelector(".target").value
      : 20;

    // Check if player won the game
    if (scores[activePlayer] >= target) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlaying = false;
    } else {
      //Next player
      nextPlayer();
    }
  }
});

document.querySelector(".btn-new").addEventListener("click", init);

function nextPlayer() {
  //Next player
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  globalScore = 0;

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  //document.querySelector('.player-0-panel').classList.remove('active');
  //document.querySelector('.player-1-panel').classList.add('active');

  document.querySelector("#dice-1").style.display = "none";
  document.querySelector("#dice-2").style.display = "none";
}
