---
title: JavaScript Cheat Sheet
description: "A quick reference for core JavaScript syntax, data structures, control flow, and other common features."
compartir: true
tags: [javascript, language, cheat-sheet, development, web-development]
---

This cheat sheet provides a quick reference for the most common syntax and features in the [[Javascript|JavaScript]] programming language.

## Syntax and Variables

Variables can be declared with `let` (block-scoped, mutable), `const` (block-scoped, constant reference), and `var` (function-scoped).

```javascript
// This is a comment

let name = "Alice"; // Mutable variable
const age = 30;      // Constant variable
var score = 100;     // Legacy variable declaration
```

## Data Types

### Primitives

```javascript
let myString = "Hello";
let myNumber = 42.5;
let myBoolean = true;
let myNull = null;
let myUndefined = undefined;
let mySymbol = Symbol("id");
```

### Objects

```javascript
const person = {
    name: "Bob",
    age: 25
};
```

## Data Structures

**Arrays**: Ordered, mutable collections.
```javascript
const fruits = ["apple", "banana"];
fruits.push("cherry");
console.log(fruits[0]); // "apple"
```

**Objects**: Unordered, mutable key-value pairs.
```javascript
const car = { make: "Toyota", model: "Camry" };
console.log(car.make); // "Toyota"
```

## Operators

### Arithmetic & Comparison

```javascript
// Arithmetic: + - * / % **
// Comparison: == != === !== > < >= <=
// Use strict equality (===) to avoid type coercion.
"5" == 5;  // true
"5" === 5; // false
```

### Logical & Ternary

```javascript
(5 > 2) && (2 > 5); // false (AND)
(5 > 2) || (2 > 5); // true (OR)

const result = (age > 18) ? "adult" : "minor";
```

## Control Flow

### Conditional Statements

```javascript
if (age > 18) {
    console.log("Adult");
} else if (age === 18) {
    console.log("Just became an adult");
} else {
    console.log("Minor");
}
```

### Loops

```javascript
// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// For...of loop (for iterables like arrays)
for (const fruit of fruits) {
    console.log(fruit);
}

// While loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

## Functions

**Function Declaration**:
```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
```

**Arrow Function** (ES6+):
```javascript
const add = (a, b) => a + b;
```

## Array Methods

Common methods for working with arrays.

```javascript
const numbers = [1, 2, 3, 4, 5];

// .map(): Create a new array by transforming each element
const squares = numbers.map(n => n * n);

// .filter(): Create a new array with elements that pass a test
const evens = numbers.filter(n => n % 2 === 0);

// .reduce(): Reduce the array to a single value
const sum = numbers.reduce((acc, n) => acc + n, 0);

// .forEach(): Execute a function for each element
numbers.forEach(n => console.log(n));
```

## Asynchronous JavaScript

Handle operations like API calls without blocking the main thread.

**Promises**:
```javascript
fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
```

**Async/Await** (ES2017+):
```javascript
async function fetchData() {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}
```
