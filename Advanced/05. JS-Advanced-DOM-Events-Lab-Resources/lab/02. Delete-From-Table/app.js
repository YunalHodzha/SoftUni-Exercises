function deleteByEmail() {
    const input = document.getElementsByName("email")[0].value;
    const emailList = document.querySelectorAll("#customers tr td:nth-child(2)");

    for (let td of emailList) {
        if (td.textContent === input) {
            let row = td.parentNode;
            row.parentNode.removeChild(row);
            document.getElementById("result").textContent = "Deleted.";
            return;
        }
    }
    document.getElementById("result").textContent = "Not found.";
}