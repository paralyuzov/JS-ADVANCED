function autoEngineeringCompany(data) {

    let store = new Map();

    class Cars {
        constructor(manufacturer, model, qnty) {
            this.manufacturer = manufacturer;
            this.model = model;
            this.qnty = Number(qnty);
        }

        storing() {
            if (!store.has(this.manufacturer)) {
                store.set(this.manufacturer, new Map());

            }
            let models = store.get(this.manufacturer);
            if (!models.has(this.model)) {
                models.set(this.model, 0)
            }

            models.set(this.model, models.get(this.model) + this.qnty)

        }
    }

    for (const line of data) {

        const [manufacturer, model, qnty] = line.split(" | ");
        const car = new Cars(manufacturer, model, qnty).storing();

    }

    for (const [key, info] of store) {
        console.log(key)
        for (const [model, qnty] of info) {
            console.log(`###${model} -> ${qnty}`)
        }
    }

}
autoEngineeringCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'])