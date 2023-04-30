function weddingSeats(input) {
    let lastSector = input[0];
    let aSectorRows = Number(input[1]);
    let oddRowSeats = Number(input[2]);
    let freeSeats = 0;

    let firstSector = "A";
    let seat = 97;
    let counter = 0;

    for (let i = firstSector.charCodeAt(); i <= lastSector.charCodeAt(); i++) {
        for (let i2 = 1; i2 <= aSectorRows; i2++) {
            if (i2 % 2 !== 0) {
                freeSeats = oddRowSeats;
            } else {
                freeSeats = oddRowSeats + 2;
            }
            for (let i3 = 1; i3 <= freeSeats; i3++) {

                console.log(`${String.fromCharCode(i)}${i2}${String.fromCharCode(seat)}`)
                counter++;
                seat++;
            }
            seat = 97;
        }
        aSectorRows++;
    }
    console.log(counter)
}

weddingSeats(["C", "4", "2"])