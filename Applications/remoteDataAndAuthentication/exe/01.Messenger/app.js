function attachEvents() {
    document.getElementById('submit').addEventListener('click', send);
    document.getElementById('refresh').addEventListener('click', refresh);
}

async function refresh(e) {
    const textArea = document.getElementById('messages');
    textArea.textContent = "";
    const url = 'http://localhost:3030/jsonstore/messenger';
    let messages = '';

    const response = await fetch(url);
    const data = await response.json();

    Object.values(data).forEach(x => {
        messages += `${x.author}: ${x.content}\n`;
    })
    
    textArea.textContent = messages.trim();
    document.querySelector('[name="author"]').value = ""
    document.querySelector('[name="content"]').value = "";
}

async function send() {
    let nameInput = document.querySelector('[name="author"]').value;
    let textInput = document.querySelector('[name="content"]').value;
    const url = 'http://localhost:3030/jsonstore/messenger';

    const requestData = JSON.stringify({
        author: nameInput,
        content: textInput,
    })

    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: requestData,
    })

    document.querySelector('[name="author"]').value = ""
    document.querySelector('[name="content"]').value = "";
}

attachEvents();