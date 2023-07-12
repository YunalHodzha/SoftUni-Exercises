import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { deleteFunq } from "./delete.js";
import { updateFunq } from "./update.js";


export const booksTemplate = (bookData) => html`
    ${bookData.map(
        (book) => bookRow(book)
    )}
`
const bookRow = book => html`
    <tr id="${book[0]}">
        <td>${book[1].title}</td>
        <td>${book[1].author}</td>
        <td>
                <button @click="${updateFunq}">Edit</button>
                <button @click="${deleteFunq}">Delete</button>
            </td>
        </tr>
`