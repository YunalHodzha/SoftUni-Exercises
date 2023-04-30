function solve(n){
    n = Number(n);
    
    for(let i1 = 0; i1 < n; i1++){
        for(let i2 = 0; i2 < n; i2++){
            for(let i3 = 0; i3 < n; i3++){
                console.log(`${String.fromCharCode(97+i1)}${String.fromCharCode(97+i2)}${String.fromCharCode(97+i3)}`)
            }
        }
    }

}

solve('3')