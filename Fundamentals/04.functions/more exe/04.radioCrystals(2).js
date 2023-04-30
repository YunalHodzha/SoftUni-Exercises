function radioCrystals(arr) {
    let desiredThickness = arr[0];
    let counter = 0;
    let currentChunk;
    let isOver = false;

    for (let i = 1; i < arr.length; i++) {
        currentChunk = arr[i]

        processingChunk(currentChunk);
        checkingChunk(currentChunk);
        if (isOver) {
            isOver = false;
            continue;
        }

        cuttingChunk(currentChunk);

        transportAndRounding(currentChunk);
        checkingChunk(currentChunk);
        if (isOver) {
            isOver = false;
            continue;
        }

        lappingChunk(currentChunk);
        transportAndRounding(currentChunk);
        checkingChunk(currentChunk);
        if (isOver) {
            isOver = false;
            continue;
        }

        grindingChunk(currentChunk);
        transportAndRounding(currentChunk);
        checkingChunk(currentChunk);
        if (isOver) {
            isOver = false;
            continue;
        }

        etchingChunk(currentChunk);
        transportAndRounding(currentChunk);
        checkingChunk(currentChunk);
        if (isOver) {
            isOver = false;
            continue;
        }

        xRayChunk(currentChunk);
    }
    function processingChunk(chunk) {
        console.log(`Processing chunk ${chunk} microns`);
    }

    function cuttingChunk(chunk) {
        while ((chunk / 4) >= desiredThickness) {
            chunk = chunk / 4;
            counter++;
        }
        console.log(`Cut x${counter}`);
        counter = 0;
        return currentChunk = chunk;
    }

    function transportAndRounding(chunk) {
        currentChunk = Math.floor(chunk);
        console.log(`Transporting and washing`);
        return currentChunk;
    }

    function checkingChunk(chunk) {
        if (chunk === desiredThickness) {
            console.log(`Finished crystal ${currentChunk} microns`);
            isOver = true;
        }
    }

    function lappingChunk(chunk) {
        while ((chunk * 0.80) >= desiredThickness) {
            chunk = chunk * 0.80;
            counter++;
        }
        console.log(`Lap x${counter}`);
        counter = 0;
        return currentChunk = chunk;
    }

    function grindingChunk(chunk) {
        while ((chunk - 20) >= desiredThickness) {
            chunk = chunk - 20;
            counter++;
        }
        console.log(`Grind x${counter}`);
        counter = 0;
        return currentChunk = chunk;
    }

    function etchingChunk(chunk) {
        while ((chunk - 2) >= desiredThickness - 1) {
            chunk = chunk - 2;
            counter++;
            if (chunk === desiredThickness) {
                console.log(`Etch x${counter}`);
                counter = 0;
                return currentChunk = chunk;
            }
        }
        console.log(`Etch x${counter}`);
        counter = 0;
        return currentChunk = chunk;
    }


    function xRayChunk(chunk) {
        chunk = chunk + 1;
        counter++;

        currentChunk = chunk;
        console.log(`X-ray x${counter}`);
        console.log(`Finished crystal ${currentChunk} microns`);
        return currentChunk;
    }
}

radioCrystals([1375, 50000]);
console.log("-----------");
radioCrystals([1000, 4000, 8100]);
