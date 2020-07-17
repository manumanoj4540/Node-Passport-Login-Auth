const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser')

const hostname = 'localhost';
const port = 3000;
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.all('/dishes',(req, res, next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
});
app.get('/dishes',(req,res) => {
    res.end('Will send all the dishes to you');
});
app.post('/dishes',(req,res) => {
    res.end(`will add the info ${req.body.name} with description ${req.body.description}`);
});
app.put('/dishes',(req,res) => {
    res.statusCode = 403;
    res.end(`Not supported :${req.method}`);
})
app.delete('/dishes',(req,res) => {
    res.end('Deleting all the dishes');
});


app.get('/dishes/:dishId',(req,res) => {
    res.end(`Will send details of dish ${req.params.dishId} to you`);
});
app.post('/dishes/:dishId',(req,res) => {
    res.end(`POST operation not supported on /dishes/${req.params.dishId}`);
});
app.put('/dishes/:dishId',(req,res) => {
    res.write(`updating dish ${req.params.dishId} \n`);
    res.end(`Will update dish ${req.params.dishId}`)
})
app.delete('/dishes/:dishId',(req,res) => {
    res.end(`Deleting dish ${req.params.dishId}`);
});


app.use(express.static(__dirname + '/public'))

app.use((req, res, next) => {    
    res.statusCode =200;
    res.setHeader('Content-Type','text/html')
    res.end('<html><div><h1>This is an express Server</h1></div></html>');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running @ http://${hostname}:${port}`);
});