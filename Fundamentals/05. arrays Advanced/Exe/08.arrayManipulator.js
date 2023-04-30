function arrayManipulator(arr, commands) {
    for (let i = 0; i < commands.length; i++) {
        let currentCommands = commands[i].split(" ");
        let operation = currentCommands.shift();
        let index = 0;
        isOver = false;

        currentCommands = currentCommands.map(Number);


        switch (operation) {
            case "add":
                index = currentCommands[0];
                let element = currentCommands[1];
                arr.splice(index, 0, element);
                break;
            case "addMany":
                index = currentCommands.shift();
                for (let i = 0; i < currentCommands.length; i++) {
                    arr.splice(index + i, 0, currentCommands[i]);
                }
                break;
            case "contains":
                index = arr.indexOf(currentCommands[0]);
                console.log(index);
                break;
            case "remove":
                arr.splice(currentCommands, 1);
                break;
            case "shift":
                for (let i = 0; i < currentCommands[0]; i++) {
                    arr.push(arr.shift());
                }
                break;
            case "sumPairs":
                let sumArr = [];
                if(arr.length % 2 === 0) {
                    for(let i = 0; i<arr.length; i += 2){
                        sumArr.push(arr[i] + arr[i + 1]);
                    }
                }else {
                    for(let i = 0; i< arr.length -1; i+=2) {
                        sumArr.push(arr[i] + arr[i+1]);
                    }
                    sumArr.push(arr.pop());
                }
                arr = sumArr;
                break;
            case "print":
                console.log(`[ ${arr.join(", ")} ]`)
                isOver = true;
                break;
        }
        if (isOver === true) {
            break;
        }
    }
}
arrayManipulator(
    [1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']);

console.log("----------");

arrayManipulator(
    [1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);