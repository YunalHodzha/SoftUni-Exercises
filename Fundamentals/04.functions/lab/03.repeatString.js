function repeatString(str, repeats) {
    let repeatedString = "";

    for(let i=1; i<=repeats; i++) {
        repeatedString += str;
    }
    return repeatedString;
}

repeatString("abc", 3);