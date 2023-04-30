function fancyBarcodes(arr) {
    let pattern = /@[#]+(?<validWord>[A-Z][A-Za-z0-9]{4,}[A-Z])@[#]+/;
    let digitPattern = /\d+/g;
    let count = Number(arr.shift());

    for (let barcode of arr) {
        if (pattern.test(barcode)) {
            let group = "";
            while ((validGroup = digitPattern.exec(barcode)) !== null) {
                group += validGroup;
            }
            if (group === "") {
                group = "00";
            }
            console.log(`Product group: ${group}`);
        } else {
            console.log("Invalid barcode");
        }
    }
}


fancyBarcodes(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"]);
console.log("---------------");
fancyBarcodes(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"]);