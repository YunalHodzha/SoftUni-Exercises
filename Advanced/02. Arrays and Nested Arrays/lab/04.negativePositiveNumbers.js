function solve(arr) {
    let newArr = [];

    for (let num of arr) {
        if (num < 0) {
            newArr.unshift(num);
        } else {
            newArr.push(num);
        }
    }
    newArr.forEach(i => console.log(i));
}

solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);