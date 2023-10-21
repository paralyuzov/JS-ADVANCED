window.addEventListener('load', solve);

function solve() {

    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const poepleInput = document.getElementById("people-count");
    const dateInput = document.getElementById("from-date");
    const daysInput = document.getElementById("days-count");
    const nextButton = document.getElementById("next-btn");
    const ticketPreviewRef = document.querySelector(".ticket-info-list");
    const confirmPreviewRef = document.querySelector(".confirm-ticket");
    const mainDivRef = document.getElementById("main");
    const bodyRef = document.getElementById("body");


    nextButton.addEventListener("click", ticketPreview);

    function ticketPreview(e) {
        e.preventDefault();
        debugger
        if (firstNameInput.value === "" || lastNameInput.value === "" || poepleInput.value === "" || dateInput.value === "" || daysInput.value === "" ||
            new Date(dateInput.value) >= new Date(daysInput.value)) {
            return;
        }

        let liPreview = document.createElement("li");
        liPreview.setAttribute("class", "ticket");

        let previewArticle = document.createElement("article");
        let previewH3 = document.createElement("h3");
        previewH3.textContent = `Name: ${firstNameInput.value} ${lastNameInput.value}`;
        previewArticle.appendChild(previewH3);

        let previewP = document.createElement("p");
        previewP.textContent = `From date: ${dateInput.value}`
        previewArticle.appendChild(previewP);

        let previewP2 = document.createElement("p");
        previewP2.textContent = `For ${daysInput.value} days`;
        previewArticle.appendChild(previewP2);

        let previewP3 = document.createElement("p");
        previewP3.textContent = `For ${poepleInput.value} people`;
        previewArticle.appendChild(previewP3);

        liPreview.appendChild(previewArticle);

        let editButton = document.createElement("button");
        editButton.setAttribute("class", "edit-btn");
        editButton.textContent = "Edit";
        liPreview.appendChild(editButton)

        let continueButton = document.createElement("button");
        continueButton.setAttribute("class", "continue-btn");
        continueButton.textContent = "Continue";
        liPreview.appendChild(continueButton);

        ticketPreviewRef.appendChild(liPreview);

        nextButton.disabled = true;

        let firstNameValue = firstNameInput.value;
        let lastNameValue = lastNameInput.value;
        let poepleValue = poepleInput.value;
        let dateValue = dateInput.value;
        let daysValue = daysInput.value;

        firstNameInput.value = "";
        lastNameInput.value = "";
        poepleInput.value = "";
        dateInput.value = "";
        daysInput.value = "";

        editButton.addEventListener("click", () => {
            liPreview.remove();
            firstNameInput.value = firstNameValue;
            lastNameInput.value = lastNameValue;
            poepleInput.value = poepleValue;
            dateInput.value = dateValue;
            daysInput.value = daysValue;

            nextButton.disabled = false;
        });

        continueButton.addEventListener("click", () => {
            liPreview.remove();

            let confirmLi = document.createElement("li");
            confirmLi.setAttribute("class", "ticket-content");

            let confirmArticle = document.createElement("article");
            let confirmH3 = document.createElement("h3");
            confirmH3.textContent = `Name: ${firstNameValue} ${lastNameValue}`;
            confirmArticle.appendChild(confirmH3);

            let confirmP = document.createElement("p");
            confirmP.textContent = `From date: ${dateValue}`
            confirmArticle.appendChild(confirmP);

            let confirmP2 = document.createElement("p");
            confirmP2.textContent = `For ${daysValue} days`;
            confirmArticle.appendChild(confirmP2);

            let confirmP3 = document.createElement("p");
            confirmP3.textContent = `For ${poepleValue} people`;
            confirmArticle.appendChild(confirmP3);

            confirmLi.appendChild(confirmArticle);

            let confirmButton = document.createElement("button");
            confirmButton.setAttribute("class", "confirm-btn");
            confirmButton.textContent = "Confirm";
            confirmLi.appendChild(confirmButton)

            let cancelButton = document.createElement("button");
            cancelButton.setAttribute("class", "cancel-btn");
            cancelButton.textContent = "Cancel";
            confirmLi.appendChild(cancelButton);

            confirmPreviewRef.appendChild(confirmLi);

            cancelButton.addEventListener("click", () => {
                confirmLi.remove();
                nextButton.disabled = false;
            })

            confirmButton.addEventListener("click", () => {
                mainDivRef.remove();
                let h1 = document.createElement("h1");
                h1.setAttribute("id", "thank-you");
                h1.textContent = "Thank you, have a nice day!";

                let backButton = document.createElement("button");
                backButton.setAttribute("id", "back-btn");
                backButton.textContent = "Back";

                bodyRef.appendChild(h1);
                bodyRef.appendChild(backButton);

                backButton.addEventListener("click", () => {
                    location.reload()
                })

            })
        })
    }
}




