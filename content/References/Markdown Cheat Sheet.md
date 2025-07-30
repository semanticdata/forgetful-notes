---
title: Markdown Cheat Sheet
description: "A quick reference for common Markdown syntax, including text formatting, lists, code blocks, and extended features."
compartir: true
tags: [markdown, language, cheat-sheet, writing]
---

This cheat sheet provides a quick reference for [[Markdown]] syntax. For explanations of flavors and philosophy, see the main [[Markdown]] note.

## Text Formatting

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text** or __Bold text__
*Italic text* or _Italic text_
~~Strikethrough text~~

`inline code`
```

## Lists

**Unordered List**
```markdown
- Item A
- Item B
  - Sub-item 1
  - Sub-item 2
```

**Ordered List**
```markdown
1. First item
2. Second item
3. Third item
```

**Task List (GFM)**
```markdown
- [x] Completed task
- [ ] Incomplete task
```

## Links and Images

```markdown
<!-- Link -->
[Link text](https://www.example.com "Link title")

<!-- Image -->
![Alt text for image](./images/image.jpg "Image title")
```

## Code Blocks

Use triple backticks with an optional language identifier.

````markdown
```python
def my_function():
    return "Hello"
```
````

## Blockquotes

```markdown
> This is a blockquote.
> It can span multiple lines.
```

## Tables (GFM)

```markdown
| Header 1 | Header 2 | Header 3 |
|:---------|:--------:|---------:|
| Align L  | Center   | Align R  |
| Cell 1   | Cell 2   | Cell 3   |
```

## Miscellaneous

**Horizontal Rule**
```markdown
---
```

**Footnotes**
```markdown
Here is some text with a footnote.[^1]

[^1]: This is the footnote's content.
```

**Admonitions (Common Extension)**
```markdown
> [!note]
> A note with some information.

> [!warning]
> A warning that requires attention.
```
