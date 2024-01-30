const prompt = require('prompt');

// Function for computer's selection
function generateCSelection(){
    const randomNumber = Math.random();
    if (randomNumber<= 0.34){
        return 'Paper';
    } else if (randomNumber >= 0.35 && randomNumber <=0.67){
        return 'Scissors';
    } else if (randomNumber>=0.68 && randomNumber <=1.00 ){
        return 'Rock';
    }
}
// Function for deciding winner of the game 
function GameWinner(UserSelect, ComputerSelect){
   if (UserSelect === ComputerSelect){
    return "It's a tie";
   }
   else if ((UserSelect === 'Paper' && ComputerSelect === 'Rock') ||
    (UserSelect === 'Scissors' && ComputerSelect === 'Paper') ||
    (UserSelect === 'Rock' && ComputerSelect === 'Scissors')
    ){ return 'User Wins';
  }else {
      return 'Computer wins';
  } 
   
}
// ask the user to enter rock, paper or scissors
prompt.start();
prompt.get(['userSelection'], (err,result)=>{
   
    
   // displays user entry , computer's random number and results of winner.
   console.log('User Selection:'+ result.UserSelect.toUpperCase() );
   console.log('Computer Selection:'+ generateCSelection);
   console.log('Result:'+GameWinner(UserSelect,ComputerSelect));
});