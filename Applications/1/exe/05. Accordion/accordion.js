function solution() {
    const mainElement = document.getElementById('main');

    getElements();
    async function getElements() {
        const url = 'http://localhost:3030/jsonstore/advanced/articles/list';

        const response = await fetch(url);
        const data = await response.json();

        for (let object of data) {
            const accordionDiv = document.createElement('div');
            accordionDiv.classList.add('accordion');

            const headDiv = document.createElement('div');
            headDiv.classList.add('head');

            const spanElement = document.createElement('span');
            spanElement.textContent = object.title;

            const moreBtn = document.createElement('button');
            moreBtn.classList.add('button');
            moreBtn.id = `${object._id}`;
            moreBtn.textContent = 'More';

            const extraDiv = document.createElement('div');
            extraDiv.classList.add('extra');

            mainElement.appendChild(accordionDiv);
            accordionDiv.appendChild(headDiv);
            accordionDiv.appendChild(extraDiv);
            headDiv.appendChild(spanElement);
            headDiv.appendChild(moreBtn);
            moreBtn.addEventListener('click', showMoreFunq);
        }
    }

    async function showMoreFunq(e) {
        let id = e.target.id
        let btn = e.target;
        const extraDiv = e.target.parentElement.parentElement.children[1];
        const url = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`;

        const response = await fetch(url);
        const data = await response.json();

        if (btn.textContent === "More") {
            let p = document.createElement('p');
            p.textContent = data.content;
            extraDiv.appendChild(p);
            btn.textContent = 'Less';
            extraDiv.style.display = "block";
        } else if (btn.textContent === "Less") {
            extraDiv.innerHTML = '';
            extraDiv.style.display = "none";
            btn.textContent = "More";
        }
    }
}

solution()