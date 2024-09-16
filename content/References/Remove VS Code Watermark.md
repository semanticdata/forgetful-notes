---
title: Unlock the Sidebar Width in Firefox
description: "How-to guide about unlocking the max-width of Firefox's sidebar. Doing so net's you a better experience when using extensions within the sidebar."
date: 2023-06-26
tags: [firefox, tutorial]
---
# Remove VS Code Empty Tab Watermark

This post will guide you through changing VS Code [[CSS]] to remove or hide the logo that appears on every empty tab.

I enjoy my code editor clean when nothing is open.

## Instructions

- Find `workbench.desktop.main.[[CSS]]` within VS Code installation folder.
  - On Windows, it's in: `%userprofile%\AppData\Local\Programs\Microsoft VS Code\resources\app\out\vs\workbench`
  - On Mac, it's in: `/Applications/Visual Studio Code.app/Contents/Resources/app/out/vs/workbench/`
- Find the [[CSS]] block called ".monaco-workbench .part.editor>.content.empty .editor-group-container.empty>.editor-group-letterpress" (or look for letterpress)
- Add the option `visibility: hidden;`

```css
/* within workbench.desktop.main.css */
.monaco-workbench .part.editor > .content.empty .editor-group-container.empty {
  visibility: hidden;
}
```

```css
/* custom.css */
.monaco-workbench
  .part.editor
  > .content
  .editor-group-container
  > .editor-group-watermark
  > .letterpress {
  width: 100%;
  max-height: 100%;
  aspect-ratio: 1/1;
  background-size: contain;
  background-position-x: center;
  background-repeat: no-repeat;
  display: none;
}
```
