window.addEventListener("load", solve);

function solve() {
  let make = document.getElementById("make");
  let model = document.getElementById("model");
  let year = document.getElementById("year");
  let fuelType = document.getElementById("fuel");

  let originalCost = document.getElementById("original-cost");
  let sellingPrice = document.getElementById("selling-price");
  let publishBtn = document.getElementById("publish");
  let totalProfit = document.getElementById("profit");

  publishBtn.addEventListener("click", publish)

  function publish(e) {
    e.preventDefault();

    if(make.value === "" || model.value === "" || year.value === "" || originalCost.value >= sellingPrice.value) {
      return;
    }

    let tableBody = document.getElementById("table-body");
    let tableRow = document.createElement("tr");
    tableRow.classList.add("row");  

    let makeValueElement = document.createElement("td");
    makeValueElement.textContent = make.value;

    let modelValueElement = document.createElement("td");
    modelValueElement.textContent = model.value;

    let yearValueElement = document.createElement("td");
    yearValueElement.textContent = year.value;

    let fuelValueElement = document.createElement("td");
    fuelValueElement.textContent = fuelType.value;

    let originalValueElement = document.createElement("td");
    originalValueElement.textContent = originalCost.value;

    let sellingValueElement = document.createElement("td");
    sellingValueElement.textContent = sellingPrice.value;

    

    let editBtn = document.createElement("Button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("action-btn", "edit");
    editBtn.addEventListener("click", edit);

    let sellBtn = document.createElement("Button");
    sellBtn.textContent = "Sell";
    sellBtn.classList.add("action-btn", "sell");
    sellBtn.addEventListener("click", sell);

    let buttonsTd = document.createElement("td");
    buttonsTd.appendChild(editBtn);
    buttonsTd.appendChild(sellBtn);

    tableRow.appendChild(makeValueElement);
    make.value = "";
    tableRow.appendChild(modelValueElement);
    model.value = "";
    tableRow.appendChild(yearValueElement);
    year.value = "";
    tableRow.appendChild(fuelValueElement);
    fuelType.value = "";
    tableRow.appendChild(originalValueElement);
    originalCost.value = "";
    tableRow.appendChild(sellingValueElement);
    sellingPrice.value = "";
    tableRow.appendChild(buttonsTd);
    tableBody.appendChild(tableRow);

    function edit(e) {
      let current = e.target.parentElement.parentElement;
      

      let postElements = current.getElementsByTagName("td");
      let makeValue = postElements[0].textContent;
      let modelValue = postElements[1].textContent;
      let yearValue = postElements[2].textContent;
      let fuelValue = postElements[3].textContent;
      let originalValue = postElements[4].textContent;
      let sellValue = postElements[5].textContent;

      make.value = makeValue;
      model.value = modelValue;
      year.value = yearValue;
      fuelType.value = fuelValue;
      originalCost.value = originalValue;
      sellingPrice.value = sellValue;

      current.remove();
    }

    function sell(e) {

      let current = e.target.parentElement;
      current = current.parentElement;

      let postElements = current.getElementsByTagName("td");

      let makeValue = postElements[0].textContent;
      let modelValue = postElements[1].textContent;
      let makeModel = makeValue + " " + modelValue;

      let year = postElements[2].textContent;
      let originalValue = postElements[4].textContent;
      let sellValue = postElements[5].textContent;
      let profit = sellValue - originalValue;
      totalProfit.value += profit.toFixed(2);

      let ulElement = document.getElementById("cars-list");
      let liElement = document.createElement("li");
      liElement.classList.add("each-list");

      let spanMakeModel = document.createElement("span");
      spanMakeModel.textContent = makeModel;

      let spanYear = document.createElement("span");
      spanYear.textContent = year;

      let spanProfit = document.createElement("span");
      spanProfit.textContent = profit;

      liElement.appendChild(spanMakeModel);
      liElement.appendChild(spanYear);
      liElement.appendChild(spanProfit);
      ulElement.appendChild(liElement);

      let totalProfitNumber = Number(totalProfit.textContent) + profit;
      totalProfit.textContent = totalProfitNumber.toFixed(2);

      current.remove();
    }
  }
}
