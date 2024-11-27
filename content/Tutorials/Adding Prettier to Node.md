---
title: Add Prettier to Your Node Project
description: How to add and use Prettier on your Node based project.
date: 2024-07-01
compartir: true
category: Tutorials
tags: [tutorial]
---

[Prettier](https://prettier.io/) is an opinionated code formatter that automatically enforces consistent style rules for code, reducing formatting errors and improving readability.

Maintaining consistent code style across a project can be challenging, especially when working in a team. Enter [Prettier](https://prettier.io/), an opinionated code formatter that automatically formats your code to ensure consistency. Let's explore how to add it to our node-based projects.

## Installation

First, install Prettier locally:

```shell
npm install --save-dev --save-exact prettier
```

Then, create an empty configuration file to let code editors and other tools know you are using Prettier:

```shell
node --eval "fs.writeFileSync('.prettierrc','{}\n')"
```

Alternatively, if you want an example, here's one I use:

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

Refer to Prettier's documentation on the [Configuration File](https://prettier.io/docs/en/configuration).

Next, create a `.prettierignore` file to let Prettier CLI and code editors know which files and directories to _not_ format. For example:

```plaintext title=".prettierignore"
build
public
package-lock.json
```

This example would have Prettier ignore the `build`, the `public` directories, and the `package-lock.json` file.

Now you can format all files with Prettier using:

```shell
npx prettier . --write
```

## Adding Scripts to Format the Entire Codebase

We can create scritps inside the `package.json` file to make it easier for us to check and format the entire codebase with a simple npm/pnpm/yarn/bun command.

Inside your `package.json` add the following scripts to check and format the codebase with Prettier.

```json title="package.json"
"scripts": {
    "check": "npx prettier . --check",
    "format": "npx prettier . --write"
}
```

And just like that, you can use:

```shell
# Check for formatting errors
npm run check

# Fix formatting errors
npm run format
```
