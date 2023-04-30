function proccesing(input) {
    let myText = "";
    let myTextIndex = 0;
    let index = 0;
    myText += input[index];

    index++
    while (index < input.length) {
        if (input[index] !== myText[myTextIndex]) {
            myText += input[index];
            myTextIndex++;
        }
        index++;
    }
    console.log(myText)
}

proccesing('aaaaabbbbbcdddeeeedssaa');
console.log("--------------");
proccesing('qqqwerqwecccwd');