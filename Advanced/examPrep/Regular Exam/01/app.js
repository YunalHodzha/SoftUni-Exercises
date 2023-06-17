window.addEventListener('load', solve);

function solve() {
        const carModel = document.getElementById("car-model");
        const carYear = document.getElementById("car-year");
        const partName = document.getElementById("part-name");
        const partNumber = document.getElementById("part-number");
        const condition = document.getElementById("condition");
        const body = document.getElementById("complete-order");
        body.addEventListener("click", wrap)

        const infoListUlEl = document.getElementsByClassName("info-list")[0];
        const confirmListUlEl = document.getElementsByClassName("confirm-list")[0];
        const imgEl = document.getElementById("complete-img");
        const completeText = document.getElementById("complete-text");

        const nextBtn = document.getElementById("next-btn");
        nextBtn.addEventListener("click", nextFunq);

        function wrap(e) {
                e.preventDefault();
                imgEl.style.visibility = "hidden";
                completeText.textContent = "";
        }

        function nextFunq(e) {
                e.preventDefault();
                imgEl.style.visibility = "hidden";
                completeText.textContent = "";

                let carModelValue = carModel.value;
                let carYearValue = carYear.value;
                carYearValue = Number(carYearValue);

                let partNameValue = partName.value;
                let partNumberValue = partNumber.value;
                let conditionValue = condition.value;

                if (carModelValue === "" ||
                        carYearValue === "" ||
                        partNameValue === "" ||
                        partNumberValue === "" ||
                        conditionValue === "") {
                        nextBtn.disabled = false;
                        return;
                }

                if (carYearValue < 1980 || carYearValue > 2023) {
                        nextBtn.disabled = false;
                        return;
                }

                nextBtn.disabled = true;

                let liEl = document.createElement("li");
                liEl.classList.add("part-content");

                let article = document.createElement("article");
                liEl.appendChild(article);

                let p1 = document.createElement("p");
                p1.textContent = `Car Model: ${carModelValue}`;
                article.appendChild(p1);

                let p2 = document.createElement("p");
                p2.textContent = `Car Year: ${carYearValue}`;
                article.appendChild(p2);

                let p3 = document.createElement("p");
                p3.textContent = `Part Name: ${partNameValue}`;
                article.appendChild(p3);

                let p4 = document.createElement("p");
                p4.textContent = `Part Number: ${partNameValue}`;
                article.appendChild(p4);

                let p5 = document.createElement("p");
                p5.textContent = `Condition: ${conditionValue}`;
                article.appendChild(p5);

                infoListUlEl.appendChild(liEl);
                //buttons

                let editBtn = document.createElement("button");
                editBtn.classList.add("edit-btn");
                editBtn.textContent = "Edit";
                editBtn.addEventListener("click", editFunq);
                liEl.appendChild(editBtn);


                let continueBtn = document.createElement("button");
                continueBtn.classList.add("continue-btn");
                continueBtn.textContent = "Continue";
                continueBtn.addEventListener("click", continueFunc)
                liEl.appendChild(continueBtn);

                carModel.value = "";
                carYear.value = "";
                partName.value = "";
                partNumber.value = "";
                condition.value = "";

                //button functions

                function continueFunc(e) {
                        e.preventDefault();

                        let confirmLiEl = document.createElement("li");
                        confirmLiEl.classList.add("part-content");
                        confirmListUlEl.appendChild(confirmLiEl);

                        let confirmArticle = document.createElement("article");
                        confirmLiEl.appendChild(confirmArticle);

                        confirmArticle.appendChild(p1);
                        confirmArticle.appendChild(p2);
                        confirmArticle.appendChild(p3);
                        confirmArticle.appendChild(p4);
                        confirmArticle.appendChild(p5);

                        let confirmBtn = document.createElement("button");
                        confirmBtn.classList.add("confirm-btn");
                        confirmBtn.textContent = "Confirm";
                        confirmLiEl.appendChild(confirmBtn);
                        confirmBtn.addEventListener("click", confirmFunq);


                        let cancelBtn = document.createElement("button");
                        cancelBtn.classList.add("cancel-btn");
                        cancelBtn.textContent = "Cancel";
                        confirmLiEl.appendChild(cancelBtn);
                        cancelBtn.addEventListener("click", cancelFunc);

                        liEl.remove();

                }

                function cancelFunc(e) {
                        e.preventDefault();

                        e.target.parentElement.remove();
                        nextBtn.disabled = false;
                }

                function confirmFunq(e) {
                        e.preventDefault();


                        e.target.parentElement.remove();

                        nextBtn.disabled = false;

                        imgEl.style.visibility = "visible";
                        completeText.textContent = "Part is Ordered!";
                }

                function editFunq(e) {
                        e.preventDefault();

                        carModel.value = carModelValue;
                        carYear.value = carYearValue;
                        partName.value = partNameValue;
                        partNumber.value = partNumberValue;
                        condition.value = conditionValue;

                        nextBtn.disabled = false;

                        liEl.remove();
                }
        }

}