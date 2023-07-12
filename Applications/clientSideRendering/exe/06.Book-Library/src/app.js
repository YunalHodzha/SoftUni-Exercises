import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { createFunq } from "./create.js";
import { booksTemplate } from "./template.js";
import { saveFunq } from "./update.js";


const bodyElem = document.querySelector('body');
export const URL = 'http://localhost:3030/jsonstore/collections/books';
getBooks();

export async function getBooks(e) {
    const response = await fetch(URL);
    const result = await response.json();


    const tableElem = html`
        <button id="loadBooks" @click=${getBooks}>LOAD ALL BOOKS</button>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>

    <form id="add-form">
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Submit" @click=${createFunq}>
    </form>

    <form id="edit-form" style="display: none;">
        <input type="hidden" name="id">
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" @click=${saveFunq} value="Save">
    </form>
    `

    render(tableElem, bodyElem);

    const booksListElem = document.getElementsByTagName('tbody')[0];
    render(booksTemplate(Object.entries(result)), booksListElem);

    return tableElem;
}






