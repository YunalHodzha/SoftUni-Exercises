import { html } from "../../node_modules/lit-html/lit-html.js";

export const studentsTemplate = (studentsData) => html`
${studentsData.map(
    (student) => rowTemplate(student))}`;

const rowTemplate = student => html`
    <tr>
        <th>${student.firstName} ${student.lastName}</th>
        <th>${student.email}</th>
        <th>${student.course}</th>
    </tr>
`;