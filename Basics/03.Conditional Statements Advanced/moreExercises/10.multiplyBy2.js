function multiplyBy2(input) {
    let numbers = Number(input[0]);

    for (i of numbers) {
        
        i *= 2;
        console.log(`Result: ${i}`);
    }
}

multiplyBy2([12, 43.2144, 12.3, 543.23, -20])