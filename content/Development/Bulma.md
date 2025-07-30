---
title: Bulma
description: "A free, open-source CSS framework based on Flexbox that provides ready-to-use frontend components for building responsive web interfaces."
compartir: true
tags: [web-development, css, framework, frontend]
---

Bulma is a modern [[CSS|CSS]] framework that provides a collection of pre-designed classes and components to help developers build responsive and visually appealing websites. It is built with a mobile-first approach and uses Flexbox for its grid system, making it highly flexible and intuitive for creating complex layouts.

> [!info]
> One of Bulma's key differentiators is that it is a pure CSS framework, meaning it requires no JavaScript. This makes it lightweight and easy to integrate into any project or [[Javascript|JavaScript]] framework.

## Core Philosophy

Bulma's design is guided by several principles:
- **Simplicity**: A flat learning curve with readable class names (e.g., `.button`, `.title`).
- **Mobile-First**: Responsive design is at the core of the framework.
- **Modularity**: You can import only the components you need, keeping your CSS file size small.
- **No JavaScript**: Bulma provides the styles, but you control the logic.

## Key Features

### Responsive Grid System
Bulma's grid is built on Flexbox and is both powerful and easy to use. The `.columns` container and `.column` items allow for flexible and fluid layouts.

```html
<div class="columns">
  <div class="column">
    First column
  </div>
  <div class="column">
    Second column
  </div>
  <div class="column">
    Third column
  </div>
</div>
```

### Components
Bulma offers a wide range of essential interface components, including:
- **`card`**: A versatile container for content.
- **`navbar`**: A responsive navigation bar.
- **`modal`**: A classic modal overlay.
- **`tabs`**: A way to organize content.
- **`message`**: For displaying notifications and alerts.

```html
<div class="card">
  <header class="card-header">
    <p class="card-header-title">
      Card Title
    </p>
  </header>
  <div class="card-content">
    <div class="content">
      This is the card content.
    </div>
  </div>
</div>
```

### Modifiers
One of Bulma's most powerful features is its set of modifier classes (e.g., `is-primary`, `is-large`, `is-centered`) that can be used to alter the appearance of almost any element.

```html
<button class="button is-primary is-large">
  Primary Button
</button>

<h1 class="title is-1 has-text-centered">
  Centered Title
</h1>
```

## Integration

Because Bulma is a pure CSS framework, it can be used with any backend or frontend technology. It is a popular choice for projects using:
- [[Static Site Generators]] like Jekyll or Hugo.
- JavaScript frameworks like Vue.js, React, or [[Svelte]].
- Backend frameworks like Ruby on Rails, Django, or Laravel.

Bulma provides a clean, modern, and developer-friendly foundation for building websites. Its reliance on Flexbox, readable class names, and extensive component library make it a strong alternative to other CSS frameworks like Bootstrap.