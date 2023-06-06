function solve(arr) {
    let juicesMap = new Map();
    let bottlesMap = new Map();


    for (let line of arr) {
        let [juice, quantity] = line.split(" => ");
        quantity = Number(quantity);

        if (!juicesMap.has(juice)) {
            juicesMap.set(juice, quantity);
        } else {
            let currentQnty = juicesMap.get(juice);
            juicesMap.set(juice, (currentQnty + quantity));
        }

        while (juicesMap.get(juice) >= 1000) {

            let currentQnty = juicesMap.get(juice);
            juicesMap.set(juice, (currentQnty - 1000));

            if (!bottlesMap.has(juice)) {
                let number = 1;
                bottlesMap.set(juice, number)
            } else {
                let currentBottles = bottlesMap.get(juice);
                bottlesMap.set(juice, currentBottles + 1);
            }
        }
    }

    for (let [key, value] of bottlesMap) {
        console.log(`${key} => ${value}`);
    }
}

solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);
console.log("---------");
solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);