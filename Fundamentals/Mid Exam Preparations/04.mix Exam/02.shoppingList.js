function shoppingList(arr) {
    let initialList = arr.shift().split("!");

    let index = 0;
    while (arr[index] !== "Go Shopping!") {
        let commands = arr[index].split(" ");
        let action = commands.shift();
        let item = commands.shift();
        index++;

        switch (action) {
            case "Urgent":
                if (initialList.includes(item)) {
                    continue;
                } else {
                    initialList.unshift(item);
                }
                break;
            case "Unnecessary":
                if (initialList.includes(item)) {
                    let itemIndex = initialList.indexOf(item);
                    initialList.splice(itemIndex, 1);
                } else {
                    continue;
                }
                break;
            case "Correct":
                let newItem = commands[0];
                if (initialList.includes(item)) {
                    let indexOfOld = initialList.indexOf(item);
                    initialList[indexOfOld] = newItem;
                } else {
                    continue;
                }
                break;
            case "Rearrange":
                if (initialList.includes(item)) {
                    let indexOf = initialList.indexOf(item);
                    initialList.splice(indexOf, 1);
                    initialList.push(item);
                } else {
                    continue;
                }
                break;
        }

    }
    console.log(initialList.join(", "))
}

shoppingList(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"])

console.log("------------");
shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])
