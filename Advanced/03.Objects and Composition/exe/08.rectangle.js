function solve(width, height, color) {
    let cptColor = color.charAt(0).toUpperCase() + color.slice(1);

    width = Number(width);
    height = Number(height);

    let obj = {
        width: width,
        height: height,
        color: cptColor,

        calcArea() {
            return width * height;
        }
    }
    return obj;
}

let rect = solve('5', 5, 'red');

console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

