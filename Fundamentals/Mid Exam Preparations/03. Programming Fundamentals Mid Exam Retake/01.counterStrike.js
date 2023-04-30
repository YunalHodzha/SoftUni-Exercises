function counterStrike(arr) {
    let energy = Number(arr.shift());
    let maxEnergy = energy;
    let battlesWon = 0;

    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        if (value === "End of battle") {
            console.log(`Won battles: ${battlesWon}. Energy left: ${energy}`);
            break;
        } else {
            value = Number(value);
        }

        if (energy - value >= 0) {
            energy -= value;
            battlesWon++;
        } else {
            if (energy < 0) {
                energy = 0;
            }
            console.log(`Not enough energy! Game ends with ${battlesWon} won battles and ${energy} energy`);
        }

        if (battlesWon % 3 === 0) {
            energy += battlesWon;
            if (energy > maxEnergy) {
                energy = maxEnergy;
            }
        }
    }
}

counterStrike(["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"]);
console.log("---------------");
counterStrike(["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"])

