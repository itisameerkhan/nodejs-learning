const requestBodyParser = require('../utils/bodyParser');
const crypto_id = require('crypto');
const writeToFile = require('../utils/write-to-file');

module.exports = async(req, res) => {
    let baseURL = req.url.substring(0, req.url.lastIndexOf("/") + 1);
    let id = req.url.split("/")[3];
    const regexv4 = new RegExp(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)

    if(!regexv4.test(id)) {
        res.writeHead(404, {'Content-Type' : 'application/json'});
        res.end(JSON.stringify({title: "Validation failed", message: 'UUID is not valid'}));
    }
    else if(baseURL ==  '/api/movies/' && regexv4.test(id))
    {
        try {
            let body = await requestBodyParser(req);

            const index = req.movies.findIndex((movie) => {
                return movie.id === id;
            });

            if(index === -1) {
                res.writeHead(404, {'Content-Type' : 'application/json'});
                res.end(JSON.stringify({title: "Not Found", message: 'Movie not found'}));
            } 
            else {
                req.movies[index] = {id, ...body};
                writeToFile(req.movies);
                res.writeHead(200, {'Content-Type' : 'application/json'});
                res.end(JSON.stringify(req.movies[index]))
            }
        } catch(err) {
            console.log(err);
            res.writeHead(400, {'Content-Type' : 'application/json'});
            res.end(JSON.stringify({title: "validation failed", message: 'request body is not valid'}));
        }
    }
    else {
        res.writeHead(404, {'Content-Type' : 'application/json'});
        res.end(JSON.stringify({title: "Not Found", message: 'Route Not Found!'}));
    }
};