---
title: npm (Node Package Manager)
description: "The default package manager for Node.js, used to install, manage, and share reusable JavaScript code."
compartir: true
tags: [javascript, nodejs, tools, development]
---

npm (Node Package Manager) is the world's largest software registry and the default package manager for the [[Nodejs|Node.js]] ecosystem. It is a command-line tool that helps developers discover, share, and manage reusable code packages (or "modules") in their projects.

> [!info]
> npm consists of two main parts: the CLI tool for interacting with packages, and the online npm Registry where those packages are hosted. It is installed automatically with [[Nodejs|Node.js]].

## Core Concepts

- **`package.json`**: Every Node.js project contains a `package.json` file. This file lists the project's metadata and its dependencies—the packages from the npm registry that the project needs to run.
- **`node_modules`**: When you install packages, npm downloads them into a `node_modules` folder in your project directory.
- **Semantic Versioning (SemVer)**: npm uses SemVer to manage package versions, allowing developers to specify version ranges and manage updates predictably.

## Key Features

- **Dependency Management**: Automatically installs and manages the packages your project depends on, as well as their dependencies.
- **Scripts**: The `scripts` section of `package.json` allows you to define and run common project tasks (e.g., starting a server, running tests).
- **Package Publishing**: Allows developers to publish their own packages to the npm Registry to share with others.

## Essential Commands

```bash
# Initialize a new project (creates package.json)
npm init -y

# Install a package and save it as a dependency
npm install <package_name>
# Shorthand
npm i <package_name>

# Install a package as a development dependency (e.g., a testing tool)
npm install --save-dev <package_name>
# Shorthand
npm i -D <package_name>

# Install all dependencies listed in package.json
npm install

# Uninstall a package
npm uninstall <package_name>

# List installed packages
npm list

# Run a script defined in package.json
npm run <script_name>
```

## npm vs. Alternatives

While npm is the standard, other package managers like [[PNPM]] and Yarn have emerged to address some of its shortcomings, often focusing on faster performance and more efficient disk space usage.

npm is a fundamental tool for modern web development. It provides the building blocks that power countless applications and simplifies the process of managing dependencies in any [[Javascript|JavaScript]] project.