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
        alert(result);
        return result
    };

    let playerScore = 0;
    let computerScore = 0;
    let rounds = 0;

    let findRoundWinner = function(playerScore, computerScore){
        if (playerScore > computerScore) {
            alert("Player wins: computer score " + computerScore + " against player score: " + playerScore)
            // Declare the html to replace in the right and left columns
            // **************************End of declaration******************************
            // let replacedLeftColumn = document.getElementsByClassName("leftColumn");
            // let replacedRightColumn = document.getElementsByClassName("rightColumn");

            // replacedLeftColumn.innerHTML = '<div class = \"trophy">' +
            //                                     '<img class=\"trophyPic" src=\"images/trophy1.png" alt=\"Rock">' +
            //                                 '</div>'
            
            // replacedRightColumn.innerHTML = '<div class=\"score">' + 
            //                                     '<p> Hurray!! You Win. After Five Rounds <br>' +
            //                                     'Your Score was 3 and my score was 2' +
            //                                 '</div>' + 
            //                                 '<button class = \"playAgain">' +
            //                                     'Play Again' +
            //                                 '</button>'
        } else if (playerScore < computerScore){
            alert("Computer wins: computer score " + computerScore + " against player score: " + playerScore)
            // **************************End of declaration******************************
            // let replacedLeftColumn = document.getElementsByClassName("leftColumn");
            // let replacedRightColumn = document.getElementsByClassName("rightColumn");

            // replacedLeftColumn.innerHTML = '<div class = \"trophy">' +
            //                                     '<img class=\"trophyPic" src=\"images/trophy1.png" alt=\"Rock">' +
            //                                 '</div>'
            // replacedRightColumn.innerHTML = '<div class=\"score">' + 
            //                                     '<p> Hurray!! You Win. After Five Rounds <br>' +
            //                                     'Your Score was 3 and my score was 2' +
            //                                 '</div>' + 
            //                                 '<button class = \"playAgain">' +
            //                                     'Play Again' +
            //                                 '</button>'
        } else{
            alert("Draw: computer score " + computerScore + " against player score: " + playerScore)
            // **************************End of declaration******************************
            // let replacedLeftColumn = document.getElementsByClassName("leftColumn");
            // let replacedRightColumn = document.getElementsByClassName("rightColumn");

            // replacedLeftColumn.innerHTML = '<div class = \"trophy">' +
            //                                     '<img class=\"trophyPic" src=\"images/trophy1.png" alt=\"Rock">' +
            //                                 '</div>'
            // replacedRightColumn.innerHTML = '<div class=\"score">' + 
            //                                     '<p> Hurray!! You Win. After Five Rounds <br>' +
            //                                     'Your Score was 3 and my score was 2' +
            //                                 '</div>' + 
            //                                 '<button class = \"playAgain">' +
            //                                     'Play Again' +
            //                                 '</button>'
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