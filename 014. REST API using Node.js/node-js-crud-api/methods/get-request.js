module.exports = (req, res) => {

    let baseURL = req.url.substring(0, req.url.lastIndexOf("/") + 1);
    let id = req.url.split("/")[3];
    const regexv4 = new RegExp(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)


    if(req.url == '/api/movies') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(req.movies));
        res.end();
    } 
    else if(!regexv4.test(id)) {
        res.writeHead(404, {'Content-Type' : 'application/json'});
        res.end(JSON.stringify({title: "Validation failed", message: 'UUID is not valid'}));
    }
    else if(regexv4.test(id)) {
        if(baseURL ==  '/api/movies/') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            let filteredMovie = req.movies.filter((movie) => movie.id == id);

            if(filteredMovie.length == 0) {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({title: "Not Found", message: 'Movies Not Found'}));
            }

            res.write(JSON.stringify(filteredMovie));
            res.end();

        } 
    }
    else {
        res.writeHead(404, {'Content-Type' : 'application/json'});
        res.end(JSON.stringify({title: "Not Found", message: 'Route Not Found!'}));
    }
};