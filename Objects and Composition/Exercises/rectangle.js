function rectangle(width, height, color) {
    let word = "";
    color.split("").forEach((x, i) => {
        if (i === 0) {
            word += x.toUpperCase();
        } else {
            word += x;
        }
    });

    color = word;

    let rect = {
        width: width,
        height: height,
        color: color,
        calcArea() {
            return this.width * this.height;
        },
    }

    return rect;

}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());