---
title: JavaScript
description: "A high-level, dynamic, and interpreted programming language that, alongside HTML and CSS, is one of the core technologies of the World Wide Web."
compartir: true
tags: [language, web-development, frontend, backend]
---

JavaScript (JS) is a versatile programming language that enables interactive web pages. While initially created for client-side scripting in web browsers, its use has expanded to server-side programming with [[Nodejs|Node.js]], mobile apps, and desktop applications.

> [!info]
> JavaScript is a multi-paradigm language, supporting event-driven, functional, and imperative programming styles. A [[JavaScript Cheat Sheet]] is also available.

## Core Philosophy

- **Dynamic and Flexible**: As a dynamically typed language, it offers flexibility but requires careful management to avoid runtime errors.
- **Event-Driven**: Its asynchronous nature, centered around an event loop, makes it highly suitable for non-blocking operations, especially in user interfaces and network requests.
- **Ubiquity**: It runs everywhere—in every modern web browser and on servers, making it a universal language for web development.

## Key Concepts

### The Event Loop
JavaScript has a single-threaded event loop model. It processes a message queue and executes tasks one by one. Asynchronous operations (like `fetch` or `setTimeout`) are handed off to the browser or Node.js environment, and their callbacks are placed in the queue only when the operation is complete. This prevents long-running operations from blocking the main thread.

### Prototypes
JavaScript is a prototype-based language. Every object can have another object as its prototype, and it inherits methods and properties from its prototype. This is a key difference from class-based inheritance found in languages like Python or Java.

### Closures
A closure is the combination of a function and the lexical environment within which that function was declared. It gives you access to an outer function's scope from an inner function, even after the outer function has finished executing.

### Asynchronous Programming
Modern JavaScript heavily relies on asynchronous patterns to handle operations like fetching data from an API.
- **Promises**: An object representing the eventual completion (or failure) of an asynchronous operation.
- **Async/Await**: Syntactic sugar built on top of Promises that makes asynchronous code look and behave more like synchronous code, improving readability.

```javascript
// Using Async/Await for a network request
async function getUserData(userId) {
    try {
        const response = await fetch(`https://api.example.com/users/${userId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Could not fetch user data:', error);
    }
}
```

## The JavaScript Ecosystem

JavaScript's ecosystem is vast and constantly evolving.
- **Frameworks and Libraries**: Tools like React, Angular, Vue, and [[Svelte]] provide structures for building complex user interfaces.
- **[[Nodejs|Node.js]]**: Allows JavaScript to be used for backend development, providing APIs for file systems, networking, and more.
- **Package Managers**: [[NPM]] and [[PNPM]] manage the millions of open-source packages available to developers.
- **[[TypeScript]]**: A superset of JavaScript that adds static typing, improving code quality and maintainability for large-scale applications.

JavaScript is the engine of the modern web. Its non-blocking nature and massive ecosystem make it a powerful tool for building everything from simple websites to complex, real-time applications.