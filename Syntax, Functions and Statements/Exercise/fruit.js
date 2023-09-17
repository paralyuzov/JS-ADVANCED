function fruit(item, weigth, priceKg) {
    const weigthKg = weigth / 1000;
    const price = weigthKg * priceKg;
    console.log(`I need $${price.toFixed(2)} to buy ${weigthKg.toFixed(2)} kilograms ${item}.`);
}
fruit('orange', 2500, 1.80)