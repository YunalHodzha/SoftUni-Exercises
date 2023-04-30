function maxSequence(arr) {
    let longestSeq = [];


    for (let i = 0; i < arr.length; i++) {
        let currentSeq = [];
        currentSeq.push(arr[i]);
        for (let i2 = i + 1; i < arr.length; i2++) {
            if (arr[i] == arr[i2]) {
                currentSeq.push(arr[i2]);

            } else {
                break;
            }
        }
        if (currentSeq.length > longestSeq.length) {
            longestSeq = currentSeq;
        }
    }
    console.log(longestSeq.join(" "))
}

maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);