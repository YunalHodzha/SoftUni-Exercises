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
    addBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (gemStoneInput.value !== "" &&
            colorInput.value !== "" &&
            caratsInput.value !== "" &&
            priceInput.value !== "" &&
            selectInput.value !== "") {
            addPost(
                e,
                gemStoneInput.value,
                colorInput.value,
                caratsInput.value,
                priceInput.value,
                selectInput.value
            );
            clearInputFields();
        }
    });

    function addPost(
        e,
        gemStoneInput,
        colorInput,
        caratsInput,
        priceInput,
        selectInput
    ) {

        let liElement = document.createElement("li");
        liElement.classList.add("gem-info");
        previewUlElement.appendChild(liElement);

        let article = document.createElement("article");
        liElement.appendChild(article);

        let h4Element = document.createElement("h4");
        h4Element.textContent = gemStoneInput;
        article.appendChild(h4Element);

        let pColorElement = document.createElement("p");
        pColorElement.textContent = `Color: ${colorInput}`;
        article.appendChild(pColorElement);

        let pCaratElement = document.createElement("p");
        pCaratElement.textContent = `Carats: ${caratsInput}`;
        article.appendChild(pCaratElement);

        let pPriceElement = document.createElement("p");
        pPriceElement.textContent = `Price: ${priceInput}$`;
        article.appendChild(pPriceElement);

        let pTypeElement = document.createElement("p");
        pTypeElement.textContent = `Type: ${selectInput}`;
        article.appendChild(pTypeElement);

        let saveBtn = document.createElement("button");
        saveBtn.classList.add("save-btn");
        saveBtn.textContent = "Save to Collection";

        let editBtn = document.createElement("button");
        editBtn.classList.add("edit-btn");
        editBtn.textContent = "Edit Information";
        editBtn.addEventListener("click", editInformatione,
        ));

        let cancelBtn = document.createElement("button");
        cancelBtn.classList.add("cancel-btn");
        cancelBtn.textContent = "Cancel";

        liElement.appendChild(saveBtn);
        liElement.appendChild(editBtn);
        liElement.appendChild(cancelBtn);

        editBtn.disable = true;

        function editInformation(e) {
            let target = e.target.parentElement;
            console.log(target);
        }
    }

    function clearInputFields() {
        gemStoneInput.value = "";
        colorInput.value = "";
        caratsInput.value = "";
        priceInput.value = "";
        selectInput.value = "";
    }

}
