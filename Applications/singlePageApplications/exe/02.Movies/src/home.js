import { showView } from "./utils.js";
const section = document.getElementById('home-page');

export function homePage() {
    console.log('...homePage...');

    //TODO:
    //- show/hide Html content
    //- display only movies section (request + ...)

    showView(section);
}