import { showCatalog } from "./catalogPage.js";
const main = document.querySelector('main');

async function login(e) {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);

    let url = 'http://localhost:3030/users/login';
    let setting = {
        method: 'Post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: formData.get('email'),
            password: formData.get('password')
        })
    }

    let response = await fetch(url, setting);
    let result = await response.json();

    sessionStorage.setItem('accessToken', result.accessToken);
    showCatalog(main);

}

export async function showLogin(domElement) {
    domElement.innerHTML = '';
    domElement.innerHTML = `<article id="login">
    <h2>Login</h2>
    <form>
        <label>E-mail: <input type="text" name="email"></label>
        <label>Password: <input type="password" name="password"></label>
        <input type="submit" value="Login">
    </form>
</article>`


    let form = domElement.querySelector('form');
    form.addEventListener('submit', login);

}