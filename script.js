function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if(choice == 0) {
        return 'rock';
    }
    else if (choice == 1)
    {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection){
   
    if(playerSelection.toLowerCase() == 'rock' && computerSelection == 'rock'){
        return "It's a draw! You both selected Rock!"
    }
    else if(playerSelection.toLowerCase() == 'paper' && computerSelection == 'paper'){
        return "It's a draw! You both selected Paper!"
    } 
    else if(playerSelection.toLowerCase() == 'scissors' && computerSelection == 'scissors'){
        return "It's a draw! You both selected Scissors!"
    }
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper'){
        return "You Lose! Paper beats Rock!"
    }
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors'){
        return "You Win! Rock beats Scissors!"
    }
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock'){
        return "You Win! Paper beats Rock!"
    }
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors'){
        return "You Lose! Scissors beats Paper!"
    }
    else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper'){
        return "You Win! Scissors beats Paper!"
    }
    else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock'){
        return "You Lose! Rock beats Scissors!"
    }
        
}

function game(){
    for(let i = 1; i < 6; i++){
        const playerSelection = prompt('Paper, Rock or Scissors!');
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();