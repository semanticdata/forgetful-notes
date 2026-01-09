---
title: Unlock the Sidebar Width in Firefox
description: Customize Firefox's sidebar to resize beyond default limits for better extension use.
date: 2023-06-25
difficulty: Beginner
compartir: true
category: Tutorials
tags: [tutorial,firefox]
---

Firefox's sidebar is great for extensions, but the default width restrictions can be frustrating when you want to make better use of that space. This guide will show you how to break free from those limitations.

## What You'll Build/Achieve

You'll unlock Firefox's sidebar width restrictions, allowing you to resize it beyond the default limits to better accommodate sidebar extensions.

## Prerequisites

- Firefox browser installed
- Basic file system navigation skills

## 1. Open Firefox Support Page

Navigate to `about:support` in a new Firefox tab.

## 2. Locate Profile Folder

Under **Application Basics**, find **Profile Folder** and click the **Open Folder** button next to it.

## 3. Create Chrome Folder

Inside your Firefox Profile Folder, create a new folder named `chrome`.

## 4. Create CSS File

Inside the `chrome` folder, create a new file named `userChrome.css`.

## 5. Add CSS Rules

Copy and paste this content into `userChrome.css`:

```css title="userChrome.css"
#sidebar-box {
  max-width: 40% !important;
  min-width: 300px !important;
}
```

You can customize the width values to your preference.

## 6. Enable Custom Stylesheets

Navigate to `about:config` in a new Firefox tab and search for:

```
toolkit.legacyUserProfileCustomizations.stylesheets
```

Change its value to `true`.

## 7. Restart Firefox

Restart Firefox for the changes to take effect.

## Verification

You'll know it worked when you can resize Firefox's sidebar wider than the previous default limit.

## Common Issues

**Problem**: Changes don't take effect after restart  
**Solution**: Double-check that the `userChrome.css` file is in the correct `chrome` folder within your profile directory

**Problem**: Can't find the profile folder  
**Solution**: Make sure you're clicking "Open Folder" next to Profile Folder, not just copying the path
