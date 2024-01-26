# Sending HTML Response

```js
const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello Node</h1>');
    res.write('<h1>Hello Node</h1>');
    res.end();
})
server.listen(5000, 'localhost', (error) => {
    console.log('port listening to 5000')
})
```

Certainly! The provided Node.js code creates a simple HTTP server using the http module. Let's break down the code step by step:

## Require the http Module:

```js
const http = require('http');
```

The code imports the built-in http module, which provides functionality to create HTTP servers and handle incoming requests.

## Create an HTTP Server:

```js
const server = http.createServer((req, res) => {
    // Request handling logic goes here
});
```

It creates an HTTP server using the createServer method. The server is configured with a callback function that gets invoked whenever a request is made to the server. This function takes two parameters: req (the request object) and res (the response object).

## Set Response Header:

```js
res.setHeader('Content-Type', 'text/html');
```

It sets the Content-Type header of the HTTP response to indicate that the response content is in HTML format.

## Write Data to the Response:

```js
res.write('<h1>Hello Node</h1>');
res.write('<h1>Hello Node</h1>');
```

It writes HTML content to the response body using the res.write method. In this case, it writes two `h1` tags with the text 'Hello Node'.

## End the Response:

```js
res.end();
```

It signals the end of the response. This is mandatory to complete the response and send it back to the client.

## Listen on a Port:

```js
server.listen(5000, 'localhost', (error) => {
    console.log('Port listening to 5000');
});
```

The server starts listening on port 5000 and logs a message to the console if the server successfully starts.

Overall, this code creates a basic HTTP server that responds with HTML content when accessed at http://localhost:5000. The response includes two h1 tags with the text 'Hello Node'.

---

## Returning HTML Pages

```js
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    // send an HTML file
    fs.readFile('./index.html', (err, data) => {
        if(err) console.log(err);
        else {
            res.write(data);
            res.end();
        }
    });
})
server.listen(5000, 'localhost', (error) => {
    console.log('port listening to 5000')
})
```

![demo6](/assets/demo6.png)

## Require the http and fs Modules:

```js
const http = require('http');
const fs = require('fs');
```

The code imports the built-in `http` and `fs` modules. The `http` module is used for creating an HTTP server, and the `fs` module is used for reading the HTML file.

## Read HTML File and Send as Response:

```js
fs.readFile('./index.html', (err, data) => {
    if (err) console.log(err);
    else {
        res.end(data);
    }
});
```

It reads the contents of the `index.html` file using `fs.readFile`. If there's an error, it logs the error; otherwise, it sends the contents of the HTML file as the response body using res.end.

---

## Basic Routing 

```js
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    let path  = '';
    console.log(req.url);

    //path changes according to req.url
    switch(req.url) {
        case '/': path = './index.html'; break;
        case '/about': path = './about.html'; break;
        default: path = './404.html'; break;
    }

    // send an HTML file
    fs.readFile(path, (err, data) => {
        if(err) console.log(err);
        else {
            // res.write(data);
            res.end(data);
        }
    });
});

server.listen(5000, 'localhost', (error) => {
    console.log('port listening to 5000')
})
```

##  Determine the File Path Based on Requested URL:

```js
let path = '';
console.log(req.url);

switch (req.url) {
    case '/': path = './index.html'; break;
    case '/about': path = './about.html'; break;
    default: path = './404.html'; break;
}
```

It uses a `switch` statement to determine the appropriate file path based on the requested URL `(req.url)`. For /, it serves `index.html`; for /about, it serves `about.html`; otherwise, it serves `404.html`.

## Read and Send HTML File as Response:

```js
fs.readFile(path, (err, data) => {
    if (err) console.log(err);
    else {
        res.end(data);
    }
});
```

Reads the content of the determined HTML file using `fs.readFile` and sends it as the response body.

## Status code 

* 200 - Ok
* 301 - Resource moved
* 404 - Not Found
* 500 - Internal server error

* **Informational Responses**: Codes 100 to 199
* **Successful Responses:** Codes 200 to 299
* **Redirection Messages:** Codes 300 to 399
* **Client Error Responses:** Codes 400 to 499
* **Server Error Responses:** Codes 500 to 599

---


## Send Response Codes


```js
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    let path  = '';
    console.log(req.url);

    switch(req.url) {
        case '/': 
            path = './index.html'; 
            res.statusCode = 200;
            break;
        case '/about': 
            path = './about.html'; 
            res.statusCode = 200;
            break;
        default: 
            path = './404.html'; 
            res.statusCode = 404;
            break;
    }
    // send an HTML file
    fs.readFile(path, (err, data) => {
        if(err) console.log(err);
        else {
            // res.write(data);
            res.end(data);
        }
    });
})
server.listen(5000, 'localhost', (error) => {
    console.log('port listening to 5000')
})
```

### Changes made:

## Status Codes:

* Added status codes `(res.statusCode)` for each route.

* Set `res.statusCode` to 200 for successful responses and 404 for the default case.

## Error Handling:

* Added a simple error handling mechanism inside fs.readFile to log errors and respond with a basic **"404 Not Found"** message in case of an error.

* These changes enhance the response handling by providing appropriate HTTP status codes for different routes and including basic error handling.


![node1](/assets/node1.png);
---
![node2](/assets/node2.png)

---

## Redirects

```js
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    let path  = '';
    console.log(req.url);

    switch(req.url) {
        case '/': 
            path = './index.html'; 
            res.statusCode = 200;
            break;
        case '/about': 
            path = './about.html'; 
            res.statusCode = 200;
            break;
        default: 
            res.statusCode = 301;
            res.setHeader('Location', '/');
            res.end();
            break;
    }
    // send an HTML file
    fs.readFile(path, (err, data) => {
        if(err) console.log(err);
        else {
            // res.write(data);
            res.end(data);
        }
    });

})
server.listen(5000, 'localhost', (error) => {
    console.log('port listening to 5000')
})
```

## Explanation:

## Status Codes and Redirection:

* Added a default case to handle undefined routes, **and set the status code to 301 (Moved Permanently).**

* Used `res.setHeader` to set the Location header to '/', indicating a redirection to the root URL.

* Ended the response `(res.end())` after setting the headers for redirection.

## Error Handling:

* Kept the basic error handling for reading HTML files using `fs.readFile.`

* These changes implement a 301 redirection for undefined routes, guiding users to the root URL.
