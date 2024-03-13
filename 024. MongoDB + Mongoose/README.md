# 📍 MongoDB + Mongoose 

<img src='https://media.licdn.com/dms/image/C5612AQE_q1gMR88gLg/article-cover_image-shrink_720_1280/0/1587672048789?e=2147483647&v=beta&t=nIyetl4wu9lTBQ9VSXuoTI0KqEyGYuEA9Fel-HT4gd4'>


**MongoDB** is a **NoSQL**, **document-oriented database** that provides high performance, high availability, and easy scalability. Instead of storing data in tables and rows like a traditional relational database, MongoDB stores data in flexible, JSON-like documents with dynamic schemas. This allows for easier and faster development, as well as better handling of unstructured or semi-structured data.

## ⭐ Mongoose 

Mongoose is an **Object Data Modeling (ODM)** library for MongoDB and Node.js. It provides a straightforward, schema-based solution to model your application data, allowing you to define schemas with data types and validation rules. Mongoose also provides features like middleware, querying helpers, and virtuals, making it easier to interact with MongoDB databases from Node.js applications.

## ⭐ To connect MongoDB Atlas (MongoDB's cloud database service) to an Express.js application, you'll need to follow these steps:

### ✨ 1. Set up a MongoDB Atlas account: 

If you haven't already, sign up for MongoDB Atlas at https://www.mongodb.com/cloud/atlas. Create a new cluster and configure it according to your requirements. MongoDB Atlas offers a free tier for experimentation and small projects.

### ✨ 2. Get connection string: 
Once your cluster is set up, MongoDB Atlas will provide you with a connection string. This string includes authentication credentials and the details needed to connect to your cluster. You'll need this string to connect your Express application to your MongoDB Atlas cluster.

```
mongodb+srv://<username>:<password>@my-cluster.ltdopxb.mongodb.net/?retryWrites=true&w=majority
```

### ✨ 3. Install dependencies: 
In your Express.js project directory, you'll need to install the necessary dependencies. Run the following command using npm:

```ps
npm i mongoose express 
```

### ✨ 4. Create a database connection: 

In your Express application code (typically in your app.js or server.js file), you'll need to establish a connection to your MongoDB Atlas cluster using Mongoose. Here's a basic example:

```js
import express from "express";
import mongoose from "mongoose";
import { DB_URL } from "./utils/constants.js";

const app = express();

mongoose.connect(DB_URL)
.then(() => {
    console.log('DB connected successfully');
}) 
```