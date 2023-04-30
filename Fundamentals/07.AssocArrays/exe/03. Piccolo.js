function piccolo(arr) {
    let parking = new Map();

    for (let data of arr) {
        let [info, car] = data.split(", ");

        if (info === "OUT") {
            if (parking.has(car)) {
                parking.delete(car);
            }
        } else if (info === "IN") {
            parking.set(car);
        }
    }

    if (parking.size === 0) {
        console.log(`Parking Lot is Empty`);
    } else {
        let sorted = Array.from(parking).sort((a, b) => a[0].localeCompare(b[0]))
        sorted.forEach((el) => console.log(el[0]));
    }
}


piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);
console.log("-------------");
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']);