function searchForANumber(arr1, arr2) {
    let numberOfElements = arr2.shift();
    let numbersForDelete = arr2.shift();
    let number = arr2.shift();
    let counter = 0;
    let newArr = [];

    newArr = arr1.slice(0, numberOfElements);
    newArr.splice(0, numbersForDelete);

    for (let i = 0; i < newArr.length; i++) {
        let element = newArr[i];
        if (element === number) {
            counter++;
        }
    }
    console.log(`Number ${number} occurs ${counter} times.`);
}

searchForANumber(
    [5, 2, 3, 4, 1, 6],
    [5, 2, 3]);
console.log("-----------");
searchForANumber(
    [7, 1, 5, 8, 2, 7],
    [3, 1, 5]);
