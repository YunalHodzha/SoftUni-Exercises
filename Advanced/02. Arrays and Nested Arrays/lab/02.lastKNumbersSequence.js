function numberSequence(n, k) {
    let arr = [1];

    while(arr.length !== n) {
        let arr2 = arr.length <= k ? arr.slice() : arr.slice(arr.length - k);

        let currentSum = arr2.reduce((a, c) => a += c);
        arr.push(currentSum);
    }
    return arr;
}

numberSequence(6, 3);
numberSequence(8, 2);