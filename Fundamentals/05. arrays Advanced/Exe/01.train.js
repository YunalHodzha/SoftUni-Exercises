function train(arr) {
    let wagon = arr
        .shift()
        .split(" ")
        .map(a => Number(a));

    let maxCapacity = Number(arr.shift());

    for(let el of arr) {
        let command = el.split(" ");
        if(command[0] === "Add") {
            let number = Number(command[1]);
            wagon.push(number);
        }else {
            let number = Number(command);
            for(let i=0; i<wagon.length; i++) {
                if(wagon[i] + number <= maxCapacity) {
                    wagon[i] += number;
                    break;
                }
            }
        }
    }

    console.log(wagon.join(" "));
}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)
console.log("------------");
train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
)