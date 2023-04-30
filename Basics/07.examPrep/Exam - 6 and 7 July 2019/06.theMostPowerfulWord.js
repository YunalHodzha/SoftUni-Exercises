function mostPowerfulWord(input) {
    let index = 0;
    let word = input[index];
    index++;

    let mostPowerfulWord = "";
    let currentWord = 0;
    let maxNumber = 0;

    let vowels = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"];

    while(word !== "End of words") {
        for (let i = 0; i< word.length ; i++){
            currentWord+= word[i].charCodeAt(0);
        }
        if (vowels.includes(word[0])){
            currentWord = currentWord * word.length;
        }else {
            currentWord = Math.floor(maxNumber / word.length)
        }
        
        if(currentWord > maxNumber) {
            maxNumber = currentWord;
            mostPowerfulWord = word;
        }
        currentWord = 0;
        word = input[index];
        index++;
    }
    console.log(`The most powerful word is ${mostPowerfulWord} - ${maxNumber}`)
}

mostPowerfulWord(["The",
"Most",
"Powerful",
"Word",
"Is",
"Experience",
"End of words"])








