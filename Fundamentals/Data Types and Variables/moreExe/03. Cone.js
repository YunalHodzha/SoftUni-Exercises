function solve(radius, height) {
    let volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;

    let surfaceArea = Math.PI * radius * (Math.sqrt((Math.pow(radius, 2) + (Math.pow(height, 2)))) + radius);

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${surfaceArea.toFixed(4)}`);
}

solve(3.3, 7.8);