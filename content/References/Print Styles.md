# Print Styles

Source: [news.ycombinator.com/item?id=39584654](https://news.ycombinator.com/item?id=39584654)

## Style 1

```css
h2,
h3,
h4,
h5,
h6 {
  break-after: avoid-page;
}
img,
svg,
table,
canvas {
  break-inside: avoid;
}
a::after {
  content: "(" attr(href) ")";
}
```

### Explanations

- Avoid printing section headers at the bottom of one page.
- Prefer printing graphics and figures on whole pages instead of split across pages.
- Print out the URL of every hyperlink instead of having links only underline and not linked.

## Style 2

```css
footer {
  page-break-inside: avoid;
}
summary {
  page-break-after: avoid;
}
details {
  break-inside: avoid;
}
body {
  min-width: 992px;
}
```

### Explanations

- Don't break page footer.
- Don't break after `<summary>`.
- With `<details>` shorter than page length use this.
- Avoids rendering mobile version of a site.
