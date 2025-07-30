---
title: pnpm
description: "A fast, disk space-efficient package manager for JavaScript that uses a content-addressable store to manage dependencies."
compartir: true
tags: [javascript, nodejs, tools, development]
---

pnpm is a package manager for [[Nodejs|Node.js]] that stands for "performant npm." It is designed to be faster and more disk space-efficient than [[NPM]] and Yarn. Its key innovation is the way it structures the `node_modules` directory and shares dependencies between projects.

> [!info]
> pnpm's main advantage comes from its use of a content-addressable file system to store all downloaded package files directly on disk. This means packages are downloaded only once and then linked to from individual projects.

## Core Philosophy

- **Efficiency**: Reduce disk space usage and speed up installation by avoiding package duplication.
- **Strictness**: Create a non-flat `node_modules` directory to prevent packages from accessing dependencies they don't explicitly declare in their `package.json`.
- **Determinism**: Ensure that an installation is reliable and reproducible across different machines.

## How It Works

Instead of the flat `node_modules` directory created by [[NPM]], pnpm uses symbolic links to create a nested dependency tree. The actual package files are stored in a global, content-addressable store (`~/.pnpm-store`).

This approach has two major benefits:
1.  **Disk Space Savings**: If multiple projects use the same version of a package, they all link to the same set of files in the global store. There is no duplication.
2.  **Faster Installations**: If a package is already in the store, pnpm can link it almost instantly without re-downloading.

## Key Features

- **Content-Addressable Store**: A single source of truth for all packages on a machine.
- **Non-Flat `node_modules`**: Prevents packages from accessing undeclared dependencies, which can hide bugs.
- **Monorepo Support**: Excellent built-in support for managing multi-package repositories (monorepos).
- **Compatibility**: Fully compatible with the [[NPM]] registry and `package.json` format.

## Common Commands

pnpm commands are very similar to [[NPM]]'s.

```bash
# Install all dependencies for a project
pnpm install

# Add a new package
pnpm add <package_name>

# Add a new development dependency
pnpm add -D <package_name>

# Remove a package
pnpm remove <package_name>

# Run a script
pnpm run <script_name>
```

pnpm offers a compelling alternative to traditional package managers by solving common problems related to performance and disk space. Its strictness also encourages better dependency management practices, making it a popular choice for modern [[Javascript|JavaScript]] projects.