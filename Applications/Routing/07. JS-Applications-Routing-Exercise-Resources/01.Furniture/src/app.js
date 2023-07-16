

import page from "//unpkg.com/page/page.mjs";

import { catalogView } from "./views/catalogView.js";


console.log("Helloo");

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

page("/", catalogView);
page.start();