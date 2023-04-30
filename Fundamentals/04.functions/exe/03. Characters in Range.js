function charsInRange(char1, char2) {
    let num1 = char1.charCodeAt();
    let num2 = char2.charCodeAt();
    let allChars = "";

    if(num1 > num2){
        let bufferNum = num1;
        num1 = num2;
        num2 = bufferNum;
    }

    for(let i = num1 + 1; i<num2; i++) {
        let currentChar = String.fromCharCode(i);
        allChars += `${currentChar} `;
    }
    return allChars;
}

charsInRange("C", "#");