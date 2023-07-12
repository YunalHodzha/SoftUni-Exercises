import { URL, getBooks, loadBooks } from "./app.js";

let id = '';
export function updateFunq(e) {
    const editForm = document.getElementById('edit-form');
    const titleInput = document.querySelector('#edit-form input[name="title"]');
    const authorInput = document.querySelector('#edit-form input[name="author"]');

    editForm.style.display = "block";

    let targetRow = e.target.parentNode.parentNode;
    id = targetRow.id;
    let selectedTitle = targetRow.children[0].textContent;
    let selectedAuthor = targetRow.children[1].textContent;

    titleInput.value = selectedTitle;
    authorInput.value = selectedAuthor;

}

export async function saveFunq(e) {
    e.preventDefault();
    const editForm = document.getElementById('edit-form');

    const data = new FormData(editForm);

    const title = data.get('title');
    const author = data.get('author');

    if (!title || !author) {
        return;
    }

   let requestData = {
    author: author,
    title: title
   } 

    const request = await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application.json" },
        body: JSON.stringify(requestData)
    })

    editForm.reset();
    getBooks();
    loadBooks();
    editForm.style.display = "none";
}
