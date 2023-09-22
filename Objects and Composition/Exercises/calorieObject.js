function calorieObject(data) {

    let result = {};

    for (let i = 0; i < data.length; i += 2) {
        const product = data[i];
        const calories = Number(data[i + 1]);

        result[product] = calories;

    }

    console.log(result);

}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])