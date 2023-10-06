function createNumberAdder(initialValue) {

    function addNumber(numberToAdd) {
        return initialValue + numberToAdd;
    }

    return addNumber;
}

let result = createNumberAdder(5);
console.log(result(2));
console.log(result(3));
console.log(result(9));



