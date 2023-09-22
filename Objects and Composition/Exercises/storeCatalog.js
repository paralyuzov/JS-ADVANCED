function storeCatalog(data) {
    let obj = {};

    data.forEach(line => {
        let [product, price] = line.split(" : ");
        price = Number(price);

        obj[product] = price;

    })

    let sort = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]))
    let temp = "";
    for (const [product, price] of sort) {
        const firstLetter = product[0];
        if (temp !== firstLetter) {
            console.log(firstLetter);
            console.log(` ${product}: ${price}`);
        } else {
            console.log(` ${product}: ${price}`);
        }
        temp = firstLetter;

    }

}
storeCatalog(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)