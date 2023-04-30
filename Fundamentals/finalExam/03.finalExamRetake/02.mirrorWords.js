function mirrorWords(arr) {
    let text = arr[0];
    let pattern = /([@#])(?<wordOne>[A-Za-z]{3,})\1\1(?<wordTwo>[A-Za-z]{3,})\1/g;
    let pairsCount = 0;
    let mirrorsArray = [];

    while ((pairWord = pattern.exec(text)) !== null) {
        pairsCount++;
        let firstWord = pairWord.groups.wordOne;
        let secondWord = pairWord.groups.wordTwo;

        let reversed = firstWord.split("").reverse().join("");
        if (reversed === secondWord) {

            mirrorsArray.push(`${firstWord} <=> ${secondWord}`);
        }
    }
    if(pairsCount === 0) {
        console.log("No word pairs found!");
    }else {
        console.log(`${pairsCount} word pairs found!`);
    }

    if (mirrorsArray.length === 0) {
        console.log(`No mirror words!`);
    } else {
        console.log(`The mirror words are: \n${mirrorsArray.join(", ")}`);
    }
}

mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);
console.log("-----------------");
mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
console.log("--------------------");
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'])