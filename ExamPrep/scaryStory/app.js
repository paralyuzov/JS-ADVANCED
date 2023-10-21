window.addEventListener("load", solve);

function solve() {
  const firstNameID = document.getElementById("first-name");
  const lastNameID = document.getElementById("last-name");
  const ageID = document.getElementById("age");
  const storyTittleID = document.getElementById("story-title");
  const genreID = document.getElementById("genre");
  const storyID = document.getElementById("story");
  const publishButton = document.getElementById("form-btn");
  const previewListID = document.getElementById("preview-list");
  const divID = document.getElementById("main");

  publishButton.addEventListener("click", preview);


  function preview(e) {
    e.preventDefault();
    if (firstNameID.value == "" || lastNameID.value == "" || ageID.value == "" || storyTittleID.value == "" || storyID.value == "") {
      return;
    }

    let liPreview = document.createElement("li");
    liPreview.setAttribute("class", "story-info");

    let articlePreview = document.createElement("article");

    let h4Preview = document.createElement("h4");
    h4Preview.textContent = `Name: ${firstNameID.value} ${lastNameID.value}`;
    articlePreview.appendChild(h4Preview);

    let pPreview = document.createElement("p");
    pPreview.textContent = `Age: ${ageID.value}`;
    articlePreview.appendChild(pPreview);

    let p2Preview = document.createElement("p");
    p2Preview.textContent = `Title: ${storyTittleID.value}`;
    articlePreview.appendChild(p2Preview);

    let p3Preview = document.createElement("p");
    p3Preview.textContent = `Genre: ${genreID.value}`;
    articlePreview.appendChild(p3Preview);

    let p4Preview = document.createElement("p");
    p4Preview.textContent = `${storyID.value}`;
    articlePreview.appendChild(p4Preview);

    liPreview.appendChild(articlePreview);

    let saveButton = document.createElement("button");
    saveButton.setAttribute("class", "save-btn");
    saveButton.textContent = "Save Story";

    liPreview.appendChild(saveButton);

    let editButton = document.createElement("button");
    editButton.setAttribute("class", "edit-btn");
    editButton.textContent = "Edit Story";

    liPreview.appendChild(editButton);

    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "delete-btn");
    deleteButton.textContent = "Delete Story";

    liPreview.appendChild(deleteButton);

    previewListID.appendChild(liPreview);

    publishButton.disabled = true;

    let firstNameValue = firstNameID.value;
    let lastNameValue = lastNameID.value;
    let ageValue = ageID.value;
    let storyTittleValue = storyTittleID.value;
    let storyValue = storyID.value;
    let genreValue = genreID.value;

    firstNameID.value = "";
    lastNameID.value = "";
    ageID.value = "";
    storyTittleID.value = "";
    storyID.value = "";


    editButton.addEventListener("click", () => {
      liPreview.remove();
      firstNameID.value = firstNameValue;
      lastNameID.value = lastNameValue;
      ageID.value = ageValue;
      storyTittleID.value = storyTittleValue;
      storyID.value = storyValue;
      genreID.value = genreValue;
      publishButton.disabled = false;

    })

    saveButton.addEventListener("click", () => {

      let childrenArr = Array.from(divID.children);

      for (const children of childrenArr) {
        children.remove();
      }

      let h1 = document.createElement("h1");
      h1.textContent = `Your scary story is saved!`;
      divID.appendChild(h1);

    })

    deleteButton.addEventListener("click", () => {
      liPreview.remove();
      publishButton.disabled = false;

    })

  }

}
