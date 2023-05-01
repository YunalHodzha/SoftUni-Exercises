function printDNA(num) {
    let dnaArr = ["A", "T", "C", "G", "T", "T", "A", "G", "G", "G"];

    let counter = 0;;
    let i = 0;

    for (let i = 1; i <= num; i++) {

        let a = dnaArr[counter];
        let b = dnaArr[counter + 1];

        if (counter === 8) {
            counter = 0;
        } else {
            counter += 2;
        }

        if (i === 1 || i % 4 === 1) {
            console.log(`**${a}${b}**`);
        } else if (i === 2 || i % 4 === 2 || i % 4 === 0) {
            console.log(`*${a}--${b}*`);
        } else if (i === 3 || i % 4 === 3) {
            console.log(`${a}----${b}`);
        }
    }
}

printDNA(4);
console.log("-------------------");
printDNA(10);