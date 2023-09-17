function smallestTwoNumbers(arr) {
    let result = arr.sort((a, b) => a - b);
    console.log(`${result[0]} ${result[1]}`);
}
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);