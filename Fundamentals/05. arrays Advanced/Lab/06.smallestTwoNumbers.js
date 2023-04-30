function smallestNumber(arr) {
    let sortAndSlice = (arr.sort((a, b) => a - b)).slice(0, 2);
    console.log(sortAndSlice.join(" "));
}

smallestNumber([30, 15, 50, 5]);
console.log("-----------");
smallestNumber([3, 0, 10, 4, 7, 3]);