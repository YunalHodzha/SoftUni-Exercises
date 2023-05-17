function magicMatricex(matrix) {
    let isTrue = true;

    let value = matrix[0].reduce((sum, el) => sum += el);


    for (let i = 1; i < matrix.length; i++) {
        let currentValue = matrix[i].reduce((sum, el) => sum += el);
        if (value !== currentValue) {
            isTrue = false;
            break;
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        let currentCol = 0;
        for (let j = 0; j < matrix.length; j++) {
            currentCol += matrix[j][i];
        }
        if (value !== currentCol) {
            isTrue = false;
            break;
        }
    }

    console.log(isTrue);
}

magicMatricex(
    [[4, 5, 6, 5],
    [6, 5, 4, 5],
    [5, 5, 5, 5],
    [5, 5, 5, 5]]);
console.log("------------");
magicMatricex(
    [[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]);
console.log("------------");
magicMatricex(
    [[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]);