class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = Number(warehouseSpace);
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {

        quantity = Number(quantity);
        spaceRequired = Number(spaceRequired);

        if (spaceRequired > this.warehouseSpace) {
            throw new Error("Not enough space in the warehouse.");
        }

        let item = {
            product,
            quantity
        }

        this.products.push(item);
        this.warehouseSpace--;

        return `The ${product} has been successfully delivered in the warehouse.`

    }

    quantityCheck(product, minimalQuantity) {

        minimalQuantity = Number(minimalQuantity);

        let findItem = this.products.find(x => x.product == product);

        if (!findItem) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        if (minimalQuantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`);
        }

        if (minimalQuantity <= findItem.quantity) {
            return `You have enough from product ${product}.`
        }

        let difference = minimalQuantity - findItem.quantity;
        findItem.quantity = minimalQuantity;

        return `You added ${difference} more from the ${product} products.`

    }

    sellProduct(product) {
        let findItem = this.products.find(x => x.product == product);
        if (!findItem) {
            throw new Error(`There is no ${product} in the warehouse.`)
        }

        let saleItem = {
            product,
            quantity: findItem.quantity
        };

        this.sales.push(saleItem);
        findItem.quantity--;

        return `The ${product} has been successfully sold.`

    }

    revision() {
        let output = [];
        if (this.sales.length == 0) {
            throw new Error(`There are no sales today!`)
        }

        output[0] = `You sold ${this.sales.length} products today!`;
        output[1] = `Products in the warehouse:`;
        this.products.forEach(x => output.push(`${x.product}-${x.quantity} more left`));

        return `${output.join("\n")}`;

    }

}







const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());


