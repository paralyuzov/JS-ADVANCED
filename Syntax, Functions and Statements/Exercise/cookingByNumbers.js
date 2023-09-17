function cookingByNumbers(num, ...operations) {
    let res = Number(num);
    operations.forEach((element) => {
        switch (element) {
            case "chop": res /= 2; break;
            case "dice": res = Math.sqrt(res); break;
            case "spice": res++; break;
            case "bake": res *= 3; break;
            case "fillet": res *= 0.80; break;
        }
        console.log(res);
    });

}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')