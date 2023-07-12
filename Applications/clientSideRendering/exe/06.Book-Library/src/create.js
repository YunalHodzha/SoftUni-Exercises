import { URL, getBooks, loadBooks } from "./app.js";

export async function createFunq(e) {
    e.preventDefault();


    let add_form = document.getElementById('add-form');

    const data = new FormData(add_form);

    const title = data.get('title');
    const author = data.get('author');

    if (!title || !author) {
        return;
    }

    const request = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application.json" },
        body: JSON.stringify({
            author: author,
            title: title
        })
    })

    const response = await request.json();
    
    if (request.ok) {
        
        
    } else {
        alert('something went wrong');
    }

    add_form.reset();
    getBooks();
    loadBooks();
}