function cinemaTickets(input) {
    let index = 0;
    let movie = input[index];
    index++;

    let freeSeats = Number(input[index]);
    index++;

    let standartCount = 0;
    let studentCount = 0;
    let kidsCount = 0;

    while (movie !== "Finish") {
        let ticket = input[index];
        let seatCounter = 0;
        while (ticket !== "End") {
            if (ticket === "standard") {
                standartCount++;

            } else if (ticket === "student") {
                studentCount++;

            } else if (ticket === "kid") {
                kidsCount++;
            }
            index++;
            ticket = input[index];
            seatCounter++;
            if (seatCounter == freeSeats) {
                break;
            }
        }
        console.log(`${movie} - ${((seatCounter / freeSeats) * 100).toFixed(2)}% full.`)
        if (ticket === "Finish") {
            break;
        }

        index++;
        movie = input[index];
        index++;
        freeSeats = Number(input[index]);
        index++;
    }
    let totaltickets = standartCount + studentCount + kidsCount;
    let studentAvg = (studentCount / totaltickets) * 100;
    let standardAvg = (standartCount / totaltickets) * 100;
    let kidAvg = (kidsCount / totaltickets) * 100;

    console.log(`Total tickets: ${totaltickets}`)
    console.log(`${studentAvg.toFixed(2)}% student tickets.`)
    console.log(`${standardAvg.toFixed(2)}% standart tickets.`)
    console.log(`${kidAvg.toFixed(2)}% kids tickets.`)
}

cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])


