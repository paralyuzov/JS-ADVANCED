function pieceOfPie(pies, start, end) {
    let indexOfFirstPie = pies.indexOf(start);
    let indexOfSecPie = pies.indexOf(end);

    return pies.slice(indexOfFirstPie, indexOfSecPie + 1);

}
console.log(pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'))