function radianConvertor(input) {
    let radians = Number(input[0]);
    let degrees = radians * 180 / Math.PI

    console.log(degrees);
}

radianConvertor(["3.1416"])