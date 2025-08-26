const getComputerChoice = function(){
    //random generation of 0, 1 and 2
   let rand = Math.floor(Math.random() * 3);
   switch(rand){
    case 0:
        return "rock";
    case 1:
        return "paper";
    case 2:
        return "scissor";    
   }
} 

const getHumanChoice = function(){
    return prompt("choice: ").toLowerCase();
}

let computerScore = 0;
let playerScore = 0;

const playRound = function(computerChoice, humanChoice){
    console.log(computerChoice);
    console.log(humanChoice);

    //check for ties
    if(humanChoice === computerChoice){
        return "it's a tie!";
    }
    //check for computer wins
    if(computerChoice === "rock"){
        if(humanChoice === "scissor"){
            computerScore++
            return "you Lose! rock beats scissor";
        }
    }
    if(computerChoice === "paper"){
        if(humanChoice === "rock"){
            computerScore++
            return "you Lose! paper beats rock";
        }
    }
    if(computerChoice === "scissor"){
        if(humanChoice === "paper"){
            computerScore++
            return "you Lose! scissor beats paper";
        }
    }

    //check for human wins
    if(humanChoice === "rock"){
        if(computerChoice === "scissor"){
            playerScore++
            return "you win! rock beats scissor";
        } 
    }
    if(humanChoice === "paper"){
        if(computerChoice === "rock"){
            playerScore++
            return "you win! paper beats rock";
        }
    }
    if(humanChoice === "scissor"){
        if(computerChoice === "paper"){
            playerScore++
            return "you win! scissor beats paper";
        }
    }
}

const playGame = function(){
    for(let i = 0; i < 5; i++){
        console.log(playRound(getComputerChoice(), getHumanChoice()));
    }

    if(computerScore === playerScore){
        return `computer: ${computerScore} and player: ${playerScore} it's a tie`
    }else if(computerScore > playerScore){
        return `computer: ${computerScore} and player: ${playerScore} you lost!`;
    }else{
        return `computer: ${computerScore} and player: ${playerScore} you winner!`;
    }
}
console.log(playGame());