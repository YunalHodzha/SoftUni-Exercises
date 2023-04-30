function passwordGenerator(arr) {
    let string = arr[0] + arr[1];
    let word = arr[2].repeat(5);
    let newStr = "";

    let index = 0;

    for (ch of string) {
        if (ch === "a" || ch === "o" || ch === "e" || ch === "u" || ch === "i") {
            newStr += word[index].toUpperCase();
            index++;
        } else {
            newStr += ch;
        }
    }

    let reversed = "";
    for (let i = newStr.length - 1; i >= 0; i--) {
        reversed += newStr[i];
    }
    console.log(`Your generated password is ${reversed}`);
}

passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange']);
console.log("-------------");
passwordGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);
console.log("-------------");
passwordGenerator(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed']);