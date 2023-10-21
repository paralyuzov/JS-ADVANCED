class WineSelection {
    constructor(space) {
        this.space = Number(space);
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        price = Number(price);
        if (this.space == 0) {
            throw new Error("Not enough space in the cellar.");
        }

        let wine = {
            wineName,
            wineType,
            price,
            paid: false,
        }

        this.wines.push(wine);
        this.space--;

        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }

    payWineBottle(wineName, price) {
        price = Number(price);

        let findWine = this.wines.find(x => x.wineName == wineName);
        if (!findWine) {
            throw new Error(`${wineName} is not in the cellar.`)
        }

        if (findWine.paid == true) {
            throw new Error(`${wineName} has already been paid.`)
        }

        findWine.paid = true;
        this.bill += price;

        return `You bought a ${wineName} for a ${price}$.`

    }

    openBottle(wineName) {
        let findWine = this.wines.find(x => x.wineName == wineName);
        if (!findWine) {
            throw new Error(`The wine, you're looking for, is not found.`)
        }
        if (!findWine.paid) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        }

        let index = this.wines.indexOf(findWine);
        this.wines.splice(index, 1);

        return `You drank a bottle of ${wineName}.`
    }

    cellarRevision(wineType) {
        let output = [];
        if (!wineType) {
            output[0] = `You have space for ${this.space} bottles more.`;
            output[1] = `You paid ${this.bill}$ for the wine.`;
            this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));
            this.wines.forEach(x => {
                let isPaid = x.paid ? "Has Paid" : "Not Paid";
                output.push(`${x.wineName} > ${x.wineType} - ${isPaid}.`);
            })

            return `${output.join("\n")}`;

        } else {

            let findWineType = this.wines.find(x => x.wineType == wineType);

            if (!findWineType) {
                throw new Error(`There is no ${wineType} in the cellar.`);
            }

            this.wines.forEach(x => {
                if (x.wineType == wineType) {
                    let isPaid = x.paid ? "Has Paid" : "Not Paid";
                    output.push(`${x.wineName} > ${x.wineType} - ${isPaid}.`);
                }

            })

            return `${output.join("\n")}`;
        }
    }
}


const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());


