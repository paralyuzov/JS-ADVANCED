function sortingNumbers(arr) {
    const result = [];
    const sorted = arr.sort((a, b) => b - a);
    const length = Math.floor(sorted.length / 2);


    for (let i = 0; i < length; i++) {
        const bigValue = sorted[i];
        const minValue = sorted[sorted.length - 1 - i];

        result.push(minValue, bigValue);
    }

    if (sorted.length % 2 !== 0) {
        const leftElement = sorted[length];
        result.push(leftElement);
    }

    return result;

}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))