function solve(area, vol, input) {

    const obj = JSON.parse(input);
    function calc(obj) {
        const areaObj = area.call(obj);
        const volumeObj = vol.call(obj);

        return { area: areaObj, volume: volumeObj };

    }

    return obj.map(calc)

}

console.table(solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`))

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};


