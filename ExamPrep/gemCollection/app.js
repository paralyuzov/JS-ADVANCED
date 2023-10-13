window.addEventListener("load", solve);

function solve() {

    const gemeName = document.getElementById("gem-name");
    const colorId = document.getElementById("color");
    const caratsId = document.getElementById("carats");
    const priceId = document.getElementById("price");
    const typeId = document.getElementById("type");
    const addButton = document.getElementById("add-btn");
    const previewId = document.getElementById("preview-list");
    const collectionId = document.getElementById("collection");



    addButton.addEventListener("click", preview);

    function preview(e) {
        e.preventDefault();
        if (gemeName.value == "" || colorId.value == "" || caratsId.value == "" || priceId.value == "" || typeId.value == "") {
            return;
        }

        let gameValue = gemeName.value;
        let colorValue = colorId.value;
        let caratsValue = caratsId.value;
        let priceValue = priceId.value;
        let typeValue = typeId.value;

        let liPreview = document.createElement("li");
        liPreview.setAttribute("class", "gem-info");

        let previewArticle = document.createElement("article");

        let previewH4 = document.createElement("h4");
        previewH4.textContent = `${gemeName.value}`;
        previewArticle.appendChild(previewH4);

        let previewP = document.createElement("p");
        previewP.textContent = `Color: ${colorId.value}`;
        previewArticle.appendChild(previewP);

        let previewP2 = document.createElement("p");
        previewP2.textContent = `Carats: ${caratsId.value}`;
        previewArticle.appendChild(previewP2);

        let previewP3 = document.createElement("p");
        previewP3.textContent = `Price: ${priceId.value}$`;
        previewArticle.appendChild(previewP3);

        let previewP4 = document.createElement("p");
        previewP4.textContent = `Type: ${typeId.value}`;
        previewArticle.appendChild(previewP4);

        let saveButton = document.createElement("button");
        saveButton.setAttribute("class", "save-btn");
        saveButton.textContent = "Save to Collection";


        let editButton = document.createElement("button");
        editButton.setAttribute("class", "edit-btn");
        editButton.textContent = "Edit Information";


        let cancelButton = document.createElement("button");
        cancelButton.setAttribute("class", "cancel-btn");
        cancelButton.textContent = "Cancel";


        liPreview.appendChild(previewArticle);
        liPreview.appendChild(saveButton);
        liPreview.appendChild(editButton);
        liPreview.appendChild(cancelButton);
        previewId.appendChild(liPreview);

        addButton.disabled = true;
        gemeName.value = "";
        colorId.value = "";
        caratsId.value = "";
        priceId.value = "";
        typeId.value = "";

        editButton.addEventListener("click", () => {
            liPreview.remove();
            addButton.disabled = false;
            gemeName.value = gameValue;
            colorId.value = colorValue;
            caratsId.value = caratsValue;
            priceId.value = priceValue;
            typeId.value = typeValue;

        })

        cancelButton.addEventListener("click", () => {
            liPreview.remove();
            addButton.disabled = false;
        })

        saveButton.addEventListener("click", () => {
            liPreview.remove();
            addButton.disabled = false;

            let liCollection = document.createElement("li");

            let collectionP = document.createElement("p");
            collectionP.setAttribute("class", "collection-item");
            collectionP.textContent = `${gameValue} - Color: ${colorValue}/ Carats: ${caratsValue}/ Price: ${priceValue}$/ Type: ${typeValue}`;
            liCollection.appendChild(collectionP);

            collectionId.appendChild(liCollection);
            addButton.disabled = false;
        })

    }

}
