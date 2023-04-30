function theLift(arr) {
    let peopleCount = Number(arr[0]);

    lift = arr[1].split(" ");

    for (let i = 0; i < lift.length; i++) {
        let currentWagon = Number(lift[i]);
        for (let j = currentWagon; j < 4; j++) {
            if (currentWagon < 4) {
                currentWagon++;
                peopleCount--;
            }
            if (peopleCount === 0) {
                break;
            }
        }
        lift[i] = currentWagon;
        if (peopleCount === 0) {
            break;
        }
    }
    if (peopleCount > 0) {
        console.log(`There isn't enough space! ${peopleCount} people in a queue!`);
    } else if (lift[lift.length - 1] !== 4) {
        console.log(`The lift has empty spots!`);
    }
    console.log(lift.join(" "));
}

theLift([
    "15",
    "0 0 0 0 0"
]

)