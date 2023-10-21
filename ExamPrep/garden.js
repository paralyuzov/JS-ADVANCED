class Garden {

    constructor(spaceAvailable) {
        this.spaceAvailable = Number(spaceAvailable);
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        spaceRequired = Number(spaceRequired);

        if (this.spaceAvailable - spaceRequired < 0) {
            throw new Error("Not enough space in the garden.");
        }

        let plant = {
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        }

        this.plants.push(plant);
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`
    }

    ripenPlant(plantName, quantity) {
        quantity = Number(quantity);

        if (quantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        }

        let findPlant = this.plants.find(x => x.plantName == plantName);

        if (!findPlant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (findPlant.ripe) {
            throw new Error(`The ${plantName} is already ripe.`);
        }

        findPlant.ripe = true;
        findPlant.quantity += quantity;

        if (quantity == 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`

        }

    }

    harvestPlant(plantName) {

        let findPlant = this.plants.find(x => x.plantName == plantName);

        if (!findPlant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (!findPlant.ripe) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }

        let index = this.plants.indexOf(findPlant);

        let storagePlant = {
            plantName,
            quantity: findPlant.quantity
        }

        this.storage.push(storagePlant);
        this.spaceAvailable += findPlant.spaceRequired;
        this.plants.splice(index, 1);

        return `The ${plantName} has been successfully harvested.`

    }

    generateReport() {

        let output = [];
        let buff = "Plants in the garden: ";
        output.push(`The garden has ${this.spaceAvailable} free space left.`);

        this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName));
        this.plants.forEach((x, i) => {
            if (i == this.plants.length - 1) {
                buff += `${x.plantName}`
            } else {
                buff += `${x.plantName}, `;
            }
        })

        output.push(buff);

        if (this.storage.length == 0) {
            output.push("Plants in storage: The storage is empty.");
        } else {
            buff = "Plants in storage: ";
            this.storage.forEach((x, i) => {
                if (i == this.storage.length - 1) {
                    buff += `${x.plantName} (${x.quantity})`;
                } else {
                    buff += `${x.plantName} (${x.quantity}), `;
                }
            })
            output.push(buff);
        }

        return `${output.join("\n")}`
    }

}














const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());







