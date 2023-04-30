function triangleArea(input) {
    let a = Number(input[0]);
    let h = Number(input[1]);
    let areaSum = (a * h) / 2;
    console.log(areaSum.toFixed(2));
}

triangleArea(["15","35"])