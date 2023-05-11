function sameNumbers(input) {
    let arr = String(input).split("");
    let num = arr[0];

    if (arr.every((item) => item === num)) {
        console.log(true);
    } else {
        console.log(false);
    }

    arr = arr.map(item => Number(item));
    console.log(arr.reduce((acc, el) => acc += el));
}

sameNumbers(2222222);
console.log("---------");
sameNumbers(1234);
