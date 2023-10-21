window.addEventListener("load", solve);

function solve() {
    const recipientNameID = document.getElementById("recipientName");
    const titleID = document.getElementById("title");
    const messageID = document.getElementById("message");
    const listID = document.getElementById("list");
    const addButtonID = document.getElementById("add");
    const resetButtonID = document.getElementById("reset");
    const sendListID = document.querySelector(".sent-list");
    const deleteListID = document.querySelector(".delete-list");

    resetButtonID.addEventListener("click", (e) => {
        e.preventDefault();
        recipientNameID.value = "";
        titleID.value = "";
        messageID.value = "";

    })

    addButtonID.addEventListener("click", onAdd);

    function onAdd(e) {
        e.preventDefault();
        let recipientNameValue = recipientNameID.value;
        let titleValue = titleID.value;
        let messageValue = messageID.value;
        if (!recipientNameValue || !titleValue || !messageValue) {
            return;
        }

        let liElement = document.createElement("li");

        let h4Title = document.createElement("h4");
        h4Title.textContent = `Title: ${titleValue}`;
        liElement.appendChild(h4Title);

        let h4Recipient = document.createElement("h4");
        h4Recipient.textContent = `Recipient Name: ${recipientNameValue}`;
        liElement.appendChild(h4Recipient);

        let spanElement = document.createElement("span");
        spanElement.textContent = `${messageValue}`;
        liElement.appendChild(spanElement);

        let divElement = document.createElement("div");
        divElement.setAttribute("id", "list-action");

        let sendButton = document.createElement("button");
        sendButton.setAttribute("type", "submit");
        sendButton.setAttribute("id", "send");
        sendButton.textContent = "Send";
        divElement.appendChild(sendButton);

        let deleteButton = document.createElement("button");
        deleteButton.setAttribute("type", "submit");
        deleteButton.setAttribute("id", "delete");
        deleteButton.textContent = "Delete";
        divElement.appendChild(deleteButton);

        liElement.appendChild(divElement);
        listID.appendChild(liElement);

        recipientNameID.value = "";
        titleID.value = "";
        messageID.value = "";

        deleteButton.addEventListener("click", () => {
            e.preventDefault();
            let liDelete = document.createElement("li");
            let span1 = document.createElement("span");
            span1.textContent = `To: ${recipientNameValue} `;
            liDelete.appendChild(span1);

            let span2 = document.createElement("span");
            span2.textContent = `Title: ${titleValue}`;
            liDelete.appendChild(span2);

            deleteListID.appendChild(liDelete);
            liElement.remove();

        })

        sendButton.addEventListener("click", (e) => {
            e.preventDefault();
            let liSend = document.createElement("li");
            let span1 = document.createElement("span");
            span1.textContent = `To: ${recipientNameValue} `;
            liSend.appendChild(span1);

            let span2 = document.createElement("span");
            span2.textContent = `Title: ${titleValue}`;
            liSend.appendChild(span2);

            let divSend = document.createElement("div");
            divSend.setAttribute("class", "btn");
            let delButton = document.createElement("button");
            delButton.setAttribute("type", "submit");
            delButton.setAttribute("class", "delete");
            delButton.textContent = "Delete";
            divSend.appendChild(delButton);

            liSend.appendChild(divSend);
            sendListID.appendChild(liSend);
            liElement.remove()

            delButton.addEventListener("click", (e) => {
                e.preventDefault();
                divSend.remove();
                let copy = liSend.cloneNode(true);
                deleteListID.appendChild(copy);
                liSend.remove();

            })

        })
    }
}
