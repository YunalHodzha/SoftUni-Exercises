function sumFirstAndLaast(arr) {
    let firstNum = Number(arr[0]);
    let lastSum = Number(arr[arr.length -1]);
    
    console.log(firstNum + lastSum)
}

sumFirstAndLaast(['20', '30', '40']);
console.log("-----------");
sumFirstAndLaast(['5', '10'])