function histogram(input){
    let numbers = input;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for(let i = 0; i<200; i++ ){
        if(numbers === i){
            p1++;
            console.log(p1.toFixed(2));
        }
    }
}

histogram([3, 1, 2, 999])