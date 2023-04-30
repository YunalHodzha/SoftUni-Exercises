function manOnWar(arr) {
    let pirateShip = arr.shift().split(">").map(Number);
    let warShip = arr.shift().split(">").map(Number);
    let maxHealth = Number(arr.shift());
    let isOver = false;
    let retire = false;


    for (let i = 0; i < arr.length; i++) {
        let values = arr[i].split(" ");
        let action = values.shift();
        values = values.map(Number)

        switch (action) {
            case "Fire":
                let index = values[0];
                let damage = values[1];
                if (warShip.includes(warShip[index])) {
                    warShip[index] = warShip[index] - damage;
                }
                if (warShip.every(item => item > 0)) {
                    break;
                } else {
                    console.log(`You won! The enemy ship has sunken.`);
                    isOver = true;
                    break;
                }
            case "Defend":
                let start = values[0];
                let end = values[1];
                let WarShipDamage = values[2];

                if (pirateShip.includes(pirateShip[start]) && pirateShip.includes(pirateShip[end])) {
                    for (let i = start; i <= end; i++) {
                        pirateShip[i] = pirateShip[i] - WarShipDamage;
                    }
                }else {
                    break;
                }
                if (pirateShip.every(item => item > 0)) {
                    break;
                } else {
                    console.log(`You lost! The pirate ship has sunken.`);
                    isOver = true;
                    break;
                }
            case "Repair":
                let i = values[0];
                let heal = values[1];
                if (pirateShip.includes(pirateShip[i])){
                    pirateShip[i] += heal;
                    if(pirateShip[i] > maxHealth) {
                        pirateShip[i] = maxHealth;
                        break;
                    }
                }else {
                    break;
                }
                break;
            case "Status":
                let sections = 0;
                let repairNeed = maxHealth * 0.20;
                for (let i = 0; i<pirateShip.length; i++) {
                    if(pirateShip[i] < repairNeed) {
                        sections++;
                    }
                }
                console.log(`${sections} sections need repair.`);
                break;
            case "Retire":
                retire = true;
                isOver = true;
                break;
        }
        if (isOver === true) {
            break;
        }
    }

    if(isOver=== true && retire === true) {
        let pirateSum = pirateShip.reduce((sum, item) => sum += item);
        let warShipSum = warShip.reduce((sum, item) => sum += item);
        console.log(`Pirate ship status: ${pirateSum}`);
        console.log(`Warship status: ${warShipSum}`)
    }
}

manOnWar(["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"])

console.log("---------------");
manOnWar(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"])

