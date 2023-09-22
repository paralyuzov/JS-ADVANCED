function lowestPricesInCities(data) {

    let obj = {};

    data.forEach(line => {
        let [town, product, price] = line.split(" | ");
        price = Number(price);
        if (!obj.hasOwnProperty(product)) {
            obj[product] = {
                price,
                town,
            };
        }

        if (obj[product].price > price) {
            obj[product].price = price;
            obj[product].town = town;
        }

    })

    for (const [product, info] of Object.entries(obj)) {
        console.log(`${product} -> ${info.price} (${info.town})`);
    }

}
lowestPricesInCities(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    ' Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    ' Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000'])