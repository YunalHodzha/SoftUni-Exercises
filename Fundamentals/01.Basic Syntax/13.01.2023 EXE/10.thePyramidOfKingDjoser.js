function pyramid(base, increment) {
    let marbleReq = 0;
    let stoneReq = 0;
    let lapisReq = 0;
    let goldReq = 0;
    let height = 0;

    let counter = 1;

    for (let i = base; i >= 1; i = i - 2) {
        let currentMarble = 0;
        let currentStone = 0;
        let currentLapis = 0;
        let currentGold = 0;

        if (i === 2 || i === 1) {
            currentGold = (i * i) * increment;
            goldReq += currentGold;
            height += increment;
            break;
        }

        if (counter !== 5) {
            currentStone = ((i * i) - ((i + (i - 1) + (i - 1) + (i - 2)))) * increment;
            stoneReq += currentStone;
            currentMarble = ((i + (i - 1) + (i - 1) + (i - 2)) * increment);
            marbleReq += currentMarble;
            height += increment;
        } else {
            currentStone = ((i * i) - ((i + (i - 1) + (i - 1) + (i - 2)))) * increment;
            stoneReq += currentStone;
            currentLapis = ((i + (i - 1) + (i - 1) + (i - 2))) * increment;
            lapisReq += currentLapis;
            height += increment;
            counter = 0;
        }
        counter++;
    }

    console.log(`Stone required: ${Math.ceil(stoneReq)}`);
    console.log(`Marble required: ${Math.ceil(marbleReq)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisReq)}`);
    console.log(`Gold required: ${Math.ceil(goldReq)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`)
}

pyramid(23, 0.5);