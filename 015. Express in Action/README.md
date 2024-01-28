# Express in Action

## Fast, unopinionated, minimalist web framework for Node.js

![demo](/assets/demo7.png)

## What is Express.js ?

Express.js is a minimal and flexible NodeJS framework that provides a robust set of features for web applications like routing, sessions, caching, etc. It makes it easier to organize your application’s functionality with middleware and routing. It adds helpful utilities to Node.js’s HTTP objects. It facilitates the rendering of dynamic HTTP objects.

* Express is a relatively small framework that sits on top of Node.js’s web server functionality to simplify its APIs and add helpful new features. 

* It makes it easier to organize your application’s functionality with middleware and routing; it adds helpful
utilities to Node.js’s HTTP objects.

* It facilitates the rendering of dynamic HTML views.

* It defines an easily implemented extensibility standard. 

#### Here's a simple way to think about the difference between Express.js and Node.js:

* Express.js is like a house. It provides the structure and foundation that you need to build your web application.

* Node.js is like the land that the house is built on. It provides the underlying infrastructure that allows Express.js to work. Without Express.js, you could still build a web application using Node.js, but it would be much more difficult and time-consuming. Express.js provides a number of features that make it much easier to build web applications, such as routing, templating, and error handling.

## Why Use Express.js?

* **Simplifies Web Development:** Express simplifies the development of web applications by providing a higher-level abstraction over raw Node.js.

* **Middleware Support**: Express allows you to use middleware functions to perform various tasks during the **request-response** cycle, such as logging, authentication, etc.

* **Routing**: It provides a powerful routing system to define routes for different parts of your application and handle HTTP methods like **GET, POST,** etc.

* **Template Engines:** Express supports various template engines, making it easier to render dynamic content on the server side.

* **HTTP Utility Methods:** Express includes utility methods for handling HTTP functionality, making it easier to send responses, set headers, and more.

* **Scalability**: It's lightweight and flexible, allowing developers to structure their applications as needed, promoting scalability.

## Difference Between Node.js and Express.js

* **Node.js**: It is a runtime environment that allows you to execute JavaScript code on the server side. It provides the core functionality for building server-side applications.

* **Express.js:** It is a web application framework built on top of Node.js. Express adds features and tools for building web applications and APIs, simplifying the development process.

##  Functionality of Express.js

* **Routing**: Define routes for different parts of your application and handle HTTP methods.

* **Middleware**: Use middleware functions to execute code during the request-response cycle.

* **Template Engines**: Render dynamic content on the server side using template engines like EJS, Handlebars, etc.

* **Static File Serving**: Serve static files, such as images, stylesheets, and scripts.

* **Error Handling:** Implement error-handling middleware to manage errors in a centralized way.

* **HTTP Methods:** Easily handle various HTTP methods (GET, POST, PUT, DELETE, etc.) for different routes.

* **Request and Response Handling:** Simplify handling of incoming requests and sending responses.

* **Session Management:** Implement session management and cookies for user authentication.

## Installation

```
npm install express
```

## Hello World

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(5000, () => {
    console.log('app listening to port:5000');
})
```

### Step by Step explanation

#### 1. Import express 

```js
const express = require('express');
```
This line imports the `Express.js` framework into your `Node.js` application.

#### 2. Create an Express App

```js
const app = express();
```

This line creates an instance of the Express application. The app variable will be used to configure **routes and start the server**.

#### 3. Define a Route

```js
app.get('/', (req, res) => {
    res.send('hello world');
})
```

This code defines a route for the HTTP `GET` request to the root path (`'/'`). When a client accesses the root path, the server responds with the string **'hello world'**.

#### 4. Start the Server 

```js
app.listen(5000, () => {
    console.log('app listening to port:5000');
});
```

This line makes the Express app listen on port **5000**. The listen method takes a callback function that will be executed once the server is successfully started. In this case, it logs a message to the console.

#### 5. Run your App

```
nodemon app.js
```
In the CLI, navigate to the directory and run the following command to start your app

#### 6. Test your app

```
http://localhost:5000
```

Open your web browser and navigate to http://localhost:3000. You should see a message that says **hello world"**.
That's it! You have successfully installed Express.js and created a simple app.