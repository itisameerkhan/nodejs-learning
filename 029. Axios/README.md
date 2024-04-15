# 📍 Axios

<div align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Axios_%28computer_library%29_logo.svg/2560px-Axios_%28computer_library%29_logo.svg.png" />
</div>

<br>
<br>
<br>

Axios is a popular npm library used for making HTTP requests from the browser or Node.js environment. It provides a simple and intuitive API for performing asynchronous HTTP requests, handling request and response data, and supporting various features such as request and response interception, automatic transformation of request and response data, and more.


Axios is a **promise-based** HTTP Client for node.js and the browser. It has an isomorphic shape ( it can run in the browser and nodejs with the same codebase). It uses the native node.js **http** module on the server, and **XMLHttpRequests** on the client (browser).

### ⚡ Key Features

* **Simplicity**: Axios offers a clean and easy-to-use API, making it straightforward to send HTTP requests and handle responses. Its API is promise-based, which allows you to use modern JavaScript features like async/await for handling asynchronous operations.

* **Browser and Node.js Support**: Axios can be used both in the browser and in Node.js environments, making it versatile for building full-stack applications or server-side applications.

* **Request and Response Interceptors**: Axios provides interceptors that allow you to globally intercept requests or responses before they are sent or received. This is useful for tasks such as modifying headers, logging requests and responses, or handling errors globally.

* **Automatic Data Transformation**: Axios automatically serializes JavaScript objects to JSON for request data and parses JSON responses into JavaScript objects. It also supports other data formats like FormData, ArrayBuffer, and Blob out of the box. (*)

* **CSRF Protection**: Axios provides built-in support for CSRF (Cross-Site Request Forgery) protection by allowing you to set custom headers or use browser cookies for CSRF tokens.

* **Canceling Requests**: Axios supports canceling requests, which is useful for scenarios like canceling an ongoing request when a user navigates away from a page or when a component unmounts in a React application.

* **Progress Tracking**: Axios allows you to track upload and download progress of requests using the built-in progress event.

## 💻 Installation

**npm**:

```
npm i axios
```

**Using yarn**:

```
yarn add axios
```

**Using jsDelivr CDN:**

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

**Using unpkg CDN:**

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

## ⭐ Making Request

In Axios, a request is an HTTP call to a server. It can be a `GET`, `POST`, `PUT`, `DELETE`, or any other HTTP method used to interact with a server. To make a request with Axios, you use one of the HTTP method functions (`axios.get`, `axios.post`, `axios.put`, `axios.delete`, etc.) along with the URL you want to send the request to.

### ⚡ `GET` request `async/await`

```js
import axios from "axios";

const someFunction = async() => {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response);
}

someFunction();
```

#### 💻 console

![demo](/assets/demo23.png)

### ⚡ Explanation


When you make a `GET` request using Axios, the `axios.get()` function returns a Promise. The resolved value of this Promise is an Axios response object, which contains various properties and methods providing information about the HTTP response. Here's a detailed explanation of the properties you typically encounter in an Axios response object:

1. **data**: This property contains the response data received from the server. It can be an object, array, string, or any other data type depending on the server's response. You access the response data using `response.data`.

2. **status**: This property contains the HTTP status code of the response (e.g., 200 for OK, 404 for Not Found, etc.). You access the status code using `response.status`.

3. **statusText**: This property contains the status text corresponding to the status code of the response (e.g., "OK" for 200, "Not Found" for 404, etc.). You access the status text using `response.statusText`

4. **headers**: This property contains the headers of the response as an object. Each header is represented as a key-value pair in this object. You access individual headers using **response.headers**.

5. **config**: This property contains the Axios request configuration that was used to make the request. It includes information such as the request URL, request method, request headers, etc. You can access the request configuration using `response.config`.

6. **request**: This property contains the underlying `XMLHttpRequest` object (in the browser) or `HTTP` request object (in Node.js) that was used to make the request. You can access this object using `response.request`

### ⚡ `POST` using `async/await`

```jsx
const doSomething = async() => {
    const response = await axios.post(
        "http://localhost:8080/api/signup",
        {
            username: "khan",
            email: "khan@example.com",
            password: "password",
        }
    );
    console.log(response);
}
```

#### 💻 console

![demo](/assets/demo23.png)