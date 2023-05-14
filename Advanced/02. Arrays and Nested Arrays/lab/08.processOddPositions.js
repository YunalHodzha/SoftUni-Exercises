function process(arr) {
    let newArr = arr
        .filter((x, y) => y % 2 !== 0)
        .reverse()
        .map(x => x * 2)
        .join(" ");

    return newArr;
}

process([10, 15, 20, 25]);
process([3, 0, 10, 4, 7, 3]);