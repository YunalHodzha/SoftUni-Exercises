// entry point for the whole app

import page from "../node_modules/page/page.mjs";
import { catalogView } from "./catalogView.js";


// update nav bar

function updateNav() {
    const userNav = document.getElementById('user');
    const guestNav = document.getElementById('guest');

    if (sessionStorage.getItem('user')) {
        userNav.style.display = "inline";
        guestNav.style.display = "none";
    } else {
        userNav.style.display = "none";
        guestNav.style.display = "inline";
    }
}

updateNav();

//go to "/"  (home page/ catalog view)

//initialize app's routes
//page('/', catalogView)

page("/", catalogView);
page.start();