const http = require('http');
const getRequest = require('./methods/get-request');
const postRequest = require('./methods/post-request');
const putRequest = require('./methods/put-request');
const deleteRequest = require('./methods/delete-request');
const movies = require('./data/movies.json');
require('dotenv').config();

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {

    req.movies = movies;
    
    switch(req.method) {
        case "GET": 
            getRequest(req,res);
            break;
        case "POST": 
            postRequest(req,res);
            break;
        case "PUT": 
            putRequest(req,res);
            break;
        case "DELETE": 
            deleteRequest(req,res);
            break;
        default:
            res.statusCode = 404;
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify({title: "Not Found", message: 'Route Not Found!'}));
            res.end();
    }
});

server.listen(PORT, () => {
    console.log('server listening on the port: ' + PORT);
})