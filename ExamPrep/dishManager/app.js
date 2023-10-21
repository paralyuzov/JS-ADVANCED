window.addEventListener("load", solve);

function solve() {
  const firstNameID = document.getElementById("first-name");
  const lastNameID = document.getElementById("last-name");
  const ageID = document.getElementById("age");
  const genderID = document.getElementById("genderSelect");
  const taskID = document.getElementById("task");
  const submitButton = document.getElementById("form-btn");
  const progressID = document.getElementById("in-progress");
  const progressCountID = document.getElementById("progress-count");
  const finishedID = document.getElementById("finished");
  const clearButton = document.getElementById("clear-btn");


  let counter = Number(progressCountID.textContent);

  submitButton.addEventListener("click", inProgress);

  function inProgress(e) {
    e.preventDefault();
    if (firstNameID.value == "" || lastNameID.value == "" || ageID.value == "" || taskID.value == "" || genderID.value == "") {
      return;
    }

    let liProgress = document.createElement("li");
    liProgress.setAttribute("class", "each-line");

    let articleProgress = document.createElement("article");

    let h4Progress = document.createElement('h4');
    h4Progress.textContent = `${firstNameID.value} ${lastNameID.value}`;
    articleProgress.appendChild(h4Progress);

    let pProgress = document.createElement("p");
    pProgress.textContent = `${genderID.value}, ${ageID.value}`;
    articleProgress.appendChild(pProgress);

    let p2Progress = document.createElement("p");
    p2Progress.textContent = `Dish description: ${taskID.value}`;
    articleProgress.appendChild(p2Progress);

    liProgress.appendChild(articleProgress);

    let editButton = document.createElement("button");
    editButton.setAttribute("class", "edit-btn");
    editButton.textContent = "Edit";

    liProgress.appendChild(editButton);

    let completeButton = document.createElement("button");
    completeButton.setAttribute("class", "complete-btn");
    completeButton.textContent = "Mark as complete";

    liProgress.appendChild(completeButton);

    progressID.appendChild(liProgress);


    firstNameID.value = "";
    lastNameID.value = "";
    ageID.value = "";
    taskID.value = "";

    counter++
    progressCountID.textContent = counter;

    editButton.addEventListener("click", editing);

    function editing(e) {
      e.preventDefault();
      let firstNameValue = "";
      let lastNameValue = "";
      let ageValue = "";
      let genderValue = "";
      let taskValue = "";
      let values = Array.from(e.currentTarget.parentElement.children[0].children);
      for (let i = 0; i < values.length; i++) {

        if (i == 0) {
          let currentValue = values[i].textContent.split(" ");
          firstNameValue = currentValue[0];
          lastNameValue = currentValue[1];
        } else if (i == 1) {
          let currentValue = values[i].textContent.split(", ");
          genderValue = currentValue[0];
          ageValue = currentValue[1];
        } else if (i == 2) {
          taskValue += values[i].textContent.split(":")[1].trim();
        }

      }
      e.currentTarget.parentElement.remove();

      firstNameID.value = firstNameValue;
      lastNameID.value = lastNameValue;
      ageID.value = ageValue;
      taskID.value = taskValue;
      genderID.value = genderValue;


      counter--
      progressCountID.textContent = counter;

    }

    completeButton.addEventListener("click", complete);

    function complete(e) {
      e.preventDefault();

      let cloneElement = e.target.parentElement;
      let copyElement = cloneElement.cloneNode(true);
      let buttons = Array.from(copyElement.querySelectorAll("button"));
      buttons.forEach(x => x.remove());

      e.target.parentElement.remove();
      finishedID.appendChild(copyElement);
      counter--
      progressCountID.textContent = counter;

    }
  }
  clearButton.addEventListener("click", clear);

  function clear(e) {
    e.preventDefault();
    let liElements = Array.from(e.target.parentElement.querySelectorAll("li"));
    liElements.forEach(x => x.remove());
  }
}
