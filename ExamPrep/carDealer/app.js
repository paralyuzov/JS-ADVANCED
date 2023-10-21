window.addEventListener("load", solve);

function solve() {
  const makeID = document.getElementById("make");
  const modelID = document.getElementById("model");
  const prodYearID = document.getElementById("year");
  const fuelTypeID = document.getElementById("fuel");
  const originalCostID = document.getElementById("original-cost");
  const sellingPriceID = document.getElementById("selling-price");
  const publishButton = document.getElementById("publish");
  const tableBodyID = document.getElementById("table-body");
  const carsList = document.getElementById("cars-list");
  const profitID = document.getElementById("profit");

  publishButton.addEventListener("click", createOffer);

  let profitValue = 0;

  function createOffer(e) {
    e.preventDefault();
    let makeValue = makeID.value;
    let modelValue = modelID.value;
    let prodYearValue = prodYearID.value;
    let fuelTypeValue = fuelTypeID.value;
    let originalCostValue = Number(originalCostID.value);
    let sellingPriceValue = Number(sellingPriceID.value);

    if (!makeValue || !modelValue || !prodYearValue || !fuelTypeValue || originalCostValue > sellingPriceValue) {
      return;
    }

    let trElement = document.createElement("tr");
    trElement.setAttribute("class", "row");

    let td1 = document.createElement('td');
    td1.textContent = `${makeValue}`;
    trElement.appendChild(td1);

    let td2 = document.createElement('td');
    td2.textContent = `${modelValue}`;
    trElement.appendChild(td2);

    let td3 = document.createElement('td');
    td3.textContent = `${prodYearValue}`;
    trElement.appendChild(td3);

    let td4 = document.createElement('td');
    td4.textContent = `${fuelTypeValue}`;
    trElement.appendChild(td4);

    let td5 = document.createElement('td');
    td5.textContent = `${originalCostValue}`;
    trElement.appendChild(td5);

    let td6 = document.createElement('td');
    td6.textContent = `${sellingPriceValue}`;
    trElement.appendChild(td6);

    let tdButtons = document.createElement("td");

    let editButton = document.createElement("button");
    editButton.setAttribute("class", "action-btn edit");
    editButton.textContent = "Edit";

    tdButtons.appendChild(editButton);

    let sellButton = document.createElement("button");
    sellButton.setAttribute('class', "action-btn sell");
    sellButton.textContent = "Sell";

    tdButtons.appendChild(sellButton);

    trElement.appendChild(tdButtons);

    tableBodyID.appendChild(trElement);

    makeID.value = "";
    modelID.value = "";
    prodYearID.value = "";
    fuelTypeID.value = "";
    originalCostID.value = "";
    sellingPriceID.value = "";


    editButton.addEventListener("click", () => {
      trElement.remove();
      makeID.value = makeValue;
      modelID.value = modelValue;
      prodYearID.value = prodYearValue;
      fuelTypeID.value = fuelTypeValue;
      originalCostID.value = originalCostValue;
      sellingPriceID.value = sellingPriceValue;
      profitValue -= sellingPriceValue - originalCostValue;

    })

    sellButton.addEventListener("click", () => {
      profitValue += sellingPriceValue - originalCostValue;
      trElement.remove();
      let profit = sellingPriceValue - originalCostValue
      let liSell = document.createElement("li");
      liSell.setAttribute("class", "each-list");

      let span1 = document.createElement("span");
      span1.textContent = `${makeValue} ${modelValue}`;
      liSell.appendChild(span1);

      let span2 = document.createElement("span");
      span2.textContent = `${prodYearValue}`
      liSell.appendChild(span2);

      let span3 = document.createElement("span");
      span3.textContent = `${profit}`;
      liSell.appendChild(span3);

      carsList.appendChild(liSell);


      profitID.textContent = `${profitValue.toFixed(2)}`;


    })

  }

}
