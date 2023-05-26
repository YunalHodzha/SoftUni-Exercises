function lockedProfile() {
    // constant
    const SHOW_MORE = "Show more";
    const HIDE_IT = "Hide it";

    //capture elements
    const btnElements = Array.from(document.querySelectorAll("div button"));

    //atach events
    for (const btn of btnElements) {
        btn.addEventListener("click", show);
    }

    //on click functionality
    function show(e) {
        const divChildren = Array.from(e.target.parentElement.children);
        const isLocked = divChildren[2].checked;


        //if is locked - do nothing
        if (isLocked) {
            return;
        }

        //else
        const hiddenDiv = e.target.previousElementSibling;

        if (e.target.textContent === SHOW_MORE) {
            hiddenDiv.style.display = "inline";
            e.target.textContent = HIDE_IT;
            return;
        }

        hiddenDiv.style.display = "none";
        e.target.textContent = SHOW_MORE;
    }
}