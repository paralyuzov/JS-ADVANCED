function filterEmployees(data, info) {
    let objects = JSON.parse(data);
    let [key, value] = info.split("-");
    let counter = 0;

    objects.forEach(person => sort.call(person))

    function sort() {
        if (this[key] === value || info === "all") {
            return console.log(`${counter++}. ${this.first_name} ${this.last_name} - ${this.email}`)
        }
    }
}




filterEmployees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'last_name-Johnson'
)