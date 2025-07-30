---
title: Tmux
description: "A terminal multiplexer that enables you to manage multiple terminal sessions, windows, and panes from a single screen."
compartir: true
tags: [cli, tools, productivity, development]
---

Tmux is a terminal multiplexer that allows you to create and manage multiple terminal sessions within a single window. It is an essential tool for developers, system administrators, and anyone who works extensively in the command line, as it enables you to organize your workspace, run multiple processes, and detach and reattach sessions.

> [!info]
> The key benefit of Tmux is session persistence. If your [[SSH|SSH]] connection drops or you close your terminal, the sessions and processes running within Tmux continue to run in the background, ready for you to reattach at any time. A [[Tmux Cheat Sheet]] is also available.

## Core Concepts

Tmux has a hierarchical structure:
- **Session**: A collection of windows, representing a whole workspace. You can have multiple sessions, each for a different project or task.
- **Window**: A single screen within a session, similar to a tab in a graphical terminal or web browser.
- **Pane**: A rectangular section within a window. A window can be split into multiple panes, each with its own shell prompt.

## Key Features

- **Session Management**: Detach from a session and leave processes running, then reattach later from any machine.
- **Window and Pane Organization**: Split your terminal view horizontally or vertically to see multiple command-line tools at once.
- **Customization**: Tmux is highly configurable via the `~/.tmux.conf` file, allowing you to customize key bindings, status bar appearance, and more.
- **Scriptability**: Can be controlled from the command line, allowing for automation and scripting of terminal workflows.

## Essential Commands

These commands are run from your regular shell prompt.

```bash
# Start a new named session
tmux new -s <session_name>

# List running sessions
tmux ls

# Attach to the last used session
tmux attach

# Attach to a specific session
tmux attach -t <session_name>

# Kill a specific session
tmux kill-session -t <session_name>
```

## Default Key Bindings

All commands in Tmux are initiated with a **prefix key**, which is `Ctrl+b` by default. After pressing the prefix, you press the desired key.

### Session Management
- `d`: Detach from the current session.
- `(`: Switch to the previous session.
- `)`: Switch to the next session.

### Window Management
- `c`: Create a new window.
- `w`: List windows interactively.
- `n`: Move to the next window.
- `p`: Move to the previous window.
- `&`: Kill the current window (with confirmation).
- `,`: Rename the current window.

### Pane Management
- `%`: Split the current pane horizontally (left/right).
- `"`: Split the current pane vertically (top/bottom).
- `o`: Cycle to the next pane.
- `;`: Move to the previously active pane.
- `x`: Kill the current pane (with confirmation).
- `z`: Toggle zoom for the current pane.
- `Arrow Keys`: Navigate between panes.

## Configuration (`~/.tmux.conf`)

Customizing Tmux is done in the `~/.tmux.conf` file. Here are some common customizations.

```tmux
# Set a different prefix key (e.g., Ctrl+a)
# unbind C-b
# set-option -g prefix C-a
# bind-key C-a send-prefix

# Enable mouse mode
set -g mouse on

# Start window and pane numbering from 1
set -g base-index 1
setw -g pane-base-index 1

# Set a longer history limit
set -g history-limit 10000

# Improve colors
set -g default-terminal "screen-256color"
```

After editing your `.tmux.conf`, you can reload it by attaching to a session and running `Ctrl+b` then `:` and typing `source-file ~/.tmux.conf`.

Tmux is a powerful tool for improving command-line productivity. By allowing you to organize your workspace and maintain persistent sessions, it streamlines development workflows, especially when working on remote servers with [[Bash]] and [[Git]].
