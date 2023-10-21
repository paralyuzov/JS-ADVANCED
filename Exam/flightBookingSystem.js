class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {
        price = Number(price);

        let findFlight = this.flights.find(x => x.flightNumber == flightNumber);
        if (findFlight) {
            return `Flight ${flightNumber} to ${destination} is already available.`
        }

        let flight = {
            flightNumber,
            destination,
            departureTime,
            price
        }

        this.flights.push(flight);

        return `Flight ${flightNumber} to ${destination} has been added to the system.`

    }

    bookFlight(passengerName, flightNumber) {

        let findFlight = this.flights.find(x => x.flightNumber == flightNumber);

        if (!findFlight) {
            return `Flight ${flightNumber} is not available for booking.`;
        }

        this.bookings.push({ passengerName, flightNumber, price: findFlight.price });
        this.bookingsCount++;

        return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`

    }

    cancelBooking(passengerName, flightNumber) {
        let findPassenger = this.bookings.find(x => x.passengerName == passengerName);

        if (!findPassenger) {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`)
        }
        if (findPassenger.flightNumber !== flightNumber) {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`)
        }

        let index = this.bookings.indexOf(findPassenger);
        this.bookings.splice(index, 1);
        this.bookingsCount--;
        return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`
    }

    showBookings(criteria) {
        if (this.bookings.length == 0) {
            throw new Error("No bookings have been made yet.");
        }

        let output = [];

        switch (criteria) {
            case "all":
                output.push(`All bookings(${this.bookingsCount}):`);
                this.bookings.forEach(x => output.push(`${x.passengerName} booked for flight ${x.flightNumber}.`));
                break;

            case "cheap":
                let cheapBookings = this.bookings.filter(x => x.price <= 100);
                if (cheapBookings.length == 0) {
                    return "No cheap bookings found.";
                }
                output.push("Cheap bookings:");
                cheapBookings.forEach(x => output.push(`${x.passengerName} booked for flight ${x.flightNumber}.`));
                break;

            case "expensive":
                let expensiveBookings = this.bookings.filter(x => x.price > 100);
                if (expensiveBookings.length == 0) {
                    return "No expensive bookings found.";
                }
                output.push("Expensive bookings:");
                expensiveBookings.forEach(x => output.push(`${x.passengerName} booked for flight ${x.flightNumber}.`));
                break;
        }

        return `${output.join("\n")}`;
    }

}










const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.showBookings("expensive"));
console.log(system.showBookings("cheap"));




