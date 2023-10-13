function juiceFlavours(data) {

    let store = {};
    let result = {};

    class Bottles {
        constructor(juice, qnty) {
            this.juice = juice;
            this.qnty = Number(qnty);
        }

        store() {
            if (!store.hasOwnProperty(this.juice)) {
                store[this.juice] = {
                    "qnty": this.qnty,
                    "bottle": 0,

                }
            } else {
                store[this.juice]["qnty"] += this.qnty
            }

            this.make();
        }

        make() {
            if (store[this.juice].qnty >= 1000) {
                while (store[this.juice].qnty >= 1000) {
                    store[this.juice].bottle++;
                    store[this.juice].qnty -= 1000;
                    result[this.juice] = store[this.juice].bottle;
                }
            }
        }
    }

    for (const line of data) {
        const [juice, qnty] = line.split(" => ");
        const item = new Bottles(juice, qnty).store();
    }

    let output = Object.entries(result);
    output.forEach(x => console.log(x.join(" => ")))

}
juiceFlavours(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'])