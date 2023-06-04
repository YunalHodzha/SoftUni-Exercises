function tickets(array, criteria) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let ticketsList = [];

    for (let line of array) {
        let [destination, price, status] = line.split("|");

        let ticket = new Ticket(destination, price, status);
        ticketsList.push(ticket);
    }

    ticketsList = ticketsList.sort((a, b) => {
        if(criteria === "price") {
            return a[criteria] - b[criteria];
        }
        return a[criteria].localeCompare(b[criteria]);
    })

    return ticketsList;
}

tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'price')