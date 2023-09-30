function generateReport() {
    let checkboxes = document.querySelectorAll('table>thead>tr>th>input');
    let rows = document.querySelectorAll('tbody>tr');
    let output = [];
    for (let i = 0; i < rows.length; i++) {
        let obj = {};
        let values = Array.from(rows[i].getElementsByTagName('td')).map(el => el.textContent);
        for (let j = 0; j < checkboxes.length; j++) {
            if (checkboxes[j].checked) {
                obj[checkboxes[j].name] = values[j];
            }
        }
        output.push(obj);
    }
    document.querySelector('#output').value = JSON.stringify(output, null, 2);

}