window.addEventListener('load', solve);

function solve() {
    const typeProductID = document.getElementById("type-product");
    const descriptionID = document.getElementById("description");
    const clientNameID = document.getElementById("client-name");
    const phoneID = document.getElementById("client-phone");
    const sendButton = document.querySelector("button[type=submit]");
    const recieveOrderID = document.getElementById("received-orders");
    const completedOrdersID = document.getElementById("completed-orders");
    const clearButton = document.querySelector("button[class=clear-btn]");

    sendButton.addEventListener("click", recieved);

    function recieved(e) {
        e.preventDefault();
        let typeProductValue = typeProductID.value;
        let descriptionValue = descriptionID.value;
        let clientNameValue = clientNameID.value;
        let phoneValue = phoneID.value;


        if (!typeProductValue || !descriptionValue || !clientNameValue || !phoneValue) {
            return;
        }

        let divOrder = document.createElement("div");
        divOrder.setAttribute("class", "container");

        let h2 = document.createElement("h2");
        h2.textContent = `Product type for repair: ${typeProductValue}`;
        divOrder.appendChild(h2);

        let h3 = document.createElement("h3");
        h3.textContent = `Client information: ${clientNameValue}, ${phoneValue}`;
        divOrder.appendChild(h3);

        let h4 = document.createElement("h4");
        h4.textContent = `Description of the problem: ${descriptionValue}`;
        divOrder.appendChild(h4);

        let startButton = document.createElement("button");
        startButton.setAttribute("class", "start-btn");
        startButton.textContent = "Start repair";
        divOrder.appendChild(startButton);

        let finishButton = document.createElement("button");
        finishButton.setAttribute("class", "finish-btn");
        finishButton.textContent = "Finish repair";
        divOrder.appendChild(finishButton);
        finishButton.disabled = true;

        recieveOrderID.appendChild(divOrder);
        typeProductID.value = "";
        descriptionID.value = "";
        clientNameID.value = "";
        phoneID.value = "";

        startButton.addEventListener("click", () => {
            startButton.disabled = true;
            finishButton.disabled = false;
        })

        finishButton.addEventListener("click", () => {
            completedOrdersID.appendChild(divOrder);
            startButton.remove();
            finishButton.remove();
        })

    }

    clearButton.addEventListener("click", (e) => {
        let divs = Array.from(e.target.parentElement.querySelectorAll("div"));
        divs.forEach(div => div.remove());
    })
}