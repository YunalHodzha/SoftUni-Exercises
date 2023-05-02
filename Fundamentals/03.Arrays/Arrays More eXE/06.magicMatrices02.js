function matricec(arrays) {

    let rowTotal = arrays[0].reduce((a, b) => a + b);
    let colTotal = 0;

    arrays.forEach(row => {
        colTotal += row[0];
    });

    let N = arrays.length;
    let isTrue = true;

    for (let i = 0; i < N; i++) {
        let rowSum = arrays[i].reduce((acc, item) => acc + item);
        let colSum = 0;

        for (let j = 0; j < N; j++) {
            colSum += arrays[j][i];
        }

        if (rowSum !== rowTotal || colSum !== colTotal) {
            isTrue = false;
            break;
        }
    }

    console.log(isTrue);
}

matricec([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
);
console.log("--------------");
matricec([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
);
console.log("----------------");
matricec(
    [[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
);