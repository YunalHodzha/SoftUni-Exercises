function pointsValidation(arr) {
    let x1 = arr.shift();
    let y1 = arr.shift();
    let x2 = arr.shift();
    let y2 = arr.shift();

    function distanceCalculating(x, y) {
        let distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

        if (Number.isInteger(distance)) {
            console.log(`{${x}, ${y}} to {0, 0} is valid`);
        } else {
            console.log(`{${x}, ${y}} to {0, 0} is invalid`);
        }
    }


    distanceCalculating(x1, y1);
    distanceCalculating(x2, y2);


    let totalDistance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    if (Number.isInteger(totalDistance)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

pointsValidation([3, 0, 0, 4]);
console.log("----------");
pointsValidation([2, 1, 1, 1]);