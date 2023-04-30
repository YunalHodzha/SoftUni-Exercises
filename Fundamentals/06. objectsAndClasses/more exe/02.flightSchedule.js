function flightSchedule(arr) {
    let flightArr = [];

    class Flight {
        constructor(Sector, Destination, Status) {
            this.Sector = Sector;
            this.Destination = Destination;
            this.Status = Status;
        }
    }

    for (let line of arr[0]) {
        let Status = "Ready to fly";
        line = line.split(" ");
        let Sector = line.shift();
        let Destination = line.join(" ");
        let flight = new Flight(Sector, Destination, Status);
        flightArr.push(flight);
    }

    for (let line of arr[1]) {
        let [thisSector, newStatus] = line.split(" ");
        let currentSector = flightArr.find(s => s.Sector === thisSector);
        if (flightArr.includes(currentSector)) {
            currentSector.Status = newStatus;
        }
    }

    let sorted = [];
    if (arr[2][0] === "Ready to fly") {

        for (let flight of flightArr) {
            if (flight.Status === "Ready to fly") {
                let newFlight = flight;
                sorted.push(newFlight);
            }
        }
    } else if (arr[2][0] === "Cancelled") {
        for (let flight of flightArr) {
            if (flight.Status === "Cancelled") {
                let canceled = flight;
                sorted.push(canceled);
            }
        }
    }

    for (let fly in flightArr) {
        if (flightArr[fly].Status === String(arr[2])) {
            delete flightArr[fly].Sector
            console.log(JSON.parse(JSON.stringify(flightArr[fly])))
        }
    }
}

flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Cancelled']
]
)

