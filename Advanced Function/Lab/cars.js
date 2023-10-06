function cars(input) {
    const data = {}

    const instr = {
        create: (name, inherits, name2) => (data[name] = inherits ? Object.create(data[name2]) : {}),
        set: (name, key, value) => (data[name][key] = value),
        print: n => {
            const entry = []
            for (const key in data[n]) {
                entry.push(`${key}:${data[n][key]}`)
            }
            console.log(entry.join(","))
        },
    }

    input.forEach(x => {
        const [command, name, key, value] = x.split(" ")

        instr[command](name, key, value)
    })
}
cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
)
