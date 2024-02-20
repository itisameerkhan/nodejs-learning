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
```

In this example, we define a schema for a user document with four fields: `name`, `email`, `age`, and `createdAt`. Each field specifies its type (`String`, `Number`, `Date`, etc.) and any additional options such as `required`, `unique`, and `default`. For example, the name and email fields are required, and the email field must be unique. The age field must be a number between 18 and 60, and the createdAt field will default to the current date and time when a new document is created.

## 3. ⭐ Create Model: 
Once you've defined your schema, you need to create a Mongoose model using the `mongoose.model()` method. The model represents a collection in your MongoDB database and provides an interface for querying and manipulating documents in that collection.

```js
export const demo = mongoose.model('demo', demoModel);
```
---

## ⭐ Schema Types

```js
name: {
    type: String
}
```

### ✨ String

* `lowercase`: boolean, whether to always call `.toLowerCase()` on the value

* `uppercase`: boolean, whether to always call `.toUpperCase()` on the value
* `trim`: boolean, whether to always call `.trim()` on the value
* `match`: RegExp, creates a validator that checks if the value matches the given regular expression
* `enum`: Array, creates a validator that checks if the value is in the given array.
* `minLength`: Number, creates a validator that checks if the value length is not less than the given number
* `maxLength`: Number, creates a validator that checks if the value length is not greater than the given number
* `populate`: Object, sets default populate options.

### ✨ Number

* `min`: Number, creates a validator that checks if the value is greater than or equal to the given minimum.
* `max`: Number, creates a validator that checks if the value is less than or equal to the given maximum.
* `enum`: Array, creates a validator that checks if the value is strictly equal to one of the values in the given array.
populate: Object, sets default populate options.

### ✨ Date

* `min`: Date, creates a validator that checks if the value is greater than or equal to the given minimum.
* `max`: Date, creates a validator that checks if the value is less than or equal to the given maximum.
* `expires`: Number or String, creates a TTL index with the value expressed in seconds.

### ✨ Boolean

Booleans in Mongoose are plain JavaScript booleans. By default, Mongoose casts the below values to true:

* `true`
* `'true'`
* `1`
* `'1'`
* `'yes'`

Mongoose casts the below values to false:

* `false`
* `'false'`
* `0`
* `'0'`
* `'no'`