function solution() {

    let store = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };

    let reciples = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
        },

        lemonade: {
            carbohydrate: 10,
            flavour: 20,
        },

        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
        },

        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
        },

        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
        }

    }



    function manager(arr) {
        let [command, item, quantity] = arr.split(" ");

        switch (command) {
            case "restock": return restock(item, Number(quantity));
            case "prepare": return prepare(item, Number(quantity));
            case "report": return report();
        }


    }

    function restock(item, quantity) {
        store[item] += quantity
        return "Success"
    }

    function prepare(item, quantity) {

        for (let [ingredient, value] of Object.entries(reciples[item])) {
            let sumIngridient = value * quantity;
            if (store[ingredient] < sumIngridient) {
                return `Error: not enough ${ingredient} in stock`
            }

            store[ingredient] -= sumIngridient;
        }

        return "Success"
    }

    function report() {
        let result = [];
        for (let [item, value] of Object.entries(store)) {
            result.push(`${item}=${value}`);
        }
        return result.join(" ");
    }


    return manager

}
let manager = solution();
console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));
