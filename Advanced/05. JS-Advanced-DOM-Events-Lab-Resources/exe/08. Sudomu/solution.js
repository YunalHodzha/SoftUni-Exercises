function solve() {
    let textContent = document.querySelector("#check p");
    let tableBorder = document.getElementsByTagName("table")[0];
    const [check, clear] = [...document.querySelectorAll("button")];
    check.addEventListener("click", checkFunc);
    clear.addEventListener("click", clearFunc);

    function checkFunc(e) {
        let isTrue = false;
        let table = document.getElementsByTagName("tbody")[0];
        let cells = table.getElementsByTagName("input");

        let cellValues = [];
        for (let i = 0; i < cells.length; i++) {
            let value = cells[i].value || "0";
            cellValues.push(parseInt(value));
        }
 
        if ((cellValues[0] !== cellValues[1] && cellValues[1] !== cellValues[2]) &&
            (cellValues[3] !== cellValues[4] && cellValues[4] !== cellValues[5]) &&
            (cellValues[6] !== cellValues[7] && cellValues[7] !== cellValues[8]) &&
            (cellValues[0] !== cellValues[3] && cellValues[3] !== cellValues[6]) &&
            (cellValues[1] !== cellValues[4] && cellValues[4] !== cellValues[7]) &&
            (cellValues[2] !== cellValues[5] && cellValues[5] !== cellValues[8])) {
            isTrue = true;
        };

        if (isTrue) {
            tableBorder.style.border = "2px solid green";
            textContent.textContent = "You solve it! Congratulations!";
            textContent.style.color = "green";
            return;
        }

        tableBorder.style.border = "2px solid red";
        textContent.textContent = "NOP! You are not done yet...";
        textContent.style.color = "red";

    }

    function clearFunc(e) {
        let table = document.getElementsByTagName("tbody")[0];
        let cells = table.getElementsByTagName("input");
        for (const cell of cells) {
            cell.value = "";
        }
        tableBorder.style.border = "none";
        textContent.textContent = "";
        textContent.style.color = "";
    };
}