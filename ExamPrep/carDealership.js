class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        horsepower = Number(horsepower);
        price = Number(price);
        mileage = Number(mileage);
        if (!model || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error("Invalid input!");
        }

        let car = {
            model,
            horsepower,
            price,
            mileage,
        }

        this.availableCars.push(car);

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        let findCar = this.availableCars.find(x => x.model == model);
        if (!findCar) {
            throw new Error(`${model} was not found!`);
        }

        let soldPrice = 0;

        if (findCar.mileage - desiredMileage <= 0) {
            soldPrice = findCar.price;
        } else if (findCar.mileage - desiredMileage <= 40000) {
            soldPrice = findCar.price * 0.95;
        } else {
            soldPrice = findCar.price * 0.90;
        }

        let index = this.availableCars.indexOf(findCar);
        let soldCar = {
            model,
            horsepower: findCar.horsepower,
            soldPrice,
        }
        this.soldCars.push(soldCar)
        this.availableCars.splice(index, 1);
        this.totalIncome += soldPrice;
        return `${model} was sold for ${soldPrice.toFixed(2)}$`

    }

    currentCar() {

        if (this.availableCars.length == 0) {
            return `There are no available cars`;
        }

        let output = [];
        output.push("-Available cars:");
        this.availableCars.forEach(x => output.push(`---${x.model} - ${x.horsepower} HP - ${x.mileage.toFixed(2)} km - ${x.price.toFixed(2)}$`));
        return `${output.join("\n")}`

    }

    salesReport(criteria) {
        if (criteria !== "horsepower" && criteria !== "model") {
            throw new Error("Invalid criteria!");
        }
        let output = [];
        output.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
        output.push(`-${this.soldCars.length} cars sold:`)
        switch (criteria) {
            case "horsepower":
                this.soldCars.sort((a, b) => b.horsepower - a.horsepower)
                    .forEach(x => output.push(`---${x.model} - ${x.horsepower} HP - ${x.soldPrice.toFixed(2)}$`));
                break;
            case "model":
                this.soldCars.sort((a, b) => a.model.localeCompare(b.model))
                    .forEach(x => output.push(`---${x.model} - ${x.horsepower} HP - ${x.soldPrice.toFixed(2)}$`));
                break;

        }

        return `${output.join("\n")}`;
    }
}







let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
console.log(dealership.currentCar());



