import { showView } from "./utils.js";
const section = document.getElementById('home-page');
const catalog = document.querySelector('#movie .card-deck.d-flex.justify-content-center');

catalog.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON') {
        event.preventDefault();

        console.log('Event')
    }
});


export function homePage() {
    console.log('...homePage...');

    //TODO:
    //- show/hide Html content
    //- display only movies section (request + ...)

    showView(section);

    displayMovies()
}

async function displayMovies() {

    const movies = await getMovies();

    catalog.replaceChildren(...movies.map(createMoviePreview));

}

function createMoviePreview(movie) {
    const liElem = document.createElement('li');
    liElem.innerHTML = `
    <img class="card-img-top" src="${movie.img}" alt="Card image cap" width="400">
    <div class="card-body">
        <h4 class = "card-title">${movie.title}</h4>
        <a href="/details/${movie._id}">
            <button data-id="${movie._id}" type="button" class="btn btn-info">Details</button>
        </a>
    </div>
    <div class="card-footer">
    </div>    
    `;

    return liElem;
}

async function getMovies() {
    const res = await fetch('http://localhost:3030/data/movies');
    const movies = await res.json();

    return movies;
}