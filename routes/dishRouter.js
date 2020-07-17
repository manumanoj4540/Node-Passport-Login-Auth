const express = require('express');
const bodyParser = require('body-parser');
const dishRouter = express.Router();

dishRouter.use(bodyParser.json());
dishRouter.route('/')
.all((req, res, next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res) => {
    res.end('Will send all the dishes to you');
})
.post((req,res) => {
    res.end(`will add the info ${req.body.name} with description ${req.body.description}`);
})
.put((req,res) => {
    res.statusCode = 403;
    res.end(`Not supported :${req.method}`);
})
.delete((req,res) => {
    res.end('Deleting all the dishes');
});

module.exports = dishRouter;