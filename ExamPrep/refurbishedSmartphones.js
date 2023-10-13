class RefurbishedSmartphones {

    constructor(retailer) {
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
        this.revenue = 0;
    }

    addSmartphone(model, storage, price, condition) {
        storage = Number(storage);
        price = Number(price);
        if (model == "" || storage < 0 || price < 0 || condition == "") {
            throw new Error("Invalid smartphone!");
        }


        let smartphone = {
            model,
            storage,
            price,
            condition,
        }

        this.availableSmartphones.push(smartphone);
        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;
    }

    sellSmartphone(model, desiredStorage) {

        desiredStorage = Number(desiredStorage);
        let soldPrice = 0;

        let findSmartphone = this.availableSmartphones.find(x => x.model == model);
        if (!findSmartphone) {
            throw new Error(`${model} was not found!`);
        }

        let difference = Math.abs(findSmartphone.storage - desiredStorage);


        if (findSmartphone.storage >= desiredStorage) {
            soldPrice = findSmartphone.price
        } else if (difference <= 128) {
            soldPrice = findSmartphone.price * 0.9;
        } else if (difference > 128) {
            soldPrice = findSmartphone.price * 0.8;
        }

        let soldSmartphone = {
            model,
            storage: findSmartphone.storage,
            soldPrice
        }

        this.soldSmartphones.push(soldSmartphone)

        let index = this.availableSmartphones.indexOf(findSmartphone);
        this.availableSmartphones.splice(index, 1);
        this.revenue += soldPrice;

        return `${model} was sold for ${soldPrice.toFixed(2)}$`

    }

    upgradePhones() {
        if (this.availableSmartphones.length == 0) {
            throw new Error("There are no available smartphones!");
        }

        this.availableSmartphones.map(x => x.storage *= 2);

        let output = [];
        output.push("Upgraded Smartphones:");
        this.availableSmartphones.forEach(x => {
            let buff = `${x.model} / ${x.storage} GB / ${x.condition} condition / ${x.price.toFixed(2)}$`;
            output.push(buff)

        })

        return output.join("\n")

    }

    salesJournal(criteria) {

        switch (criteria) {

            case "storage": this.soldSmartphones.sort((a, b) => b.storage - a.storage); break;
            case "model": this.soldSmartphones.sort((a, b) => a.model.localeCompare(b.model)); break;
            default: throw new Error(`Invalid criteria!`);

        }

        let summury = [];
        summury.push(`${this.retailer} has a total income of ${this.revenue.toFixed(2)}$`);
        summury.push(`${this.soldSmartphones.length} smartphones sold:`);
        this.soldSmartphones.forEach(x => {
            let buff = `${x.model} / ${x.storage} GB / ${x.soldPrice.toFixed(2)}$`;
            summury.push(buff);
        })

        return summury.join("\n");

    }

}

let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
console.log(retailer.upgradePhones());

