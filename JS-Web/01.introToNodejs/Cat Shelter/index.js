const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const homeHtmlContent = require('./handlers/home.js')

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.status(200);
    res.send(homeHtmlContent);
})

app.listen(port, () => console.log(`Express running on port: ${port}...`));
