function addAndRemove(arr) {
    let myArr = [];
    let myNum = 0;

    for (let command of arr) {
        myNum++;

        if (command === 'add') {
            myArr.push(myNum);
        } else if (command === 'remove') {
            myArr.pop();
        }
    }

    if (myArr.length === 0) {
        console.log('Empty');
    } else {
        myArr.forEach((i) => console.log(i));
    }
}

addAndRemove(['add',
    'add',
    'add',
    'add']);
console.log("-------------");
addAndRemove(['add',
    'add',
    'remove',
    'add',
    'add']);
console.log("-------------");
addAndRemove(['remove',
    'remove',
    'remove']);