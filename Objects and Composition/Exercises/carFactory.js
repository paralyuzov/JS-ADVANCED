function carFactory(data) {
    let model = data.model;
    let power = data.power;
    let color = data.color;
    let carriage = data.carriage;
    let wheels = data.wheelsize;

    let output = {};

    const engines = {
        "Small engine": {
            power: 90,
            volume: 1800,
        },
        "Normal engine": {
            power: 120,
            volume: 2400,
        },
        "Monster engine": {
            power: 200,
            volume: 3500,
        },
    };

    const carriages = {
        "hatchback": { type: 'hatchback', color },
        "coupe": { type: 'coupe', color },
    };



    output.model = model;

    if (power <= 90) {
        output.engine = engines["Small engine"];
    } else if (power <= 120) {
        output.engine = engines["Normal engine"];
    } else {
        output.engine = engines["Monster engine"];
    }

    output.carriage = carriages[carriage];


    if (wheels % 2 === 0) {
        wheels--;
    }

    output.wheels = [wheels, wheels, wheels, wheels];

    return output;
}
console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}))