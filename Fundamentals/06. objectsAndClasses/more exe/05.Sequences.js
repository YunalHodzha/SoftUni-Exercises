function sequences(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = JSON.parse(arr[i])
    }

    let uniqueArr = [];

    for (let i = 0; i < arr.length; i++) {

        let a = arr[i];


        for (let j = i + 1; i < arr.length; j++) {

        }

    }

    console.log(arr)
}

sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]);
console.log("--------------");
sequences(["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"]
)