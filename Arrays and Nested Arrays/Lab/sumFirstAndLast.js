function sumFirstAndLast(arr) {

    let firstN = Number(arr.shift());
    let lastN = Number(arr.pop());

    return firstN + lastN

}
console.log(sumFirstAndLast(['5', '10']))