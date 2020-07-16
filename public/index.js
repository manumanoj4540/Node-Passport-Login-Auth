const express = require('express');
const http = require('http');
const hostname = 'localhost';
const port = 3000;
const app = express();
app.use((req, res, next) => {
    console.log(req.headers);
    res.statusCode =200;
    res.setHeader('Content-Type','text/html')
    res.end('<html><div><h1>This is an express Server</h1></div></html>');
});