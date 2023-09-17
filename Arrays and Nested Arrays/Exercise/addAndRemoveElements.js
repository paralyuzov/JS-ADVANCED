function addAndRemoveElements(data) {
    let result = [];
    let counter = 0;
    for (const line of data) {
        counter++;
        switch (line) {
            case "add": result.push(counter); break;
            case "remove": result.pop(); break;
        }
    }

    if (result.length > 0) {
        console.log(result.join("\n"));
    } else {
        console.log('Empty');
    }

}
addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add'])