function processOddPositions(arr) {

    let result = arr
        .filter((value, index) => index % 2 !== 0)
        .map(n => n * 2)
        .reverse()
        .join(" ");

    console.log(result);

}
processOddPositions([10, 15, 20, 25]);