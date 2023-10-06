function argumentInfo(...arguments) {
    let obj = {};

    for (let line of arguments) {
        let type = typeof (line);
        console.log(`${type}: ${line}`);

        if (!obj.hasOwnProperty(type)) {
            obj[type] = 0;
        }
        obj[type] = obj[type] + 1;
    }

    let sort = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    for (let [key, value] of sort) {
        console.log(`${key} = ${value}`)
    }

}
argumentInfo('cat', 42, function () { console.log('Hello world!'); })