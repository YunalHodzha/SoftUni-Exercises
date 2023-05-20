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