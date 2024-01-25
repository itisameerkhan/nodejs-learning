# What is a Module in Node.js?

In Node.js, modules are a way to organize and encapsulate code in separate files. They allow developers to break down large applications into smaller, manageable parts, making the code more modular, reusable, and maintainable. Modules provide a mechanism for code organization, encapsulation, and abstraction in Node.js applications.

1. ### Suppose you make a file `people.js` and another file `index.js` and you want to import the `people.js` file like this.

```js
export const people = ["Jack", "Rose", "Bob"];
```

```js
import { people } from './people.js'
console.log(people);
```

And in your terminal you run `node index.js` then you will get an error like this: 

```
SyntaxError: Cannot use import statement outside a module
```

> This is because NodeJs doesn't support the `import` and `export` syntax. So you have to use the `module.exports` and `require` syntax.

```js
const people = ["Jack", "Rose", "Bob"];
const ages = [12,23, 45];

module.exports = { people, ages };
```

```js
const { people, ages } = require('./people.js');
console.log(people); // ["Jack", "Rose", "Bob"]
```
2. ### You can even create a function and export it into another file through modules

```js
module.exports = {
    sum: (a,b) => a + b
}
```

```js
const { sum } = require('./sum.js');
console.log(sum(2,2)); // 4
```