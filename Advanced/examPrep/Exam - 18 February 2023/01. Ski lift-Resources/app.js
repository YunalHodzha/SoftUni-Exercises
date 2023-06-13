window.addEventListener('load', solve);

function solve() {
    //Dom Elements
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const peopleCount = document.getElementById("people-count");
    const date = document.getElementById("from-date");
    const days = document.getElementById("days-count");
    const ticketInfoUl = document.getElementsByClassName("ticket-info-list")[0];

    const nextBtn = document.getElementById("next-btn");
    nextBtn.addEventListener("click", nextStepFunc);
    nextBtn.addEventListener("click", function () {
        nextBtn.disabled = true;
    })


    function nextStepFunc(e) {
        e.preventDefault();

        if (firstName.value === "" ||
            lastName.value === "" ||
            peopleCount.value === "" ||
            date.value === "" ||
            days.value === "") {
            return;
        }

        let liElement = document.createElement("li");
        liElement.classList.add("ticket");
        ticketInfoUl.appendChild(liElement);
        let article = document.createElement("article");
        liElement.appendChild(article);

        let nameEl = document.createElement("h3");
        let NameInput = `Name: ${firstName.value} ${lastName.value}`;
        nameEl.textContent = NameInput;
        article.appendChild(nameEl);

        let dateEl = document.createElement("p");
        let dateInput = `From date: ${date.value}`;
        dateEl.textContent = dateInput;
        article.appendChild(dateEl);

        let daysEl = document.createElement("p");
        let daysInput = `For ${days.value} days`;
        daysEl.textContent = daysInput;
        article.appendChild(daysEl);

        let countEl = document.createElement("p");
        let countInput = `For ${peopleCount.value} people`;
        countEl.textContent = countInput;
        article.appendChild(countEl);

        let editBtn = document.createElement("button");
        editBtn.classList.add("edit-btn");
        editBtn.textContent = "Edit";
        liElement.appendChild(editBtn);
        editBtn.addEventListener("click", editFunq);

        let continueBtn = document.createElement("button");
        continueBtn.classList.add("continue-btn");
        continueBtn.textContent = "Continue";
        liElement.appendChild(continueBtn);
        continueBtn.addEventListener("click", continueFunc);

        firstName.value = "";
        lastName.value = "";
        peopleCount.value = "";
        date.value = "";
        days.value = "";
    }
    function continueFunc(e) {
        let parentElement = e.target.parentElement;
        let target = e.target.parentElement.children[0].children;

        const ulConfirmEl = document.getElementsByClassName("confirm-ticket")[0];
        let liEl = document.createElement("li");
        liEl.classList.add("ticket-content");
        let article = document.createElement("article");
        liEl.appendChild(article);
        ulConfirmEl.appendChild(liEl);

        let nameEl = document.createElement("h3");
        nameEl.textContent = target[0].textContent;
        article.appendChild(nameEl);

        let dateEl = document.createElement("p");
        dateEl.textContent = target[1].textContent;
        article.appendChild(dateEl);

        let daysEl = document.createElement("p");
        daysEl.textContent = target[2].textContent;
        article.appendChild(daysEl);

        let countEl = document.createElement("p");
        countEl.textContent = target[3].textContent;
        article.appendChild(countEl);

        parentElement.remove();

        let confirmBtn = document.createElement("button");
        confirmBtn.classList.add("confirm-btn");
        confirmBtn.textContent = "Confirm";
        confirmBtn.addEventListener("click", confirm);
        liEl.appendChild(confirmBtn);

        let cancelBtn = document.createElement("button");
        cancelBtn.classList.add("cancel-btn");
        cancelBtn.textContent = "Cancel";
        cancelBtn.addEventListener("click", cancelFunc)
        liEl.appendChild(cancelBtn);
    }
    function confirm(e) {
        const body = document.getElementById("body");
        let divEl = document.getElementById("main");
        divEl.remove();

        let h1El = document.createElement("h1");
        h1El.id = "thank-you";
        h1El.textContent = "Thank you, have a nice day! ";

        let backBtn = document.createElement("button");
        backBtn.id = "back-btn";
        backBtn.textContent = "Back";

        body.appendChild(h1El);
        body.appendChild(backBtn);

        backBtn.addEventListener("click", function () {
            location.reload();
        })
    }

    function cancelFunc(e) {

        nextBtn.disabled = false;
        let parentElement = e.target.parentElement.parentElement;
        parentElement.remove();
    }

    function editFunq(e) {
        let parentElement = e.target.parentElement;
        let target = e.target.parentElement.children[0].children;

        let nameArr = target[0].textContent.split(" ");
        firstName.value = nameArr[1];
        lastName.value = nameArr[2];

        let dateInput = target[1].textContent.split(" ");
        date.value = dateInput[2];

        let daysInput = target[2].textContent.split(" ");
        days.value = daysInput[1];

        let countInput = target[3].textContent.split(" ");
        peopleCount.value = countInput[1];

        parentElement.remove();
        nextBtn.disabled = false;
    }
}




