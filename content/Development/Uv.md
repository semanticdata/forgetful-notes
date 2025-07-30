---
title: uv
description: "An extremely fast Python package installer and resolver, written in Rust, from the creator of ruff."
compartir: true
tags: [development, performance, python, tools]
---

`uv` is a modern Python package installer designed to be a drop-in replacement for `pip` and `pip-tools`. Written in Rust, it is incredibly fast and aims to provide a single, cohesive tool for Python dependency management. It is developed by Astral, the same company behind the [[Ruff]] linter.

> [!info]
> uv's key innovation is its high-performance, parallel dependency resolver. This allows it to resolve and install packages significantly faster than traditional tools like pip, especially in complex projects.

## Core Philosophy

- **Performance**: Be the fastest Python package manager available. uv uses a custom resolver written in Rust and leverages parallelism and caching to achieve its speed.
- **Cohesion**: Provide a single tool that handles installing, resolving, and managing virtual environments.
- **Drop-in Replacement**: Act as a direct replacement for common `pip`, `pip-tools`, and `venv` workflows.

## Key Features

- **Blazing Fast**: Orders of magnitude faster than `pip` and `pip-compile`.
- **Dependency Resolution**: Compiles `requirements.in` to `requirements.txt` files, similar to `pip-tools`.
- **Virtual Environment Management**: Includes a built-in tool for creating and managing Python virtual environments, like `venv`.
- **Caching**: Uses a global cache to avoid re-downloading packages.

## Common Commands

uv provides a single executable (`uv`) with intuitive subcommands.

```bash
# Create a virtual environment
uv venv

# Activate the virtual environment (syntax depends on your shell)
source .venv/bin/activate

# Install packages from a requirements.txt file
uv pip install -r requirements.txt

# Install a specific package
uv pip install <package_name>

# Compile a requirements.in to requirements.txt
uv pip compile requirements.in -o requirements.txt

# Sync the virtual environment with a requirements file
uv pip sync requirements.txt
```

uv is a game-changer for Python development, drastically reducing the time spent waiting for dependencies to install or resolve. Its speed and unified feature set make it a powerful companion to other modern Python tools like [[Ruff]].
