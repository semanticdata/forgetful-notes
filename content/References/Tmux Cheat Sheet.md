---
title: Tmux Cheat Sheet
description: "A quick reference for the most common Tmux commands and key bindings for managing sessions, windows, and panes."
compartir: true
tags: [tmux, cli, cheat-sheet, tools, productivity]
---

This cheat sheet provides a quick reference for [[Tmux]] commands. All key bindings are preceded by the prefix key (`Ctrl+b` by default).

## Session Commands (from Shell)

```bash
# Start a new session
tmux new -s <session_name>

# List existing sessions
tmux ls

# Attach to the last session
tmux attach

# Attach to a named session
tmux attach -t <session_name>

# Kill a session
tmux kill-session -t <session_name>
```

## Key Bindings (inside Tmux)

Press `Ctrl+b` then one of the following keys.

### Session Control

- `d`: Detach from the current session.
- `(`: Switch to the previous session.
- `)`: Switch to the next session.
- `$`: Rename the current session.

### Window Management

- `c`: Create a new window.
- `w`: List windows in an interactive menu.
- `,`: Rename the current window.
- `&`: Kill the current window (with confirmation).
- `p`: Switch to the previous window.
- `n`: Switch to the next window.
- `0-9`: Switch to window by number.

### Pane Management

- `%`: Split the current pane vertically (into left and right panes).
- `"`: Split the current pane horizontally (into top and bottom panes).
- `o`: Switch to the next pane in the current window.
- `;`: Toggle between the current and previous pane.
- `x`: Kill the current pane (with confirmation).
- `z`: Toggle zoom for the current pane (fullscreen).
- `Arrow Keys`: Navigate between panes (`Ctrl+b` then `Up`, `Down`, etc.).
- `[`: Enter copy mode to scroll up and copy text. Press `q` to exit.
