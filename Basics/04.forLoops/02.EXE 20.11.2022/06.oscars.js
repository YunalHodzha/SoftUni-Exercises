function oscars(input) {
    let actor = input[0];
    let academyPoints = Number(input[1]);
    let juryCount = Number(input[2]);   

    let totalPoints = 0;

    for ( let i = 3; i < input.length; i+=2) {
            totalPoints += (Number(input[i].length) * input[i+1]) /2;
            if((totalPoints + academyPoints) > 1250.5) {
                console.log(`Congratulations, ${actor} got a nominee for leading role with ${(totalPoints+academyPoints).toFixed(1)}!`);
                break;
            }
    }
    if ((totalPoints + academyPoints) <= 1250.5) {
        let pointsNeeded = 1250.5 - (totalPoints + academyPoints);
        console.log(`Sorry, ${actor} you need ${pointsNeeded.toFixed(1)} more!`)
    }
}

oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
