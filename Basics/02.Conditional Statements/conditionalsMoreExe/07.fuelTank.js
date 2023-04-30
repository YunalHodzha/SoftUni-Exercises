function fuelTank(input) {
    let fuelType = input[0];
    let fuelTank = Number(input[1]);

    if (fuelTank >= 25) {
        if (fuelType === "Diesel") {
            console.log(`You have enough ${(fuelType.toLowerCase())}.`)
        } else if (fuelType === "Gasoline") {
            console.log(`You have enough ${fuelType.toLowerCase()}.`)
        } else if (fuelType === "Gas") {
            console.log(`You have enough ${fuelType.toLowerCase()}.`)
        } else {
            console.log("Invalid fuel!")
        }
    } else if (fuelTank < 25) {
        if (fuelType === "Diesel") {
            console.log(`Fill your tank with ${fuelType.toLowerCase()}!`)
        } else if (fuelType === "Gasoline") {
            console.log(`Fill your tank with ${fuelType.toLowerCase()}!`)
        } else if (fuelType === "Gas") {
            console.log(`Fill your tank with ${fuelType.toLowerCase()}!`)
        } else {
            console.log("Invalid fuel!")
        }
    }
}

fuelTank(["Kerosene", "2"])