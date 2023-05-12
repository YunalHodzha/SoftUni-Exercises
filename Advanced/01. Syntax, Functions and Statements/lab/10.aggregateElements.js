function solve(arr) {
    let sum = 0;
    let inverseSum = 0;
    let str = '';

    for (let el of arr) {
        sum += el;
        inverseSum += 1 / el;
        str += el;
    }


    console.log(sum);
    console.log(inverseSum);
    console.log(str);
}

solve([1, 2, 3]);
console.log("------------");
solve([2, 4, 8, 16]);