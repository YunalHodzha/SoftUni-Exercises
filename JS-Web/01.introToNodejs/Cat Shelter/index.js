const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;
//const homeHtmlContent = require('./handlers/home.js');
//const catAddHtmlContent = require('./handlers/addCat.js');
//const catBreedHtmlContent = require('./handlers/addBreed.js');

//handlebars
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home', { layout: false })
})

app.get('/cats/add-cat', (req, res) => {
    res.render('addCat', { layout: false })
})

app.get('/cats/add-breed', (req, res) => {
    res.render('addBreed', { layout: false })
})


app.listen(port, () => console.log(`Express running on port: ${port}...`));
