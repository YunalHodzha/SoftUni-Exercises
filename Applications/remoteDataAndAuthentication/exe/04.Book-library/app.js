document.getElementById('loadBooks').addEventListener('click', load);
const url = 'http://localhost:3030/jsonstore/collections/books';
const tBodyElem = document.querySelector('tbody');
const formElem = document.querySelector('form');
formElem.addEventListener('submit', submitFunq);

async function submitFunq(e) {
    e.preventDefault();
    const data = new FormData(formElem);

    const title = data.get('title').trim();
    const author = data.get('author').trim();

    if (!title || !author) {
        return;
    }

    const requestData = JSON.stringify({
        author: author,
        title: title,
    })

    const btns = document.getElementsByTagName("button");
    const btn = btns[btns.length - 1];

    if (btn.textContent === "Save") {
        let btnId = e.target.id;
        await fetch(`${url}/${btnId}`, {
            method: "PUT",
            'Content-Type': 'application.json',
            body: requestData,
        })
    } else {
        await fetch(url, {
            method: "POST",
            'Content-Type': 'application.json',
            body: requestData,
        })
    }
    formElem.reset();
    load()
}

async function EditFunq(e) {
    e.preventDefault()
    let btnId = e.target.id;

    const response = await fetch(`${url}/${btnId}`);
    const { author, title } = await response.json();

    document.querySelector("[name='title']").value = title;
    document.querySelector("[name='author']").value = author;

    const h3Elem = document.querySelector("h3");
    h3Elem.textContent = "Edit FORM";

    const btns = document.getElementsByTagName("button");
    const btn = btns[btns.length - 1];

    btn.textContent = "Save";
}

async function updateFunq(e, id) {
    e.preventDefault();
    const data = new FormData(formElem);

    const title = data.get('title').trim();
    const author = data.get('author').trim();

    if (!title || !author) {
        return;
    }

    const requestData = JSON.stringify({
        author: author,
        title: title,
    })

    await fetch(`${url}/${id}`, {
        method: "PUT",
        'Content-Type': 'application.json',
        body: requestData,
    })
    formElem.reset();
    load()
}

async function deleteFunq(e) {
    let btnId = e.target.id;

    await fetch(`${url}/${btnId}`, {
        method: "DELETE",
    })
    load()
}

async function load() {

    const response = await fetch(url);
    const data = await response.json();
    tBodyElem.innerHTML = "";

    Object.entries(data).forEach(([key, value]) => {
        const trElem = document.createElement('tr');

        const nameTd = document.createElement('td');
        nameTd.textContent = value.title;

        const authorTd = document.createElement('td');
        authorTd.textContent = value.author;

        const actionTd = document.createElement('td');
        const editBtn = document.createElement('button');
        editBtn.addEventListener("click", EditFunq);
        editBtn.setAttribute("id", key);
        editBtn.textContent = "Edit";

        const deleteBtn = document.createElement('button');
        deleteBtn.addEventListener('click', deleteFunq);
        deleteBtn.setAttribute("id", key)
        deleteBtn.textContent = "Delete";
        actionTd.appendChild(deleteBtn);
        actionTd.appendChild(editBtn);

        trElem.appendChild(nameTd);
        trElem.appendChild(authorTd);
        trElem.appendChild(actionTd);

        tBodyElem.appendChild(trElem);
    })
    formElem.reset();
}