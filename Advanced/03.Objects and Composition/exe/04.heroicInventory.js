function heroicInventory(arr) {
    let heroes = [];

    for (let data of arr) {
        let [name, level, items] = data.split(" / ");
        level = Number(level);

        items = items !== undefined ? items.split(", ") : [];

        heroes.push({name, level, items});
    }
    return JSON.stringify(heroes);
};

heroicInventory(['Isacc / 25',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);
console.log("---------");
heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);