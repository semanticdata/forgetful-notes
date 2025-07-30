---
title: HTML Cheat Sheet
description: "A quick reference for common HTML5 tags, attributes, and document structure."
compartir: true
tags: [html, language, cheat-sheet, web-development]
---

This cheat sheet provides a quick reference for the most common tags and attributes in [[HTML|HTML5]].

## Document Structure

The basic boilerplate for any HTML5 document.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Page content goes here -->
    <script src="script.js"></script>
</body>
</html>
```

## Semantic Layout Elements

These tags give structural meaning to your content.

```html
<header>Page header content, logo, navigation</header>
<nav>Navigation links</nav>
<main>The main content of the page</main>
<article>A self-contained piece of content (e.g., blog post)</article>
<section>A thematic grouping of content</section>
<aside>Sidebar content, related links</aside>
<footer>Page footer content, copyright, contact info</footer>
```

## Text Formatting

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h6>Heading 6</h6>

<p>This is a paragraph.</p>

<a href="https://example.com">This is a link</a>

<strong>Important text (bold)</strong>
<em>Emphasized text (italic)</em>
<u>Underlined text</u>
<s>Strikethrough text</s>

<code>Inline code snippet</code>
<pre><code>Multi-line
code block</code></pre>

<blockquote>Quote from another source.</blockquote>
<cite>Title of a work</cite>
```

## Lists

**Unordered List**
```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
```

**Ordered List**
```html
<ol>
    <li>First Item</li>
    <li>Second Item</li>
</ol>
```

**Description List**
```html
<dl>
    <dt>Term</dt>
    <dd>Description of the term.</dd>
</dl>
```

## Media Elements

```html
<!-- Image -->
<img src="image.jpg" alt="Descriptive text" width="300" height="200">

<!-- Audio -->
<audio controls src="audio.mp3"></audio>

<!-- Video -->
<video controls src="video.mp4" width="400"></video>
```

## Forms

```html
<form action="/submit" method="post">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password">

    <input type="checkbox" id="remember" name="remember">
    <label for="remember">Remember me</label>

    <input type="radio" id="option1" name="options" value="1">
    <label for="option1">Option 1</label>

    <textarea id="message" name="message" rows="4"></textarea>

    <select id="country" name="country">
        <option value="us">United States</option>
        <option value="ca">Canada</option>
    </select>

    <button type="submit">Submit</button>
</form>
```

## Tables

```html
<table>
    <thead>
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Data 1</td>
            <td>Data 2</td>
        </tr>
    </tbody>
</table>
```

## Miscellaneous

```html
<!-- A horizontal rule -->
<hr>

<!-- A line break -->
<br>

<!-- Interactive details -->
<details>
    <summary>Click to expand</summary>
    <p>Hidden content revealed.</p>
</details>
```
