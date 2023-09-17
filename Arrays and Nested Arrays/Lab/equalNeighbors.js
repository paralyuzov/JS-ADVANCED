function equalNeighbors(matrix) {
    let neighbors = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i < matrix.length - 1) {
                if (matrix[i][j] == matrix[i + 1][j]) {
                    neighbors++;
                }
            }
            if (j < matrix[i].length) {
                if (matrix[i][j] == matrix[i][j + 1]) {
                    neighbors++;
                }
            }
        }
    }
    return neighbors;
}
console.log(equalNeighbors(
    [['test', 'done', 'yo', 'ho'],
    ['test', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]))