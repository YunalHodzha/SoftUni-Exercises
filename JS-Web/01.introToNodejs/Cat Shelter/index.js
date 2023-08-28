const http = require('http');
const fs = require('fs/promises');
const handlers = require('./handlers');
const port = 3000;

const server = http.createServer((req, res) => {
    console.log('server is running')
    for (let handler of handlers) {
        if(!handler(req, res)) {
            break;
        }
    }
}).listen(port);