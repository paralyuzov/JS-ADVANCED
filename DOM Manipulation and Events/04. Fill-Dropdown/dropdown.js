function addItem() {
    const inputs = Array.from(document.querySelectorAll("input[type=text]"));
    const selectRef = document.getElementById("menu");

    for (let i = 0; i < inputs.length; i++) {
        let createOption = document.createElement("option");
        createOption.textContent = inputs[i].value;
        createOption.value = inputs[i + 1].value;

        selectRef.appendChild(createOption);
        debugger
        break;

    }

    inputs[0].value = "";
    inputs[1].value = "";
}