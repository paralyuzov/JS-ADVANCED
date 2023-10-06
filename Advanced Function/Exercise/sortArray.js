function sortArr(data, order) {
    order === "asc" ? data.sort((a, b) => a - b) : data.sort((a, b) => b - a);
    return data;

}
console.log(sortArr([14, 7, 17, 6, 8], 'desc'))