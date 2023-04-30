function oddNumbers(arr) {
    let newArr = arr
        .filter((x, i) => i % 2 !== 0)
        .map(a => a * 2)
        .reverse()
    
    return newArr.join(" ");
}

console.log(oddNumbers([3, 0, 10, 4, 7, 3]))

oddNumbers([10, 15, 20, 25]);
console.log("----------");
oddNumbers([3, 0, 10, 4, 7, 3]);