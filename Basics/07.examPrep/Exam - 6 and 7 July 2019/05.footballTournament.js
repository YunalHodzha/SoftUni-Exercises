function tournament(input) {
    let team = input[0];

    let totalMatches = Number(input[1]);

    let points = 0;
    let wins = 0;
    let d = 0;
    let loses = 0;

    if (totalMatches == 0) {
        console.log(`${team} hasn't played any games during this season.`);
        return;
    }

    for (i = 2; i <= totalMatches + 1; i++) {
        let result = input[i];
        switch (result) {
            case "W":
                points += 3;
                wins++;
                break;

            case "D":
                points += 1
                d++;
                break;

            case "L":
                loses++;
                break;
        }
    }
    let winrate = (wins / totalMatches) * 100;

    console.log(`${team} has won ${points} points during this season.`);
    console.log(`Total stats:`)
    console.log(`## W: ${wins}`)
    console.log(`## D: ${d}`)
    console.log(`## L: ${loses}`)
    console.log(`Win rate: ${winrate.toFixed(2)}%`)

}

tournament(["Chelsea",
    "0"])


