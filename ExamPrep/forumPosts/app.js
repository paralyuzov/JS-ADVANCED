window.addEventListener("load", solve);

function solve() {
  const postTittleID = document.getElementById("post-title");
  const postCategoryID = document.getElementById("post-category");
  const postContentID = document.getElementById("post-content");
  const publishButton = document.getElementById("publish-btn");
  const reviewListID = document.getElementById("review-list");
  const publishedListID = document.getElementById("published-list");
  const clearButton = document.getElementById("clear-btn");

  publishButton.addEventListener("click", posting);

  function posting(e) {
    let postTittleValue = postTittleID.value;
    let postCategoryValue = postCategoryID.value;
    let postContentValue = postContentID.value;

    if (!postTittleValue || !postCategoryValue || !postContentValue) {
      return;
    }

    let liPublish = document.createElement("li");
    liPublish.setAttribute("class", "rpost");

    let articlePub = document.createElement("article");
    let h4 = document.createElement("h4");
    h4.textContent = `${postTittleValue}`;
    articlePub.appendChild(h4);

    let p = document.createElement("p");
    p.textContent = `Category: ${postCategoryValue}`;
    articlePub.appendChild(p);

    let p2 = document.createElement("p");
    p2.textContent = `Content: ${postContentValue}`;
    articlePub.appendChild(p2);

    liPublish.appendChild(articlePub);

    let editButton = document.createElement("button");
    editButton.setAttribute("class", "action-btn edit");
    editButton.textContent = "Edit";



    let approveButton = document.createElement("button");
    approveButton.setAttribute("class", "action-btn approve");
    approveButton.textContent = "Approve";

    liPublish.appendChild(editButton);
    liPublish.appendChild(approveButton);

    reviewListID.appendChild(liPublish);

    postTittleID.value = "";
    postCategoryID.value = "";
    postContentID.value = "";

    editButton.addEventListener("click", () => {

      liPublish.remove();
      postTittleID.value = postTittleValue;
      postCategoryID.value = postCategoryValue;
      postContentID.value = postContentValue;

    })

    approveButton.addEventListener("click", () => {
      publishedListID.appendChild(liPublish);
      editButton.remove();
      approveButton.remove();
    })

  }

  clearButton.addEventListener("click", (e) => {
    let allElement = Array.from(publishedListID.querySelectorAll("li"));
    allElement.forEach(x => x.remove());
  })
}
