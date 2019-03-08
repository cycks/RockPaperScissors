    let PlaySingleRound = function (playerSelection, computerSelection) {
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
        document.getElementsByClassName("result")[0].innerHTML = result;
        return result
    };

    let playerScore = 0;
    let computerScore = 0;
    let rounds = 0;

    let findRoundWinner = function(playerScore, computerScore){
        document.getElementsByClassName("playing")[0].style.display = "none";
        document.getElementsByClassName("playing1")[0].style.display = "none";
        document.getElementsByClassName("playing2")[0].style.display = "none";
        let playerWins = "Player wins. After " + rounds + " rounds player scored " + playerScore +
                        " and computer scored " +computerScore;
        let computerWins = "Computer wins. After " + rounds + " rounds player scored " + playerScore +
                        " and computer scored " +computerScore;
        let noWinner = "We have a tie. After " + rounds + " rounds player scored " + playerScore +
                        " and computer scored " +computerScore;
        if (playerScore > computerScore) {
            document.getElementsByClassName("playerWins")[0].style.display = "grid";
            document.getElementById("displayPlayerScore").innerHTML = playerWins
            
        } else if (playerScore < computerScore){
            // alert("Computer wins: computer score " + computerScore + " against player score: " + playerScore);
            document.getElementsByClassName("computerWins")[0].style.display = "grid";
            document.getElementById("displayComputerScore").innerHTML = computerWins
        } else{
            // alert("Draw: computer score " + computerScore + " against player score: " + playerScore)
            document.getElementsByClassName("noWinner")[0].style.display = "grid";
            document.getElementById("displayDrawScore").innerHTML = noWinner;
        }
        
    }

    let increaseScore = function(roundScore){
        if (roundScore.startsWith("Player")) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                playerScore += 1
            } else if (roundScore.startsWith("I win!")){
                computerScore += 1
            }else{
                // Python's equivalent of pass
            }
        rounds += 1
    }

    let getInput = function(){                
        let playerSelection = event.srcElement.id
        let possibleChoices = ["rock", "paper", "scissors"];
        let computerSelection = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
        let roundScore = PlaySingleRound(playerSelection, computerSelection);
        increaseScore(roundScore)
        
        if (rounds == 5) {
            findRoundWinner(playerScore, computerScore)

        } else {
            // pythons equivalent of pass
        }
    }