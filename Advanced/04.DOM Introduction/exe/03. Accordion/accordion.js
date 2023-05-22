function toggle() {
    let moreDiv = document.getElementById("extra");
    let button = document.getElementsByClassName("button")[0];



    if (moreDiv.style.display === "none" || moreDiv.style.display === "") {
        moreDiv.style.display = "block";
        button.textContent = "Less";
    } else {
        moreDiv.style.display = "none";
        button.textContent = "More";
    }
}