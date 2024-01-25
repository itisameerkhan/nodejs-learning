## What are client side and server side ?

## Client Side: 

* The client-side is the part of a web application that runs in the user's web browser. It includes the user interface and functionality that users interact with directly. Commonly written in JavaScript, HTML, and CSS, the client-side code is executed on the user's device.

* In a Node.js context, the term "client-side" might also refer to scripts that run in the browser and interact with a Node.js server. For example, you might use Node.js to serve static files (HTML, CSS, JavaScript) and handle API requests from the client-side.

* Popular client-side frameworks and libraries include React, Angular, and Vue.js. These frameworks facilitate the development of interactive and dynamic user interfaces.

## Server Side 

* The server-side is the backend or server part of a web application. It runs on a server and is responsible for processing requests, interacting with databases, and handling business logic. In a Node.js application, the server-side is typically written in JavaScript and executed on the server.

* On the server-side, Node.js applications handle tasks such as user authentication, database operations, and responding to HTTP requests. The server-side interacts with databases, external APIs, and other resources to generate dynamic content that is sent to the client-side.

---

**Client-Side (Browser)**: Code that runs in the user's browser, providing the user interface and interactivity.

**Server-Side (Node.js):** Code that runs on a server, handling requests, processing data, and generating dynamic content to be sent to the client.

--- 

## The V8 Javascript Engine

V8 is the JavaScript engine i.e. it parses and executes JavaScript code. The DOM, and the other Web Platform APIs (they all makeup runtime environment) are provided by the browser.

The cool thing is that the JavaScript engine is independent of the browser in which it's hosted. This key feature enabled the rise of Node.js. V8 was chosen to be the engine that powered Node.js back in 2009, and as the popularity of Node.js exploded, V8 became the engine that now powers an incredible amount of server-side code written in JavaScript.

## How Node.js uses Javascript ?

![demo1](/assets/demo1.png)

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, which allows JavaScript to be executed outside of a browser environment.

**V8 Engine**: The V8 engine is an open-source JavaScript and WebAssembly engine developed by the Chromium project for the Google Chrome browser. It is written in C++.

## What Developer makes with Node.js

Node.js is a versatile runtime environment that empowers developers to build a wide range of applications, from server-side web applications to command-line tools and real-time applications. Here are some common use cases and types of applications that developers build with Node.js

* Web Servers
* APIs (Application Programming Interfaces)
* Microservices 
* Command-Line Tools 
* Backend for Mobile Apps
* CMS (Content Management Systems)

## Differences between Node.js and the Browser

In the browser, most of the time what you are doing is interacting with the DOM, or other Web Platform APIs like Cookies. Those do not exist in Node.js, of course. You don't have the `document`, `window` and all the other objects that are provided by the browser.

Context | Node.js V8 | Browser V8 |
|---|---| --- |
|Environment | Runs in a server-side environment. | Runs in a client-side environment within web browsers.|
| Context and APIs | Includes APIs specific to server-side tasks, such as file system manipulation, networking, and access to operating system resources. | Provides APIs for interacting with the Document Object Model (DOM), handling events, and making asynchronous requests using XMLHttpRequest or the Fetch API. |
| Global Object | Has a global object named `global` that represents the global scope in Node.js. | Has a global object named `window` that represents the global scope in the browser.
| Modules and Dependency Management | Uses the CommonJS module system for module loading and dependency management in server-side JavaScript. | Uses ECMAScript modules (ESM) for module loading and dependency management in client-side JavaScript.
| Native Modules | Supports native add-ons written in C/C++ that can be loaded into Node.js applications | Typically doesn't support native add-ons. Browser environments rely on web APIs for additional functionality.
| Event Loop and Asynchronous I/O | Utilizes an event-driven, non-blocking I/O model to handle concurrent connections efficiently. | Also uses an event-driven, non-blocking I/O model to handle asynchronous tasks for a responsive user experience.
  

