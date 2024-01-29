# 📍 Express Application Generator

![demo](/assets/demo10.png)

`express-generator` is a command-line tool that streamlines the process of creating new Express.js applications. It provides a pre-defined structure and essential settings, saving you time and effort in setting up your project.

### ✨ Reason to use

* **Efficiency**: Generates the basic boilerplate code, including routing, middleware, and configuration files, allowing you to focus on your application's unique logic.

* **Flexibility**: Offers customization options during setup, such as selecting view engines, middleware, and other features.

* **Best Practices**: Adheres to common Express project organization standards, promoting maintainability and readability.

* **Consistency**: Ensures consistency across projects, especially when working in teams, promoting code clarity and collaboration.

* **Testing Support**: Often automatically includes test setups to facilitate robust unit and integration testing, leading to more reliable applications.

### ✨ Installation

```
npx express-generator [app-name]
```

For example, the following creates an Express app named `express-app`. The app will be created in a folder named `express-app` in the current working directory and the view engine will be set to `Pug`.

```
   create : express-app\
   create : express-app\public\
   create : express-app\public\javascripts\
   create : express-app\public\images\
   create : express-app\public\stylesheets\
   create : express-app\public\stylesheets\style.css
   create : express-app\routes\
   create : express-app\routes\index.js
   create : express-app\routes\users.js
   create : express-app\views\
   create : express-app\views\error.jade
   create : express-app\views\index.jade
   create : express-app\views\layout.jade
   create : express-app\app.js
   create : express-app\package.json
   create : express-app\bin\
   create : express-app\bin\www
```

To install dependencies

```cmd
cd express-app
npm install
```

#### On Windows Command Prompt, use this command:

```cmd
set DEBUG=express-app:* & npm start
```

#### On Windows PowerShell, use this command:

```cmd
$env:DEBUG='express-app:*'; npm start
```