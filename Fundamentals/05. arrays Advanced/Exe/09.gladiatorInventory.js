function gladiatorInventory(arr) {
    let equipment = arr.shift().split(" ");

    for (let i = 0; i < arr.length; i++) {
        let currentEl = arr[i].split(" ");
        let command = currentEl[0];
        let item = currentEl[1];

        switch (command) {
            case "Buy":
                if (!equipment.includes(item)) {
                    equipment.push(item);
                }
                break;
            case "Trash":
                if (equipment.includes(item)) {
                    let index = equipment.indexOf(item);
                    equipment.splice(index, 1);
                }
                break;
            case "Repair":
                if (equipment.includes(item)) {
                    let index = equipment.indexOf(item);
                    equipment.splice(index, 1);
                    equipment.push(item);
                }
                break;
            case "Upgrade":
                item = item.split("-");
                let index = equipment.indexOf(item[0])
                if (equipment.includes(item[0])) {
                    let firstEl = item[0];
                    let secEl = item[1];
                    equipment.splice(index + 1, 0, `${firstEl}:${secEl}`);
                }
                break;
        }
    }
    console.log(equipment.join(" "));
}

gladiatorInventory(
    ['SWORD Shield Spear',
        'Buy Bag',
        'Trash Shield',
        'Repair Spear',
        'Upgrade SWORD-Steel']);
console.log("-------------");
gladiatorInventory(
    ['SWORD Shield Spear',
        'Trash Bow',
        'Repair Shield',
        'Upgrade Helmet-V']);