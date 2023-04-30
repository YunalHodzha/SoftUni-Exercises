function needForSpeed(arr) {
    let carsCount = Number(arr.shift());
    let myCars = {};

    for(let i =0; i<carsCount; i++) {
        let [car, mileage, fuel] = arr.shift().split("|");
        myCars[car] = {mileage: Number(mileage), fuel: Number(fuel)};
    }

    for(let line of arr) {
        let data = line.split(" : ");
        let command = data.shift();

        if(command === "Drive") {
            let car = data[0]
            let distance = Number(data[1]);
            let fuel = Number(data[2]);
            
            if(myCars[car].fuel >= fuel) {
                myCars[car].mileage += distance;
                myCars[car].fuel -= fuel;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                if(myCars[car].mileage >= 100000) {
                    console.log(`Time to sell the ${car}!`);
                    delete myCars[car];
                }
            }else {
                console.log(`Not enough fuel to make that ride`);
            }
        }else if(command === "Refuel") {
            let car = data[0];
            let value = Number(data[1]);
            let currentFuel = myCars[car].fuel;
            myCars[car].fuel += value;
            if(myCars[car].fuel > 75) {
                myCars[car].fuel = 75;
                let refueled = 75 - currentFuel;
                console.log(`${car} refueled with ${refueled} liters`);
            }else {
                console.log(`${car} refueled with ${value} liters`);
            }
        }else if(command === "Revert") {
            let car = data[0];
            let value = Number(data[1]);

            myCars[car].mileage -= value;
            
            if(myCars[car].mileage < 10000) {
                myCars[car].mileage = 10000;
            }else {
                console.log(`${car} mileage decreased by ${value} kilometers`);
            }
        }else if(command === "Stop") {
            break;
        }
    }

    for(let data of Object.entries(myCars)) {
        let car = data[0];
        let mileage = data[1].mileage;
        let fuel = data[1].fuel;
        console.log(`${car} -> Mileage: ${mileage} kms, Fuel in the tank: ${fuel} lt.`);
    }
}

needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop']);
console.log("-----------------");
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop']);