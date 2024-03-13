# 📍 Error Handling

![demo](https://www.securecoding.com/wp-content/uploads/2021/09/Secure-Your-Nodejs-Application-With-Proper-Error-Handling.png)

## ⭐ Creating a Error Object

### 🚫 Error Object

#### 💻 To create a Error object using new `Error`

```js
const error = new Error("Something went error");
```

#### 🌐 Console

![demo](/assets/demo22.png)

#### 💻 Error message

```js
console.log(error.message);
```

#### 🌐 console

```cmd
Something went error
```
#### 💻Stack Trace

```js
console.log(error.stack);
```

#### 🌐 console

```cmd
Error: Something went error
    at Object.<anonymous> (c:\Users\This PC\OneDrive\Desktop\Express Tuts\error.js:1:15)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47
```

### 🚫 custom error 

`customError.js`

```js
export class customError extends Error {
    constructor(message) {
        super(message);
    }
}
```

`error.js`

```js
import { customError } from "./customError.js";

throw new customError("This is custom Error")
```

#### 🌐 console

```
file:///c:/Users/This%20PC/OneDrive/Desktop/Express%20Tuts/error.js:3
throw new customError("This is custom Error")
      ^

customError: This is custom Error
    at file:///c:/Users/This%20PC/OneDrive/Desktop/Express%20Tuts/error.js:3:7
    at ModuleJob.run (node:internal/modules/esm/module_job:194:25)

Node.js v18.15.0
```

### 🚫 try / catch

#### 💻 code snippet

```js
try {
    doSomething();
} catch(e) {
    console.log("ERROR OCCURED");
    console.log(e);
}
```

#### 🌐 console

```
ERROR OCCURED
ReferenceError: doSomething is not defined
    at file:///c:/Users/This%20PC/OneDrive/Desktop/Express%20Tuts/error.js:2:5
    at ModuleJob.run (node:internal/modules/esm/module_job:194:25)
```

### 🚫 Exception with Promises

#### 💻 code snippet 

```js
const doSomething = (message) => {
  console.log(message);
  return `PROMISE IS -> ${message}`;
};

const promise = new Promise((resolve, reject) => {
  if (false) {
    resolve(doSomething("RESOLVE"));
  } else {
    reject(doSomething("REJECT"));
  }
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("CAUGHT ERROR");
    console.log(err);
  });
```

#### 🌐 console

```cmd
REJECT
CAUGHT ERROR
PROMISE IS -> REJECT
```

### 🚫 Exceptions in `async` / `await`

#### 💻 code snippet 

```js
const doSomething = () => {
  const status = false;
  return new Promise((resolve, reject) => {
    if (status) resolve("PROMISE RESOLVED");
    reject("PROMISE REJECTED");
  });
};

const someFunction = async () => {
  try {
    const data = await doSomething();
    console.log(data);
  } catch (e) {
    console.log("ERROR AND EXCEPTION CATCHED")
    console.log(e);
  }
};

someFunction();
```

#### 🌐 console

```cmd
ERROR AND EXCEPTION CATCHED
PROMISE REJECTED
```