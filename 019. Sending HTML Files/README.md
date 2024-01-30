# 📍 Sending HTML Files

![demo](/assets/demo11.png)

### ✨ You can simply add `h1` tag to the `res.send()` function to render HTML pages.

```js
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})
```

### ✨ Suppose you want take an input from the user on the about page you can do it like this

```js
app.get('/about', (req, res) => {
    res.send(
    `<label>Enter your name</label>
    <input type="text" />`
    )
})
```

### ✨ Suppose You want jump `home` page to `about` page you can do it like this

```js
app.get('/', (req, res) => {
    res.send(`
    <h1>This is Home page</h1>
    <a href="/about">About Page</a>
    `)
});

app.get('/about', (req, res) => {
    res.send(`
    <h1>This is About page</h1>
    <a href="/">Home Page</a>
    `)
});
```

### ✨ Parameters in the URL

suppose you hit `localhost:5001/about?name=Khan` and you want to get the name of the user in the tag you can do it like this.

```js
app.get('/about', (req, res) => {
    res.send(`
    <h1>This is About Page</h1>
    <h1>Namaste, ${req.query.name}</h1>
    `)
});
```
![demo](/assets/demo12.png)

### ✨ Query Parameters

In Express.js, `req.query` is an object containing the parsed query parameters from the URL. The query parameters are the key-value pairs that appear after the question mark `?` in a URL. For example, in the URL `http://example.com/search?name=John&age=25`, the query parameters are `name=John` and `age=25`.

#### Here's a breakdown of req.query.name in the context of Express.js:

* `req`: The request object provided by Express to the route handler.

* `req.query`: The query property of the request object, which contains an object representing the parsed query parameters.

* `req.query.name`: Accessing the name property from the parsed query parameters.


### ✨ send response of HTML with `res.sendFile()`

In Express.js, the `res.sendFile()` method is used to send files as a response to HTTP requests. It is particularly useful for serving static files, such as HTML, images, CSS, and JavaScript files. The method takes the absolute path of the file to be sent as an argument and streams the file to the client.

```js
app.get('/', (req, res) => {
    res.sendFile('./views/index.html');
});
```

When we send `response` like this we got error.

```
TypeError: path must be absolute or specify root to res.sendFile
    at ServerResponse.sendFile (D:\NodeJS\node_modules\express\lib\response.js:441:11)
    at D:\NodeJS\app.js:5:9
    at Layer.handle [as handle_request] (D:\NodeJS\node_modules\express\lib\router\layer.js:95:5)
    at next (D:\NodeJS\node_modules\express\lib\router\route.js:144:13)
    at Route.dispatch (D:\NodeJS\node_modules\express\lib\router\route.js:114:3)
    at Layer.handle [as handle_request] (D:\NodeJS\node_modules\express\lib\router\layer.js:95:5)
    at D:\NodeJS\node_modules\express\lib\router\index.js:284:15
    at Function.process_params (D:\NodeJS\node_modules\express\lib\router\index.js:346:12)
    at next (D:\NodeJS\node_modules\express\lib\router\index.js:280:10)
    at expressInit (D:\NodeJS\node_modules\express\lib\middleware\init.js:40:5)
```

The error is pretty clear, you need to specify an absolute (instead of relative) path and/or set root in the config object for `res.sendFile()`. Examples:

```js
res.sendFile(__dirname + '/index.html');
```

or specify a root which is used as the base path for the first argument to `res.sendFile()`

```js
res.sendFile('index.html', { root: __dirname });
```

### ✨ To Fix This

```js
app.get('/', (req, res) => {
    res.sendFile('./views/index.html', {root: __dirname});
});
```

### ✨ Redirects

In Express.js, you can use the `res.redirect()` method to redirect a request to a different URL. The method takes either a URL string or a status code and a URL string as arguments. Here are some examples:

```js
app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', {root: __dirname});
});
app.get('/about-page', (req, res) => {
    res.redirect('/about');
})
```

#### ✒️ Redirect to a Different URL

```js
app.get('old-url', (req, res) => {
    res.redirect('/new-url')
})
```

#### ✒️ Redirect with a Status Code

```js
app.get('/temporary-redirect', (req, res) => {
  res.redirect(302, '/new-url');
});

app.get('/permanent-redirect', (req, res) => {
  res.redirect(301, '/new-url');
});

```

* **`302`**: Redirect with a 302 status code (temporary redirect)

* **`301`**: Redirect with a 301 status code (permanent redirect)

#### ✒️ Redirect with Query Parameters

```js
app.get('/old-url', (req, res) => {
    res.redirect('/new-url?param1=namaste');
})
```

#### ✒️ Redirect using Route Parameters

```js
app.get('/users/:id', (req, res) => {
    res.redirect(`/users/${req.params.id}`);
})
```

### ✨ 404

```js
app.get('/', (req, res) => {
    res.sendFile('./views/index.html', {root: __dirname});
});
app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', {root: __dirname});
});

app.use((req, res) => {
    res.sendFile('./views/404.html', {root: __dirname});
})
```

#### ✒️ 1. Serve the Home Page ('/') Route

```js
app.get('/', (req, res) => {
    res.sendFile('./views/index.html', {root: __dirname});
});
```

* This code sets up a route for the root URL ('/'). When a user accesses the home page, Express will respond by sending the "index.html" file located in the "views" directory.

* `res.sendFile('./views/index.html', {root: __dirname});` specifies the relative path to the HTML file. `{root: __dirname}` sets the root directory for the file, ensuring it's served from the correct location.

#### ✒️ 2. Serve the About Page ('/about') Route

```js
app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', {root: __dirname});
});
```

This code sets up a route for the `/about` URL. When a user accesses the `/about` route, Express will respond by sending the `about.html` file located in the `views` directory.

#### ✒️ 3. 404 Not Found Page

```js
app.use((req, res) => {
    res.sendFile('./views/404.html', {root: __dirname});
});
```

* This code uses `app.use()` to define a middleware that will be executed for all requests. If no previous routes match the requested URL, this middleware will be triggered.

* The middleware sends the `404.html` file from the `views` directory in case of a route that doesn't match any defined routes. This is a common practice for handling undefined routes, serving a custom **404 page**.