function radioCrystals(arr) {
    let finalThickness = arr[0];
    let currentCrystal = 0;

        for(let i=1; i<arr.length; i++) {
            currentCrystal = arr[i];
            console.log(`Processing chunk ${currentCrystal} microns`);

            let cutCounter = 0;
            while((currentCrystal / 4) >= finalThickness) {
                currentCrystal = currentCrystal /4;
                cutCounter++ ;
            }

            console.log(`Cut x${cutCounter}`);
            transportAndRounding();
            currentCrystal = Math.floor(currentCrystal);
            isOver()
            
            counter = 0;
            while((currentCrystal * 0.80) >= finalThickness) {
                currentCrystal = currentCrystal * 0.80;
                counter ++;
            }

            console.log(`Lap x${counter}`);
            transportAndRounding();
            currentCrystal = Math.floor(currentCrystal);

            counter = 0;
            while((currentCrystal - 20) >= finalThickness) {
                currentCrystal = currentCrystal - 20;
                counter++;
            }

            console.log(`Grind x${counter}`);
            transportAndRounding();
            currentCrystal = Math.floor(currentCrystal);

            counter = 0;
            while((currentCrystal - 2) >= finalThickness){
                currentCrystal = currentCrystal - 2;
                counter++;
                if((currentCrystal -2) < finalThickness){
                    currentCrystal = currentCrystal -2;
                    counter++;
                }
            }

            console.log(`Etch x${counter}`);
            transportAndRounding();
            currentCrystal = Math.floor(currentCrystal);

            if(currentCrystal < finalThickness) {
                currentCrystal++;
                console.log(`X-ray x1`);
                console.log(`Finished crystal ${currentCrystal} microns`);
            }else if(currentCrystal === finalThickness){
                console.log(`Finished crystal ${currentCrystal} microns`);
            }
        }

        function transportAndRounding() {
            console.log("Transporting and washing");
        }

        function isOver(currentCrystal) {
            if (currentCrystal === finalThickness) {
                console.log(`Finished crystal ${currentCrystal} microns`);
            }
        }
}

radioCrystals([1375, 50000]);
console.log("---------------");
radioCrystals([1000, 4000, 8100]);