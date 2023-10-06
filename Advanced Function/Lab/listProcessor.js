function listProcessor(data) {

    let arr = [];

    for (let line of data) {
        let [command, value] = line.split(" ");
        switch (command) {
            case "add": arr.push(value); break;
            case "remove": arr = arr.filter((x) => x !== value); break;
            case "print": console.log(`${arr.join(",")}`); break;
        }

    }

}
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print'])