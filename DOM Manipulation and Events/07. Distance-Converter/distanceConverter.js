function attachEventsListeners() {
    const buttonRef = document.querySelectorAll("input[type=button]")[0];
    const input = document.querySelectorAll("input[type=text]")[0];
    const inputUnits = document.getElementById("inputUnits");
    const outputUnits = document.getElementById("outputUnits");
    const output = document.getElementById("outputDistance");



    buttonRef.addEventListener("click", convert);

    function convert(e) {

        let result = 0;
        let value = Number(input.value);


        switch (inputUnits.value) {
            case "km":
                if (outputUnits.value === "km") {
                    result = value * 1;
                } else if (outputUnits.value === "m") {
                    result = value * 1000;
                } else if (outputUnits.value === "cm") {
                    result = value * 100000;
                } else if (outputUnits.value === "mm") {
                    result = value * 1000000;
                } else if (outputUnits.value === "mi") {
                    result = value * 0.621371192;
                } else if (outputUnits.value === "yrd") {
                    result = value * 1093.6133;
                } else if (outputUnits.value === "ft") {
                    result = value * 3280.8399;
                } else if (outputUnits.value === "in") {
                    result = value * 39370.0787;
                }
                break;

            case "m":
                if (outputUnits.value === "km") {
                    result = value * 0.001;
                } else if (outputUnits.value === "m") {
                    result = value * 1;
                } else if (outputUnits.value === "cm") {
                    result = value * 100;
                } else if (outputUnits.value === "mm") {
                    result = value * 1000;
                } else if (outputUnits.value === "mi") {
                    result = value * 0.000621371192;
                } else if (outputUnits.value === "yrd") {
                    result = value * 1.0936133;
                } else if (outputUnits.value === "ft") {
                    result = value * 3.2808399;
                } else if (outputUnits.value === "in") {
                    result = value * 39.3700787;
                }
                break;

            case "cm":
                if (outputUnits.value === "km") {
                    result = value * 0.00001;
                } else if (outputUnits.value === "m") {
                    result = value * 0.01;
                } else if (outputUnits.value === "cm") {
                    result = value * 1;
                } else if (outputUnits.value === "mm") {
                    result = value * 10;
                } else if (outputUnits.value === "mi") {
                    result = value * 0.00000621371;
                } else if (outputUnits.value === "yrd") {
                    result = value * 0.010936133;
                } else if (outputUnits.value === "ft") {
                    result = value * 0.032808399;
                } else if (outputUnits.value === "in") {
                    result = value * 0.393700787;
                }
                break;

            case "mm":
                if (outputUnits.value === "km") {
                    result = value * 0.000001;
                } else if (outputUnits.value === "m") {
                    result = value * 0.001;
                } else if (outputUnits.value === "cm") {
                    result = value * 0.1;
                } else if (outputUnits.value === "mm") {
                    result = value * 1;
                } else if (outputUnits.value === "mi") {
                    result = value * 0.0000006213711;
                } else if (outputUnits.value === "yrd") {
                    result = value * 0.0010936133;
                } else if (outputUnits.value === "ft") {
                    result = value * 0.0032808399;
                } else if (outputUnits.value === "in") {
                    result = value * 0.0393700787;
                }
                break;

            case "mi":
                if (outputUnits.value === "km") {
                    result = value * 1.609344;
                } else if (outputUnits.value === "m") {
                    result = value * 1609.344;
                } else if (outputUnits.value === "cm") {
                    result = value * 160934.4;
                } else if (outputUnits.value === "mm") {
                    result = value * 1609344;
                } else if (outputUnits.value === "mi") {
                    result = value * 1;
                } else if (outputUnits.value === "yrd") {
                    result = value * 1760;
                } else if (outputUnits.value === "ft") {
                    result = value * 5280;
                } else if (outputUnits.value === "in") {
                    result = value * 63360;
                }
                break;

            case "yrd":

                if (outputUnits.value === "km") {
                    result = value * 0.0009144;
                } else if (outputUnits.value === "m") {
                    result = value * 0.9144;
                } else if (outputUnits.value === "cm") {
                    result = value * 91.44;
                } else if (outputUnits.value === "mm") {
                    result = value * 914.4;
                } else if (outputUnits.value === "mi") {
                    result = value * 0.000568181818;
                } else if (outputUnits.value === "yrd") {
                    result = value * 1;
                } else if (outputUnits.value === "ft") {
                    result = value * 3;
                } else if (outputUnits.value === "in") {
                    result = value * 36;
                }
                break;
            case "ft":
                if (outputUnits.value === "km") {
                    result = value * 0.0003048;
                } else if (outputUnits.value === "m") {
                    result = value * 0.3048;
                } else if (outputUnits.value === "cm") {
                    result = value * 30.48;
                } else if (outputUnits.value === "mm") {
                    result = value * 304.8;
                } else if (outputUnits.value === "mi") {
                    result = value * 0.000189393939;
                } else if (outputUnits.value === "yrd") {
                    result = value * 0.333333333;
                } else if (outputUnits.value === "ft") {
                    result = value * 1;
                } else if (outputUnits.value === "in") {
                    result = value * 12;
                }
                break;

            case "in":
                if (outputUnits.value === "km") {
                    result = value * 0.0000254;
                } else if (outputUnits.value === "m") {
                    result = value * 0.0254;
                } else if (outputUnits.value === "cm") {
                    result = value * 2.54;
                } else if (outputUnits.value === "mm") {
                    result = value * 25.4;
                } else if (outputUnits.value === "mi") {
                    result = value * 0.0000157828282828;
                } else if (outputUnits.value === "yrd") {
                    result = value * 0.0277777778;
                } else if (outputUnits.value === "ft") {
                    result = value * 0.0833333333;
                } else if (outputUnits.value === "in") {
                    result = value * 1;
                }
                break;

        }


        output.disabled = false;
        output.value = result;
    }
}