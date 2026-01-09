---
title: Enable Split View in Firefox
description: "Firefox has introduced an experimental Split View feature that allows you to view two tabs side-by-side in the same window."
date: 2026-01-08
difficulty: Beginner
compartir: true
category: Tutorials
tags: [tutorial,firefox]
---

Firefox has introduced an experimental **Split View** feature that allows you to view two tabs side-by-side in the same window.

> Finally!

## Step-by-Step Instructions

1. Open a new tab and navigate to `about:config`.
2. Click **Accept the Risk and Continue** if prompted.
3. In the search bar at the top, copy and paste the following:

```
browser.tabs.splitView.enabled
```

4. Double-click the result (or click the toggle button) to change its value from `false` to `true`.
5. No restart is required; the feature is active immediately.

---

## How to Use Split View

Once enabled, you can activate the view using one of two methods:

### Method A: Splitting Two Existing Tabs

1. Select multiple tabs by holding down `Ctrl` and clicking the tabs you want to pair.[^1]
2. **Right-click** on one of the selected tabs.
3. Select the Split Tabs option from the dropdown menu.

### Method B: Splitting from a Single Tab

1. **Right-click** any active tab.
2. Select the Split Tab option from the menu.
3. Firefox will create a new tab next to the one selected.

---

### Tips

* You can `Ctrl + Tab` or `Ctrl + Shift + Tab` through like normal tabs in order.
* To exit split view, right-click the tab and select the Unsplit Tab option.
* You can resize the split by clicking and dragging the divider between the two pages.

[^1]: To select a range of tabs, use `Shift` instead of `Ctrl`.

