// 1D Array - Create a function called highestScore that will receive a 1D array called scores & return the highest score

function highestScore(scores) {
    let max = scores[0];
    for(let i=1; i<scores.length; i++){
        if(max < scores[i]){
            max = scores[i];
        }
    }
    return max;
}

// Getting input from the user
let scores = [];
for(let i=0; i<5; i++){
    scores[i] = Number(prompt("Enter the scores : "));
}
console.log(scores);

console.log("Highest score : " + highestScore(scores));