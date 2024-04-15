# 📍 bcryptjs

<img src="https://repository-images.githubusercontent.com/139898859/9617c480-81c2-11ea-94fc-322231ead1f0">

## ⭐ Password Hashing in Node.js Using bcryptjs Library.

Here's the picture, You are creating your web application that takes in user information, It could be things such as Credit Card Number, National Identification Number, or even Password e.t.c But when you save it, you still get the raw user data being stored exactly the way it has been inputted. How do we go about hashing certain user information so that we can better secure our data?

Data like these are typically stored in a database, and we need a way to encrypt such data so that it doesn't become easily accessible. Even If someone were to hack our database, all they would see is just a bunch of hashed data they can't do anything with.

## ⭐ Why we use ?

We use bcryptjs for hashing passwords in situations where security is paramount, such as user authentication systems. Hashing passwords is crucial for protecting sensitive user data, as it ensures that even if a database is compromised, the original passwords cannot be easily retrieved.

Bcryptjs is specifically designed for securely hashing passwords. It employs a cryptographic hashing algorithm that is intentionally slow and resource-intensive, making it resistant to brute-force attacks. Additionally, bcryptjs incorporates a built-in salt generation mechanism, which further enhances security by adding random data to each password before hashing, preventing identical passwords from producing the same hash.

Consider a situation where a user signs up for an online service and creates a password during the registration process. Without proper hashing, the user's password would be stored in the database in plaintext format, leaving it vulnerable to theft if the database is compromised. However, by using bcryptjs to hash the password before storing it, the **password is transformed into a cryptographically secure hash value** that cannot be reversed to reveal the original password. This ensures that even if an attacker gains access to the database, they would only obtain hashed passwords, which are virtually impossible to revert back to their original form.

<div align="center">
 <img src="https://assets-global.website-files.com/60658b47b03f0c77e8c14884/6256965282e9d1a5a5df6841_Password%20Hashing.png" />
</div>

## ⭐ Hashing 

Hashing is the process of transforming any given key or a string of characters into another value. This is usually represented by a shorter, fixed-length value or key that represents and makes it easier to find or employ the original string.

Hashing is a cryptographic process that transforms input data, like passwords or files, into fixed-size strings of characters known as hash values. It's deterministic, meaning the same input always produces the same hash, and it has a fixed output length. Hashing is a one-way function, making it computationally infeasible to reverse and obtain the original input from the hash value. Additionally, it aims to minimize collisions, where different inputs produce the same hash value, ensuring data integrity and security. Widely used in password storage, digital signatures, and data integrity verification, hashing plays a vital role in computer security and cryptography by securely transforming and verifying data while protecting sensitive information.

## ⭐ Getting started

```
npm i bcryptjs
```

### ⚡ Writing our logic

```jsx
import bcrypt from "bcryptjs"
```

Next, we need to create an Async function that would help us work with the promises that would be returned from bcryptjs, This is because it is a promise based library. Let's create an async function.

### ⚡ Hashing Data

Let us go ahead and create the information we are trying to hash, we'll be using user password as an example, I would create a variable for this password. We would assume it to be the plain text password our user provides to us.

```jsx
const someFunction = async() => {
    const password = "Password";
}
```

Below this code, we are going to be creating the hashed version of this password by using bcrypt `.hash()` method. This method returns a promise containing the hashed version of our password and we would await it's value and store it in a variable called `hashedPassword`.

The `.hash()` method takes in two arguments, The first being the **data to be hashed**, in this case our user password, which we have access to via the password variable. The second being the **number of rounds** we want to perform.

The number of rounds determines how many times the hashing algorithm is going to be executed, Based on my experience with the library i find that a very good number for this is 8, as it strikes a good balance between security and speed. If we use a lesser number of rounds, the algorithm becomes easy to crack and if we use too many rounds, the algorithm takes a long time to run.


```jsx
const someFunction = async() => {
    const password = "Password";
    const hashedPassword = await bcrypt.hash(password, 8);
    console.log(hashedPassword);
}
```

```
$2a$08$jPYXy5Ihy1HL3/4EyaH.ceFgOo5tfRCPb4QnCEPzLbL3fm2/.W2fW
```

The hashed version is what we would be storing in our database.
This is the hashed version of our data and is exactly what we'll be typically storing in our database where we have password.

## ⭐ Hashing Algorithms Vs Encryption Algorithms

When we use encryption algorithms, we can get the original version of our encrypted data back, This is sort of like a reversible process.

```
    (encrypted)                    (reversed)
data ---------> 12&#errr!@#$uihh$7 ---------> data
```

In the case of hashing algorithms, we are dealing with a typical one way algorithm which is irreversible once hashing has occurred.

```
    (encrypted)                    
data ---------> 12&#errr!@#$uihh$7 
```

Now, this is by design, and in this article we are dealing with hashing, which begs the question, How do we go about logging in, so we compare the credentials provided by the user with the one stored in our database just to be sure they are exactly matched.

## ⭐ Comparing Data

bcryptjs gives us a way to compare our stored value, with the one the user would provides when using our API, We would be using the `bcrypt.compare()` method, which takes in two arguments:

1. The data to be hashed and compared. i.e **user input**

2. The hashed value of that data e.g **hashedPassword**

> [!NOTE]
> Although we are typing this out manually, when we are building api's it would be taken from the users and not just typed by us.