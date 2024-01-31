# 📍 Middleware

<img src='https://www.simplilearn.com/ice9/free_resources_article_thumb/ExpressJS_Middleware_1.png'>

In Express.js, **middleware** functions are an integral part of the request-response cycle. Middleware functions have access to the request object (`req`), the response object (`res`), and the `next` middleware function in the application’s request-response cycle, which is typically denoted by the next parameter. Middleware functions can perform various tasks, modify request or response objects, end the request-response cycle, and call the next middleware in the stack.

### ✨ Why we use Middleware

1. Request and Response Modification

2. Logging and Debugging

3. Authentication and Authorization

4. Error Handling

5. Route-specific Logic

6. Third-Party Integrations

7. Code Reusability

### ✨ Middleware functions can perform the following tasks:

* Execute any code.

* Make changes to the request and the response objects.
* End the request-response cycle.
* Call the next middleware in the stack.

### ✨ `app.use()` method

In Express.js, `app.use()` is a method used to mount middleware functions in the application's request processing pipeline. Middleware functions in Express have access to the request (`req`) and response (`res`) objects, and they can perform various tasks during the processing of an HTTP request. The `app.use()` method is a primary way to apply middleware to the entire application or specific routes.

`app.use([path,] callback [, callback...])`

| Argument | Description | Default 
| --- | --- | --- | 
path | path	The path for which the middleware function is invoked; can be any of: | `\`
|     |   A string representing a path. 
||      A path pattern.
||A regular expression pattern to match paths.
||An array of combinations of any of the above.
| callback	| A middleware function. | None
|| A series of middleware functions (separated by commas).
|| An array of middleware functions.
|| A combination of all of the above.

### ✨ Consider this example

```js
app.use((req, res) => {
    console.log('new request made');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
});

app.get('/', (req, res) => {
    res.render('index', {title: 'Home'});
});
```

### ✨ output

![demo](/assets/demo18.png)

*  you've defined a middleware using `app.use()` that logs information about each incoming request, such as the `hostname`, `path`, and `method`.

* Following the middleware definition, there is an app.get() route handler for the root path ('`/`'), which renders an '`index`' view with a title.

* However, the `app.get()` route handler might not be invoked for requests because the middleware defined with `app.use()` doesn't call the `next()` function to pass control to the next middleware or route handler. In Express, it's crucial to call `next()` within middleware functions to allow the request to move on to subsequent middleware or route handlers.

### ✨ `next()`

n Express.js, `next()` is a function that is used within middleware functions to pass control to the next middleware function in the application's request-response cycle. It's an essential mechanism for handling multiple middleware functions and routing logic.

* When `next()` is called within a middleware function, it signals to Express that the current middleware function has completed its processing and that control should be passed to the next middleware or route handler.

### ✨ To Fix this 

```js
app.use((req, res,next) => {
    console.log('new request made');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);

    next();
});

app.get('/', (req, res) => {
    res.render('index', {title: 'Home'});
});
```

## ⭐ Static files

The `express.static` middleware function in Express.js is used to serve static files, such as images, CSS files, and JavaScript files, from a specified directory. It simplifies the process of serving static assets and is often used to make client-side resources accessible to the web browser.

```js
express.static(root, [options])
```

In the example above, the express.static middleware is configured to serve files from the '`public`' directory. If there is a file named 'example.jpg' in the '`public`' directory, it can be accessed at `http://localhost:5000/example.jpg`



Why we include path of `style.css` it doesn't apply styles and sends response back to the client.

![demo](/assets/demo19.png)

we get `404` status code

![demo](/assets/demo20.png)

### ✨ To fix this 

create a folder named `public` store all the static files thats need to be send as response to the browser.

![demo](/assets/dmeo21.png)

include the path in `ejs` file as `styles.css` not `/public/style.css`

```html
<link rel="stylesheet" href='/styles.css'>
```

To access this public files, we need middleware called `static`.

```js
app.use(express.static('public'));
```

which takes `public` folder and anything inside it, send as response to the client, and we can access them 