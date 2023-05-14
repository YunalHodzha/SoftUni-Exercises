function diagonalSums(arr) {
    let firsSum = 0;
    let secondSum = 0;

    for (i = 0; i < arr.length; i++) {
        firsSum += arr[i][i];
        secondSum += arr[i][(arr.length - 1) - i];
    };

    console.log(firsSum, secondSum);
}

diagonalSums([[20, 40], [10, 60]]);
diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]])