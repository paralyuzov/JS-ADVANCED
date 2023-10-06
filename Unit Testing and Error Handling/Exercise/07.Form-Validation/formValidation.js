function validate() {
    const usernamePattern = /^[A-Za-z0-9]{3,20}$/;
    const passwordPattern = /^[\w]{5,15}$/;
    const emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;
    const inputField = document.getElementById("username");
    const emailField = document.getElementById("email")
    const passwordField = document.getElementById("password");
    const confirmField = document.getElementById("confirm-password");
    const submitButton = document.getElementById("submit");
    const companyInfo = document.getElementById("companyInfo");
    const checkbox = document.querySelector("input[type=checkbox]");
    const comnapyNumber = document.getElementById("companyNumber");
    const validDIV = document.getElementById("valid");

    let isValid = true;


    submitButton.addEventListener("click", submit);
    checkbox.addEventListener("change", onChange);

    function submit(e) {
        e.preventDefault();
        if (!inputField.value.match(usernamePattern)) {
            inputField.style.borderColor = "red";
            isValid = false;
        }
        if (!emailField.value.match(emailPattern)) {
            emailField.style.borderColor = "red";
            isValid = false;
        }

        if (!passwordField.value.match(passwordPattern)) {
            passwordField.style.borderColor = "red";
            isValid = false;
        }
        if (!confirmField.value.match(passwordPattern)) {
            confirmField.style.borderColor = "red";
            isValid = false;
        }
        if (passwordField.value !== confirmField.value) {
            passwordField.style.borderColor = "red";
            confirmField.style.borderColor = "red";
            isValid = false;
        }


        if (checkbox.checked) {
            let toNumber = Number(comnapyNumber.value);
            if (!(toNumber >= 1000 && toNumber <= 9999)) {
                comnapyNumber.style.borderColor = "red";
                isValid = false;
            }
        }

        if (isValid) {
            validDIV.style.display = "block"
        }

    }

    function onChange(e) {
        e.preventDefault()
        if (e.target.checked) {
            companyInfo.style.display = "block";
        } else {
            companyInfo.style.display = "none";
        }


    }

}
