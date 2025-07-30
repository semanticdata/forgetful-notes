---
title: CSS Cheat Sheet
description: "A quick reference for common CSS selectors, properties, and layout techniques."
compartir: true
tags: [css, language, cheat-sheet, web-development]
---

This cheat sheet provides a quick reference for the most common selectors and properties in [[CSS|CSS]].

## Selectors

```css
/* Element selector */
p { color: black; }

/* Class selector */
.my-class { font-weight: bold; }

/* ID selector */
#unique-id { border: 1px solid blue; }

/* Attribute selector */
input[type="text"] { background-color: #eee; }

/* Pseudo-class selectors */
a:hover { text-decoration: underline; }
li:last-child { margin-bottom: 0; }

/* Pseudo-element selectors */
p::first-line { font-style: italic; }

/* Combinators */
article p { line-height: 1.6; } /* Descendant */
nav > ul { list-style: none; }  /* Child */
h2 + p { margin-top: 0; }      /* Adjacent Sibling */
```

## Box Model

```css
.box {
    width: 100px;
    height: 100px;
    padding: 10px; /* Space inside the border */
    border: 1px solid black;
    margin: 20px;  /* Space outside the border */

    /* Changes how width/height are calculated */
    box-sizing: border-box;
}
```

## Typography

```css
.text {
    font-family: Arial, sans-serif;
    font-size: 16px; /* or 1rem */
    font-weight: 400; /* normal */
    line-height: 1.5;
    color: #333;
    text-align: left;
    text-decoration: none;
}
```

## Flexbox Layout

A one-dimensional layout model for arranging items in rows or columns.

```css
.flex-container {
    display: flex;
    flex-direction: row; /* row | column */
    justify-content: center; /* Main axis alignment */
    align-items: center;     /* Cross axis alignment */
    gap: 1rem;
}

/* Justify-content options */
/* flex-start | flex-end | center | space-between | space-around */

/* Align-items options */
/* flex-start | flex-end | center | stretch | baseline */

.flex-item {
    flex-grow: 1;   /* How much to grow relative to others */
    flex-shrink: 0; /* How much to shrink */
    flex-basis: 100px; /* Initial size */
    /* Shorthand: flex: 1 0 100px; */
}
```

## Grid Layout

A two-dimensional layout model for creating grid-based layouts.

```css
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; /* Three equal columns */
    grid-template-rows: auto;
    gap: 20px;
}

.grid-item {
    grid-column: span 2; /* Make this item span two columns */
    grid-row: 1 / 3;     /* Make this item span from row line 1 to 3 */
}
```

## Units

```css
/* Absolute Units */
px, pt, cm, in

/* Relative Units */
rem /* Relative to root element's font-size */
em  /* Relative to parent element's font-size */
%   /* Relative to parent element's size */
vw  /* 1% of the viewport's width */
vh  /* 1% of the viewport's height */
```

## Media Queries

For creating responsive designs.

```css
/* Mobile-first approach */
.container {
    width: 100%;
}

/* Tablet and up */
@media (min-width: 768px) {
    .container {
        max-width: 750px;
    }
}

/* Desktop and up */
@media (min-width: 1200px) {
    .container {
        max-width: 1170px;
    }
}
```

## CSS Variables

```css
:root {
    --primary-color: #007bff;
    --base-font-size: 16px;
}

body {
    color: var(--primary-color);
    font-size: var(--base-font-size);
}
```
