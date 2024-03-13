# 📍 `express-async-handler`

![demo](https://cdn.hashnode.com/res/hashnode/image/upload/v1569999648738/ucHKN4X_c.png)

`express-async-handler` is a middleware for Express.js that simplifies error handling in asynchronous route handlers. It allows you to write route handlers using asynchronous functions without worrying about explicitly catching errors or manually passing them to the next middleware function.

### 🚩 Asynchronous Operations:

* Express route handlers often involve asynchronous operations like database queries or API calls.

* Handling errors from these operations can be verbose and may lead to repetitive try/catch blocks in each route handler.

### 🚩 Error Handling in Express:

* Express has a built-in error-handling mechanism that involves defining middleware functions with four parameters `(err, req, res, next)`.

* When an error occurs in a route handler, it can be passed to the next function, triggering the error-handling middleware.

### 🔗 Async/Await in Express.js

Express.js supports asynchronous route handlers using `async` functions with `await` keyword. This allows you to write cleaner and more readable code for handling asynchronous operations such as database queries, file I/O, or external API calls.

```js
app.get('/example', async (req, res, next) => {
    try {
        const result = await someAsyncOperation();
        res.json(result);
    } catch (error) {
        next(error); // Pass error to Express error handler
    }
});
```

### 🔗 Problem with Error Handling:

When using async/await in Express.js route handlers, you need to handle errors manually by wrapping the asynchronous code in a try-catch block. This can lead to repetitive boilerplate code and make the route handler less readable.

### 🔗 Solution - `express-async-handler`:

`express-async-handler` simplifies error handling in async route handlers by wrapping them automatically. It intercepts any errors thrown by the asynchronous function and passes them to the Express.js error handling middleware.

```js
import asyncHandler from 'express-async-handler';

app.get('/example', asyncHandler(async (req, res) => {
    const result = await someAsyncOperation();
    res.json(result);
}));
```

With `express-async-handler`, you don't need to use `try-catch` blocks explicitly. If an error occurs inside the `async` function, `express-async-handler` catches it and passes it to the `next` Express.js error handling middleware.

### 🔗 Error Handling Middleware:

It's important to have error handling middleware set up in your Express.js application to catch and handle errors. This middleware typically has four parameters `(err, req, res, next)` and is defined after all other middleware and route handlers.

```js
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
```



