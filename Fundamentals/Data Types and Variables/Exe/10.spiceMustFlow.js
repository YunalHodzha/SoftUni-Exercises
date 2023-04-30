function solve(yield) {
    let spiceSum = 0;
    let days = 0;

    while (yield >= 100) {
        spiceSum += yield;
        if(spiceSum < 26){
            spiceSum -= spiceSum;
        }else {
        spiceSum -= 26;
        }
        yield -= 10;
        days++;
    }
    if(spiceSum < 26){
        spiceSum -= spiceSum;
    }else {
    spiceSum -= 26;
    }
    console.log(days);
    console.log(spiceSum);
}
solve(111);