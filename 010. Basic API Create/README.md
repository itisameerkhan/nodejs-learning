# Basic API Create

![node](/assets/node8.png)
---

We already know how to make a simple server. You can check it out the [previous chapter](/006.%20Creating%20a%20Server/)

```js
const http = require('http');

http.createServer((req, res) => {



  }
).listen(5000);
```

## Node response.writeHead() Method

The `response.writeHead()` property, introduced in Node.js v1.0, is part of the ‘http‘ module. It is used to send a response header to the incoming request. The status code represents a 3-digit HTTP status code (e.g., 404), and the headers parameter contains the response headers. Optionally, a human-readable statusMessage can be provided as the second argument.

`res.writeHead(statusCode, [reasonPhrase], [headers])`

* **statusCode**: A three-digit HTTP status code, indicating the success, failure, or other status of the HTTP request. For example, 200 for a successful response, 404 for not found, or 500 for a server error.

* **reasonPhrase (optional)**: A human-readable reason phrase describing the status code. This parameter is often omitted or set to null, and the HTTP status text corresponding to the statusCode is used.

* **headers (optional)**: An object representing additional HTTP headers to be included in the response. Headers are key-value pairs specifying metadata about the response, such as content type or encoding.

```js
res.writeHead(200, { 'Content-Type': 'application/json' });
```

### consider this example 

Now `res.writeHead(200, {'Content-Type': 'application/json'});` - This line sets the response status code and headers using the writeHead method of the res (response) object

* writeHead method takes two arguments, the first is the status code and the second is an object containing the response headers (in this case, we are setting the `Content-Type` header to `application/json`)

* The `writeHead` method is used to send the response status code and headers to the client.

* The status code `200` is a standard HTTP status code that indicates the request was successful.

* The `Content-Type` header is used to specify the media type of the resource being sent in the response body this means that the client can expect to receive data in a specific format.

* `application/json`, indicating that the response body will contain data in JSON format & we use / to separate the type and subtype of the media type.

Now `res.write(JSON.stringify({name: 'Khan', age: 20}));` - This line writes the response body using the write method of the `res` (response) object

* The `write` method is used to send the response body to the client means that the client can expect to receive data in a specific format.

* The `JSON.stringify` method is used to convert a JavaScript object to a JSON string
* In this case, it is sending a JSON representation of an object with properties name and age.

* The `JSON.stringify` method takes a single argument, the object to be converted to a JSON string.

* Now `res.end();` - This line signals the end of the response and sends it to the client using the end method of the res (response) object.

* The `end` method is used to indicate that all of the response headers and body have been sent and that the server should consider this message complete.

* These lines of code are part of a Node.js server that sends a response to an HTTP request. 

> The `writeHead` method is used to set the response status code and headers. In this case, the status code is set to 200 to indicate success, and the `Content-Type` header is set to `application/json` to indicate that the response will contain JSON data. The write method is used to send data in the response body. In this case, it sends a JSON representation of an object with properties name and age. Finally, the end method is used to signal the end of the response and send it to the client.

---

```js
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify({name: "Khan", age:21}));
    res.end();
}).listen(5000);
```

Now we can run this server using `nodemon server.js` and check it out in the browser using `localhost:5000`

Now we can see the output in the browser like this.

```
{
    "name" : "khan",
    "age" : 21
}
```

You can also check it out in the postman.

## ⭐ Add more data

Separate the data using `data.js`

Create a new file `data.js` and add this code.

```js

const data = [
  {
    name: "Rajesh",
    age: 20,
    address: {
      city: "Delhi",
      state: "Delhi",
      country: "India",
    },
    hobbies: ["coding", "reading", "playing"],
    skills: ["html", "css", "js", "nodejs"],
    education: {
      school: "Delhi Public School",
      college: "Delhi University",
      degree: "B.Tech",
    },
    projects: {
      project1: "Portfolio",
      project2: "Blog",
      project3: "E-commerce",
    },
    social: {
      github: "rajesh.github.io",
      linkedin: "rajesh.linkedin.com",
      twitter: "rajesh.twitter.com",
    },
    work: {
      company: "XYZ",
      position: "Software Engineer",
      experience: "2 years",
    },
    achievements: {
      achievement1: "Won a hackathon",
      achievement2: "Got a scholarship",
      achievement3: "Got a job",
    },
    interests: {
      interest1: "Reading",
      interest2: "Playing",
      interest3: "Coding",
    },
    languages: {
      language1: "English",
      language2: "Hindi",
      language3: "Punjabi",
    },
    contact: {
      phone: "1234567890",
      email: "rajesh.dev.com",
    },
  },
  {
    name: "Subham",
    age: 20,
    address: {
      city: "Delhi",
      state: "Delhi",
      country: "India",
    },
    hobbies: ["coding", "reading", "playing"],
    skills: ["html", "css", "js", "nodejs"],
    education: {
      school: "Delhi Public School",
      college: "Delhi University",
      degree: "B.Tech",
    },
    projects: {
      project1: "Portfolio",
      project2: "Blog",
      project3: "E-commerce",
    },
    social: {
      github: "subham.github.io",
      linkedin: "subham.linkedin.com",
      twitter: "subham.twitter.com",
    },
    work: {
      company: "XYZ",
      position: "Software Engineer",
      experience: "2 years",
    },
    achievements: {
      achievement1: "Won a hackathon",
      achievement2: "Got a scholarship",
      achievement3: "Got a job",
    },
    interests: {
      interest1: "Reading",
      interest2: "Playing",
      interest3: "Coding",
    },
    languages: {
      language1: "English",
      language2: "Hindi",
      language3: "Punjabi",
    },
    contact: {
      phone: "1234567890",
      email: "subham.dev.com",
    },
  },
  {
    name: "Rahul",
    age: 20,
    address: {
      city: "Delhi",
      state: "Delhi",
      country: "India",
    },
    hobbies: ["coding", "reading", "playing"],
    skills: ["html", "css", "js", "nodejs"],
    education: {
      school: "Delhi Public School",
      college: "Delhi University",
      degree: "B.Tech",
    },
    projects: {
      project1: "Portfolio",
      project2: "Blog",
      project3: "E-commerce",
    },
    social: {
      github: "rahul.github.io",
      linkedin: "rahul.linkedin.com",
      twitter: "rahul.twitter.com",
    },
    work: {
      company: "XYZ",
      position: "Software Engineer",
      experience: "2 years",
    },
    achievements: {
      achievement1: "Won a hackathon",
      achievement2: "Got a scholarship",
      achievement3: "Got a job",
    },
    interests: {
      interest1: "Reading",
      interest2: "Playing",
      interest3: "Coding",
    },
    languages: {
      language1: "English",
      language2: "Hindi",
      language3: "Punjabi",
    },
    contact: {
      phone: "1234567890",
      email: "rahul.dev.com",
    },
  },
];

module.exports = data;
```

2. Now we can import this data in the `server.js` file using `require` method.

```js
const data = require('./data.js');
```

3. Now pass the data variable in the `write` method of the `res` object inside `JSON.stringify` method like this.

```js
res.write(JSON.stringify(data))
```

### Now our server will look like this

```js
const http = require('http');
const data = require('./data');

const server = http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type' : 'application/json'});
    res.write(JSON.stringify(data));
    res.end();

}).listen(5000);
```

### output: 

```
[{"name":"Rajesh","age":20,"address":{"city":"Delhi","state":"Delhi","country":"India"},"hobbies":["coding","reading","playing"],"skills":["html","css","js","nodejs"],"education":{"school":"Delhi Public School","college":"Delhi University","degree":"B.Tech"},"projects":{"project1":"Portfolio","project2":"Blog","project3":"E-commerce"},"social":{"github":"rajesh.github.io","linkedin":"rajesh.linkedin.com","twitter":"rajesh.twitter.com"},"work":{"company":"XYZ","position":"Software Engineer","experience":"2 years"},"achievements":{"achievement1":"Won a hackathon","achievement2":"Got a scholarship","achievement3":"Got a job"},"interests":{"interest1":"Reading","interest2":"Playing","interest3":"Coding"},"languages":{"language1":"English","language2":"Hindi","language3":"Punjabi"},"contact":{"phone":"1234567890","email":"rajesh.dev.com"}},{"name":"Subham","age":20,"address":{"city":"Delhi","state":"Delhi","country":"India"},"hobbies":["coding","reading","playing"],"skills":["html","css","js","nodejs"],"education":{"school":"Delhi Public School","college":"Delhi University","degree":"B.Tech"},"projects":{"project1":"Portfolio","project2":"Blog","project3":"E-commerce"},"social":{"github":"subham.github.io","linkedin":"subham.linkedin.com","twitter":"subham.twitter.com"},"work":{"company":"XYZ","position":"Software Engineer","experience":"2 years"},"achievements":{"achievement1":"Won a hackathon","achievement2":"Got a scholarship","achievement3":"Got a job"},"interests":{"interest1":"Reading","interest2":"Playing","interest3":"Coding"},"languages":{"language1":"English","language2":"Hindi","language3":"Punjabi"},"contact":{"phone":"1234567890","email":"subham.dev.com"}},{"name":"Rahul","age":20,"address":{"city":"Delhi","state":"Delhi","country":"India"},"hobbies":["coding","reading","playing"],"skills":["html","css","js","nodejs"],"education":{"school":"Delhi Public School","college":"Delhi University","degree":"B.Tech"},"projects":{"project1":"Portfolio","project2":"Blog","project3":"E-commerce"},"social":{"github":"rahul.github.io","linkedin":"rahul.linkedin.com","twitter":"rahul.twitter.com"},"work":{"company":"XYZ","position":"Software Engineer","experience":"2 years"},"achievements":{"achievement1":"Won a hackathon","achievement2":"Got a scholarship","achievement3":"Got a job"},"interests":{"interest1":"Reading","interest2":"Playing","interest3":"Coding"},"languages":{"language1":"English","language2":"Hindi","language3":"Punjabi"},"contact":{"phone":"1234567890","email":"rahul.dev.com"}}]
```