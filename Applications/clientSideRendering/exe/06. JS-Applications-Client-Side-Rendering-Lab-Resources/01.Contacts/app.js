import { contacts } from "./contacts.js";
let regex = /%%([a-zA-Z]*)%%/gi;

let main = document.getElementById('contacts');

let response = await fetch('./contactTemplate.html');
let contactTemplate = await response.text();

for (const contact of contacts) {
    let populatedTemplate = populateTemplate(contactTemplate, contact)
    main.innerHTML += populatedTemplate;
}



function populateTemplate(template, data) {
    template = template.replace(regex, (match, parameterName) => {
        return data[parameterName];
    });
    return template;

}