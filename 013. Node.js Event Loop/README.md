# Node.js Event Loop

![demo](/assets/node10.webp)

Node.js operates on a **single-threaded, event-driven model**. The event loop is a fundamental part of this architecture, and it's crucial to understanding how Node.js handles asynchronous operations efficiently. Here's a detailed explanation of the Node.js event loop

* Javascritpt is a synchronous, single-threaded language.
* To make async program possible, we need **[libuv](https://libuv.org)**

**Let’s quickly take a look at what’s happening when we’re running this code in a browser:**

```js
const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"), 500);
const baz = () => console.log("Third");

bar();
foo();
baz();
```

**output**

```
First
Third
Second
```

**Visual Representation**

![demo](/assets/node11.gif)

#### Explanation

* when we invoke `bar` function. which is added to the callstack, which returns `setTimeout` function, which is then added to WebAPIs. and `bar` function gets popped out of the callstack. meanwhile timer runs.

* on the otherhand `foo` function invokes, which is then added to the callstack. after executing, it is popped out of callstack.

* after that, `bar` function invokes, which is then added to the callstack. after executing, it is popped out of callstack.

* when the timer runs out of the WebAPIs, the callback function added to the **callback queue**, afterwards the **Event Loops** checks for the empty callstack and events in **callback queue**, If the call stack is empty, it will take the first task from the callback queue and push it to the call stack, which effectively runs it. This process will continue until the call stack is not empty or the callback queue is not empty. once the callback function execution completes, it popped out of the callstack.

> This happens in javascript run time environment which happens in the browser.

---

#### On Node.js instead of WebAPIs. its uses **[libuv](https://libuv.org)**

## What is libuv? Why do we need it?

Libuv is an open-source library that handles the thread-pool, doing signaling, inter process communications all other magic needed to make the asynchronous tasks work at all. Libuv was originally developed for Node.js itself as an abstraction around libev, however, by now, multiple projects are already using it.

**Most people think libuv is the event loop itself, this is not true,** libuv implements a full featured event loop, but also is the home of several other key parts of Node, such as:

* TCP and UDP sockets of the net package
* Async DNS resolutions
* Async file and file system operations (like the one we're doing here)
* File System events
* IPC
* Child processes and shell control
* Thread pool
* Signal handling
* High resolution clock

--- 

consider this example: 

```js
const fs = require('fs')

console.log('start');

fs.readFile(filePath, (err, data) => {
    console.log(data);
})

console.log('end');
```

In this code consider the table

### Step 1 

| Memory (local) | callstack | console  | callback queue | 
| --- | --- | --- | --- |
| fs |  

Memory allocated for fs

---

### Step 2

| Memory (local) | callstack | console  | callback queue | libuv |
| --- | --- | --- | --- | --- |
| fs |  anonymous 3 | start |  |

| Memory (local) | callstack | console  | callback queue | libuv |
| --- | --- | --- | --- | --- |
| fs |   | start | 

---

### Step 3

| Memory (local) | callstack | console  | callback queue | libuv |
| --- | --- | --- | --- | --- |
| fs |  anonymous 5 | start | 

| Memory (local) | callstack | console  | callback queue | libuv
| --- | --- | --- | --- | --- |
| fs |   | start | | (callbackfn)🌐


> after callback function is executed which is then pushed into callback queue, event loop checks for the callstack to empty, when its find it empty then push callback function into the callstack

### Step 4 

| Memory (local) | callstack | console  | callback queue | libuv
| --- | --- | --- | --- | --- |
| fs | anonymous 9  | start | (callbackfn) | 
|  |    | end |  | 

| Memory (local) | callstack | console  | callback queue | libuv
| --- | --- | --- | --- | --- |
| fs |  | start | (callbackfn) | 
|  |    | end |  | 

### Step 5

| Memory (local) | callstack | console  | callback queue | libuv
| --- | --- | --- | --- | --- |
| fs |  | start | (callbackfn) | 
|  |    | end |  | 

once the callback function is empty event loop pushes the callback function into callstack one by one in FIFO order.

| Memory (local) | callstack | console  | callback queue | libuv
| --- | --- | --- | --- | --- |
| fs | (callbackfn)  | start |  | 
|  |    | end |  | 

| Memory (local) | callstack | console  | callback queue | libuv
| --- | --- | --- | --- | --- |
| fs | (callbackfn)  | start |  | 
|  |    | end |  | 
|  |    | data inside file |  | 

| Memory (local) | callstack | console  | callback queue | libuv
| --- | --- | --- | --- | --- |
|  |   | start |  | 
|  |    | end |  | 
|  |    | data inside file |  | 