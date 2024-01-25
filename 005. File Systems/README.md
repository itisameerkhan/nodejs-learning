# File Systems

![fs](/assets/filesystems.jpeg)

In Node.js, the fs (File System) module provides an API for interacting with the file system. This module allows you to perform various file-related operations, such as reading and writing files, creating directories, and manipulating file attributes. Here are some commonly used functions from the fs module:

The Node.js file system module allows you to work with the file system on your computer.

To include the File System module, use the `require()` method:

```js
const fs = require('fs')
```

## Reading files

```js
const fs = require('fs');

fs.readFile('./text.txt', (error, data) => {
    if(error) console.log(error);
    else console.log(data.toString());
});
```

**output**: 
```
iam content inside text file
```

`readFile` is asynchronous so takes time to read file from directory.

```js
const fs = require('fs');

fs.readFile('./text.txt', (err, data) => {
    if(err) console.log(err);
    else console.log(data.toString());
})

console.log('last line');
```

**output:**

```
last line
iam content inside text file
```

## Writing Files

with `writeFile` method, the content inside the `text.txt` file is replaced with given strings.

**text.txt**

```
iam content inside text file
```

**file.js**

```js
const fs = require('fs');

fs.writeFile('./text.txt', 'hello world', () => {
    console.log('file was written')
});
```

**text.txt**

```
hello world
```

> **note**: if the file was not created. with the help of `writeFile`, it will create a file and add a text into it.

## Directories

`mkdir` used to create a folder.

```js
const fs = require('fs');

fs.mkdir('./assets', (err) => {
    if(err) console.log(err);
    else console.log('folder created')
})
```

**output**:

![assets](/assets/assets.png)

**What if we try to run again or folder already exits**

```js
[Error: EEXIST: file already exists, mkdir 'D:\NodeJS\assets'] {
  errno: -4075,
  code: 'EEXIST',
  syscall: 'mkdir',
  path: 'D:\\NodeJS\\assets'
}
```

**To fix this**:

```js
const fs = require('fs');

if(!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if(err) console.log(err);
        else console.log('folder created')
    })
} else {
    fs.rmdir('./assets', (error) => {
        if(error) console.log(error);
        else console.log('folder deleted');
    })
}
```

## Deleting Files

```js
if(fs.existsSync('./text.txt')) {
    fs.unlink('./text.txt',(err) => {
        if(err) console.log(err);
        else console.log('file deleted');
    } )
}
```
