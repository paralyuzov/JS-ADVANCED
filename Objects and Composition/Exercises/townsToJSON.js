function townsToJSON(data) {
    let res = [];

    for (let i = 1; i < data.length; i++) {
        let tokens = data[i].split("| ");
        let town = tokens[1].trim();
        let latitude = Number(tokens[2]).toFixed(2);
        latitude = Number(latitude);
        let longitude = tokens[3].split(" |")[0];
        longitude = Number(longitude).toFixed(2);
        longitude = Number(longitude);


        let obj = {
            "Town": town,
            "Latitude": latitude,
            "Longitude": longitude,
        }

        res.push(obj);

    }

    console.log(JSON.stringify(res));

}
townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])