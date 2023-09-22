function townPopulation(data) {

    let obj = {};

    data.forEach(x => {
        const [town, population] = x.split(" <-> ");

        if (!obj.hasOwnProperty(town)) {
            obj[town] = 0;
        }

        obj[town] += Number(population);

    });

    for (const [key, value] of Object.entries(obj)) {
        console.log(`${key} : ${value}`);
    }

}
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'])