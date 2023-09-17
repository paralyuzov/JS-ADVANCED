function negativePositiveNumbers(arr) {
    let res = [];

    arr.forEach((element => {
        if (element < 0) {
            res.unshift(element);
        } else {
            res.push(element);
        }
    }));

    console.log(res.join("\n"));

}
negativePositiveNumbers([7, -2, 8, 9])