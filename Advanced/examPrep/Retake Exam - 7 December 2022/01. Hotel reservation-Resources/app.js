window.addEventListener('load', solve);

function solve() {
    //capturing input elements
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const checkInDate = document.getElementById("date-in");
    const checkOutDate = document.getElementById("date-out");
    const peopleCount = document.getElementById("people-count");

    //capturing other elements
    const reservationInfo = document.getElementsByClassName("info-list")[0];
    const nextBtn = document.getElementById("next-btn");

    //ataching eventlisteners
    nextBtn.addEventListener("click", nextFunq);

    //mainFunctions
    function nextFunq(e) {
        e.preventDefault();
        const verification2 = document.getElementById("verification");
        verification2.textContent = "";

        let firstNameValue = firstName.value;
        let lastNameValue = lastName.value;
        let checkInDateValue = checkInDate.value;
        let checkOutDateValue = checkOutDate.value;
        let peopleCountValue = peopleCount.value;

        const date1 = new Date(checkInDateValue);
        const date2 = new Date(checkOutDateValue);

        if (date1 >= date2 || peopleCountValue <= 0) {
            return;
        }

        if (firstNameValue === "" ||
            lastNameValue === "" ||
            peopleCountValue === "" ||
            checkInDateValue === "" ||
            checkOutDateValue === "") {
            return;
        }
        nextBtn.disabled = true;

        //creating li elements
        let liEl = document.createElement("li");
        liEl.classList.add("reservation-content");
        let article = document.createElement("article");

        reservationInfo.appendChild(liEl);
        liEl.appendChild(article);

        let h3El = document.createElement("h3");
        h3El.textContent = `Name: ${firstNameValue} ${lastNameValue}`;
        let pEl2 = document.createElement("p");
        pEl2.textContent = `From date: ${checkInDateValue}`;
        let pEl3 = document.createElement("p");
        pEl3.textContent = `To date: ${checkOutDateValue}`;
        let pEl4 = document.createElement("p");
        pEl4.textContent = `For ${peopleCountValue} people`;

        article.appendChild(h3El);
        article.appendChild(pEl2);
        article.appendChild(pEl3);
        article.appendChild(pEl4);

        //buttons
        const editBtn = document.createElement("button");
        editBtn.classList.add("edit-btn");
        editBtn.textContent = "Edit";
        liEl.appendChild(editBtn);
        editBtn.addEventListener("click", editFunq)

        const continueBtn = document.createElement("button");
        continueBtn.textContent = "Continue";
        continueBtn.classList.add("continue-btn");
        liEl.appendChild(continueBtn);
        continueBtn.addEventListener("click", continueFunq)

        //clearing input fields
        firstName.value = "";
        lastName.value = "";
        checkInDate.value = "";
        checkOutDate.value = "";
        peopleCount.value = "";

        //edit Function
        function continueFunq(e) {
            e.preventDefault();

            const confirmListUl = document.getElementsByClassName("confirm-list")[0];
            const confirmliEl = document.createElement("li");
            confirmliEl.classList.add("reservation-content");
            let copyArticle = article;

            confirmListUl.appendChild(confirmliEl);
            confirmliEl.appendChild(copyArticle);

            let confirmBtn = document.createElement("button");
            confirmBtn.classList.add("confirm-btn");
            confirmBtn.textContent = "Confirm";
            confirmliEl.appendChild(confirmBtn);
            confirmBtn.addEventListener("click", confirmFunq)

            function confirmFunq() {
                confirmliEl.remove();
                nextBtn.disabled = false;

                const verification = document.getElementById("verification");
                verification.classList.add("reservation-confirmed");
                verification.textContent = "Confirmed."
            }

            let cancelBtn = document.createElement("button");
            cancelBtn.classList.add("cancel-btn");
            cancelBtn.textContent = "Cancel";
            confirmliEl.appendChild(cancelBtn);
            cancelBtn.addEventListener("click", cancelFunq)

            function cancelFunq() {
                confirmliEl.remove();
                nextBtn.disabled = false;

                const verification = document.getElementById("verification");
                verification.classList.add("reservation-cancelled");
                verification.textContent = "Canceled.";
            }

            

            liEl.remove();
        }

        function editFunq(e) {
            nextBtn.disabled = false;

            firstName.value = firstNameValue;
            lastName.value = lastNameValue;
            checkInDate.value = checkInDateValue;
            checkOutDate.value = checkOutDateValue;
            peopleCount.value = peopleCountValue;

            liEl.remove();
        }
    }
}





