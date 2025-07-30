---
title: HTML
description: "HyperText Markup Language (HTML) is the standard markup language for creating web pages, defining the structure and semantic meaning of web content."
compartir: true
tags: [web-development, language, markup]
---

HTML (HyperText Markup Language) is the standard [[Markup Language|markup language]] for creating web pages. It defines the structure and semantic meaning of web content using elements represented by tags. HTML describes the content's purpose and meaning rather than its visual appearance, which is handled by CSS.

> [!info]
> HTML5, the current standard, emphasizes semantic meaning and accessibility over presentational markup.

## Core Philosophy

HTML follows the principle of **semantic markup**—describing what content is rather than how it should look. This separation of structure from presentation enables content to be displayed appropriately across different devices, screen readers, and contexts while maintaining its meaning.

The language uses a **hierarchical structure** where elements can contain other elements, creating a document tree that browsers can parse and render consistently.

## Document Structure

Every HTML document follows this basic structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
</head>
<body>
    <!-- Content goes here -->
</body>
</html>
```

### Essential Document Elements

- **`<!DOCTYPE html>`** - Declares HTML5 document type
- **`<html>`** - Root element containing all content
- **`<head>`** - Contains metadata not displayed on the page
- **`<body>`** - Contains all visible page content

## Semantic HTML5 Elements

### Structural Elements

HTML5 introduced semantic elements that clearly define different parts of a webpage:

```html
<header>
    <h1>Site Title</h1>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
        </ul>
    </nav>
</header>

<main>
    <section>
        <h2>Section Title</h2>
        <article>
            <h3>Article Title</h3>
            <p>Article content...</p>
        </article>
    </section>
    
    <aside>
        <h3>Related Links</h3>
        <p>Sidebar content...</p>
    </aside>
</main>

<footer>
    <p>&copy; 2025 Website Name</p>
</footer>
```

### Content Elements

**Text content:**
- **`<h1>` through `<h6>`** - Headings in hierarchical order
- **`<p>`** - Paragraphs of text
- **`<strong>`** - Important text (typically bold)
- **`<em>`** - Emphasized text (typically italic)

**Lists:**
```html
<!-- Unordered list -->
<ul>
    <li>First item</li>
    <li>Second item</li>
</ul>

<!-- Ordered list -->
<ol>
    <li>Step one</li>
    <li>Step two</li>
</ol>

<!-- Description list -->
<dl>
    <dt>Term</dt>
    <dd>Definition</dd>
</dl>
```

**Links and media:**
```html
<!-- Links -->
<a href="https://example.com">External link</a>
<a href="#section">Internal link</a>

<!-- Images -->
<img src="image.jpg" alt="Descriptive text" width="300" height="200">

<!-- Video -->
<video controls>
    <source src="video.mp4" type="video/mp4">
    Your browser does not support video.
</video>
```

## Forms and Interaction

HTML provides elements for user input and interaction:

```html
<form action="/submit" method="post">
    <fieldset>
        <legend>Contact Information</legend>
        
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4"></textarea>
        
        <button type="submit">Send Message</button>
    </fieldset>
</form>
```

## Attributes and Metadata

HTML elements can include attributes that provide additional information:

### Common Attributes

- **`id`** - Unique identifier for an element
- **`class`** - CSS class names for styling
- **`lang`** - Language of the element's content
- **`title`** - Additional information (tooltip text)

### Meta Elements

```html
<head>
    <!-- Character encoding -->
    <meta charset="UTF-8">
    
    <!-- Viewport for responsive design -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- SEO metadata -->
    <meta name="description" content="Page description">
    <meta name="keywords" content="keyword1, keyword2">
    
    <!-- Social media metadata -->
    <meta property="og:title" content="Page Title">
    <meta property="og:description" content="Page description">
</head>
```

## Integration with Web Technologies

HTML works in conjunction with other web technologies:

### CSS Integration

```html
<!-- External stylesheet -->
<link rel="stylesheet" href="styles.css">

<!-- Inline styles (avoid in production) -->
<p style="color: blue;">Blue text</p>

<!-- CSS classes -->
<div class="container">
    <p class="highlight">Styled paragraph</p>
</div>
```

### JavaScript Integration

```html
<!-- External script -->
<script src="script.js"></script>

<!-- Inline script -->
<script>
    document.addEventListener('DOMContentLoaded', function() {
        console.log('Page loaded');
    });
</script>

<!-- Event handlers -->
<button onclick="handleClick()">Click me</button>
```

## Modern HTML Best Practices

### Semantic Over Presentational

```html
<!-- Good: Semantic meaning -->
<article>
    <header>
        <h2>Article Title</h2>
        <time datetime="2025-01-15">January 15, 2025</time>
    </header>
    <p>Article content...</p>
</article>

<!-- Avoid: Presentational markup -->
<div class="big-title">Article Title</div>
<div class="date-text">January 15, 2025</div>
<div class="content-text">Article content...</div>
```

HTML serves as the foundation of web development, providing the structural backbone that CSS styles and JavaScript enhances. Understanding semantic HTML5 elements enables the creation of accessible, maintainable web content that works across different devices and assistive technologies. Whether building static sites with [[Static Site Generators|static site generators]] or dynamic applications, HTML remains the essential building block of the web.