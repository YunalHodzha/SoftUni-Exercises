import { html, render } from "./node_modules/lit-html/lit-html.js";
import { contacts } from "./contacts.js";


let main = document.getElementById('contacts');


let contactTemplate = (contact) => html`
<div class="contact card">
    <div>
        <i class="far fa-user-circle gravatar"></i>
    </div>
    <div class="info">
        <h2>Name: ${contact.name}</h2>
        <button class="detailsBtn">Details</button>
        <div class="details" id="${contact.id}">
            <p>Phone number: ${contact.phoneNumber}</p>
            <p>Email: ${contact.email}</p>
        </div>
    </div>
</div>`;

let contactsTemplate = (contacts) => html`
<main>
    ${contacts.map(x => contactTemplate(x))}
</main>
    `

render(contactsTemplate(contacts), main);