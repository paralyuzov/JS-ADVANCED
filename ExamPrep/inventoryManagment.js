class InventoryManager {
    constructor(capacity) {
        this.capacity = Number(capacity);
        this.items = [];
        this.outOfStock = [];
    }

    addItem(itemName, quantity) {

        quantity = Number(quantity);

        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.")
        }
        if (this.items.length === this.capacity) {
            throw new Error("The inventory is already full.");
        }

        let inStock = this.items.find(x => x.itemName === itemName);

        if (inStock) {
            inStock.quantity += quantity;
        } else {
            let item = {
                itemName,
                quantity,
            };
            this.items.push(item);
            return `Added ${quantity} ${itemName}(s) to the inventory.`
        }
    }

    sellItem(itemName, quantity) {

        quantity = Number(quantity)

        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.")
        }

        let inStock = this.items.find(x => x.itemName === itemName);

        if (!inStock) {
            throw new Error(`The item ${itemName} is not available in the inventory.`)
        }

        if (quantity > inStock.quantity) {
            throw new Error(`Not enough ${itemName}(s) in stock.`)
        }

        inStock.quantity -= quantity;
        if (inStock.quantity === 0) {
            let index = this.items.indexOf(inStock);
            this.items.splice(index, 1);
            this.outOfStock.push(inStock.itemName);

        }
        return `Sold ${quantity} ${itemName}(s) from the inventory.`

    }

    restockItem(itemName, quantity) {

        quantity = Number(quantity);

        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.")
        }

        let inStock = this.items.find(x => x.itemName === itemName);
        if (inStock) {
            inStock.quantity += quantity;
        } else {
            let item = {
                itemName,
                quantity,
            };
            this.items.push(item);
        }

        if (this.outOfStock.includes(itemName)) {
            let index = this.outOfStock.indexOf(itemName);
            this.outOfStock.splice(index, 1);
        }

        return `Restocked ${quantity} ${itemName}(s) in the inventory.`

    }

    getInventorySummary() {
        let buff = `Current Inventory:\n`;
        buff += `${this.items.map(({ itemName, quantity }) => `${itemName}: ${quantity}`).join('\n')}`;
        if (this.outOfStock.length > 0) {
            buff += `\nOut of Stock: ${this.outOfStock.join(", ")}`;
        }
        return buff;
    }

}








const manager = new InventoryManager(3);

console.log(manager.addItem("Drill", 10));
console.log(manager.addItem("Hammer", 5));
console.log(manager.addItem("Chisel", 3));
console.log(manager.sellItem("Drill", 3));
console.log(manager.sellItem("Hammer", 5));
console.log(manager.restockItem("Drill", 5));
console.log(manager.restockItem("Paintbrush", 1));
console.log(manager.getInventorySummary());
