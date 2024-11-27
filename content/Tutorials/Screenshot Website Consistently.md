---
title: "Consistently Take a Website Screenshot"
description: "How to take consistent, precise screenshots of a website."
date: "2024-07-29"
compartir: true
category: Tutorials
tags: [tutorial]
---

Taking a precise screenshot of an HTML element in your browser's Developer Tools can be incredibly useful for web development and design. Follow these steps to capture a node screenshot with a custom Device Pixel Ratio (DPR) and resolution.

## Overview

1. Press `Ctrl + Shift + I` or `F12` to open the browser developer tools.
2. Press `Ctrl + Shift + M` to toggle the device toolbar.
3. Click the dots on top right and select "Add device pixel ratio" or DPR.
4. Set DPR to `2.0` if not done yet.
5. Set resolution (e.g. 512x512).
6. Select the HTML element you'd like to capture within the "elements panel".
7. Press `Ctrl + Shift + P` to open the run command interface.
8. Type "node" to show the "Capture node screenshot" and press `Enter`.
9. Enjoy your screenshot.

## Step-by-Step Tutorial

### 1. Open Developer Tools

Press `Ctrl + Shift + I` or `F12` to open the browser developer tools. This can look different depending on what browser you use.

Here's what it looks like in Microsoft Edge:

![dev-tools-edge](https://bear-images.sfo2.cdn.digitaloceanspaces.com/database-1719509556.png)

### 2. Toggle Device Toolbar

Press `Ctrl + Shift + M` to toggle the Device Toolbar, allowing you to simulate different devices.

<!--![device-toolbar](https://bear-images.sfo2.cdn.digitaloceanspaces.com/database-1719509661.png)-->
![device-toolbar2](https://bear-images.sfo2.cdn.digitaloceanspaces.com/database-1719509820.png)

### 3. Add Device Pixel Ratio (DPR)

Click the three vertical dots in the top right corner of the Developer Tools pane. From the dropdown menu, select **"Add device pixel ratio"** (or **DPR**).

### 4. Set Device Pixel Ratio (DPR)

In the Device Toolbar, set the DPR to **2.0** if it is not already set. This ensures the screenshot captures with the desired pixel density.

### 5. Set Resolution

In the Device Toolbar, set the desired resolution. This configures the viewport size for your screenshot.

### 6. Select HTML Element

In the Elements panel, navigate to and select the HTML element you want to capture. This highlights the specific node for the screenshot. Usually the `<body>` element will work, but it depends on the site you are screenshotting.

### 7. Open Command Menu

Press `Ctrl + Shift + P` (Windows/Linux) or `Cmd + Shift + P` (Mac) to open the Command Menu in Developer Tools.

### 8. Capture Node Screenshot

In the Command Menu, type "node" to filter commands and select **"Capture node screenshot"** from the list. Press `Enter`.

### 9. Enjoy Your Screenshot

The screenshot of the selected HTML element with the specified DPR and resolution is now saved. You can find it in your default download location.
