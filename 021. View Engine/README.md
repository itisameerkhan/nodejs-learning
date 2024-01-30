# 📍 View Engines

<img src='https://blog.logrocket.com/wp-content/uploads/2021/12/template-engine-visual.png'>

## ⭐ EJS 

EJS (Embedded JavaScript) is a simple templating engine that allows you to embed JavaScript code within your HTML templates. It enables dynamic content generation on the server-side, making it easier to generate HTML with data from your server.

* **Embedded JavaScript Code**: EJS allows you to embed JavaScript code directly within your HTML templates using special tags. This makes it easy to include dynamic data, execute JavaScript logic, and create reusable components.

* **Easy Integration**: EJS can be easily integrated into Express.js applications as a view engine. View engines in Express are responsible for rendering dynamic content on the server-side before sending it to the client.

* **Syntax**: EJS uses `<% %>` tags for embedding JavaScript logic and <%= %> tags for outputting the result of expressions. For example:

```html
<h1>Hello, <%= username %></h1>
```

## ⭐ EJS TAGS

* `<%` 'Scriptlet' tag, for control-flow, no output

* `<%_` ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
* `<%=` Outputs the value into the template (HTML escaped)
* `<%-` Outputs the unescaped value into the template
* `<%#` Comment tag, no execution, no output
* `<%%` Outputs a literal `<%`
* `%>` Plain ending tag
* `-%>` Trim-mode ('newline slurp') tag, trims following newline
* `_%>` ‘Whitespace Slurping’ ending tag, removes all whitespace after it

### ✨ Installation

```cmd
npm install ejs
```

### ✨ Setup view engine

The view engine is responsible for rendering dynamic content (usually HTML) on the server side based on templates. In this case, it specifically sets EJS (Embedded JavaScript) as the view engine.

```js
app.set('view engine', 'ejs');
```

* `app.set()`: This method is used to configure various settings in an Express application. It allows you to set parameters that affect the behavior of the application.

* `view engine`: This is the setting key. It indicates that you are configuring the view engine for rendering templates.

* `ejs`: This is the value assigned to the 'view engine' setting. It specifies that EJS is the template engine to be used for rendering views.

> By setting the view engine to 'ejs', you are telling Express to use EJS to process and render the templates. Once this configuration is set, Express will automatically use EJS to render views without requiring you to specify the file extension (e.g., '.ejs') when rendering views.

### ✨ Setup directory


In Express.js, when you set a view engine like EJS using `app.set('view engine', 'ejs')`,**the framework expects that your view templates will be organized in a specific way.** By default, it looks for these templates in a directory called "**views**."

![demo](/assets/demo16.png)

#### ✒️ Covention over configuration

```lua
project/
|-- views/
|   |-- index.ejs
|   |-- about.ejs
|-- public/
|   |-- styles/
|       |-- style.css
|-- app.js

```

### ✨ Rendering EJS Files

```js
app.get('/', (req, res) => {
    res.render('index');
});
```

In this example, the `res.render()` statement renders the 'index.ejs' file using EJS as the `view engine`. The '`index`' file is located in the `views` directory, and you don't need to include the '.ejs' file extension when calling `res.render()` because of the earlier configuration with `app.set('view engine', 'ejs')`.

### ✨ Example 

```js
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/blogs/create', (req, res) => {
    res.render('create');
});

app.use((req, res) => {
    res.status(404).render('404');
});

app.listen(5000, () => {
    console.log('listening to port: 5000');
});
```

## ⭐ Creating Dynamic Content

 `<% %>` is used to embed JavaScript code within HTML or template files, and `<%= %>` is used to output the result of an expression. Let's break down the provided EJS code:

```js
<% const name = 'khan' %> 
<p><%= name %></p> 
```

### ✨ Pass dynamic data from `app.js`

```js
app.get('/', (req, res) => {
    res.send('index', {title : 'Some datas'});
})
```

#### ✒️ `res.render('index', { title: 'Home' });`

* The `res.render` method is used to render an HTML view and send it as the response to the client.

* '`index`' is the name of the view (EJS template) that will be rendered. 

* Express, by default, looks for views in a folder called "`views`," so it will try to find a file named "`index.ejs`" in that folder.
`{ title: 'Home' }` is an object containing data that can be passed to the view. In this case, it includes a title property with the value '**Some datas**'.

#### ✒️ We can access this datas from EJS `index.ejs` using `<%= %>`

```html
<div>
    <h1> <%= title %> </h1>
</div>
```

### ✨ Cycling the Dynamic data

Consider this example

```js
app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi find eggs', snippet: 'lorem ipsom someting like that'},
        {title: 'Mario find store', snippet: 'lorem ipsom someting like that'},
        {title: 'How to defeat bowser', snippet: 'lorem ipsom someting like that'},
    ]
    res.render('index', {blogs: blogs});
});
```

To access this data in `index.ejs` file, 

```html
<div class="blogs content">
        <h2>All Blogs</h2>
        <% if(blogs.length > 0) {  %>
            <% blogs.forEach(blog => { %>
                <h3 class="title"> <%= blog.title %> </h3>
                <p class="snippet"> <%= blog.snippet %> </p>
            <% }) %>
        <% }  else { %>
            <p>There are no Blogs to display....</p>
        <% } %>
    </div>
```

### ✨ Partials


Creating partials in EJS is a great way to reuse code and improve the organization of your templates. Here's how you can do it:

#### ✒️ 1. Create the Partial File:

Within your project's views directory, create a new file for your partial. For example, you could create a file named `nav.ejs` to store your header HTML.

![demo](/assets/demo17.png)

#### ✒️ 2. Write the Partial Content

Inside the partial file, write the HTML code you want to reuse. This could be a header, footer, navigation bar, or any other reusable component.

`views/partials/nav.ejs`

```html
<nav>
    <div class="site-title">
        <a href="/">
            <h1>Blog Ninja</h1>
        </a>
        <p>A Net Ninja Site.</p>
    </div>
    <ul>
        <li><a href="/">Blog</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/blogs/create">New Blog</a></li>
    </ul>
</nav>
```

#### ✒️ 4. Include the Partial in Your Template

In your main template file (e.g., index.ejs), use the `<%- include( './path' ) %>` syntax to include the partial. Remember to use the hyphen - for raw HTML output.

```html
<!DOCTYPE html>
<html lang="en">
    <%- include('./partials/head.ejs') %>
<body>
    <%- include('./partials/nav.ejs') %>
    <div>
        <h1>some content</h1>
    </div>
    <%- include('./partials/footer.ejs') %>
</body>
</html>
```