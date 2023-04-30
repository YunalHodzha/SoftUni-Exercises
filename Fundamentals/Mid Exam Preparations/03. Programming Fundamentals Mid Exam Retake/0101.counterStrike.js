function counterStrie(arr) {
    let energy = arr.shift();
    let roundsWon = 0;

    let index = 0;
    while (arr[index] !== "End of battle") {
        let distance = (arr[index]);
        if (energy - distance >= 0) {
            energy -= distance;
            roundsWon++;
        } else {
            if (energy < 0) {
                energy = 0;
            }
            console.log(`Not enough energy! Game ends with ${roundsWon} won battles and ${energy} energy`);
            break;
        }

        if (roundsWon % 3 === 0) {
            energy += roundsWon;
        }
        index++;
    }
    if (arr[index] === "End of battle") {
        console.log(`Won battles: ${roundsWon}. Energy left: ${energy}`);
    }
}

counterStrie(["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"])

console.log("----------");
counterStrie(["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"])
