function solve() {
    const inputRef = document.getElementById("task");
    const textAreaRef = document.getElementById("description");
    const dateRef = document.getElementById("date");
    const addButtonRef = document.getElementById("add");
    const sectionsRef = document.getElementsByTagName("section");
    addButtonRef.addEventListener("click", add);

    function add(e) {
        e.preventDefault();
        let task = inputRef.value;
        let description = textAreaRef.value;
        let date = dateRef.value;
        if (!task || !description || !date) {
            return
        }


        let createArt = document.createElement("article");
        let h3 = document.createElement("h3");
        h3.textContent = `${task}`
        createArt.appendChild(h3)

        let pDes = document.createElement("p");
        pDes.textContent = `Description: ${description}`
        createArt.appendChild(pDes)

        let pDate = document.createElement("p");
        pDate.textContent = `Due Date: ${date}`;
        createArt.appendChild(pDate);

        let div = document.createElement("div");
        div.classList = "flex";

        let startButton = document.createElement("button");
        startButton.classList = "green";
        startButton.textContent = "Start"
        let deleteButton = document.createElement("button");
        deleteButton.classList = "red";
        deleteButton.textContent = "Delete";

        div.appendChild(startButton);
        div.appendChild(deleteButton);

        createArt.appendChild(div);
        sectionsRef[1].children[1].appendChild(createArt);



        startButton.addEventListener("click", moveArticle);
        deleteButton.addEventListener("click", removeArticle);

        function removeArticle(e) {
            createArt.remove()

        }

        function moveArticle(e) {
            startButton.remove();

            let finishButton = document.createElement("button");
            finishButton.classList = "orange";
            finishButton.textContent = "Finish";
            div.appendChild(finishButton)

            sectionsRef[2].appendChild(createArt);




            let completeButtons = sectionsRef[2].getElementsByTagName("button");
            completeButtons[0].addEventListener("click", () => {
                sectionsRef[2].children[1].remove()

            });
            completeButtons[1].addEventListener("click", () => {
                finishButton.remove();
                deleteButton.remove()
                sectionsRef[3].appendChild(createArt);

            });

        }
    }

}