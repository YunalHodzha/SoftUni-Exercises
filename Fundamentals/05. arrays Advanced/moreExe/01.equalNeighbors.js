function equalNeighbors(matrix) {
    let pairsCount = 0;
    let N = matrix.length;
    let N2 = matrix[0].length;

    for (let i = 0; i < N; i++) {

        for (let j = 0; j < N2; j++) {
            let element = matrix[i][j];
            if (element === matrix[i][j + 1]) {
                pairsCount++;
            }

            if (i + 1 === N) {
                continue;
            } else {
                if (element === matrix[i + 1][j]) {
                    pairsCount++;
                }
            }
        }
    }

    console.log(pairsCount);
}

equalNeighbors(
    [['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]);
console.log("---------------");
equalNeighbors(
    [['test', 'yo', 'yo', 'ho'],
    ['well', 'done', 'no', '6'],
    ['not', 'done', 'yet', '5']]
);