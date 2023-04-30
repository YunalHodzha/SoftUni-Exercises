function guineaPig(arr) {
    arr = arr.map(Number)
    let foodGr = arr.shift() * 1000;
    let hayGr = arr.shift() * 1000;
    let coverGr = arr.shift() * 1000;
    let guineasGr = arr.shift() * 1000;

    let days = 1;

    while (foodGr > 0 || hayGr > 0 || coverGr > 0) {
        if (days === 31) {
            break;
        }
        foodGr -= 300;
        if (days % 2 === 0) {
            hayGr -= foodGr * 0.05;
        }
        if (days % 3 === 0) {
            coverGr -= guineasGr / 3;
        }
        days++;
    }
    foodGr = foodGr / 1000;
    hayGr = hayGr / 1000;
    coverGr = coverGr / 1000;

    if ((foodGr > 0 && hayGr > 0 && coverGr > 0)) {
        console.log(`Everything is fine! Puppy is happy! Food: ${foodGr.toFixed(2)}, Hay: ${hayGr.toFixed(2)}, Cover: ${coverGr.toFixed(2)}.`)
    } else {
        console.log(`Merry must go to the pet store!`);
    }
}

guineaPig(["10",
    "5",
    "5.2",
    "1"])
console.log("---------");
guineaPig(["1",
    "1.5",
    "3",
    "1.5"
])
console.log("---------");
guineaPig(["9",
    "5",
    "5.2",
    "1"])
