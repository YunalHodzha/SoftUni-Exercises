function balls(input) {
    let index = 0;
    let ballsCount = Number(input[index]);
    index++;

    let pointsSum = 0;
    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;
    let otherColors = 0;
    let dividedPoints = 0;


    for (let i = 1; i <= ballsCount; i++) {
        let currentBall = input[index];
        if (currentBall == "red") {
            redBalls++;
            pointsSum += 5;
        } else if (currentBall == "orange") {
            orangeBalls++;
            pointsSum += 10;
        } else if (currentBall == "yellow") {
            yellowBalls++;
            pointsSum += 15;
        } else if (currentBall == "white") {
            whiteBalls++;
            pointsSum += 20;
        } else if (currentBall == "black") {
            pointsSum = Math.floor(pointsSum / 2);
            dividedPoints++;
        } else {
            otherColors++;
        }
        index++;
    }
    console.log(`Total points: ${pointsSum}`);
    console.log(`Red balls: ${redBalls}`);
    console.log(`Orange balls: ${orangeBalls}`);
    console.log(`Yellow balls: ${yellowBalls}`);
    console.log(`White balls: ${whiteBalls}`);
    console.log(`Other colors picked: ${otherColors}`);
    console.log(`Divides from black balls: ${dividedPoints}`);
}

balls(["5",
    "red",
    "red",
    "ddd",
    "ddd",
    "ddd"])

