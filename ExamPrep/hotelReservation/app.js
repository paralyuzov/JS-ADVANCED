window.addEventListener('load', solve);

function solve() {

    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const checkInInput = document.getElementById("date-in");
    const checkOutInput = document.getElementById("date-out");
    const peopleInput = document.getElementById("people-count");
    const nextButton = document.getElementById("next-btn");
    const infoListRef = document.querySelector(".info-list");
    const confirmListRef = document.querySelector(".confirm-list");
    const h1Ref = document.getElementById("verification");

    nextButton.addEventListener("click", reservation);

    function reservation(e) {

        e.preventDefault();
        if (firstNameInput.value == "" ||
            lastNameInput.value == "" ||
            checkInInput.value == "" ||
            checkOutInput.value == "" ||
            peopleInput.value == "" ||
            new Date(checkInInput.value) >= new Date(checkOutInput.value)) {
            return;
        }

        let liRes = document.createElement("li");
        liRes.setAttribute("class", "reservation-content");

        let articleRes = document.createElement("article");
        let resH3 = document.createElement("h3");
        resH3.textContent = `Name: ${firstNameInput.value} ${lastNameInput.value}`;
        articleRes.appendChild(resH3);

        let p1Res = document.createElement("p");
        p1Res.textContent = `From date: ${checkInInput.value}`;
        articleRes.appendChild(p1Res);

        let p2Res = document.createElement("p");
        p2Res.textContent = `To date: ${checkOutInput.value}`;
        articleRes.appendChild(p2Res);

        let p3Res = document.createElement("p");
        p3Res.textContent = `For ${peopleInput.value} people`;
        articleRes.appendChild(p3Res);

        liRes.appendChild(articleRes);

        let editButton = document.createElement("button");
        editButton.setAttribute("class", "edit-btn");
        editButton.textContent = "Edit";

        liRes.appendChild(editButton);

        let continueButton = document.createElement("button");
        continueButton.setAttribute("class", "continue-btn");
        continueButton.textContent = "Continue";

        liRes.appendChild(continueButton);
        infoListRef.appendChild(liRes);

        let firstNameValue = firstNameInput.value;
        let lastNameValue = lastNameInput.value;
        let checkInValue = checkInInput.value;
        let checkOutValue = checkOutInput.value;
        let peopleValue = peopleInput.value;

        firstNameInput.value = "";
        lastNameInput.value = "";
        checkInInput.value = "";
        checkOutInput.value = "";
        peopleInput.value = "";

        nextButton.disabled = true;

        editButton.addEventListener("click", () => {

            liRes.remove();
            firstNameInput.value = firstNameValue;
            lastNameInput.value = lastNameValue;
            checkInInput.value = checkInValue;
            checkOutInput.value = checkOutValue;
            peopleInput.value = peopleValue;
            nextButton.disabled = false;
        })

        continueButton.addEventListener("click", () => {

            let confirmElement = liRes.cloneNode(true);
            liRes.remove();

            let buttons = Array.from(confirmElement.querySelectorAll("button"));
            buttons.forEach(x => x.remove());

            let confirmButton = document.createElement("button");
            confirmButton.setAttribute("class", "confirm-btn");
            confirmButton.textContent = "Confirm";

            confirmElement.appendChild(confirmButton);

            let cancelButton = document.createElement("button");
            cancelButton.setAttribute("class", "cancel-btn");
            cancelButton.textContent = "Cancel";

            confirmElement.appendChild(cancelButton);

            confirmListRef.appendChild(confirmElement);

            confirmButton.addEventListener("click", () => {
                confirmElement.remove();
                h1Ref.setAttribute("class", "reservation-confirmed");
                h1Ref.textContent = "Confirmed.";
                nextButton.disabled = false;

            })

            cancelButton.addEventListener("click", () => {
                confirmElement.remove();
                h1Ref.setAttribute("class", "reservation-cancelled");
                h1Ref.textContent = "Cancelled.";
                nextButton.disabled = false;
            })
        })
    }
}





