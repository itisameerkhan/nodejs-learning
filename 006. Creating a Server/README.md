# Creating a Server 💻 🔄️ 🌐

![demo2](/assets/demo2.png)

The provided code is a basic example of creating a simple HTTP server using Node.js. Let's break it down step by step

## 1. Importing the http Module:

```js
const http = require('http');
```

This line imports the built-in Node.js `http` module, which provides functionality for creating HTTP servers.

## 2. Creating the HTTP Server:

```js
const server = http.createServer((request, response) => {

})
```

* The createServer method is called on the `http` module, creating an HTTP server. It takes a callback function that will be invoked whenever a request is made to the server.

* The callback function takes two parameters: `request` represents the incoming HTTP request, and `response` is used to send the response back to the client.

## 3. Handling the Request:

```js
(request, response) => {
    console.log('request made');
}
```

In the provided example, the callback function simply logs a message `('request made')` to the console whenever a request is received. In a real application, you would typically perform more complex operations based on the incoming request.

## 4. Listening for Requests:

```js
server.listen(5000, 'localhost', () => {
    console.log('listening for request on port 5000');
});
```

* The `listen` method is called on the server object to start listening for incoming requests.

* It takes three parameters: the port number `(5000)`, the hostname `('localhost')`, and a callback function that will be executed once the server is successfully listening.

* The callback logs a message to the console indicating that the server is now listening on port `5000`.

## 5. Server Execution:

After setting up the server, the script will keep running and listening for incoming HTTP requests on the specified port `(5000)`. As requests come in, the callback function specified in createServer will be executed.

To run this code, you would save it in a file (e.g., server.js) and then execute it using Node.js:

```js
node server.js
```

Once running, you can open a web browser and navigate to http://localhost:5000 to see the server in action. The server will log messages to the console each time a request is made.

### Full code 

```js
const http = require('http');

const server = http.createServer((req,res) => {
    console.log('request made');
})

server.listen(5000, 'localhost', (error) => {
    if(error) console.log('error');
    else console.log('port listening to 5000');
})
```

## Request and Response


In Node.js, the `request` and `response` objects are key components when dealing with HTTP communication. They represent the incoming HTTP request from a client and the outgoing HTTP response from the server, respectively.

`request` and `response` object both are the callback function parameters and are used for Express.js and Node.js. You can get the request query, params, body, headers, and cookies. It can overwrite any value or anything there. However, overwriting headers or cookies will not affect the output back to the browser.

## Request Object (request):

The `request` object represents the incoming HTTP request from the client to the server. It provides information about the `request`, such as the `URL`, `HTTP` method, `headers`, and any data sent in the request body.

Some commonly used properties and methods of the request object include:

* `request.url`: The URL of the incoming request.
* `request.method`: The HTTP method (GET, POST, etc.) used in the request.
* `request.headers`: An object containing the HTTP headers of the request.
* `request.on('data', callback)`: An event listener to handle data streaming from the request body.
* `request.on('end', callback)`: An event listener to handle the end of the request.

## Response Object (response):

The `response` object represents the outgoing HTTP response from the server to the client. It is used to send data back to the client, including HTML content, JSON, status codes, and headers.

Some commonly used properties and methods of the response object include:

* `response.statusCode`: The HTTP status code to be sent with the response (e.g., 200 for success, 404 for not found).
* `response.setHeader(name, value)`: Set an HTTP header in the response.
* `response.write(data)`: Write data to the response body. This method can be called multiple times for streaming data.
* `response.end()`: End the response and send it to the client. This should be called after writing the complete response.
* `response.send()`: A shorthand method for sending a response with optional data and automatically setting the content type.

---

```js
const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req);
})
server.listen(5000, 'localhost', (error) => {

})
```

```js
<ref *2> IncomingMessage {
  _readableState: ReadableState {
    objectMode: false,
    highWaterMark: 16384,
    buffer: BufferList { head: null, tail: null, length: 0 },
    length: 0,
    pipes: [],
    flowing: null,
    ended: false,
    endEmitted: false,
    reading: false,
    constructed: true,
    sync: true,
    needReadable: false,
    emittedReadable: false,
    readableListening: false,
    resumeScheduled: false,
    errorEmitted: false,
    emitClose: true,
    autoDestroy: true,
    destroyed: false,
    errored: null,
    closed: false,
    closeEmitted: false,
    defaultEncoding: 'utf8',
    awaitDrainWriters: null,
    multiAwaitDrain: false,
    readingMore: true,
    dataEmitted: false,
    decoder: null,
    encoding: null,
    [Symbol(kPaused)]: null
  },
  _events: [Object: null prototype] {},
  _eventsCount: 0,
  _maxListeners: undefined,
  socket: <ref *1> Socket {
    connecting: false,
    _hadError: false,
    _parent: null,
    _host: null,
    _closeAfterHandlingError: false,
    _readableState: ReadableState {
      objectMode: false,
      highWaterMark: 16384,
      buffer: BufferList { head: null, tail: null, length: 0 },
      length: 0,
      pipes: [],
      flowing: true,
      ended: false,
      endEmitted: false,
      reading: true,
      constructed: true,
      sync: false,
      needReadable: true,
      emittedReadable: false,
      readableListening: false,
      resumeScheduled: false,
      errorEmitted: false,
      emitClose: false,
      autoDestroy: true,
      destroyed: false,
      errored: null,
      closed: false,
      closeEmitted: false,
      defaultEncoding: 'utf8',
      awaitDrainWriters: null,
      multiAwaitDrain: false,
      readingMore: false,
      dataEmitted: false,
      decoder: null,
      encoding: null,
      [Symbol(kPaused)]: false
    },
    _events: [Object: null prototype] {
      end: [Array],
      timeout: [Function: socketOnTimeout],
      data: [Function: bound socketOnData],
      error: [Function: socketOnError],
      close: [Array],
      drain: [Function: bound socketOnDrain],
      resume: [Function: onSocketResume],
      pause: [Function: onSocketPause]
    },
    _eventsCount: 8,
    _maxListeners: undefined,
    _writableState: WritableState {
      objectMode: false,
      highWaterMark: 16384,
      finalCalled: false,
      needDrain: false,
      ending: false,
      ended: false,
      finished: false,
      destroyed: false,
      decodeStrings: false,
      defaultEncoding: 'utf8',
      length: 0,
      writing: false,
      corked: 0,
      sync: true,
      bufferProcessing: false,
      onwrite: [Function: bound onwrite],
      writecb: null,
      writelen: 0,
      afterWriteTickInfo: null,
      buffered: [],
      bufferedIndex: 0,
      allBuffers: true,
      allNoop: true,
      pendingcb: 0,
      constructed: true,
      prefinished: false,
      errorEmitted: false,
      emitClose: false,
      autoDestroy: true,
      errored: null,
      closed: false,
      closeEmitted: false,
      [Symbol(kOnFinished)]: []
    },
    allowHalfOpen: true,
    _sockname: null,
    _pendingData: null,
    _pendingEncoding: '',
    server: Server {
      maxHeaderSize: undefined,
      insecureHTTPParser: undefined,
      requestTimeout: 300000,
      headersTimeout: 60000,
      keepAliveTimeout: 5000,
      connectionsCheckingInterval: 30000,
      joinDuplicateHeaders: undefined,
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: undefined,
      _connections: 1,
      _handle: [TCP],
      _usingWorkers: false,
      _workers: [],
      _unref: false,
      allowHalfOpen: true,
      pauseOnConnect: false,
      noDelay: true,
      keepAlive: false,
      keepAliveInitialDelay: 0,
      httpAllowHalfOpen: false,
      timeout: 0,
      maxHeadersCount: null,
      maxRequestsPerSocket: 0,
      _connectionKey: '6:::1:5000',
      [Symbol(IncomingMessage)]: [Function: IncomingMessage],
      [Symbol(ServerResponse)]: [Function: ServerResponse],
      [Symbol(kCapture)]: false,
      [Symbol(async_id_symbol)]: 5,
      [Symbol(http.server.connections)]: ConnectionsList {},
      [Symbol(http.server.connectionsCheckingInterval)]: Timeout {
        _idleTimeout: 30000,
        _idlePrev: [TimersList],
        _idleNext: [TimersList],
        _idleStart: 32,
        _onTimeout: [Function: bound checkConnections],
        _timerArgs: undefined,
        _repeat: 30000,
        _destroyed: false,
        [Symbol(refed)]: false,
        [Symbol(kHasPrimitive)]: false,
        [Symbol(asyncId)]: 2,
        [Symbol(triggerId)]: 1
      },
      [Symbol(kUniqueHeaders)]: null
    },
    _server: Server {
      maxHeaderSize: undefined,
      insecureHTTPParser: undefined,
      requestTimeout: 300000,
      headersTimeout: 60000,
      keepAliveTimeout: 5000,
      connectionsCheckingInterval: 30000,
      joinDuplicateHeaders: undefined,
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: undefined,
      _connections: 1,
      _handle: [TCP],
      _usingWorkers: false,
      _workers: [],
      _unref: false,
      allowHalfOpen: true,
      pauseOnConnect: false,
      noDelay: true,
      keepAlive: false,
      keepAliveInitialDelay: 0,
      httpAllowHalfOpen: false,
      timeout: 0,
      maxHeadersCount: null,
      maxRequestsPerSocket: 0,
      _connectionKey: '6:::1:5000',
      [Symbol(IncomingMessage)]: [Function: IncomingMessage],
      [Symbol(ServerResponse)]: [Function: ServerResponse],
      [Symbol(kCapture)]: false,
      [Symbol(async_id_symbol)]: 5,
      [Symbol(http.server.connections)]: ConnectionsList {},
      [Symbol(http.server.connectionsCheckingInterval)]: Timeout {
        _idleTimeout: 30000,
        _idlePrev: [TimersList],
        _idleNext: [TimersList],
        _idleStart: 32,
        _onTimeout: [Function: bound checkConnections],
        _timerArgs: undefined,
        _repeat: 30000,
        _destroyed: false,
        [Symbol(refed)]: false,
        [Symbol(kHasPrimitive)]: false,
        [Symbol(asyncId)]: 2,
        [Symbol(triggerId)]: 1
      },
      [Symbol(kUniqueHeaders)]: null
    },
    parser: HTTPParser {
      '0': null,
      '1': [Function: parserOnHeaders],
      '2': [Function: parserOnHeadersComplete],
      '3': [Function: parserOnBody],
      '4': [Function: parserOnMessageComplete],
      '5': [Function: bound onParserExecute],
      '6': [Function: bound onParserTimeout],
      _headers: [],
      _url: '',
      socket: [Circular *1],
      incoming: [Circular *2],
      outgoing: null,
      maxHeaderPairs: 2000,
      _consumed: true,
      onIncoming: [Function: bound parserOnIncoming],
      [Symbol(resource_symbol)]: [HTTPServerAsyncResource]
    },
    on: [Function: socketListenerWrap],
    addListener: [Function: socketListenerWrap],
    prependListener: [Function: socketListenerWrap],
    setEncoding: [Function: socketSetEncoding],
    _paused: false,
    _httpMessage: ServerResponse {
      _events: [Object: null prototype],
      _eventsCount: 1,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      destroyed: false,
      _last: false,
      chunkedEncoding: false,
      shouldKeepAlive: true,
      maxRequestsOnConnectionReached: false,
      _defaultKeepAlive: true,
      useChunkedEncodingByDefault: true,
      sendDate: true,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      strictContentLength: false,
      _contentLength: null,
      _hasBody: true,
      _trailer: '',
      finished: false,
      _headerSent: false,
      _closed: false,
      socket: [Circular *1],
      _header: null,
      _keepAliveTimeout: 5000,
      _onPendingData: [Function: bound updateOutgoingData],
      req: [Circular *2],
      _sent100: false,
      _expect_continue: false,
      _maxRequestsPerSocket: 0,
      [Symbol(kCapture)]: false,
      [Symbol(kBytesWritten)]: 0,
      [Symbol(kEndCalled)]: false,
      [Symbol(kNeedDrain)]: false,
      [Symbol(corked)]: 0,
      [Symbol(kOutHeaders)]: null,
      [Symbol(errored)]: null,
      [Symbol(kUniqueHeaders)]: null
    },
    [Symbol(async_id_symbol)]: 10,
    [Symbol(kHandle)]: TCP {
      reading: true,
      onconnection: null,
      _consumed: true,
      [Symbol(owner_symbol)]: [Circular *1]
    },
    [Symbol(lastWriteQueueSize)]: 0,
    [Symbol(timeout)]: null,
    [Symbol(kBuffer)]: null,
    [Symbol(kBufferCb)]: null,
    [Symbol(kBufferGen)]: null,
    [Symbol(kCapture)]: false,
    [Symbol(kSetNoDelay)]: true,
    [Symbol(kSetKeepAlive)]: false,
    [Symbol(kSetKeepAliveInitialDelay)]: 0,
    [Symbol(kBytesRead)]: 0,
    [Symbol(kBytesWritten)]: 0
  },
  httpVersionMajor: 1,
  httpVersionMinor: 1,
  httpVersion: '1.1',
  complete: false,
  rawHeaders: [
    'Host',
    'localhost:5000',
    'Connection',
    'keep-alive',
    'Cache-Control',
    'max-age=0',
    'sec-ch-ua',
    '"Not_A Brand";v="8", "Chromium";v="120", "Opera";v="106"',
    'sec-ch-ua-mobile',
    '?0',
    'sec-ch-ua-platform',
    '"Windows"',
    'Upgrade-Insecure-Requests',
    '1',
    'User-Agent',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 OPR/106.0.0.0',
    'Accept',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Sec-Fetch-Site',
    'none',
    'Sec-Fetch-Mode',
    'navigate',
    'Sec-Fetch-User',
    '?1',
    'Sec-Fetch-Dest',
    'document',
    'Accept-Encoding',
    'gzip, deflate, br',
    'Accept-Language',
    'en-US,en;q=0.9'
  ],
  rawTrailers: [],
  joinDuplicateHeaders: undefined,
  aborted: false,
  upgrade: false,
  url: '/',
  method: 'GET',
  statusCode: null,
  statusMessage: null,
  client: <ref *1> Socket {
    connecting: false,
    _hadError: false,
    _parent: null,
    _host: null,
    _closeAfterHandlingError: false,
    _readableState: ReadableState {
      objectMode: false,
      highWaterMark: 16384,
      buffer: BufferList { head: null, tail: null, length: 0 },
      length: 0,
      pipes: [],
      flowing: true,
      ended: false,
      endEmitted: false,
      reading: true,
      constructed: true,
      sync: false,
      needReadable: true,
      emittedReadable: false,
      readableListening: false,
      resumeScheduled: false,
      errorEmitted: false,
      emitClose: false,
      autoDestroy: true,
      destroyed: false,
      errored: null,
      closed: false,
      closeEmitted: false,
      defaultEncoding: 'utf8',
      awaitDrainWriters: null,
      multiAwaitDrain: false,
      readingMore: false,
      dataEmitted: false,
      decoder: null,
      encoding: null,
      [Symbol(kPaused)]: false
    },
    _events: [Object: null prototype] {
      end: [Array],
      timeout: [Function: socketOnTimeout],
      data: [Function: bound socketOnData],
      error: [Function: socketOnError],
      close: [Array],
      drain: [Function: bound socketOnDrain],
      resume: [Function: onSocketResume],
      pause: [Function: onSocketPause]
    },
    _eventsCount: 8,
    _maxListeners: undefined,
    _writableState: WritableState {
      objectMode: false,
      highWaterMark: 16384,
      finalCalled: false,
      needDrain: false,
      ending: false,
      ended: false,
      finished: false,
      destroyed: false,
      decodeStrings: false,
      defaultEncoding: 'utf8',
      length: 0,
      writing: false,
      corked: 0,
      sync: true,
      bufferProcessing: false,
      onwrite: [Function: bound onwrite],
      writecb: null,
      writelen: 0,
      afterWriteTickInfo: null,
      buffered: [],
      bufferedIndex: 0,
      allBuffers: true,
      allNoop: true,
      pendingcb: 0,
      constructed: true,
      prefinished: false,
      errorEmitted: false,
      emitClose: false,
      autoDestroy: true,
      errored: null,
      closed: false,
      closeEmitted: false,
      [Symbol(kOnFinished)]: []
    },
    allowHalfOpen: true,
    _sockname: null,
    _pendingData: null,
    _pendingEncoding: '',
    server: Server {
      maxHeaderSize: undefined,
      insecureHTTPParser: undefined,
      requestTimeout: 300000,
      headersTimeout: 60000,
      keepAliveTimeout: 5000,
      connectionsCheckingInterval: 30000,
      joinDuplicateHeaders: undefined,
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: undefined,
      _connections: 1,
      _handle: [TCP],
      _usingWorkers: false,
      _workers: [],
      _unref: false,
      allowHalfOpen: true,
      pauseOnConnect: false,
      noDelay: true,
      keepAlive: false,
      keepAliveInitialDelay: 0,
      httpAllowHalfOpen: false,
      timeout: 0,
      maxHeadersCount: null,
      maxRequestsPerSocket: 0,
      _connectionKey: '6:::1:5000',
      [Symbol(IncomingMessage)]: [Function: IncomingMessage],
      [Symbol(ServerResponse)]: [Function: ServerResponse],
      [Symbol(kCapture)]: false,
      [Symbol(async_id_symbol)]: 5,
      [Symbol(http.server.connections)]: ConnectionsList {},
      [Symbol(http.server.connectionsCheckingInterval)]: Timeout {
        _idleTimeout: 30000,
        _idlePrev: [TimersList],
        _idleNext: [TimersList],
        _idleStart: 32,
        _onTimeout: [Function: bound checkConnections],
        _timerArgs: undefined,
        _repeat: 30000,
        _destroyed: false,
        [Symbol(refed)]: false,
        [Symbol(kHasPrimitive)]: false,
        [Symbol(asyncId)]: 2,
        [Symbol(triggerId)]: 1
      },
      [Symbol(kUniqueHeaders)]: null
    },
    _server: Server {
      maxHeaderSize: undefined,
      insecureHTTPParser: undefined,
      requestTimeout: 300000,
      headersTimeout: 60000,
      keepAliveTimeout: 5000,
      connectionsCheckingInterval: 30000,
      joinDuplicateHeaders: undefined,
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: undefined,
      _connections: 1,
      _handle: [TCP],
      _usingWorkers: false,
      _workers: [],
      _unref: false,
      allowHalfOpen: true,
      pauseOnConnect: false,
      noDelay: true,
      keepAlive: false,
      keepAliveInitialDelay: 0,
      httpAllowHalfOpen: false,
      timeout: 0,
      maxHeadersCount: null,
      maxRequestsPerSocket: 0,
      _connectionKey: '6:::1:5000',
      [Symbol(IncomingMessage)]: [Function: IncomingMessage],
      [Symbol(ServerResponse)]: [Function: ServerResponse],
      [Symbol(kCapture)]: false,
      [Symbol(async_id_symbol)]: 5,
      [Symbol(http.server.connections)]: ConnectionsList {},
      [Symbol(http.server.connectionsCheckingInterval)]: Timeout {
        _idleTimeout: 30000,
        _idlePrev: [TimersList],
        _idleNext: [TimersList],
        _idleStart: 32,
        _onTimeout: [Function: bound checkConnections],
        _timerArgs: undefined,
        _repeat: 30000,
        _destroyed: false,
        [Symbol(refed)]: false,
        [Symbol(kHasPrimitive)]: false,
        [Symbol(asyncId)]: 2,
        [Symbol(triggerId)]: 1
      },
      [Symbol(kUniqueHeaders)]: null
    },
    parser: HTTPParser {
      '0': null,
      '1': [Function: parserOnHeaders],
      '2': [Function: parserOnHeadersComplete],
      '3': [Function: parserOnBody],
      '4': [Function: parserOnMessageComplete],
      '5': [Function: bound onParserExecute],
      '6': [Function: bound onParserTimeout],
      _headers: [],
      _url: '',
      socket: [Circular *1],
      incoming: [Circular *2],
      outgoing: null,
      maxHeaderPairs: 2000,
      _consumed: true,
      onIncoming: [Function: bound parserOnIncoming],
      [Symbol(resource_symbol)]: [HTTPServerAsyncResource]
    },
    on: [Function: socketListenerWrap],
    addListener: [Function: socketListenerWrap],
    prependListener: [Function: socketListenerWrap],
    setEncoding: [Function: socketSetEncoding],
    _paused: false,
    _httpMessage: ServerResponse {
      _events: [Object: null prototype],
      _eventsCount: 1,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      destroyed: false,
      _last: false,
      chunkedEncoding: false,
      shouldKeepAlive: true,
      maxRequestsOnConnectionReached: false,
      _defaultKeepAlive: true,
      useChunkedEncodingByDefault: true,
      sendDate: true,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      strictContentLength: false,
      _contentLength: null,
      _hasBody: true,
      _trailer: '',
      finished: false,
      _headerSent: false,
      _closed: false,
      socket: [Circular *1],
      _header: null,
      _keepAliveTimeout: 5000,
      _onPendingData: [Function: bound updateOutgoingData],
      req: [Circular *2],
      _sent100: false,
      _expect_continue: false,
      _maxRequestsPerSocket: 0,
      [Symbol(kCapture)]: false,
      [Symbol(kBytesWritten)]: 0,
      [Symbol(kEndCalled)]: false,
      [Symbol(kNeedDrain)]: false,
      [Symbol(corked)]: 0,
      [Symbol(kOutHeaders)]: null,
      [Symbol(errored)]: null,
      [Symbol(kUniqueHeaders)]: null
    },
    [Symbol(async_id_symbol)]: 10,
    [Symbol(kHandle)]: TCP {
      reading: true,
      onconnection: null,
      _consumed: true,
      [Symbol(owner_symbol)]: [Circular *1]
    },
    [Symbol(lastWriteQueueSize)]: 0,
    [Symbol(timeout)]: null,
    [Symbol(kBuffer)]: null,
    [Symbol(kBufferCb)]: null,
    [Symbol(kBufferGen)]: null,
    [Symbol(kCapture)]: false,
    [Symbol(kSetNoDelay)]: true,
    [Symbol(kSetKeepAlive)]: false,
    [Symbol(kSetKeepAliveInitialDelay)]: 0,
    [Symbol(kBytesRead)]: 0,
    [Symbol(kBytesWritten)]: 0
  },
  _consuming: false,
  _dumped: false,
  [Symbol(kCapture)]: false,
  [Symbol(kHeaders)]: {
    host: 'localhost:5000',
    connection: 'keep-alive',
    'cache-control': 'max-age=0',
    'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Opera";v="106"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 OPR/106.0.0.0',
    accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'sec-fetch-site': 'none',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-user': '?1',
    'sec-fetch-dest': 'document',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'en-US,en;q=0.9'
  },
  [Symbol(kHeadersCount)]: 30,
  [Symbol(kTrailers)]: null,
  [Symbol(kTrailersCount)]: 0
}
```

---

### If we try to console `url`, `method`
```js
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
});
```
```
/ GET
```

## Response 

The `response` object represents the outgoing HTTP response from the server to the client. It is used to send data back to the client, including HTML content, JSON, status codes, and headers.

### `res.setHeader`


In Node.js, the `res.setHeader(name, value)` method is used to set an HTTP response header. This method allows you to customize the headers that will be sent back to the client as part of the HTTP response. Headers convey additional information about the response, such as content type, status, or any other custom information.

Here's a brief explanation of the parameters:

* `name`: A string representing the name of the HTTP header.
* `value`: A string representing the value to be set for the specified header.

```js
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
})
```

---

### `res.write`


In Node.js, the `res.write(chunk, encoding)` method is used to send data in the response body to the client. This method allows you to write chunks of data to the response stream. The chunk parameter represents the data to be written, and the optional encoding parameter specifies the encoding of the data.

Here's a brief explanation of the parameters:

* `chunk`: The data to be written to the response.

* `encoding (optional):` The encoding of the data. If specified, the chunk parameter should be a string.

```js
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type','text/plain');
    res.write('Hello Node', 'utf8'); // utf8 optional;

    // End the response (mandatory to finish the response)
    res.end();
})
```

In this example, response.write is used to write two separate chunks of data **('Hello, ' and 'World!')** to the response body. After writing the data, response.end() is called to signal the end of the response. It's important to end the response after writing all the data.

Note: While `res.write` can be called multiple times to write chunks of data, `res.end` is necessary to finish the response and send it to the client.

![demo4](/assets/demo4.png)

---

![demo5](/assets/demo5.png)