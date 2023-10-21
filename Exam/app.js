window.addEventListener('load', solution);

function solution() {
  const employeeID = document.getElementById("employee");
  const categoryID = document.getElementById("category");
  const urgencyID = document.getElementById("urgency");
  const teamID = document.getElementById("team");
  const descriptionID = document.getElementById("description");
  const addButton = document.getElementById("add-btn");
  const previewList = document.querySelector(".preview-list");
  const pendingList = document.querySelector(".pending-list");
  const resolvedList = document.querySelector(".resolved-list");

  addButton.addEventListener("click", onPreview);

  function onPreview(e) {
    e.preventDefault();
    let employeeValue = employeeID.value;
    let categoryValue = categoryID.value;
    let urgencyValue = urgencyID.value;
    let teamValue = teamID.value;
    let descriptionValue = descriptionID.value;

    if (!employeeValue || !categoryValue || !urgencyValue || !teamValue || !descriptionValue) {
      return;
    }

    let liPreview = document.createElement("li");
    liPreview.setAttribute("class", "problem-content");

    let articlePreview = document.createElement("article");
    let p = document.createElement("p");
    p.textContent = `From: ${employeeValue}`;
    articlePreview.appendChild(p);

    let p2 = document.createElement("p");
    p2.textContent = `Category: ${categoryValue}`;
    articlePreview.appendChild(p2);

    let p3 = document.createElement("p");
    p3.textContent = `Urgency: ${urgencyValue}`;
    articlePreview.appendChild(p3);

    let p4 = document.createElement("p");
    p4.textContent = `Assigned to: ${teamValue}`;
    articlePreview.appendChild(p4);

    let p5 = document.createElement("p");
    p5.textContent = `Description: ${descriptionValue}`;
    articlePreview.appendChild(p5);

    liPreview.appendChild(articlePreview);

    let editButton = document.createElement("button");
    editButton.setAttribute("class", "edit-btn");
    editButton.textContent = "Edit";
    liPreview.appendChild(editButton)

    let continueButton = document.createElement("button");
    continueButton.setAttribute("class", "continue-btn");
    continueButton.textContent = "Continue";
    liPreview.appendChild(continueButton);

    previewList.appendChild(liPreview);

    employeeID.value = "";
    categoryID.value = "";
    urgencyID.value = "";
    teamID.value = "";
    descriptionID.value = "";

    addButton.disabled = true;

    editButton.addEventListener("click", () => {
      employeeID.value = employeeValue;
      categoryID.value = categoryValue;
      urgencyID.value = urgencyValue;
      teamID.value = teamValue;
      descriptionID.value = descriptionValue;

      addButton.disabled = false;
      liPreview.remove();
    })

    continueButton.addEventListener("click", () => {
      let liPending = document.createElement("li");
      liPending.setAttribute("class", "problem-content");

      let articlePending = document.createElement("article");
      let p = document.createElement("p");
      p.textContent = `From: ${employeeValue}`;
      articlePending.appendChild(p);

      let p2 = document.createElement("p");
      p2.textContent = `Category: ${categoryValue}`;
      articlePending.appendChild(p2);

      let p3 = document.createElement("p");
      p3.textContent = `Urgency: ${urgencyValue}`;
      articlePending.appendChild(p3);

      let p4 = document.createElement("p");
      p4.textContent = `Assigned to: ${teamValue}`;
      articlePending.appendChild(p4);

      let p5 = document.createElement("p");
      p5.textContent = `Description: ${descriptionValue}`;
      articlePending.appendChild(p5);

      liPending.appendChild(articlePending);

      let resolveButton = document.createElement("button");
      resolveButton.setAttribute("class", "resolve-btn");
      resolveButton.textContent = "Resolved";

      liPending.appendChild(resolveButton);
      pendingList.appendChild(liPending);
      liPreview.remove();

      let nameValue = p.textContent;
      let catValue = p2.textContent;
      let urgenValue = p3.textContent;
      let assignValue = p4.textContent;
      let desValue = p5.textContent;



      resolveButton.addEventListener("click", (e) => {
        let liResolve = document.createElement("li");
        liResolve.setAttribute("class", "problem-content");

        let articleResolve = document.createElement("article");


        let pRes = document.createElement("p");
        pRes.textContent = `${nameValue}`;
        articleResolve.appendChild(pRes);

        let p2Res = document.createElement("p");
        p2Res.textContent = `${catValue}`;
        articleResolve.appendChild(p2Res);

        let p3Res = document.createElement("p");
        p3Res.textContent = `${urgenValue}`;
        articleResolve.appendChild(p3Res);

        let p4Res = document.createElement("p");
        p4Res.textContent = `${assignValue}`;
        articleResolve.appendChild(p4Res);

        let p5Res = document.createElement("p");
        p5Res.textContent = `${desValue}`;
        articleResolve.appendChild(p5Res);

        liResolve.appendChild(articleResolve);

        let clearButton = document.createElement("button");
        clearButton.setAttribute("class", "clear-btn");
        clearButton.textContent = "Clear"
        liResolve.appendChild(clearButton);

        resolvedList.appendChild(liResolve);
        liPending.remove();

        clearButton.addEventListener("click", (e) => {
          e.target.parentElement.remove();
        })

      })

    })

  }
}




