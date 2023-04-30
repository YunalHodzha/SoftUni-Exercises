function invetory(arr) {
    let heroes = [];

    for (line of arr) {
        [name, level, items] = line.split(" / ");

        let hero = {
            name: name,
            level: Number(level),
            items: items.split(", "),
        }
        heroes.push(hero);
    }
    heroes.sort((a, b) => a.level - b.level);

    for (let hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(", ")}`);
    }
}

invetory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])

console.log("------------");

invetory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'])