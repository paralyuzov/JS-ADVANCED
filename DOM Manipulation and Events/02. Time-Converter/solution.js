function attachEventsListeners() {

    const buttonRef = Array.from(document.querySelectorAll("input[type=button]"));
    const data = Array.from(document.querySelectorAll("input[type=text]"))

    buttonRef.forEach(button => button.addEventListener("click", convert));

    function convert(e) {

        const buttonValue = e.target.parentElement.children[1].id;
        const value = Number(e.target.parentElement.children[1].value);

        switch (buttonValue) {
            case "days": calculate(value); break;
            case "hours": calculate(value / 24); break;
            case "minutes": calculate(value / 24 / 60); break;
            case "seconds": calculate(value / 24 / 60 / 60); break;

        }
    }

    function calculate(value) {
        data[0].value = value;
        let currentValue = value * 24;

        for (let i = 1; i < data.length; i++) {
            let input = data[i];
            input.value = currentValue;
            currentValue *= 60;
        }

    }

}