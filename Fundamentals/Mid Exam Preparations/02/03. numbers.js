function findingNumbers(input) {
    let myArr = input;
    myArr = myArr
        .split(" ")
        .map(Number);

    let sum = myArr.reduce((sum, item) => sum += item);
    let avgNum = sum / myArr.length;
    let newArr = [];

    if (myArr.find((item) => item > avgNum)) {
    } else {
        console.log("No");
        return;
    }

    for (let i = 0; i < myArr.length; i++) {
        if (myArr[i] > avgNum) {
            newArr.push(myArr[i]);
        }
    }

    newArr.sort((a, b) => b - a);
    newArr = newArr.slice(0, 5);

    console.log(newArr.join(" "));
}

findingNumbers('10 20 30 40 50');
console.log("----------");
findingNumbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
console.log("----------");
findingNumbers(`1`);
console.log("----------");
findingNumbers('-1 -2 -3 -4 -5 -6');
