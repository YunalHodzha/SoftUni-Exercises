function kNumbers(arr) {
    let k = arr.shift();
    let arr2 = arr.slice(0, k);
    let arr3 = arr.slice(arr.length - k);

    console.log(arr2.join(` `));
    console.log(arr3.join(` `));
}

kNumbers([2, 
    7, 8, 9]
    )
    console.log("--------------");
kNumbers([3,
    6, 7, 8, 9]
   )