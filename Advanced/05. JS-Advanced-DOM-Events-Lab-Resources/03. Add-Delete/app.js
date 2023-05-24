function addItem() {
    
    const value = document.getElementById("newItemText").value;
    const ul = document.getElementById("items");

    const newLi = document.createElement("li");
    newLi.textContent = value;
    let deleteBtn = document.createElement("a");
    deleteBtn.setAttribute("href", "#");
    deleteBtn.textContent = "[Delete]";
    deleteBtn.addEventListener("click", deleteItem);
    newLi.appendChild(deleteBtn);


    ul.appendChild(newLi);

    function deleteItem(e) {
        let link = e.target;
        let li = link.parentElement;
        li.remove();
    }
}

