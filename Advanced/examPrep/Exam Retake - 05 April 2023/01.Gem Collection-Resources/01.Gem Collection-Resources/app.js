
window.addEventListener("load", solve);

function solve() {
    //capturing DOM elements
    const gemStoneInput = document.getElementById("gem-name");
    const colorInput = document.getElementById("color");
    const caratsInput = document.getElementById("carats");
    const priceInput = document.getElementById("price");
    const selectInput = document.getElementById("type");

    const previewUlElement = document.getElementById("preview-list");
    const collectionUlEmenet = document.getElementById("collection");

    let addBtn = document.getElementById("add-btn");
    addBtn.addEventListener("click", addPost)
    addBtn.addEventListener("click", function () {
        addBtn.disabled = true;
    })

    function addPost(e) {
        e.preventDefault();
        if (gemStoneInput.value === "" ||
            colorInput.value === "" ||
            caratsInput.value === "" ||
            priceInput.value === "" ||
            selectInput.value === "") {
            return;
        }

        let ulElement = document.getElementById("preview-list");
        let liElement = document.createElement("li");
        let articleElement = document.createElement("article");
        liElement.classList.add("gem-info");

        let gemStoneEl = document.createElement("h4");
        gemStoneEl.textContent = gemStoneInput.value;
        gemStoneInput.value = "";
        articleElement.appendChild(gemStoneEl);

        let colorElement = document.createElement("p");
        colorElement.textContent = `Color: ${colorInput.value}`;
        colorInput.value = "";
        articleElement.appendChild(colorElement);

        let caratsElement = document.createElement("p");
        caratsElement.textContent = `Carats: ${caratsInput.value}`;
        caratsInput.value = "";
        articleElement.appendChild(caratsElement);

        let priceElement = document.createElement("p");
        priceElement.textContent = `Price: ${priceInput.value}$`;
        priceInput.value = "";
        articleElement.appendChild(priceElement);

        let selectElement = document.createElement("p");
        selectElement.textContent = `Type: ${selectInput.value}`;
        selectInput.value = "";
        articleElement.appendChild(selectElement);

        liElement.appendChild(articleElement);
        ulElement.appendChild(liElement);

        //Buttons
        let saveBtn = document.createElement("button");
        saveBtn.classList.add("save-btn");
        saveBtn.textContent = "Save to Collection";
        saveBtn.addEventListener("click", saveFunc);
        liElement.appendChild(saveBtn);

        let editBtn = document.createElement("button");
        editBtn.classList.add("edit-btn");
        editBtn.textContent = "Edit Information";
        editBtn.addEventListener("click", editInformation);
        liElement.appendChild(editBtn);

        let cancelBtn = document.createElement("button");
        cancelBtn.classList.add("cancel-btn");
        cancelBtn.textContent = "Cancel";
        cancelBtn.addEventListener("click", cancelFunc);
        liElement.appendChild(cancelBtn);
    }

    function cancelFunc(e) {
        let parentElement = e.target.parentElement;
        parentElement.remove();

        addBtn.disabled = false;
    }

    function saveFunc(e) {
        let parentElement = e.target.parentElement;
        let target = e.target.parentElement.children[0].children;

        let gem = target[0].textContent;
        let color = target[1].textContent.split(": ")[1];
        let carats = target[2].textContent.split(": ")[1];
        let price = target[3].textContent.split(": ")[1];
        price = price.slice(0, -1);
        let type = target[4].textContent.split(": ")[1];

        let liElement = document.createElement("li");
        let pElement = document.createElement("p");
        pElement.classList.add("collection-item");
        pElement.textContent = `${gem} - Color: ${color}/ Carats: ${carats}/ Price: ${price}$/ Type: ${type}`;

        liElement.appendChild(pElement);
        collectionUlEmenet.appendChild(liElement);

        parentElement.remove();
        addBtn.disabled = false;
    }

    function editInformation(e) {
        let parentElement = e.target.parentElement;
        let target = e.target.parentElement.children[0].children;

        gemStoneInput.value = target[0].textContent;
        colorInput.value = target[1].textContent.split(": ")[1];
        caratsInput.value = target[2].textContent.split(": ")[1];

        let priceStr = target[3].textContent.split(": ")[1];
        priceStr = priceStr.slice(0, -1)
        priceInput.value = priceStr;
        selectInput.value = target[4].textContent.split(": ")[1];

        parentElement.remove();
        addBtn.disabled = false;
    }
} 