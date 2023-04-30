function solve(input) {
    let above20kg = Number(input[0]);
    let packageKg = Number(input[1]);
    let daysCount = Number(input[2]);
    let packageCount = Number(input[3]);

    let totalPrice = 0;

    if (packageKg > 20) {
        totalPrice = above20kg;
    }else if (packageKg >= 10) {
        totalPrice = (above20kg * 0.50);
    }else {
        totalPrice = (above20kg * 0.20);
    }
    if (daysCount > 30) {
        totalPrice *= 1.10;
    }else if (daysCount >= 7) {
        totalPrice *= 1.15;
    }else {
        totalPrice *= 1.40;
    }

    console.log(`The total price of bags is: ${((totalPrice * packageCount).toFixed(2))} lv.`)
}

solve(["63.80",
"23",
"3",
"1"])


