function housePainting(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let frontWall = (x * x) - 2.4;
    let backWall = x * x;
    let sideWalls = (x * y)*2 - 4.5;
    let totalGreenArea = frontWall + backWall + sideWalls;
    let greenPaintLitres = totalGreenArea / 3.4;

    let sideRoofs = (x * y)*2;
    let frontAndBackSideRoof = (x * h) /2;
    let redPaintLitres = ((frontAndBackSideRoof * 2) + sideRoofs) /4.3;

    console.log(greenPaintLitres.toFixed(2));
    console.log(redPaintLitres.toFixed(2))
}

housePainting(["10.25","15.45","8.88"])