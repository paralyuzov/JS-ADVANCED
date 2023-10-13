function tickets(data, criteria) {
    const arrayData = [...data];
    const resultArr = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    for (const line of arrayData) {
        const [dest, price, status] = line.split("|");
        let ticket = new Ticket(dest, price, status);
        resultArr.push(ticket);
    }

    if (criteria === "destination") {
        return (resultArr.sort((a, b) => a.destination.localeCompare(b.destination)))
    } else if (criteria === "status") {
        return resultArr.sort((a, b) => a.status.localeCompare(b.status));
    } else if (criteria === "price") {
        return resultArr.sort((a, b) => a.price - b.price)
    }


}
console.table(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'price'))