function validate() {
    let inputRef = document.getElementById("email");
    inputRef.addEventListener("change", onChange);

    function onChange(e) {
        let value = inputRef.value;
        let pattern = /[a-z]+@[a-z]+\.[a-z]+/;

        if (pattern.test(value)) {
            inputRef.classList.remove("error")
        } else {
            inputRef.classList.add("error")
        }

    }
}