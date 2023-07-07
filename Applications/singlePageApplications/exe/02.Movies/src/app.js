// step 1.
// show/hide requested content (login, register, etc.)


// NAVIGATION - routess mapping
// - /login (login action) => login page
// - /register (register action) => register page
import { homePage } from "./home.js";
import { loginPage } from "./login.js";
import { logout } from "./logout.js";
import { registerPage } from "./register.js";
import { updateNavBar } from "./utils.js";

const routes = {
    '/': homePage,
    '/login': loginPage,
    '/register': registerPage,
    '/logout': logout,
}

document.querySelector("nav").addEventListener('click', onNavigate);

function onNavigate(event) {
    if (event.target.tagName === 'A' && event.target.href) {
        event.preventDefault();

        const url = new URL(event.target.href);
        const view = routes[url.pathname];

        view();
    }
}

homePage();
updateNavBar();