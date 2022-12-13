let randomNumber = (Math.floor(Math.random()*5)) + 1;
let numberOfWon = 0;
let numberOfLost = 0;

for(let i=0; i<5; i++){
    let guessNumber = Number(prompt("Enter a number from 1 to 5 : "));
    if(guessNumber == randomNumber){
        console.log("You have won.");
        numberOfWon++;
    }else{
        console.log("You have lost.Random number is : " + randomNumber);
        numberOfLost++;
    }
}
console.log("Number of win : " + numberOfWon);
console.log("Number of lost : " + numberOfLost);