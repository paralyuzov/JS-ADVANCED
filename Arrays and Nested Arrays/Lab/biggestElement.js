function biggestElement(matrix) {
    let maxNumber = matrix[0][0];
    matrix.forEach(line => {
        line.forEach(x => {
            if (x > maxNumber) {
                maxNumber = x;
            }
        })
    })

    console.log(maxNumber);
}
biggestElement(
    [[20, 50, 10],
    [8, 33, 145]])