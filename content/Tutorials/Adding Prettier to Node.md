---
title: Add Prettier to Your Node Project
description: Set up automatic code formatting in Node.js projects using Prettier.
date: 2024-07-01
difficulty: Beginner
compartir: true
category: Tutorials
tags: [tutorial]
---

Maintaining consistent code style across a project can be challenging, especially when working in a team. Enter [Prettier](https://prettier.io/), an opinionated code formatter that automatically formats your code to ensure consistency.

## What You'll Build/Achieve

You'll configure Prettier to automatically format your Node.js project code, ensuring consistent style across your entire codebase with simple npm commands.

## Prerequisites

- Node.js installed on your system
- An existing Node.js project with `package.json`

## 1. Install Prettier

Install Prettier as a development dependency:

```shell
npm install --save-dev --save-exact prettier
```

## 2. Create Configuration File

Create an empty configuration file:

```shell
node --eval "fs.writeFileSync('.prettierrc','{}\n')"
```

Or create a custom configuration file:

```json title=".prettierrc"
{
  "$schema": "https://json.schemastore.org/prettierrc.json",
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": false,
  "singleQuote": true,
  "quoteProps": "consistent",
  "trailingComma": "none",
  "bracketSpacing": false,
  "bracketSameLine": true,
  "arrowParens": "always",
  "proseWrap": "never",
  "endOfLine": "lf",
  "embeddedLanguageFormatting": "auto",
  "singleAttributePerLine": false,
  "overrides": [
    {
      "files": ".prettierrc",
      "options": {
        "parser": "json"
      }
    }
  ]
}
```

## 3. Create Ignore File

Create a `.prettierignore` file to exclude specific files:

```plaintext title=".prettierignore"
build
public
package-lock.json
```

## 4. Add NPM Scripts

Add formatting scripts to your `package.json`:

```json title="package.json"
"scripts": {
    "check": "npx prettier . --check",
    "format": "npx prettier . --write"
}
```

## Verification

You'll know it worked when you can run `npm run format` and see your code automatically reformatted according to Prettier's rules.

## Common Issues

**Problem**: "Cannot find module 'prettier'" error  
**Solution**: Make sure you ran the install command in your project directory with `package.json`

**Problem**: Prettier formats files you don't want changed  
**Solution**: Add those files or directories to your `.prettierignore` file
