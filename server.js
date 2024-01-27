const { log } = require('node:console');
const http = require('node:http');

const hostname = '127.1.1.0';
// const hostname = "https://train-server-3jx8.onrender.com/"
const port = 3000;

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    const data = JSON.stringify([
        { name: "Tommy", age: 35 },
        { name: "Arhtur", age: 40 }
    ])
    // res.write("<h1>Hello, I am server!</h1>");
    res.end(data);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});