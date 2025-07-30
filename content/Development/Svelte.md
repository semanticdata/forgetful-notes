---
title: Svelte
description: "A modern JavaScript framework that compiles components into efficient, framework-free vanilla JavaScript, resulting in highly performant web applications."
compartir: true
tags: [web-development, language, javascript, frontend]
---

Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app.

Instead of using techniques like virtual DOM diffing, Svelte writes code that surgically updates the DOM when the state of your app changes, resulting in smaller bundle sizes and better performance.

> [!info]
> Svelte's philosophy is "write less code." It aims to provide a developer experience that is simple and intuitive, without sacrificing performance.

## Core Concepts

### Reactivity
Svelte's reactivity is at the core of its design. State management is built into the language itself. When you assign a new value to a variable, Svelte automatically knows how to update the parts of the DOM that depend on it.

```html
<script>
  let count = 0;

  function handleClick() {
    count += 1;
  }
</script>

<button on:click={handleClick}>
  Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
```

### Scoped Styles
CSS inside a Svelte component's `<style>` block is scoped by default. This means it won't leak out and affect other components, preventing common styling conflicts.

```html
<style>
  p {
    color: blue;
    /* This style only applies to <p> elements in this component */
  }
</style>

<p>This paragraph is blue.</p>
```

### No Virtual DOM
By compiling to highly optimized, imperative vanilla [[Javascript|JavaScript]], Svelte avoids the overhead of a Virtual DOM. This leads to faster updates and a smaller application footprint, which is especially beneficial for mobile and low-powered devices.

## SvelteKit

SvelteKit is the official application framework for Svelte. It provides a complete solution for building Svelte applications of all sizes, with features like:
- **Server-Side Rendering (SSR)**
- **Filesystem-based routing**
- **Code splitting**
- **Adapter-based deployments** for different platforms (Vercel, Netlify, Node.js)

## Example Component

Here is a simple Svelte component that demonstrates its key features:

```html
<script>
  let name = 'World';
</script>

<main>
  <h1>Hello, {name}!</h1>
  <input bind:value={name}>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  h1 {
    color: #ff3e00;
  }
</style>
```

In this example:
- The `<h1>` tag is reactive and will update whenever the `name` variable changes.
- The `<input>` uses `bind:value` for two-way data binding, so typing in the input field updates the `name` variable.
- The [[CSS|CSS]] is scoped to this component.

Svelte offers a fresh and compelling alternative to traditional JavaScript frameworks. Its focus on a compiler-based approach, simplicity, and performance makes it an excellent choice for building modern web applications.