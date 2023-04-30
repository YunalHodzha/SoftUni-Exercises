function equalPairs(input) {
    let pairsCount = Number(input[0]);
    let allPairSum = 0;

    for ( let i=1; i<pairsCount*2; i++) {
        let pairSum = (Number(input[i]) + Number(input[i+1]))
        allPairSum += pairSum
    }

    console.log(allPairSum);


}


equalPairs(["3", "1", "2", "0", "3", "4", "-1"])