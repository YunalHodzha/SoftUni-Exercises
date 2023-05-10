function circleArea(num) {
    if (typeof num === "number") {
        let radius = (Math.PI * Math.pow(num, 2)).toFixed(2);
        console.log(radius);
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof num}.`);
    }
}

circleArea(5);
console.log("-------------");
circleArea('name');