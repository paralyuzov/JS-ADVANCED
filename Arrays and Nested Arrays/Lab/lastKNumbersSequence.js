function lastKNumbersSequence(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;
        let startIndex = Math.max(0, i - k);

        for (let j = startIndex; j < i; j++) {
            sum += result[j];
        }

        result[i] = sum;

    }

    return result;

}
console.log(lastKNumbersSequence(6, 3));