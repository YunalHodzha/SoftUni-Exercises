import { getBooks } from "./app.js";


export async function deleteFunq(e) {
    e.preventDefault();

    let targetRow = e.target.parentNode.parentNode;
    let id = targetRow.id;

    await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
        method: "DELETE",
    })

    getBooks();
}