const http = require('http');

const html = `
<!DOCTYPE html>
<html lang="en">
<body>
    <h1>Hello World!</h1>
    <h2>Good Morning World!</h2>
</body>
</html>
`

const server = http.createServer((request, response) => {
    console.log('Request received');

    if (request.url == '/') {
        response.write(html)
        response.end();
    } else {
        response.statusCode = 404;
        response.end();
    }
});



server.listen(3000);