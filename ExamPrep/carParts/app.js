window.addEventListener('load', solve);

function solve() {

        const carModelId = document.getElementById("car-model");
        const carYearId = document.getElementById("car-year");
        const partNameId = document.getElementById("part-name");
        const partNumberId = document.getElementById("part-number");
        const conditionId = document.getElementById("condition");
        const nextButtonId = document.getElementById("next-btn");
        const infoListRef = document.querySelector(".info-list");
        const completeImgRef = document.getElementById("complete-img");
        const completeTextRef = document.getElementById("complete-text");
        const confirmListRef = document.querySelector(".confirm-list");


        nextButtonId.addEventListener("click", partInfo)

        function partInfo(e) {
                e.preventDefault()
                if (Number(carYearId.value) < 1980 || Number(carYearId.value) > 2023) {
                        return;
                }

                if (carModelId.value == "" || conditionId.value == "" || partNameId.value == "" || partNumberId.value == "") {
                        return;
                }

                let createLi = document.createElement("li");
                createLi.setAttribute("class", "part-content");

                let createArticle = document.createElement("article");

                let p = document.createElement("p");
                p.textContent = `Car Model: ${carModelId.value}`;
                createArticle.appendChild(p);

                let p2 = document.createElement("p");
                p2.textContent = `Car Year: ${carYearId.value}`;
                createArticle.appendChild(p2);

                let p3 = document.createElement("p");
                p3.textContent = `Part Name: ${partNameId.value}`;
                createArticle.appendChild(p3);

                let p4 = document.createElement("p");
                p4.textContent = `Part Number: ${partNumberId.value}`;
                createArticle.appendChild(p4);

                let p5 = document.createElement("p");
                p5.textContent = `Condition: ${conditionId.value}`;
                createArticle.appendChild(p5);

                createLi.appendChild(createArticle);

                let editButton = document.createElement("button");
                editButton.setAttribute("class", "edit-btn");
                editButton.textContent = "Edit";
                createLi.appendChild(editButton);

                let continueButton = document.createElement("button");
                continueButton.setAttribute("class", "continue-btn");
                continueButton.textContent = "Continue";
                createLi.appendChild(continueButton);

                infoListRef.appendChild(createLi);

                nextButtonId.disabled = true;

                let carModelIdValue = carModelId.value;
                let carYearIdValue = carYearId.value;
                let partNameIdValue = partNameId.value;
                let partNumberIdValue = partNumberId.value;
                let conditionIdValue = conditionId.value

                carModelId.value = "";
                carYearId.value = "";
                partNameId.value = "";
                partNumberId.value = "";
                conditionId.value = "";
                completeImgRef.style.visibility = "hidden";
                completeTextRef.textContent = "";

                continueButton.addEventListener("click", confirmOrder);
                editButton.addEventListener("click", editing);

                function confirmOrder(e) {
                        createLi.remove();

                        let orderLi = document.createElement("li");
                        orderLi.setAttribute("class", "part-content");

                        let createArticle = document.createElement("article");

                        let p = document.createElement("p");
                        p.textContent = `Car Model: ${carModelIdValue}`;
                        createArticle.appendChild(p);

                        let p2 = document.createElement("p");
                        p2.textContent = `Car Year: ${carYearIdValue}`;
                        createArticle.appendChild(p2);

                        let p3 = document.createElement("p");
                        p3.textContent = `Part Name: ${partNameIdValue}`;
                        createArticle.appendChild(p3);

                        let p4 = document.createElement("p");
                        p4.textContent = `Part Number: ${partNumberIdValue}`;
                        createArticle.appendChild(p4);

                        let p5 = document.createElement("p");
                        p5.textContent = `Condition: ${conditionIdValue}`;
                        createArticle.appendChild(p5);

                        orderLi.appendChild(createArticle);

                        let cancelButton = document.createElement("button");
                        cancelButton.setAttribute("class", "cancel-btn");
                        cancelButton.textContent = "Cancel";
                        orderLi.appendChild(cancelButton)

                        let confirmButton = document.createElement("button");
                        confirmButton.setAttribute("class", "confirm-btn");
                        confirmButton.textContent = "Confirm";
                        orderLi.appendChild(confirmButton);

                        confirmListRef.appendChild(orderLi);

                        cancelButton.addEventListener("click", () => {
                                orderLi.remove();
                                nextButtonId.disabled = false;
                        })

                        confirmButton.addEventListener("click", () => {
                                orderLi.remove();
                                nextButtonId.disabled = false;
                                completeImgRef.style.visibility = "visible";
                                completeTextRef.textContent = "Part is Ordered!";

                        })
                }

                function editing() {


                        carModelId.value = carModelIdValue;
                        carYearId.value = carYearIdValue;
                        partNameId.value = partNameIdValue;
                        partNumberId.value = partNumberIdValue;
                        conditionId.value = conditionIdValue;
                        nextButtonId.disabled = false;
                        createLi.remove()

                }
        }
}




