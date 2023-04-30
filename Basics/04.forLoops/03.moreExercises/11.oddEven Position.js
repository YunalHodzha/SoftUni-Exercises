function solve(input) {
    let n = Number(input[0]);

    let oddSum = 0;
    let oddMin = Number.MAX_SAFE_INTEGER;
    let oddMax = Number.MIN_SAFE_INTEGER;
    let evenSum = 0;
    let evenMin = Number.MAX_SAFE_INTEGER;
    let evenMax = Number.MIN_SAFE_INTEGER;


    for (let index = 1; index <= n; index++) {
        if (index % 2 === 0){
            evenSum += Number(input[index]);
            if(evenMax <= Number(input[index])) {
                evenMax = Number(input[index]);
            }
            if(evenMin >= Number(input[index])) {
                evenMin = Number(input[index]);
            }
        } else {
            oddSum += Number(input[index]);
            if(oddMax <= Number(input[index])) {
                oddMax = Number(input[index]);
            }
            if(oddMin >= Number(input[index])) {
                oddMin = Number(input[index]);
            }
        }

    }
    
    console.log(`OddSum=${oddSum.toFixed(2)},`);
    if(oddMin === Number.MAX_SAFE_INTEGER) {
        oddMin = "No";
        console.log(`OddMin=${oddMin},`);
    }else {
        console.log(`OddMin=${oddMin.toFixed(2)},`);
    }
    if(oddMax === Number.MIN_SAFE_INTEGER){
        oddMax = "No";
        console.log(`OddMax=${oddMax},`);
    }else {
        console.log(`OddMax=${oddMax.toFixed(2)},`);
    }
    console.log(`EvenSum=${evenSum.toFixed(2)},`);

    if(evenMin === Number.MAX_SAFE_INTEGER){
        evenMin = "No";
        console.log(`evenMin=${evenMin},`);
    }else {
        console.log(`evenMin=${evenMin.toFixed(2)},`);
    }
    if(evenMax === Number.MIN_SAFE_INTEGER){
        evenMax = "No";
        console.log(`EvenMax=${evenMax}`);
    }else {
        console.log(`EvenMax=${evenMax.toFixed(2)}`);
    }  
}

solve(["5", "3", "-2", "8", "11", "-3"])