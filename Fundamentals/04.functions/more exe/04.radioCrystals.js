function radioCrystals(arr) {
    let finalThickness = arr.shift();
    let counter = 0;

    for (let ore of arr) {

        console.log(`Processing chunk ${ore} microns`);
        if (ore === finalThickness) {
            console.log(`Finished crystal ${ore} microns`);
            continue;
        }

        ore = cut(ore);
        if (ore === finalThickness) {
            console.log(`Finished crystal ${ore} microns`);
            continue;
        }

        ore = lap(ore);
        if (ore === finalThickness) {
            console.log(`Finished crystal ${ore} microns`);
            continue;
        }

        ore = grind(ore);
        if (ore === finalThickness) {
            console.log(`Finished crystal ${ore} microns`);
            continue;
        }

        ore = etch(ore);
        if (ore === finalThickness) {
            console.log(`Finished crystal ${ore} microns`);
            continue;
        }

        ore = xRay(ore);
        if (ore === finalThickness) {
            console.log(`Finished crystal ${ore} microns`);
            continue;
        }
    }

    function transporting(ore) {
        ore = Math.floor(ore);
        console.log(`Transporting and washing`);
        return ore;
    }

    function cut(ore) {
        while ((ore / 4) >= finalThickness) {
            ore = ore / 4;
            counter++;
        }
        if (counter >= 1) {
            console.log(`Cut x${counter}`);
            counter = 0;
            ore = transporting(ore);
        }

        return ore;
    }

    function lap(ore) {
        while ((ore * 0.80) >= finalThickness) {
            ore = ore * 0.80;
            counter++;
        }
        if (counter >= 1) {
            console.log(`Lap x${counter}`);
            counter = 0;
            ore = transporting(ore);
        }

        return ore;
    }

    function grind(ore) {
        while ((ore - 20) >= finalThickness || (ore - 20) === finalThickness - 1) {
            ore = ore - 20;
            counter++;
        }
        if (counter >= 1) {
            console.log(`Grind x${counter}`);
            counter = 0;
            ore = transporting(ore);
        }

        return ore;
    }

    function etch(ore) {
        while (ore > finalThickness) {
            ore = ore - 2;
            counter++;
        }
        if (counter >= 1) {
            console.log(`Etch x${counter}`);
            counter = 0;
            ore = transporting(ore);
        }
        return ore;
    }

    function xRay(ore) {
        if (ore < finalThickness) {
            ore++;
        }
        console.log(`X-ray x1`);
        return ore;
    }
}

radioCrystals([1375, 50000]);
console.log("---------------");
radioCrystals([1000, 4000, 8100]);