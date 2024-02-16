# 📍 Schema

<img src='https://buddy.works/tutorials/assets/posts/implementing-and-testing-mongoose-model-with-cicd-integration/cover-implementing-and-testing-mongoose-model.png'>

In Mongoose, a schema is a blueprint that defines the structure of documents within a MongoDB collection. It represents the shape of the data that will be stored in the database, including the fields and their data types, validation rules, default values, and other options. Think of a schema as a way to enforce a specific structure and set of rules for your data.

Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.

## ⭐ 1. Require Mongoose:

First, you need to include Mongoose in your Node.js application.

```js
import mongoose from "mongoose" 
```

## ⭐ 2. Define Schema:

Use the mongoose.Schema class to define your schema. You specify the fields of your document along with their types and any additional options such as required fields, unique constraints, default values, etc.

```js
import mongoose from "mongoose";

const demoModel = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type:String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        min: 18,
        max:60,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const demo = mongoose.model('demo', demoModel);
```

In this example, we define a schema for a user document with four fields: `name`, `email`, `age`, and `createdAt`. Each field specifies its type (`String`, `Number`, `Date`, etc.) and any additional options such as `required`, `unique`, and `default`. For example, the name and email fields are required, and the email field must be unique. The age field must be a number between 18 and 60, and the createdAt field will default to the current date and time when a new document is created.

