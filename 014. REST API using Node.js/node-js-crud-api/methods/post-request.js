const requestBodyParser = require('../utils/bodyParser');
const crypto_id = require('crypto');
const writeToFile = require('../utils/write-to-file');

module.exports = async (req, res) => {
    if(req.url == '/api/movies') {
        try {
            let body = await requestBodyParser(req);
            // console.log('request body -> ', body);
            body.id = crypto_id.randomUUID();
            req.movies.push(body);
            writeToFile(req.movies);
            res.writeHead(201, {'Content-Type': 'application/json'});
            res.end();
        } catch(err) {
            console.log(err);
            res.writeHead(400, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({
                title: "validation failed",
                message: 'request body is not valid',
            }));
        }
    } else {
        res.writeHead(404, {'Content-Type' : 'application/json'});
        res.end(JSON.stringify({title: "Not Found", message: 'Route Not Found!'}));
    } 
};