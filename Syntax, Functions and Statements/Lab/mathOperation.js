function mathOperation(firstN, secondN, operator) {

    let output;

    switch (operator) {
        case "+": output = firstN + secondN;
            break;

        case "-": output = firstN - secondN;
            break;

        case "*": output = firstN * secondN;
            break;

        case "/": output = firstN / secondN;
            break;

        case "%": output = firstN % secondN;
            break;

        case "**": output = firstN ** secondN;
            break;
    }

    return output;

}
console.log(mathOperation(5, 6, '%'))