const formElement = document.querySelector('form');
const url = 'http://localhost:3030/jsonstore/collections/students';
const tBodyElem = document.querySelector('tbody');

formElement.addEventListener('submit', submitFunq);

load();

async function load() {
    tBodyElem.innerHTML = '';

    const response = await fetch(url);
    const data = await response.json();

    Object.values(data).forEach((student) => {
        const trElem = document.createElement('tr');

        const firstNameTd = document.createElement('td');
        firstNameTd.textContent = student.firstName;
        trElem.appendChild(firstNameTd);

        const lastNameTd = document.createElement('td');
        lastNameTd.textContent = student.lastName;
        trElem.appendChild(lastNameTd);

        const facultyNumberTd = document.createElement('td');
        facultyNumberTd.textContent = student.facultyNumber;
        trElem.appendChild(facultyNumberTd);

        const gradeTd = document.createElement('td');
        gradeTd.textContent = student.grade;
        trElem.appendChild(gradeTd);

        tBodyElem.appendChild(trElem)
    })
}

async function submitFunq(e) {
    e.preventDefault();

    const data = new FormData(formElement);

    const firstName = data.get('firstName').trim();
    const lastName = data.get('lastName').trim();
    const facultyNumber = data.get('facultyNumber').trim();
    const grade = data.get('grade').trim();

    if (!firstName || !lastName || !facultyNumber || !grade) {
        return;
    }

    const requestData = JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        facultyNumber: facultyNumber,
        grade: grade,
    });

    await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: requestData,
    })

    formElement.reset();
    load();
}