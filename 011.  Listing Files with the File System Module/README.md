# Listing Files with the File System Module

![demo](/assets/filesystems.jpeg)

###  Problem Statement : Make files in a folder

### 1. Create a folder named files in the root directory of your project.

making a simple file is very easy just use the fs module and call the `writeFileSync` method and pass the file name and the data you want to write in the file as the parameters.

```js
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.writeFileSync('text.txt', 'hello world');
    console.log('file created and write successfully');
})
```


In Node.js, `writeFileSync` is a method provided by the `fs` (File System) module. It is a **synchronous function** used to write data to a file. The "**Sync**" in its name indicates that the operation is synchronous, meaning it blocks the execution of the program until the write operation is complete.

```js
const http = require('http');
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'files'); // __dirname will give the current directory name and files is the folder name

const server = http.createServer((req, res) => {

    
    console.warn(dirPath); // D:\NodeJS\files

    if(!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
    } 

    for(let i=1;i<=10;i++) {
        const filePath = path.join(dirPath,  `file${i}.txt`);
        fs.writeFileSync(filePath, `hello world ${i}`);
    }

    res.end('files created successfully');

}).listen(5000);

```

### Explanation 

### 1. Import Necessary Modules

```js
const http = require('http');
const fs = require('fs');
const path = require('path');
```

Here, we import three Node.js modules: `http` for creating an HTTP server, `fs` for file system operations, and `path` for working with file paths.

### 2. Define Directory Path:

```js
const dirPath = path.join(__dirname, 'files');
```

This line defines the path for the '**files**' directory using `path.join. __dirname` represents the current directory of the script.

### 3. Create HTTP Server:

```js
const server = http.createServer((req, res) => {
```

This line creates an HTTP server. `The callback function (req, res) => { ... }` is executed for each incoming HTTP request.

### 4. Check and Create Directory:

```js
console.warn(dirPath);
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}
```

The script logs the directory path and checks if the '**files**' directory exists. If not, it creates the directory using `fs.mkdirSync`.

### 5. Create 10 Text Files:

```js
for (let i = 1; i <= 10; i++) {
    const filePath = path.join(dirPath, `file${i}.txt`);
    fs.writeFileSync(filePath, `hello world ${i}`);
}
```

Inside a loop, it creates 10 text files **(file1.txt to file10.txt)** in the 'files' directory. The file content is "hello world" followed by the file number.

### 6. Send Response:

```js
res.end('Files created successfully');
```

Once the files are created, it sends a response to the client with the message 'Files created successfully'.

### 7. Start Server:

```js
server.listen(5000);
```

---

## Problem Statement : We need to see the files in the folder

We are going to use `readdir`

```js
fs.readdir(dirPath, (err, files) => {
    if(err) console.log(err);
    else console.warn(files);
})
```

**output**

```
[
  'file1.txt', 'file10.txt',
  'file2.txt', 'file3.txt',
  'file4.txt', 'file5.txt',
  'file6.txt', 'file7.txt',
  'file8.txt', 'file9.txt',
]
```

### Code Explanation 

```js
fs.readdir(dirPath, (err, files) => {
    if (err) {
        console.log(err);
    } else {
        console.warn(files);
    }
});
```

This code uses the `fs.readdir` function to read the contents of a directory `(dirPath)`. Here's the explanation:

### Read Directory Contents:

```js
fs.readdir(dirPath, (err, files) => { ... });
```

The `fs.readdir` function is used to asynchronously read the contents of the specified directory (`dirPath`). It takes a callback function as an argument, which is executed once the directory reading is complete.