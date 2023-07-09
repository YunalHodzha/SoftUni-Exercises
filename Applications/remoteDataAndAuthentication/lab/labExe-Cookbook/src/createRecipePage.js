import { createElement } from "./util.js";

export async function showCatalog(domElement) {
    domElement.innerHTML = '';
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

    cards.forEach(c => domElement.appendChild(c));
}

{/* <article id="createRecipe">
<h2>New Recipe</h2>
<form>
    <label>Name: <input type="text" name="name" placeholder="Recipe name"></label>
    <label>Image: <input type="text" name="img" placeholder="Image URL"></label>
    <label class="ml">Ingredients: <textarea name="ingredients"
            placeholder="Enter ingredients on separate lines"></textarea></label>
    <label class="ml">Preparation: <textarea name="steps"
            placeholder="Enter preparation steps on separate lines"></textarea></label>
    <input type="submit" value="Create Recipe">
</form>
</article> */}


function createRecipePreview(recipe) {
    const result = createElement('article',
        createElement('h2', undefined, 'New Recipe'),
        createElement('form', undefined,
            createElement('label', undefined, ['Name:', createElement('input', { type: 'text', name: 'name', placeholder: 'Recipe Name' })]),
            createElement('label', undefined, ['Image:', createElement('input', { type: 'text', name: 'img', placeholder: 'Image URL' })])),
            createElement('label', undefined, ['Ingredients:', createElement('input', { type: 'text', name: 'name', placeholder: 'Recipe Name' })]),
            createElement('label', undefined, createElement('input', { type: 'text', name: 'name', placeholder: 'Recipe Name' }))
    );

    return result;

    async function toggleCard() {
        const fullRecipe = await getRecipeById(recipe._id);

        result.replaceWith(createRecipeCard(fullRecipe));
    }
}

function createRecipeCard(recipe) {
    const result = createElement('article', {},
        createElement('h2', {}, recipe.name),
        createElement('div', { className: 'band' },
            createElement('div', { className: 'thumb' }, createElement('img', { src: recipe.img })),
            createElement('div', { className: 'ingredients' },
                createElement('h3', {}, 'Ingredients:'),
                createElement('ul', {}, recipe.ingredients.map(i => createElement('li', {}, i))),
            )
        ),
        createElement('div', { className: 'description' },
            createElement('h3', {}, 'Preparation:'),
            recipe.steps.map(s => createElement('p', {}, s))
        ),
    );

    return result;
}

