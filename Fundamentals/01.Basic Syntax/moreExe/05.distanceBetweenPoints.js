function distanceBetweenPoints(x1, y1, x2, y2){
    let x = (x2 - x1);
    let y = (y2 - y1);

    let result = Math.sqrt((Math.pow(x, 2)) + (Math.pow(y, 2)));
    console.log(result)
}

distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985)