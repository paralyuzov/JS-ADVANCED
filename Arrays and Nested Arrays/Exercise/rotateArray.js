function rotateArray(arr, n) {
    for (let i = 0; i < n; i++) {
        const firstEl = arr.pop();
        arr.unshift(firstEl);
    }
    console.log(arr.join(" "));
}
rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15)