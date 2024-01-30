# 💫 Deliver HTML Page

## ⭐ HTML Setup

1. First Make a Folder name "**public**" in your project folder.

2. Inside the public folder make a file name "**about.html**" and write some html code.

![demo](/assets/demo13.png)

### ✨ Defining Basic HTML, CSS code 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Page</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>This is About page send from server, which applies CSS</h1>
</body>
</html>
```

```css
body 
{
    background-color: #202020;
    color:white;
}
```
### ✨ Node.js Setup

First inside open your `index.js` file and write the following code.

```js
const express = require('express');
const app = express();

app.listen(5000);
```

This will call the express module and create a server on port `5000`.

### ✨ Defining Path

Now we want the `path` of the project folder so we will use `__dirname`. So write the following code.

```js
const express = require('express');
const app = express();
const path = require('path');

app.listen(5000);

const publicPath = path.join(__dirname, 'public');
```

### ✨ Serve Static Files Using `express.static`

```js
const express = require('express');
const app = express();
const path = require('path');

app.listen(5000);

const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));
```

* Use `app.use()` to add middleware to the Express application. In this case, it's the express.static middleware.

* `express.static(publicPath)` is middleware that serves static files from the specified directory (`publicPath`). This means that any file in the "**public**" directory can be accessed directly by the client.

> Here `use` method is used to use the express static middleware means if you have any static files like html, css, js, images, etc. then you can use this middleware to serve the static files to the browser. Use method takes the path of the public folder as an argument It is the function of the express module. this app is coming from the express module because we have called the express module in the first line and stored it in the app variable.

### ✨ localhost:5000

Now open you browser and type `http://localhost:5000/about.html` and you will see the about page.

![demo](/assets/demo15.png)

> Also supports `script` tag and javascript files.

---

## ⭐ Remove Extension

we learned how to render html static page using express static middleware to serve the static files from the public folder. In this section, we will learn how to remove the extension from the URL.

### ✨ What is the exact problem?

The main problem is that we have to write the extension of the file in the URL. For example, if we want to access the index.html file, we have to write the URL as `http://localhost:3000/index.html`. But we want to access the index.html file using the URL `http://localhost:3000/index`.

### ✨ How to solve the problem?

We simply use get method of express to render the html file. We will use the `res.sendFile()` method to render the html file. The `res.sendFile()` method takes the path of the file as the first argument.

#### ✒️ Consider this example

```js
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
```

#### ✒️ Code look like this 

```js
const express = require('express');
const app = express();
const path = require('path');

app.listen(5000);

const publicPath = path.join(__dirname, 'public');

app.get('/about', (req, res) => {
    res.sendFile(`${publicPath}/about.html`);
})
```

#### ✒️ Breakdown

* Now, we can access the about.html file using the URL http://localhost:5001/about. We don't have to write the extension of the file in the URL.

* We will use `sendFile()` method to render the html file. We don't use `send()` method to render the html file because **`send()` method will send the html file as a string.** But we want to send the html file as a file.

* `publicPath` is the path of the public folder. We will use this path to render the html file.

* and `/about.html` is the path of the about.html file. We will use this path to render the html file.

### ✨ Default Page - 404

Suppose user type wrong URL in the browser. For example, if user type `http://localhost:5001/abou` in the browser, then the browser will show the error message `Cannot GET /abou`. We want to show the default page if the user type wrong URL in the browser.

```js
app.get('*', (req, res) => {
    res.sendFile(`${publicPath}/404.html`);
});
```