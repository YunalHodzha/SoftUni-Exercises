function processing(word, startIndex, count) {
    let newWord = word.substring(startIndex, startIndex + count);
    console.log(newWord)
}

processing('ASentence', 1, 8);
console.log("---------------");
processing('SkipWord', 4, 7);
