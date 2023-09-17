function sameNumbers(number) {
    const numberToString = number.toString().split("");
    let isEqual = false;
    let sum = 0;
    let temp = numberToString[0];

    numberToString.forEach(element => {

        if (element === temp) {
            isEqual = true;
        } else {
            isEqual = false;
        }
        temp = element

        sum += +element;

    });

    console.log(isEqual);
    console.log(sum);

}
sameNumbers(2332);