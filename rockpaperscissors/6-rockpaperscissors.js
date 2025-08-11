let score = JSON.parse(localStorage.getItem
             ('score')) || {
                wins: 0,
                losses: 0,
                ties: 0
             };
             /*
             const score ={
                wins: 0,
                losses: 0,
                ties: 0
             };
             */


             /*
             if (!score){ //or (score === null)
                score = {
                    wins: 0,
                    losses: 0,
                    ties: 0
                };
             } 
            */

            let playerMove = '';

            function playGame(playerMove){
                const computerMove = pickAComputerMove();
                let result = '';

                if (playerMove === 'scissors') {
                    if (computerMove === 'rock') {
                       result = 'You lose.';
                    } else if (computerMove === 'paper') {
                        result = 'You win.';
                    } else if (computerMove === 'scissors') {
                        result = 'You tied.';
                    }
                } else if (playerMove==='paper'){
                    if (computerMove === 'rock') {
                        result = 'You win.';
                    } else if (computerMove === 'paper') {
                        result = 'You tied.';
                    } else if (computerMove === 'scissors') {
                        result = 'You lose.';
                    }
                } else if (playerMove==='rock') {
                if (computerMove === 'rock') {
                        result = 'You tied.';
                    } else if (computerMove === 'paper') {
                        result = 'You lose.';
                    } else if (computerMove === 'scissors') {
                        result = 'You win.';
                    }
                }

                if(result === 'You win.') {
                    score.wins += 1;
                } else if (result === 'You lose.') {
                    score.losses += 1;
                } else if (result === 'You tied.') {
                    score.ties += 1;
                }

                localStorage.setItem('score',JSON.stringify(score));


                
                alert(`You picked ${playerMove}. The Computer picked ${computerMove}. ${result}
Wins:${score.wins}, Losses:${score.losses}, Ties, ${score.ties}`);

                return playerMove;
                
            }

            let computerMove = '';   
            function pickAComputerMove(){
                const randomNumber = Math.random();


                if (randomNumber >= 0 && randomNumber < (1/3)) {
                    computerMove = 'rock';
                } else if (randomNumber >= (1/3) && randomNumber < (2/3)) {
                    computerMove = 'paper';
                } else {
                    computerMove = 'scissors';
                }

                return computerMove;
            }