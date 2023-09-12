function circleArea(data) {
    const _type = typeof (data);
    if (_type === "number") {
        const area = (data ** 2) * Math.PI;
        console.log(area.toFixed(2))
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${_type}.`)
    }



}
circleArea(5);
console.log("-------------");
circleArea();