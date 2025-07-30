---
title: Ruff
description: "An extremely fast Python linter and code formatter, written in Rust, designed to be a near drop-in replacement for a suite of other tools."
compartir: true
tags: [python, tools, development, linter, performance]
---

Ruff is a modern, high-performance tool for [[Python]] development that combines the functionality of a linter and a code formatter. Written in Rust, it is designed to be orders of magnitude faster than existing tools like Flake8, isort, and Black.

> [!info]
> Ruff's primary goal is to provide a single, cohesive, and extremely fast tool that can replace a large number of other Python linters and formatters, simplifying project configuration and improving developer productivity.

## Core Philosophy

- **Performance**: Be the fastest tool available for Python linting and formatting. By building in Rust, Ruff avoids the startup overhead of Python-based tools.
- **Compatibility**: Provide near-complete compatibility with the rules of popular tools like Flake8, pylint, isort, and pyupgrade.
- **Consolidation**: Offer a single executable and configuration file (`ruff.toml` or `pyproject.toml`) to manage linting, formatting, and import sorting.

## Key Features

- **Speed**: Ruff can be 10-100 times faster than its Python-based counterparts.
- **Extensive Rule Set**: Implements hundreds of linting rules from various tools, which can be easily enabled and configured.
- **Autofixing**: Can automatically fix many of the issues it detects, from simple style violations to upgrading code syntax.
- **Built-in Formatter**: Includes a code formatter that is compatible with Black, allowing you to replace both your linter and formatter with a single tool.

## Common Commands

```bash
# Check files for linting errors
ruff check .

# Check files and automatically fix what can be fixed
ruff check . --fix

# Format files
ruff format .

# Run both the linter (with autofix) and the formatter
ruff check . --fix && ruff format .
```

## Configuration

Ruff is typically configured in your project's `pyproject.toml` file.

```toml
# pyproject.toml
[tool.ruff]
# Same as Black.
line-length = 88

[tool.ruff.lint]
# Enable the default set of rules, plus some extras.
select = ["E", "F", "W", "I", "N"]
ignore = []

[tool.ruff.format]
# Python 3.8+ features allowed.
preview = true
```

Ruff has quickly become an essential tool in the modern Python ecosystem. Its incredible speed and unified approach to code quality dramatically improve the development feedback loop, making it a powerful replacement for a large collection of older tools.