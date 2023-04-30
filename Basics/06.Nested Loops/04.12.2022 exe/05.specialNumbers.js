function specialNumber(input){
    let n = Number(input[0]);

    let result = "";

    for(let i=1111; i<=9999; i++){
        let digit = i.toString();
        if(n % Number(digit[0])  === 0){
            if(n % Number(digit[1]) === 0){
                if(n % Number(digit[2]) === 0){
                    if(n % Number(digit[3]) === 0){
                        result += `${digit} `;
                    }
                }
            }
        }
    }
    console.log(result)
}

specialNumber(["16"])