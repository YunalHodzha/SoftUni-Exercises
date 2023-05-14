function equalNeighbors(arr) {
    let pairsSum = 0;

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr[i].length; j++) {
            let num = arr[i][j];


            if (num == arr[i][j + 1]) {
                pairsSum++;
            }

            if (i + 1 === arr.length) {
                continue;
            }

            if (num === arr[i + 1][j]) {
                pairsSum++;
            }
        }
    }
    return pairsSum;
}

equalNeighbors([
    ['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2'],
]
);
equalNeighbors([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]
);