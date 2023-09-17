function listOfNames(arr) {

    const sorted = arr.sort((a, b) => a.localeCompare(b));
    sorted.forEach((x, i) => {
        console.log(`${i + 1}.${x}`);
    })

}
listOfNames(["John", "Bob", "Christina", "Ema"])