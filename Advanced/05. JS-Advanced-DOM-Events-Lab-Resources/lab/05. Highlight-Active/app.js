function focused() {
    const sections = document.querySelectorAll("body div div");

    for(let section of sections) {
        let textInput = section.getElementsByTagName("input")[0];
        textInput.addEventListener("focus", focus);
        textInput.addEventListener("blur", focusLost);
    }

    function focus(e) {
        let parent = e.target.parentNode;
        parent.classList.add("focused");
    }

    function focusLost(e) {
        let parent = e.target.parentNode;
        parent.classList.remove("focused");
    }
}