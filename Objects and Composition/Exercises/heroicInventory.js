function heroicInventory(data) {

    let result = [];

    data.forEach(x => {
        let [name, level, items] = x.split(" / ");
        level = Number(level);
        items = items ? items.split(", ") : [];

        let obj = {
            name,
            level,
            items,
        }

        result.push(obj);

    })

    let json = JSON.stringify(result);
    console.log(json)

}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])