const fs = require('fs');
const path = require('path');

const homePath = (path.join(__dirname, '../views/home/index.html'));
const homeHtmlContent = fs.readFileSync(homePath, 'utf-8');

module.exports = homeHtmlContent;