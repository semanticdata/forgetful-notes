---
title: Scoop
description: "A command-line installer for Windows that allows you to install software from the command line with a simple command."
compartir: true
tags: [cli, tools, windows, productivity]
---

Scoop is a package manager for Windows that provides a way to install command-line tools and graphical applications from a terminal. It is designed to be simple, portable, and scriptable, making it a favorite among developers and power users on the Windows platform.

> [!info]
> Unlike traditional installers, Scoop installs programs into your home directory by default. This avoids UAC popups and keeps your system cleaner, as it doesn't pollute the `Program Files` directory or the system path.

## Core Philosophy

- **Portability**: Installs programs in a self-contained way, making it easy to manage and remove them without leaving behind configuration files or registry entries.
- **Simplicity**: Uses simple commands to find, install, and manage software.
- **Developer-Focused**: Excels at installing command-line developer tools that might otherwise be difficult to set up on Windows.

## How It Works

Scoop uses "buckets" to manage software repositories. A bucket is a [[Git]] repository containing JSON "manifest" files that describe how to download, install, and uninstall an application.

When you run `scoop install <app>`, Scoop:
1.  Finds the manifest for the app.
2.  Downloads the app's installer or zip file.
3.  Extracts it to a dedicated folder in `~/scoop/apps`.
4.  Creates "shims" (lightweight executables) in `~/scoop/shims` that point to the actual program, automatically adding them to your path.

## Essential Commands

```bash
# Search for an application
scoop search <app_name>

# Install an application
scoop install <app_name>

# List installed applications
scoop list

# Update an application
scoop update <app_name>

# Update all applications
scoop update *

# Uninstall an application
scoop uninstall <app_name>

# Add a new bucket (e.g., for extras like GUI apps)
scoop bucket add extras
```

Scoop provides a sane, scriptable way to manage software on Windows, bringing the convenience of a command-line package manager—common on Linux and macOS—to the Windows ecosystem. It is an excellent tool for automating the setup of a development environment.