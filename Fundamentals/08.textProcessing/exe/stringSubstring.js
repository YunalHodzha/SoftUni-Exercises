function proccesing(specialWord, text) {
    text = text.toLowerCase().split(" ");
    let isFound = false;

    for (let word of text) {
        if (word === specialWord) {
            console.log(word);
            isFound = true;
            break;
        }
    }
    if (isFound === false) {
        console.log(`${specialWord} not found!`)
    }
}

proccesing('javascript',
    'JavaScript is the best programming language');
console.log("-----------");
proccesing('python',
    'JavaScript is the best programming language');