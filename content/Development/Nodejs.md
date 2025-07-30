---
title: Node.js
description: "A cross-platform, open-source JavaScript runtime environment that executes JavaScript code outside a web browser."
compartir: true
tags: [javascript, backend, development, runtime]
---

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to write server-side applications in [[Javascript|JavaScript]], breaking the language free from its traditional confines within the web browser. Node.js is known for its non-blocking, event-driven architecture, which makes it highly efficient and suitable for building scalable network applications.

> [!info]
> The core philosophy of Node.js is to handle many connections with high throughput, making it ideal for I/O-intensive applications like web servers, API backends, and real-time services.

## Core Architecture

- **Event-Driven, Non-Blocking I/O**: Node.js uses an event loop to handle asynchronous operations. Instead of waiting for a task (like reading a file or a database query) to complete, it registers a callback and moves on to the next task. This allows it to handle thousands of concurrent connections with a single thread.
- **V8 Engine**: It uses Google's V8 engine, the same one that powers Chrome, which compiles JavaScript into machine code for high performance.
- **Module System**: Node.js has a built-in module system (CommonJS) that allows you to organize code into reusable files.

## Key Features

- **[[NPM]] (Node Package Manager)**: Node.js comes with [[NPM]], the world's largest software registry. It provides access to hundreds of thousands of open-source libraries and tools.
- **Standard Library**: Includes a rich library of modules for file system operations, networking, and more.
- **Cross-Platform**: Runs on Windows, macOS, and Linux.

## Example: A Simple Web Server

```javascript
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

## Use Cases

- **Backend APIs**: Building RESTful and GraphQL APIs for web and mobile applications.
- **Real-Time Applications**: Powering chat applications, online games, and collaborative tools using technologies like WebSockets.
- **Microservices**: Creating small, independent services that make up a larger application.
- **Tooling**: Building command-line tools, build scripts, and other development utilities.

Node.js has become a dominant force in web development, enabling developers to use JavaScript across the entire stack. Its vast ecosystem, managed by package managers like [[NPM]] and [[PNPM]], provides tools for nearly any task.
