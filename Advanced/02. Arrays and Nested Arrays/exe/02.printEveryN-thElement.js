function print(arr, N) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += N) {
        newArr.push(arr[i]);
    }
    return newArr;
}

print(['5',
    '20',
    '31',
    '4',
    '20',
    2])
print(['dsa',
    'asd',
    'test',
    'tset'],
    2
)
print(['1',
    '2',
    '3',
    '4',
    '5'],
    6);