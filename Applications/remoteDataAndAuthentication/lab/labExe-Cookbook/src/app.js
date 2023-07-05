window.addEventListener('load', async () => {
    const main = document.querySelector('main');

    let pages = {
        createPage: document.getElementById('createRecipe'),
        loginPage: document.getElementById('login'),
        registerPage: document.getElementById('register'),
    }

    main.innerHTML = '';

    let links = {
        catalogLink: document.getElementById('catalogLink'),
        createPageLink: document.getElementById('createRecipeLink'),
        loginLink: document.getElementById('loginLink'),
        registerLink: document.getElementById('registerLink'),
    }

    links.catalogLink.addEventListener('click', showCatalog);
    //links.createPageLink.addEventListener('click', showCreateRecipe);
    links.loginLink.addEventListener('click', showLogin);
    links.registerLink.addEventListener('click', showRegister);

    showCatalog();

    async function showRegister(e) {
        main.innerHTML = '';
        main.appendChild(pages.registerPage);

        let form = pages.registerPage.querySelector('form');
        form.removeEventListener('submit', register)
        form.addEventListener('submit', register);
    }

    async function register(e) {
        e.preventDefault();
        let form = e.target;
        let formData = new FormData(form);

        let rePass = formData.get('rePass');
        let password = formData.get('password');

        //validate
        if (password !== rePass) {
            return alert('The passwords need to match');
        }

        let url = 'http://localhost:3030/users/register';
        let setting = {
            method: 'Post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: formData.get('email'),
                password: formData.get('password')
            })
        }

        let response = await fetch(url, setting);
        try {
            if (response.status == 200) {
                let result = await response.json();

                sessionStorage.setItem('accessToken', result.accessToken);
                showCatalog();
            } else {
                let jsonResponse = await response.json(); 
                throw new Error(jsonResponse.message);
            }
        } catch (e) {
            alert(e.message);
        }
    }

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
        showCatalog();
    }

    async function showLogin() {
        main.innerHTML = '';
        main.appendChild(pages.loginPage);


        let form = pages.loginPage.querySelector('form');
        form.addEventListener('submit', login);

    }

    async function showCatalog() {
        main.innerHTML = '';
        const recipes = await getRecipesWithSelectdColumns(['_id', 'name', 'img']);
        const cards = recipes.map(createRecipePreview);

        let isUserLogged = sessionStorage.getItem('accessToken');
        let guest = document.getElementById('guest');
        let user = document.getElementById('user');
        if (isUserLogged == undefined) {
            //let user = document.getElementById('user');
     
            // user.style.display = 'block';
            guest.style.display = 'inline-block';
            user.style.display = "none";
        } else {
            guest.style.display = 'none';
            user.style.display = 'inline-block';
        }

        cards.forEach(c => main.appendChild(c));
    }
});

// later logic
async function getRecipes() {
    const response = await fetch('http://localhost:3030/data/recipes');
    const recipes = await response.json();

    return Object.values(recipes);
}


async function getRecipesWithSelectdColumns(columns) {
    let columnsString = columns.join(',');
    let encodedPart = encodeURIComponent(columnsString);
    console.log(encodedPart)
    const response = await fetch(`http://localhost:3030/data/recipes?select=${encodedPart}`);
    const recipes = await response.json();

    return Object.values(recipes);
}

async function getRecipeById(id) {
    const response = await fetch('http://localhost:3030/data/recipes/' + id);
    const recipe = await response.json();

    return recipe;
}

function createRecipePreview(recipe) {
    const result = e('article', { className: 'preview', onClick: toggleCard },
        e('div', { className: 'title' }, e('h2', {}, recipe.name)),
        e('div', { className: 'small' }, e('img', { src: recipe.img })),
    );

    return result;

    async function toggleCard() {
        const fullRecipe = await getRecipeById(recipe._id);

        result.replaceWith(createRecipeCard(fullRecipe));
    }
}

function createRecipeCard(recipe) {
    const result = e('article', {},
        e('h2', {}, recipe.name),
        e('div', { className: 'band' },
            e('div', { className: 'thumb' }, e('img', { src: recipe.img })),
            e('div', { className: 'ingredients' },
                e('h3', {}, 'Ingredients:'),
                e('ul', {}, recipe.ingredients.map(i => e('li', {}, i))),
            )
        ),
        e('div', { className: 'description' },
            e('h3', {}, 'Preparation:'),
            recipe.steps.map(s => e('p', {}, s))
        ),
    );

    return result;
}

function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}