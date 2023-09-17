function diagonalSums(matrix) {
    let mainIndex = 0;
    let secIndex = matrix[0].length - 1;

    let mainSum = 0;
    let secSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        mainSum += matrix[i][mainIndex];
        secSum += matrix[i][secIndex];

        mainIndex++;
        secIndex--;
    }

    console.log(`${mainSum} ${secSum}`);
}
diagonalSums(
    [[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]])