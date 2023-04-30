function solve(n) {
    let sum = 0;

    for(let i=1; i<=n; i++){
        sum = 0;
        let digit = i;
        while(digit>0){
            let rem = digit % 10;
            sum += rem;
            digit = parseInt(digit/10);
        }
        if(sum === 5 || sum === 7 || sum === 11){
            console.log(`${i} -> True`);
        }else {
            console.log(`${i} -> False`);
        }
    }
}

solve(20)