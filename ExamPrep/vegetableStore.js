class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];

    }

    loadingVegetables(vegetables) {
        let types = [];
        for (const vegg of vegetables) {
            let [type, quantity, price] = vegg.split(" ");
            quantity = Number(quantity);
            price = Number(price);

            let findVegg = this.availableProducts.find(x => x.type == type);
            if (!findVegg) {
                this.availableProducts.push({ type, quantity, price });
                types.push(type);
            } else {
                if (price > findVegg.price) {
                    findVegg.price = price;
                }
                findVegg.quantity += quantity;
            }
        }
        return `Successfully added ${types.join(", ")}`;
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        for (const product of selectedProducts) {
            let [type, quantity] = product.split(" ");
            quantity = Number(quantity);
            let findProdcut = this.availableProducts.find(x => x.type == type);
            if (!findProdcut) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }

            if (quantity > findProdcut.quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }

            let currPrice = findProdcut.price * quantity;
            totalPrice += currPrice;
            findProdcut.quantity -= quantity;
        }

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    rottingVegetable(type, quantity) {
        quantity = Number(quantity);
        let findProdcut = this.availableProducts.find(x => x.type == type);

        if (!findProdcut) {
            throw new Error(`${type} is not available in the store.`)
        }

        if (quantity > findProdcut.quantity) {
            findProdcut.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`
        }

        findProdcut.quantity -= quantity;
        return `Some quantity of the ${type} has been removed.`

    }

    revision() {
        let output = [];
        output.push("Available vegetables:");
        this.availableProducts.sort((a, b) => a.price - b.price)
            .forEach(x => output.push(`${x.type}-${x.quantity}-$${x.price}`));
        output.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);
        return `${output.join("\n")}`;
    }


}






let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());



