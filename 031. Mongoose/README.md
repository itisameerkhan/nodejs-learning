# Mongoose 

<div align="center">
<img src="https://miro.medium.com/v2/resize:fit:648/1*3F5eonRQqcP35KglajAa8Q.png" />
</div>

MongoDB is a popular NoSQL database that stores data in a flexible, document-based format known as BSON (Binary JSON). It is designed to scale horizontally across many servers, making it suitable for handling large volumes of data and high throughput applications. MongoDB is schema-less, meaning you can store heterogeneous data in the same collection without a predefined schema, allowing for greater flexibility and ease of development.

**Mongoose**, on the other hand, is an **Object Data Modeling (ODM)** library for MongoDB and Node.js. It provides a higher-level abstraction over MongoDB's native driver, allowing developers to define schemas, models, and relationships in a more structured manner. Mongoose simplifies interactions with MongoDB by providing features like schema validation, middleware hooks, query building helpers, and support for data validation and casting.

## ⭐ Defining Schemas

In Mongoose, a schema is a blueprint that defines the structure of documents within a MongoDB collection. It represents the shape of documents, including the fields and their data types, default values, validation rules, and other options.

```js
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    age: {
        type: Number,
        required: true,
        default: 18
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("User", userSchema);
```