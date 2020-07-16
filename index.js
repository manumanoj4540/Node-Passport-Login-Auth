const express = require('express');
const http = require('http');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;
const app = express();

app.use(express.static(__dirname + '/public'))
app.use(morgan('dev'));
app.use((req, res, next) => {    
    res.statusCode =200;
    res.setHeader('Content-Type','text/html')
    res.end('<html><div><h1>This is an express Server</h1></div></html>');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running @ http://${hostname}:${port}`);
});