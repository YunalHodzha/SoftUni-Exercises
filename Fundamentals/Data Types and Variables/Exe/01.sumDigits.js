function sumOfDigits(n) {
    let sum = 0;

    while (n > 0) {
        let rem = n % 10;
        sum += rem;
        n = parseInt(n / 10);
    }
    console.log(sum);
}

sumOfDigits(543);