---
title: TypeScript
description: "A statically typed superset of JavaScript that adds optional types to the language, enhancing code quality and maintainability."
compartir: true
tags: [web-development, language, javascript, frontend]
---

TypeScript is an open-source language developed by Microsoft that builds on [[Javascript|JavaScript]]. It adds static type definitions, which allows developers to catch errors early in the development process. TypeScript code compiles to plain JavaScript, making it compatible with any browser, host, or operating system.

> [!info]
> The primary goal of TypeScript is to be a "JavaScript that scales." It provides features that help developers build and manage large, complex applications with greater confidence.

## Core Philosophy

TypeScript's philosophy is to enhance JavaScript without replacing it. Key principles include:
- **Static Types**: Add a type system to JavaScript to improve code quality and understandability.
- **Superset of JavaScript**: All valid JavaScript code is also valid TypeScript code.
- **Tooling**: The type system enables powerful tooling like autocompletion, navigation, and refactoring.

## Key Features

### Static Typing

TypeScript's core feature is its type system. You can add types to variables, function parameters, and return values.

```typescript
let framework: string = "TypeScript";
let version: number = 4.7;

function greet(name: string): string {
    return `Hello, ${name}!`;
}
```

### Interfaces

Interfaces define a "contract" for the shape of an object.

```typescript
interface User {
    name: string;
    id: number;
    is_active?: boolean; // Optional property
}

const user: User = {
    name: "Alice",
    id: 1,
};
```

### Classes

TypeScript supports modern JavaScript's class syntax and adds features like member visibility (`public`, `private`, `protected`).

```typescript
class Animal {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public move(distance: number): void {
        console.log(`${this.name} moved ${distance}m.`);
    }
}
```

### Generics

Generics allow you to create reusable components that can work with a variety of types.

```typescript
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("myString");
```

### Enums

Enums allow you to define a set of named constants.

```typescript
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

let go: Direction = Direction.Up;
```

## The TypeScript Compiler (tsc)

The TypeScript compiler, `tsc`, transpiles TypeScript code (`.ts`) into JavaScript code (`.js`). Its behavior is configured using a `tsconfig.json` file.

```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*"]
}
```

## Integration with JavaScript

TypeScript is designed for great interoperability with JavaScript.
- **Using JS Libraries**: You can use existing JavaScript libraries in a TypeScript project.
- **Declaration Files**: Type declaration files (`.d.ts`) provide type information for JavaScript libraries that were not written in TypeScript. The [DefinitelyTyped](https://definitelytyped.org/) project is a huge repository of these files.

## Frameworks

TypeScript is the language of choice for many modern web frameworks:
- **Angular**: Written entirely in TypeScript.
- **React**: Has excellent TypeScript support.
- **Vue**: Supports TypeScript, especially in Vue 3.
- **Node.js**: Can be used with libraries like Express to build typed backend applications.
- **[[svelte|Svelte]]**: SvelteKit has first-class TypeScript support.

By adding a powerful type system on top of JavaScript, TypeScript helps developers write more robust and maintainable code. Its excellent tooling and strong community support have made it an industry standard for building large-scale web applications.
