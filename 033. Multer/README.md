# Multer 

multer is a middleware for handling `multipart/form-data`, which is primarily used for uploading files in Node.js and Express applications. It makes it easy to handle file uploads by providing a simple API to configure and process incoming files.

## ⭐ Key Features of multer

1. **Disk Storage**: Saves files to disk with configurable file names and paths.

2. **Memory Storage**: Stores files in memory as Buffer objects.

3. **Field Handling**: Handles text fields and files simultaneously.

4. **File Filtering**: Allows file validation based on file type, size, etc.

5. **Multiple File Uploads**: Supports uploading multiple files.

## ⭐ Why Is Needed?

Out of the box, NodeJS doesn’t know how to process any data, for example, we wanted our application to process JSON requests, we had to body-parse, in this case, `multer` makes it possible for an application to accept form-data which allows us to easily transport files from the browser to our server.

Without `multer`, when you’re sending a files to your server, the request body object(req.body) will be empty. Multer allows the data you’re sending from a form to be available and it also creates a req.file object which gives us access to the file buffer we’ve just uploaded from the client-side.

## ⭐ Installation

```cmd
npm i multer
```