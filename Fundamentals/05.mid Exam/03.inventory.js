function inventory(arr) {
    let inventory = arr.shift().split(", ");

    let index = 0;
    while (arr[index] !== "Craft!") {
        let commands = arr[index].split(" - ");
        let action = commands.shift();
        let item = commands.shift();
        index++;

        switch (action) {
            case "Collect":
                if (inventory.includes(item)) {
                    continue;
                } else {
                    inventory.push(item);
                }
                break;
            case "Drop":
                if (inventory.includes(item)) {
                    let itemIndex = inventory.indexOf(item);
                    inventory.splice(itemIndex, 1);
                } else {
                    continue;
                }
                break;
            case "Combine Items":
                item = item.split(":");
                let oldItem = item[0];
                let newItem = item[1];
                if (inventory.includes(oldItem)) {
                    inventory.splice(inventory.indexOf(oldItem), 1, oldItem, newItem)
                } else {
                    continue;
                }
                break;
            case "Renew":
                if (inventory.includes(item)) {
                    let renewItem = inventory.splice(inventory.indexOf(item), 1);
                    inventory.push(renewItem[0])
                } else {
                    continue;
                }
                break;
        }
    }
    console.log(inventory.join(", "))
}

inventory([
    'Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!'
]
)
console.log("------------");
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]
)