function printDNA(num) {
    let dnaArr = ["AT", "CG", "TT", "AG", "GG"];
    let counter = 1;
    let i = 0;

    while(counter !== num +1) {

        if(i === 5) {
            i = 0;
        }
        console.log(dnaArr[i]);
        counter++;
        i++;
    }


}

printDNA(4);
console.log("-------------------");
printDNA(10);