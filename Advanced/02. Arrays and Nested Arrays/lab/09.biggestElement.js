function biggestElement(arr) {
    let biggestNum = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > biggestNum) {
                biggestNum = arr[i][j];
            }
        }
    }
    return biggestNum;
}

biggestElement([
    [20, 50, 10],
    [8, 33, 145]]
)
biggestElement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]
)