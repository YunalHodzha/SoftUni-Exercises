function sumNumber(input) {
    let num = Number(input[0]);
    let totalSum = 0;
    let index = 1;

    while (totalSum < num) {
        let currentNumber = Number(input[index])
        totalSum = totalSum + currentNumber;
        index++
    }
    console.log(totalSum)
}

sumNumber(["20",
"1",
"2",
"3",
"4",
"5",
"6"])

