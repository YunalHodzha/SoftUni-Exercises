function subSum(arr, start, end) {
    if (!Array.isArray(arr)) {
        return NaN;
    }

    if (start < 0) {
        start = 0;
    }
 
    if (end > arr.length - 1) {
        end = arr.length - 1;
    }

    return arr.reduce((a, c, i) => {
        if (i >= start && i <= end) {
            a += Number(c);
        }
        return a;
    }, 0);
}

console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1 ))
console.log(subSum([10, 'twenty', 30, 40], 0, 2 ));