function sorting(arr) {
    let sortedArr = [];

    while (arr.length > 0) {
        arr.sort((a, b) => a - b);
        let currentNum = arr.shift();
        sortedArr.push(currentNum);

        arr.sort((a, b) => b - a);
        currentNum = arr.shift();
        sortedArr.push(currentNum);
    }
    return sortedArr;
}

sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);