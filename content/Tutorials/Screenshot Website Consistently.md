---
title: Consistently Take a Website Screenshot
description: How to take consistent, precise screenshots of a website using browser developer tools.
date: 2024-07-29
difficulty: Beginner
compartir: true
category: Tutorials
tags: [tutorial]
---

Taking precise screenshots of HTML elements in your browser's Developer Tools can be incredibly useful for web development and design. This technique lets you capture exactly what you need with consistent quality every time.

## What You'll Build/Achieve

You'll learn how to capture precise, consistent screenshots of HTML elements using your browser's developer tools with custom resolution and pixel density settings.

## Prerequisites

- Any modern web browser (Chrome, Edge, Firefox)
- Basic familiarity with browser developer tools

## 1. Open Developer Tools

Press `Ctrl + Shift + I` or `F12` to open the browser developer tools.

![dev-tools-edge](https://bear-images.sfo2.cdn.digitaloceanspaces.com/database-1719509556.png)

## 2. Toggle Device Toolbar

Press `Ctrl + Shift + M` to toggle the Device Toolbar for device simulation.

![device-toolbar2](https://bear-images.sfo2.cdn.digitaloceanspaces.com/database-1719509820.png)

## 3. Configure Device Pixel Ratio

Click the three vertical dots in the top right corner of the Developer Tools pane and select **"Add device pixel ratio"** (or **DPR**). Set the DPR to **2.0** for high-quality screenshots.

## 4. Set Resolution

In the Device Toolbar, set your desired resolution (e.g., 512x512) to configure the viewport size.

## 5. Select HTML Element

In the Elements panel, navigate to and select the HTML element you want to capture. Usually the `<body>` element works well.

## 6. Open Command Menu

Press `Ctrl + Shift + P` (Windows/Linux) or `Cmd + Shift + P` (Mac) to open the Command Menu.

## 7. Capture Screenshot

Type "node" in the Command Menu, select **"Capture node screenshot"** from the list, and press `Enter`.

## Verification

You'll know it worked when the screenshot is automatically saved to your default download location with the specified resolution and pixel density.

## Common Issues

**Problem**: Screenshot appears blurry or low quality  
**Solution**: Make sure DPR is set to 2.0 or higher

**Problem**: Can't find the "Capture node screenshot" option  
**Solution**: Make sure you have an HTML element selected in the Elements panel first
