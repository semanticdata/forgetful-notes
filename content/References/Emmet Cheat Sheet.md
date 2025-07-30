---
title: Emmet Cheat Sheet
description: "A quick reference for Emmet abbreviations for faster HTML and CSS coding."
compartir: true
tags: [emmet, html, css, cheat-sheet, web-development]
---

This cheat sheet provides a quick reference for Emmet abbreviations, a powerful toolkit for web developers that significantly speeds up HTML and CSS workflow.

Emmet abbreviation and snippet expansions are enabled by default in `html`, `haml`, `pug`, `slim`, `jsx`, `xml`, `xsl`, `css`, `scss`, `sass`, `less` and `stylus` files, as well as any language that inherits from any of the above like `handlebars` and `php`.

## HTML Abbreviation Syntax

### Children

```text
div>ul>li
```

```html
<div>
  <ul>
    <li></li>
  </ul>
</div>
```

### Siblings

```text
div + p + bq
```

```html
<div></div>
<p></p>
<blockquote></blockquote>
```

### Climb-up

```text
div+div>p>span+em
```

```html
<div></div>
<div>
    <p><span></span><em></em></p>
</div>
```

```text
div+div>p>span+em^bq
```

```html
<div></div>
<div>
    <p><span></span><em></em></p>
    <blockquote></blockquote>
</div>
```

```text
div+div>p>span+em^^^bq
```

```html
<div></div>
<div>
  <p><span></span><em></em></p>
</div>
<blockquote></blockquote>
```

### Multiplication

```text
ul>li*5
```

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

### Grouping

```text
div>(header>ul>li*2>a)+footer>p
```

```html
<div>
  <header>
    <ul>
      <li><a href=""></a></li>
      <li><a href=""></a></li>
    </ul>
  </header>
  <footer>
    <p></p>
  </footer>
</div>
```

```text
(div>dl>(dt+dd)*3)+footer>p
```

```html
<div>
  <dl>
    <dt></dt>
    <dd></dd>
    <dt></dt>
    <dd></dd>
    <dt></dt>
    <dd></dd>
  </dl>
</div>
<footer>
  <p></p>
</footer>
```

### ID and Classes

```text
div#header+div.page+div#footer.class1.class2.class3
```

```html
<div id="header"></div>
<div class="page"></div>
<div id="footer" class="class1 class2 class3"></div>
```

### Custom Attributes

```text
td[title="Hello world!" colspan=3]
```

```html
<td title="Hello world!" colspan="3"></td>
```

### Item Numbering

```text
ul>li.item$*5
```

```html
<ul>
  <li class="item1"></li>
  <li class="item2"></li>
  <li class="item3"></li>
  <li class="item4"></li>
  <li class="item5"></li>
</ul>
```

```text
ul>li.item$$*5
```

```html
<ul>
  <li class="item001"></li>
  <li class="item002"></li>
  <li class="item003"></li>
  <li class="item004"></li>
  <li class="item005"></li>
</ul>
```

### Changing Numbering Base and Direction

```text
ul>li.item$@-*5
```

```html
<ul>
    <li class="item5"></li>
    <li class="item4"></li>
    <li class="item3"></li>
    <li class="item2"></li>
    <li class="item1"></li>
</ul>
```

```text
ul>li.item$@3*5
```

```html
<ul>
    <li class="item3"></li>
    <li class="item4"></li>
    <li class="item5"></li>
    <li class="item6"></li>
    <li class="item7"></li>
</ul>
```

```text
ul>li.item$@-3*5
```

```html
<ul>
  <li class="item7"></li>
  <li class="item6"></li>
  <li class="item5"></li>
  <li class="item4"></li>
  <li class="item3"></li>
</ul>
```

### Text

```text
a{Click me}
```

```html
<a href="">Click me</a>
```

```text
a{click}+b{here}
```

```html
<a href="">click</a><b>here</b>
```

```text
a>{click}+b{here}
```

```html
<a href="">click<b>here</b></a>
```

```text
p>{Click }+a{here}+{ to continue}
```

```html
<p>Click <a href="">here</a> to continue</p>
```

```text
p{Click }+a{here}+{ to continue}
```

```html
<p>Click</p>
<a href="">here</a> to continue
```
