# 💫 Rest API?

![demo](/assets/demo8.png)

## ⭐ What's an API?

An API is a set of definitions and protocols for building and integrating application software. It’s sometimes referred to as a contract between an information provider and an information user—establishing the content required from the consumer (the call) and the content required by the producer (the response).

In other words, if you want to interact with a computer or system to retrieve information or perform a function, an API helps you communicate what you want to that system so it can understand and fulfill the request. 

## ⭐ What is Rest API?

REST is a set of architectural constraints, not a protocol or a standard. API developers can implement REST in a variety of ways.

**REST (Representational State Transfer)** is an architectural style for designing networked applications. **RESTful APIs (Application Programming Interfaces)** are APIs that adhere to the principles and constraints of REST. These APIs are designed to be simple, scalable, and stateless, making them suitable for distributed systems, such as web applications.

In the context of Node.js, a REST API typically involves creating endpoints (URLs) that represent resources and using standard HTTP methods (GET, POST, PUT, DELETE, etc.) to perform operations on these resources. Each resource is identified by a unique URI, and the API follows the principles of statelessness, meaning that each request from a client contains all the information needed to fulfill that request.

### ✨ Here's a brief overview of the standard HTTP methods used in a REST API:

* `GET`: Retrieve data from a specified resource.

* `POST`: Submit data to be processed to a specified resource.

* `PUT`: Update a specified resource or create a new resource if it doesn't exist.

* `DELETE`: Remove a specified resource.

## ⭐ Rest APIs that will be created in this project.

![dmeo](/assets/demo9.png)

## ⭐ Routes
```
GET      /api/movies
POST     /api/movies
GET      /api/movies/:id
PUT      /api/movies/:id
DELETE   /api/movies/:id

```

### ✨ Consider This Code snippet

```js
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
```

### ✨ Breakdown of this code

####  `const server = http.createServer((req, res) => { ... });`:

 * Creates an HTTP server. The provided callback function is called for every incoming HTTP request.

#### `req.movies = movies;`:

* Attaches a movies property to the `req` (request) object. This is likely setting up some initial data that can be used throughout the request-handling process.

#### `switch(req.method) { ... }:` 

* Switches based on the HTTP method of the incoming request (req.method). The server supports handling GET, POST, PUT, and DELETE methods.

#### Cases for different HTTP methods:

* case "`GET`": `getRequest(req, res);`: Calls getRequest function to handle GET requests.

* case "`POST`": `postRequest(req, res);`: Calls postRequest function to handle POST requests.

* case "`PUT`": `putRequest(req, res);`: Calls putRequest function to handle PUT requests.

* case "`DELETE`": `deleteRequest(req, res);`: Calls deleteRequest function to handle DELETE requests.

* `default`: If the HTTP method is not GET, POST, PUT, or DELETE, set the response status code to 404 (Not Found) and send a JSON response indicating that the route is not found.
