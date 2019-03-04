    let singleRound = function (playerSelection, computerSelection) {
        var playerSelection = playerSelection.toLowerCase();
        let playerWins = "Player Wins! You selected " + playerSelection + " I selected " + computerSelection;
        let computerWins = "I win! I selected " + computerSelection + " you selected " + playerSelection;
        let tie = "We have a tie. We both selected " + playerSelection;

        if (playerSelection != computerSelection) {
            switch (playerSelection) {
                case  "paper":
                    if (computerSelection == "scissors") {
                    var result = computerWins
                   } else {
                    var result = playerWins
                   };
                    break;
                case "rock":
                   if (computerSelection == "scissors") {
                    var result = playerWins
                   } else {
                    var result = computerWins
                   };
                    break;
                case "scissors":
                    if (computerSelection == "paper") {
                    var result = playerWins
                   } else {
                    var result = computerWins
                   };
                    break;
            }
        } else {
            result = tie
        }
        
            return result
    };

    let playerScore = 0;
    let computerScore = 0;
    let rounds = 0;

    var getInput = function(){                
        let playerSelection = event.srcElement.id
        let possibleChoices = ["rock", "paper", "scissors"];
        let computerSelection = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
        let roundScore = singleRound(playerSelection, computerSelection);

        if (roundScore.startsWith("Player")) {
                // alert("Player wins")
                playerScore += 1
            } else if (roundScore.startsWith("I win!")){
                computerScore += 1
            }else{
                // Python's equivalent of pass
            }
        
        if (playerScore > computerScore) {
            var final = "Player wins with a score of " + playerScore + " against computer " + computerScore
        } else {
            var final = "Computer wins with a score of " + computerScore + " against player " + playerScore
        } 
        rounds += 1
        if (rounds == 5){

        }
    }