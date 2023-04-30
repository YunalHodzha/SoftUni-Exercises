function bikeRace(input) {
    let juniorsCount = Number(input[0]);
    let seniorsCount = Number(input[1]);
    let trailType = input[2];

    let juniorPrice = 0;
    let seniorsPrice = 0;

    switch (trailType) {
        case "trail":
            juniorPrice += 5.50;
            seniorsPrice += 7;
            break;
        case "cross-country":
            juniorPrice += 8;
            seniorsPrice += 9.50;
                if((juniorsCount + seniorsCount) >= 50) {
                    juniorPrice *= 0.75;
                    seniorsPrice *= 0.75;
                }
            break;
        case "downhill":
            juniorPrice += 12.25;
            seniorsPrice += 13.75;
            break;
        case "road":
            juniorPrice += 20;
            seniorsPrice += 21.50;
            break;
    }
    let totalSum = (juniorPrice * juniorsCount) + (seniorsPrice * seniorsCount);
    totalSum *= 0.95;

    console.log(totalSum.toFixed(2))
}

bikeRace(["3", "40", "road"])