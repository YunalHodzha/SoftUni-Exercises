function tennis(input) {
    let tournamentCount = Number(input[0]);
    let initialScore = Number(input[1]);
    let finalScore = initialScore;
    let wins = 0;

    for ( let i = 2; i <= input.length; i++) {
        switch (input[i]) {
            case "W":
                finalScore += 2000;
                wins ++;
                break;
            case "F":
                finalScore += 1200;
                break;
            case "SF":
                finalScore += 720;
        }
    }
    let averageScore = (finalScore - initialScore) / tournamentCount;
    let winsPercent = (wins / tournamentCount) *100;
console.log(`Final points: ${finalScore}`);
console.log(`Average points: ${Math.floor(averageScore)}`)
console.log(`${winsPercent.toFixed(2)}%`)
}



tennis(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])


