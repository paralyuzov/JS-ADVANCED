function biggerHalf(arr) {
    let sorted = arr.sort((a, b) => a - b);
    let sortedHalf = sorted.splice(sorted.length / 2);
    return sortedHalf;
}
console.log(biggerHalf([4, 7, 2, 5]));