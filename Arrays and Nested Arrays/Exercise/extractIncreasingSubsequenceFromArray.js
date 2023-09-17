function extractIncreasingSubsequenceFromArray(arr) {

    let maxNumber = arr[0];
    let result = [];

    arr.forEach((x, index) => {
        if (x >= maxNumber) {
            maxNumber = x;
            result.push(maxNumber);
        }
    })

    return result;

}
console.log(extractIncreasingSubsequenceFromArray([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]))