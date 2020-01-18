$(document).ready(function() {
  const crystalOneValue = 2;
  const crystalTwoValue = 3;
  const crystalThreeValue = 6;
  const crystalFourValue = 10;
  let wins = 0;
  let losses = 0;
  let generatedScore = 0;
  let userScore = 0;

  newGame();

  function newGame() {
    generatedScore = Math.floor(Math.random() * 102 + 19);
    $("#generated-number").text(generatedScore);
    userScore = 0;
    $("#number-score").text(userScore);
  }

  function scoreTest() {
    if (userScore === generatedScore) {
      alert("Congratulations. You won the game!");
      wins++;
      $("#generated-wins").text(wins);
      newGame();
    } else if (userScore > generatedScore) {
      alert("Darn. You surpassed the generated score.");
      losses++;
      $("#generated-losses").text(losses);
      newGame();
    } else {
      return;
    }
  }

  $("#crystal-one").click(function() {
    userScore += crystalOneValue;
    $("#number-score").text(userScore);
    scoreTest();
  });

  $("#crystal-two").click(function() {
    userScore += crystalTwoValue;
    $("#number-score").text(userScore);
    scoreTest();
  });

  $("#crystal-three").click(function() {
    userScore += crystalThreeValue;
    $("#number-score").text(userScore);
    scoreTest();
  });

  $("#crystal-four").click(function() {
    userScore += crystalFourValue;
    $("#number-score").text(userScore);
    scoreTest();
  });
});
