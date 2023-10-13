window.addEventListener('load', solve);

function solve() {

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const contactInput = document.getElementById("contact-number");
    const classType = document.getElementById("class-type");
    const classTime = document.getElementById("class-time");
    const nextButton = document.getElementById("next-btn");
    const classInfo = document.querySelectorAll("ul")[0];
    const previewInfo = document.querySelectorAll("ul")[1];
    const mainDiv = document.getElementById("main");
    const bodyId = document.getElementById("body")


    nextButton.addEventListener("click", preview);


    function preview(e) {
        e.preventDefault();
        if (nameInput.value === "" || emailInput.value === "" || contactInput.value === "" || classType.value === "" || classTime.value === "") {
            return;
        }
        let createLi = document.createElement("li");
        createLi.classList.add("info-item");
        let createArticle = document.createElement("article");
        createArticle.classList.add("personal-info");

        let p1 = document.createElement("p");
        p1.textContent = nameInput.value;
        createArticle.appendChild(p1);

        let p2 = document.createElement("p");
        p2.textContent = emailInput.value;
        createArticle.appendChild(p2);

        let p3 = document.createElement("p");
        p3.textContent = contactInput.value;
        createArticle.appendChild(p3);

        let p4 = document.createElement("p");
        p4.textContent = classType.value;
        createArticle.appendChild(p4);

        let p5 = document.createElement("p");
        p5.textContent = classTime.value;
        createArticle.appendChild(p5);

        createLi.appendChild(createArticle);

        let editButton = document.createElement("button");
        editButton.classList.add("edit-btn");
        editButton.textContent = "Edit";
        createLi.appendChild(editButton);

        let continueButton = document.createElement("button");
        continueButton.classList.add("continue-btn");
        continueButton.textContent = "Continue";
        createLi.appendChild(continueButton);

        let nameinput = nameInput.value;
        let emailinput = emailInput.value;
        let concactinput = contactInput.value;
        let classtypeinput = classType.value;
        let classtimeinput = classTime.value;

        nameInput.value = "";
        emailInput.value = "";
        contactInput.value = "";
        classType.value = "";
        classTime.value = "";
        nextButton.disabled = true;

        classInfo.appendChild(createLi);

        editButton.addEventListener("click", edit);
        continueButton.addEventListener("click", confirm);

        function edit(e) {
            nameInput.value = p1.textContent;
            emailInput.value = p2.textContent;
            contactInput.value = p3.textContent;
            classType.value = p4.textContent;
            classTime.value = p5.textContent;

            createLi.remove();
            nextButton.disabled = false;
        }

        function confirm(e) {
            createLi.remove();

            let li = document.createElement("li");
            li.classList.add("continue-info");
            let createArticle = document.createElement("article");
            createArticle.classList.add("personal-info");

            let p1 = document.createElement("p");
            p1.textContent = nameinput;
            createArticle.appendChild(p1);

            let p2 = document.createElement("p");
            p2.textContent = emailinput;
            createArticle.appendChild(p2);

            let p3 = document.createElement("p");
            p3.textContent = concactinput;
            createArticle.appendChild(p3);

            let p4 = document.createElement("p");
            p4.textContent = classtypeinput;
            createArticle.appendChild(p4);

            let p5 = document.createElement("p");
            p5.textContent = classtimeinput;
            createArticle.appendChild(p5);

            li.appendChild(createArticle);

            let cancelButton = document.createElement("button");
            cancelButton.classList.add("cancel-btn");
            cancelButton.textContent = "Cancel";
            li.appendChild(cancelButton);

            let confirmButn = document.createElement("button");
            confirmButn.classList.add("confirm-btn");
            confirmButn.textContent = "Confirm";
            li.appendChild(confirmButn);

            previewInfo.appendChild(li)


            cancelButton.addEventListener("click", () => {
                li.remove();
                nextButton.disabled = false;

            });

            confirmButn.addEventListener("click", () => {
                mainDiv.remove();
                let h1 = document.createElement("h1");
                h1.setAttribute("id", "thank-you");
                h1.textContent = "Thank you for scheduling your appointment, we look forward to seeing you!";

                let doneButton = document.createElement("button");
                doneButton.setAttribute("id", "done-btn");
                doneButton.textContent = "Done";

                bodyId.appendChild(h1);
                bodyId.appendChild(doneButton);
                doneButton.addEventListener("click", () => {
                    window.location.reload();
                })

            })

        }
    }
}




