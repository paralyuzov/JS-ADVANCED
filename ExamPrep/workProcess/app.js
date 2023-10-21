window.addEventListener('load', solve);

function solve() {
    const firstNameID = document.getElementById("fname");
    const lastNameID = document.getElementById("lname");
    const emailID = document.getElementById("email");
    const birthDayID = document.getElementById("birth");
    const positionID = document.getElementById("position");
    const salaryID = document.getElementById("salary");
    const hireButton = document.getElementById("add-worker");
    const tbodyID = document.getElementById("tbody");
    const sumID = document.getElementById("sum");

    hireButton.addEventListener("click", hire);

    let sum = 0;

    function hire(e) {
        e.preventDefault();
        let firstNameValue = firstNameID.value;
        let lastNameValue = lastNameID.value;
        let emailValue = emailID.value;
        let birthDayValue = birthDayID.value;
        let positionValue = positionID.value;
        let salaryValue = Number(salaryID.value);

        if (!firstNameValue || !lastNameValue || !emailValue || !birthDayValue || !positionValue || !salaryValue) {
            return;
        }

        let tr = document.createElement("tr");

        let tdFirstName = document.createElement("td");
        tdFirstName.textContent = `${firstNameValue}`;
        tr.appendChild(tdFirstName);

        let tdLastName = document.createElement("td");
        tdLastName.textContent = `${lastNameValue}`;
        tr.appendChild(tdLastName);

        let tdEmail = document.createElement("td");
        tdEmail.textContent = `${emailValue}`;
        tr.appendChild(tdEmail);

        let tdBirthday = document.createElement("td");
        tdBirthday.textContent = `${birthDayValue}`;
        tr.appendChild(tdBirthday);

        let tdPosition = document.createElement('td');
        tdPosition.textContent = `${positionValue}`;
        tr.appendChild(tdPosition);

        let tdSalary = document.createElement("td");
        tdSalary.textContent = `${salaryValue}`;
        tr.appendChild(tdSalary);

        let tdButtons = document.createElement("td");

        let firedButton = document.createElement("button");
        firedButton.setAttribute("class", "fired");
        firedButton.textContent = "Fired";
        tdButtons.appendChild(firedButton);


        let editButton = document.createElement("button");
        editButton.setAttribute("class", "edit");
        editButton.textContent = "Edit";
        tdButtons.appendChild(editButton);


        tr.appendChild(tdButtons);

        tbodyID.appendChild(tr);
        sum += salaryValue;
        sumID.textContent = `${sum.toFixed(2)}`;

        firstNameID.value = "";
        lastNameID.value = "";
        emailID.value = "";
        birthDayID.value = "";
        positionID.value = "";
        salaryID.value = "";

        editButton.addEventListener("click", () => {
            sum -= salaryValue;
            sumID.textContent = `${sum.toFixed(2)}`;
            firstNameID.value = firstNameValue;
            lastNameID.value = lastNameValue;
            emailID.value = emailValue;
            birthDayID.value = birthDayValue;
            positionID.value = positionValue;
            salaryID.value = salaryValue;
            tr.remove();

        })

        firedButton.addEventListener("click", () => {
            sum -= salaryValue;
            sumID.textContent = `${sum.toFixed(2)}`;
            tr.remove();
        })

    }
}
