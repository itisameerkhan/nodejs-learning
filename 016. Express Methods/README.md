# 📍 Express Methods 

✨ In Express.js, there are various methods available to send responses back to the client. Here's an explanation of some commonly used response methods:

## ⭐ `res.send([body])`

* Sends the HTTP response.

* The body parameter can be a Buffer, a String, an Object, or an Array.

* Express automatically sets the appropriate Content-Type based on the body.

```js
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
```

## ⭐ `res.json([body])`

* Sends a JSON response.

* The body parameter can be any JSON-serializable value (Object, Array, Number, String, Boolean, or null).

* Sets the `Content-Type` to `application/json`.

```js
app.get('/', (req, res) => {
    res.json({"message" : "Hello world as JSON"})
})
```

## ⭐ `res.status(code)`

* Sets the HTTP status code for the response.

```js
app.get('/', (req, res) => {
    res.status(404).send('404 Not Found')
})
```

## ⭐ `res.redirect([status,] path)`

* Redirects to the specified path.

* The status parameter is optional (default is 302).

* If the path is a relative path, it is resolved relative to the URL of the current request.

```js
app.get('/old-path', (req, res) => {
    res.redirect('/new-path');
})
```