---
title: Unlock the Sidebar Width in Firefox
tags:
  - guide
compartir: true
lastmod: 2023-09-18
---

## Why Would Anyone Want to Do This?

* To enhance the use of the Firefox [Side View](https://addons.mozilla.org/en-US/firefox/addon/side-view/) extension.
* To compliment the use of one of my Firefox sidebar [extensions](https://addons.mozilla.org/en-US/firefox/user/17772574/).

## Step-by-Step Instructions

1. In a new tab, navigate to `about:support`.
2. Under _Application Basics_, find _Profile Folder_.
3. Locate and click the `Open Folder` button next to it. It will be next to an address similar to: `%appdata%\Mozilla\Firefox\Profiles\{profile-id}.default` [^1]
4. Inside your Firefox _Profile Folder_, create a new folder named: `chrome`.
5. Inside the newly created chrome folder, create a new file named: `userChrome.css`.
6. Copy the following code, paste as content and save: [^2]

```css
#sidebar-box {
  max-width: 40% !important;
  min-width: 300px !important;
}
```

1. Finally, in a new tab, navigate to `about:config` and search for `toolkit.legacyUserProfileCustomizations.stylesheets` and change it to `true`.
2. Restart Firefox and test it out!

[^1]: `%appdata%` is equivalent to `C:\Users\{username}\AppData\Roaming`
[^2]: After Firefox 107, `#sidebar` was deprecated, and `#sidebar-box` was introduced.