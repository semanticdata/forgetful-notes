---
title: CSS
description: "Cascading Style Sheets (CSS) is the language used to control the visual presentation of HTML documents, handling layout, styling, animations, and responsive design."
compartir: true
tags: [web-development, language, styling]
---

CSS (Cascading Style Sheets) is the language that controls the visual presentation of [[HTML|HTML]] documents. It handles layout, typography, colors, animations, and responsive design, transforming semantic markup into visually appealing and functional user interfaces.

> [!info]
> Modern CSS includes powerful features like Grid, Flexbox, and CSS Variables that enable sophisticated layouts and maintainable stylesheets.

## Core Philosophy

CSS follows the principle of **separation of concerns**—keeping visual presentation separate from document structure. This enables the same HTML content to be styled differently for various contexts (screens, print, accessibility devices) while maintaining semantic meaning.

The **cascade** refers to CSS's algorithm for determining which styles apply when multiple rules target the same element, considering specificity, inheritance, and source order.

## CSS Syntax and Selectors

### Basic Syntax

```css
selector {
    property: value;
    another-property: another-value;
}
```

### Fundamental Selectors

```css
/* Type selector */
p { color: blue; }

/* Class selector */
.highlight { background-color: yellow; }

/* ID selector */
#header { font-size: 24px; }

/* Attribute selector */
[type="email"] { border: 1px solid blue; }

/* Pseudo-class selector */
a:hover { text-decoration: underline; }

/* Pseudo-element selector */
p::first-line { font-weight: bold; }
```

### Combinators

```css
/* Descendant combinator (space) */
article p { margin-bottom: 1em; }

/* Child combinator (>) */
nav > ul { list-style: none; }

/* Adjacent sibling combinator (+) */
h2 + p { margin-top: 0; }

/* General sibling combinator (~) */
h2 ~ p { color: gray; }
```

## Box Model and Layout

### The CSS Box Model

Every element is a rectangular box with:

```css
.box {
    /* Content area */
    width: 300px;
    height: 200px;
    
    /* Padding - space inside the border */
    padding: 20px;
    
    /* Border - outline around padding */
    border: 2px solid black;
    
    /* Margin - space outside the border */
    margin: 10px;
}

/* Box-sizing alternative */
.modern-box {
    box-sizing: border-box; /* Includes padding and border in width/height */
    width: 300px;
    padding: 20px;
    border: 2px solid black;
}
```

### Layout Methods

**Flexbox** - One-dimensional layout for components:
```css
.flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
}

.flex-item {
    flex: 1; /* Grow to fill available space */
}
```

**CSS Grid** - Two-dimensional layout for page structure:
```css
.grid-container {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: 
        "header header header"
        "sidebar main aside"
        "footer footer footer";
    gap: 1rem;
    min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }
```

## Typography and Visual Design

### Font Properties

```css
.typography {
    /* Font family with fallbacks */
    font-family: 'Helvetica Neue', Arial, sans-serif;
    
    /* Font size and weight */
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.6;
    
    /* Text properties */
    text-align: left;
    text-decoration: none;
    letter-spacing: 0.5px;
    text-transform: uppercase;
}
```

### Colors and Backgrounds

```css
.visual-design {
    /* Color values */
    color: #333333; /* Hex */
    background-color: rgb(255, 255, 255); /* RGB */
    border-color: hsl(200, 100%, 50%); /* HSL */
    box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px; /* RGBA */
    
    /* CSS Custom Properties (Variables) */
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    color: var(--primary-color);
    
    /* Background properties */
    background-image: url('pattern.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
```

## Responsive Design

### Mobile-First Approach

```css
/* Base styles (mobile) */
.container {
    width: 100%;
    padding: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
    .container {
        max-width: 750px;
        margin: 0 auto;
    }
}

/* Desktop and up */
@media (min-width: 1200px) {
    .container {
        max-width: 1170px;
    }
}
```

### Common Breakpoints

```css
/* Mobile devices */
@media (max-width: 767px) { /* styles */ }

/* Tablet devices */
@media (min-width: 768px) and (max-width: 1199px) { /* styles */ }

/* Desktop devices */
@media (min-width: 1200px) { /* styles */ }

/* High-resolution displays */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) { /* styles */ }
```

## Modern CSS Features

### CSS Custom Properties (Variables)

```css
:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --font-size-base: 1rem;
    --border-radius: 0.375rem;
    --spacing-unit: 1rem;
}

.component {
    color: var(--primary-color);
    font-size: calc(var(--font-size-base) * 1.25);
    padding: calc(var(--spacing-unit) * 0.5);
    border-radius: var(--border-radius);
}
```

### Transitions and Animations

```css
/* Smooth transitions */
.button {
    background-color: var(--primary-color);
    transition: all 0.3s ease;
}

.button:hover {
    background-color: var(--secondary-color);
    transform: translateY(-2px);
}

/* Keyframe animations */
@keyframes fadeIn {
    from { 
        opacity: 0; 
        transform: translateY(20px); 
    }
    to { 
        opacity: 1; 
        transform: translateY(0); 
    }
}

.fade-in {
    animation: fadeIn 0.6s ease-out;
}
```

## CSS Architecture and Organization

### BEM Methodology

```css
/* Block */
.card { /* styles */ }

/* Element */
.card__title { /* styles */ }
.card__content { /* styles */ }

/* Modifier */
.card--featured { /* styles */ }
.card__title--large { /* styles */ }
```

### CSS Modules Approach

```css
/* Component-scoped styles */
.component {
    /* Base component styles */
}

.component .title {
    /* Scoped to this component */
}

.component.variant {
    /* Component variation */
}
```

## CSS Preprocessors and Tools

### SCSS/Sass Features

```scss
// Variables
$primary-color: #007bff;
$font-stack: 'Helvetica Neue', Arial, sans-serif;

// Nesting
.navigation {
    background-color: $primary-color;
    
    ul {
        list-style: none;
        
        li {
            display: inline-block;
            
            a {
                text-decoration: none;
                color: white;
                
                &:hover {
                    opacity: 0.8;
                }
            }
        }
    }
}

// Mixins
@mixin button-style($bg-color, $text-color) {
    background-color: $bg-color;
    color: $text-color;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.375rem;
    cursor: pointer;
    
    &:hover {
        opacity: 0.9;
    }
}

.primary-button {
    @include button-style($primary-color, white);
}
```

### Responsive Design Mixins

```scss
// Mobile-first media query mixins
@mixin screen-min($min) {
    @media (min-width: $min) {
        @content;
    }
}

@mixin screen-max($max) {
    @media (max-width: $max - 1) {
        @content;
    }
}

@mixin screen-between($min, $max) {
    @media (min-width: $min) and (max-width: $max - 1) {
        @content;
    }
}

// Usage
.container {
    width: 100%;
    
    @include screen-min(768px) {
        max-width: 750px;
        margin: 0 auto;
    }
    
    @include screen-min(1200px) {
        max-width: 1170px;
    }
}
```

## CSS Frameworks and Libraries

### Utility-First Frameworks

**Tailwind CSS** provides utility classes for rapid development:
```html
<div class="bg-blue-500 text-white p-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors">
    Styled with utility classes
</div>
```

### Component-Based Frameworks

**Bootstrap** offers pre-built components:
```html
<div class="card">
    <div class="card-header">Card Title</div>
    <div class="card-body">Card content</div>
</div>
```

**[[Bulma]]** provides a modern, flexbox-based framework:
```html
<div class="card">
    <header class="card-header">
        <p class="card-header-title">Card Title</p>
    </header>
    <div class="card-content">
        <div class="content">Card content</div>
    </div>
</div>
```

## Integration with Web Technologies

### CSS with HTML

```html
<!-- External stylesheet -->
<link rel="stylesheet" href="styles.css">

<!-- CSS with semantic HTML -->
<article class="blog-post blog-post--featured">
    <header class="blog-post__header">
        <h1 class="blog-post__title">Article Title</h1>
        <time class="blog-post__date">January 15, 2025</time>
    </header>
    <div class="blog-post__content">
        <p>Article content...</p>
    </div>
</article>
```

### CSS with JavaScript

```javascript
// Manipulating CSS classes
const element = document.querySelector('.component');
element.classList.add('active');
element.classList.toggle('visible');

// Inline styles
element.style.backgroundColor = 'var(--primary-color)';

// CSS Custom Properties
document.documentElement.style.setProperty('--theme-color', '#ff6b6b');
```

## Modern CSS Best Practices

### Performance and Optimization

```css
/* Use efficient selectors */
.component { /* Good: Single class */ }
div.container p.text { /* Avoid: Over-specific */ }

/* Minimize reflows and repaints */
.animated {
    /* Use transform instead of changing layout properties */
    transform: translateX(100px);
    /* Use opacity instead of visibility when possible */
    opacity: 0;
}

/* Use CSS containment for performance */
.independent-component {
    contain: layout style paint;
}
```

### Accessibility Considerations

```css
/* Focus states for keyboard navigation */
.button:focus {
    outline: 2px solid var(--focus-color);
    outline-offset: 2px;
}

/* High contrast support */
@media (prefers-contrast: high) {
    .card {
        border: 2px solid;
    }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
```

CSS serves as the visual language of the web, transforming [[HTML]] structure into engaging user interfaces. Modern CSS provides powerful layout systems, responsive design capabilities, and sophisticated styling options that enable the creation of beautiful, accessible, and performant web experiences. Whether used with preprocessors like Sass, frameworks like [[Bulma]], or vanilla approaches, CSS remains essential for contemporary web development.