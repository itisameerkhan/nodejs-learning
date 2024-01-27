# CRUD Operations

![dmeo](/assets/node9.png)

## What is CRUD ?

**CRUD stands for Create, Read, Update, and Delete.** These are the basic operations that you can perform on data in a database.

* **Create**: Create a new record in a database.
* **Read**: Read an existing record from a database.
* **Update**: Update an existing record in a database.
* **Delete**: Delete an existing record from a database.

---

## ➕ CREATE

* When we work with the file system module, we have to use the `fs` module.

* `fs.writeFileSync('hello.txt', 'Hello from Node.js');` will create a file named `hello.txt` and write the text **Hello from Node.js** to it.

* But if I want to make this file inside a folder named `crud`, then 

```js
fs.mkdirSync('crud');
fs.writeFileSync('crud/files.txt', 'hello from node')
```

---

```js
   // Import the path module to manipulate file and directory paths
   const path = require('path');
   // Import the fs module to perform file system operations
   const fs = require('fs');

   // Use the path.join() method to combine the current directory (__dirname) and the name of the crud folder into a single path
   const dirPath = path.join(__dirname, 'crud');
   fs.mkdirSync(dirPath);
   // Use a template literal to append the name of the hello.txt file to the dirPath variable and store the result in filePath
   const filePath = `${dirPath}/hello.txt`;

   // Use the fs.writeFileSync() method to create a new file at the filePath location and write a string of text to it
   fs.writeFileSync(filePath, 'Hello from Node.js');
```

---

## 🔍 READ 

* To read a file, we can use the `fs.readFile()` method.

* Use `readFile()` method to read the contents of the `hello.txt` file.

```js
const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'crud/hello.txt');

fs.readFile(dirPath, (error, data) => {
    if(error) console.log(error);
    else console.log(data);
})
```

You will get a result with a buffer.

>  <Buffer 48 65 6c 6c 6f 20 66 72 6f 6d 20 4e 6f 64 65 2e 6a 73>. 

Here buffer is a temporary storage spot for a file while it is being transferred from one place to another.

#### To solve this you have to pass another parameter `utf-8` to the `readFile()` method.

```js
const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'crud/hello.txt');

fs.readFile(dirPath,,'utf-8', (error, data) => {
    if(error) console.log(error);
    else console.log(data);
})
```

## 📝 UPDATE

To update a file, we can use the `fs.appendFile()` method.

```js
const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'crud/hello.txt');


fs.appendFile(dirPath, 'Iam appended text', (err) => {
    if(err) console.log(err);
    else console.log('file appended successfully');
})
```

---

## 📝 RENAME

We can use the `fs.rename()` method to rename a file.

```js
const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'crud/hello.txt');


fs.rename(dirPath, 'crud/rename.txt', (err) => {
    if(err) console.log(err);
    else console.log('rename success');
})
```

* `rename()` method takes two parameters, the first is the path to the file you want to rename, and the second is the path to the new file name.

* here `dirPath` is the path to the file you want to rename and `crud/rename.txt` is the path to the new file name.

---

## 🗑️ DELETE 

To delete a file, we can use the `fs.unlinkSync()` method.

```js
const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'crud/rename.txt');


fs.unlinkSync(dirPath, (err) => {
    if(err) console.log(err);
    else console.log('file deleted successfully');
})
```

`unlinkSync()` method takes one parameter, the path to the file you want to delete.

> This will delete the `rename.txt` file.