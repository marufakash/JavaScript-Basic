// 2D Array - create a function called highestRunScorer that will receive a 2D array called playersInfo. Based on highest score, return the name of player.

function highestRunScorer(playersInfo) {
    let highestScorer = playersInfo[0][0];
    let highestScore = playersInfo[0][1];

    for(let i=0; i<playersInfo.length; i++){
        if(highestScore < playersInfo[i][1]){
            highestScore = playersInfo[i][1];
            highestScorer = playersInfo[i][0];
        }
    }

    return highestScorer;
}

let playersInfo =[
    ["Maruf Akash", 78],
    ["Gazi Mahabuba", 91],
    ["Sumaya Islam", 54],
    ["Urmi Akter", 99],
    ["Mariya Khan", 88]
]

console.log("Highest Scorer : " + highestRunScorer(playersInfo));