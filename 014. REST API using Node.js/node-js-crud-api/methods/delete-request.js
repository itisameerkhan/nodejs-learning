const writeToFile = require("../utils/write-to-file");

module.exports = (req, res) => {

    let baseURL = req.url.substring(0, req.url.lastIndexOf("/") + 1);
    let id = req.url.split("/")[3];
    const regexv4 = new RegExp(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)

    if(!regexv4.test(id)) {
        res.writeHead(404, {'Content-Type' : 'application/json'});
        res.end(JSON.stringify({title: "Validation failed", message: 'UUID is not valid'}));
    } 
    else if(regexv4.test(id)) {
        if(baseURL ==  '/api/movies/') { 
            const index = req.movies.findIndex((movie) => {
                return movie.id === id;
            });

            if(index === -1) {
                res.writeHead(404, {'Content-Type' : 'application/json'});
                res.end(JSON.stringify({title: "Not Found", message: 'Movie not found'}));
            } 
            else 
            {
                req.movies.splice(index, 1);
                console.log(req.movies);
                writeToFile(req.movies);
                res.writeHead(204, {'Content-Type': 'application/json'});
                res.end(JSON.stringify(req.movies));
            }
        }
    }

};