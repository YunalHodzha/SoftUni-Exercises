function solve(n, arr) {
    let newArr = [];

    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }
    newArr = newArr.reverse();
    console.log(newArr.join(" "));
}

solve(2, [66, 43, 75, 89, 47]);