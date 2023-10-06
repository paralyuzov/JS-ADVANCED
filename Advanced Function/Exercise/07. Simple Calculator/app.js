function calculator() {
    let firstSelector;
    let secondSelector;
    let result;

    return {
        init: function (selectorA, selectorB, selectorResult) {
            firstSelector = document.querySelector(selectorA);
            secondSelector = document.querySelector(selectorB);
            result = document.querySelector(selectorResult);
        },

        add: function add() {
            result.value = Number(firstSelector.value) + Number(secondSelector.value);
        },

        subtract: function subtract() {
            result.value = Number(firstSelector.value) - Number(secondSelector.value);
        }
    }

}
const calculate = calculator();
calculate.init('#num1', '#num2', '#result');




