---
title: Unlock the Sidebar Width in Firefox
description: How-to unlock the max-width of Firefox's sidebar. Doing so net's you a better experience when using extensions within the sidebar.
date: 2023-06-25
compartir: true
category: Tutorials
tags:
  - tutorial
---

This post will guide you through unlocking the sidebar width in Firefox. It will let you resize it beyond what is possible by default. We will be setting both the maximum, and the minimum width. You will have a chance to customize these values once at the right step.

## Why Would Anyone Want to Do This?

- To enhance the use of the Firefox [Side View](https://addons.mozilla.org/en-US/firefox/addon/side-view/) extension.
- To compliment the use of one of my Firefox sidebar [extensions](https://addons.mozilla.org/en-US/firefox/user/17772574/).

## Overview

1. Open `about:support`.
2. Locate your _Profile Folder_.
3. Open your _Profile Folder_.
4. Create a new folder called `chrome`.
5. Inside the `chrome` folder, create a new file called `userChrome.css` (includes the file extension).
6. Copy and paste this in it: `#sidebar-box { max-width: 40% !important; min-width: 300px !important; }`.
7. Customize the width to your preference.
8. Open `about:config`.
9. Find `toolkit.legacyUserProfileCustomizations.stylesheets` and change its value to `true`.
10. Restart Firefox.

## Step-by-Step Instructions

### 1. Open `about:support`

In a new tab, navigate to <about:support>.

### 2. Locate the Profile Folder

Under _Application Basics_, find **Profile Folder**.

### 3. Open Profile Folder

Locate and click the **Open Folder** button next to it. You'll find it next to an address similar to:[^1]

```shell
%appdata%\Mozilla\Firefox\Profiles\your-profile-id.default
```

> [!note]
> In Windows, `%appdata%` is equivalent to: `C:\Users\your-username\AppData\Roaming`.

### 4. Create New Folder `chrome`

Inside your _Firefox Profile Folder_, create a new folder named `chrome`.

### 5. Create `userChrome.css`

Inside the newly created `chrome` folder, create a new file named `userChrome.css`.

### 6. Copy and Paste Its Contents

Copy the following code, and paste as content inside `useChrome.css` and save:

```css title="userChrome.css"
#sidebar-box {
  max-width: 40% !important;
  min-width: 300px !important;
}
```

### 7. Customize the Width

You may change the units to any length you find more convenient.

### 8. Open `about:config`

In a new tab, navigate to [about:config](about:config), and search for:

```shell
toolkit.legacyUserProfileCustomizations.stylesheets
```

### 9. Change the Value

Change its value to `true`.

### 10. Restart Firefox

Finally, restart Firefox for the changes to take effect.

[^1]: In Windows, `%appdata%` is equivalent to: `C:\Users\your-username\AppData\Roaming`.
