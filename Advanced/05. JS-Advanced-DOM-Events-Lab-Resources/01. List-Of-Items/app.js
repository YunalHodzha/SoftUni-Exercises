function addItem() {
    const listItems = document.getElementById("items");
    const userInput = document.getElementById("newItemText");
    const userInputValue = userInput.value;

    let li = document.createElement("li");
    li.textContent = userInputValue;

    listItems.appendChild(li);
}