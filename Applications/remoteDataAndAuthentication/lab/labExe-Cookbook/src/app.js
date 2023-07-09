import { showCatalog } from "./catalogPage.js";
import { logout } from "./logOut.js";
import { showLogin } from "./loginPage.js";
import { showRegister } from "./register.js";


window.addEventListener('load', async () => {
    const main = document.querySelector('main');

    main.innerHTML = '';

    let links = {
        catalogLink: document.getElementById('catalogLink'),
        createPageLink: document.getElementById('createRecipeLink'),
        loginLink: document.getElementById('loginLink'),
        registerLink: document.getElementById('registerLink'),
        logoutLink: document.getElementById('logoutBtn'),
    }

    links.catalogLink.addEventListener('click', () => showCatalog(main));
    //links.createPageLink.addEventListener('click', showCreateRecipe);
    links.loginLink.addEventListener('click',() => showLogin(main));
    links.registerLink.addEventListener('click',() => showRegister(main));
    links.logoutLink.addEventListener('click',() => logout(main))

    showCatalog(main);
});



