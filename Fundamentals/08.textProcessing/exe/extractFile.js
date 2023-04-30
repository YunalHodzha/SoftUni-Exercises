function proccesing(input) {
    let filePathArr = input.split("\\");
    let file = filePathArr.pop().split(".");
    let fileExt = file.pop();
    let fileName = file.join(".");

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExt}`);
}

proccesing('C:\\Internal\\training-internal\\Template.bak.pptx');
console.log("---------------");
proccesing('C:\\Projects\\Data-Structures\\LinkedList.cs');