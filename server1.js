const { log } = require('node:console');
const http = require('node:http');


const PORT = 3000;

const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    const data = JSON.stringify([
        { name: "Tommy", age: 35 },
        { name: "Arhtur", age: 40 }
    ])
    // res.write("<h1>Hello, I am server!</h1>");
    res.end(data);
});

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
});