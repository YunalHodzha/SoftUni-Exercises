function oddAndEvenSum(num) {
    let oddSum = 0;
    let evenSum = 0;

    let numberToString = String(num);
    
    function iteratingDigits(numberToString){
        for(let i=0; i<numberToString.length; i++) {
            let currentNum = Number(numberToString[i]);
            if(currentNum % 2 !== 0){
                oddSum += currentNum;
            }else {
                evenSum += currentNum
            }
        }
    }
    iteratingDigits(numberToString);
    return finalOutput = `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

oddAndEvenSum(3495892137259234);