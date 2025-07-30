---
title: NeoVim
description: A modern, extensible text editor forked from Vim with enhanced features and usability.
compartir: true
aliases: [Nvim, Vim]
category: Development Tools
tags: [development, editor, tools]
---

NeoVim is a fork of Vim focused on extensibility and usability. It maintains backward compatibility with Vim while introducing modern features like built-in LSP support, async job control, and a powerful plugin ecosystem. This is my reference guide as I learn to use it with LazyVim.

## Links

[Dotfiles](https://github.com/semanticdata/dotfiles) – [Website](https://neovim.io/) – [Documentation](https://neovim.io/doc/) – [LazyVim](https://www.lazyvim.org/)

## Why NeoVim?

NeoVim offers several advantages over traditional text editors:

- **Modal editing**: Efficient text manipulation through different modes
- **Keyboard-centric**: Minimal mouse dependency for faster workflow
- **Highly customizable**: Extensive configuration options and plugin ecosystem
- **Built-in LSP**: Native Language Server Protocol support for IDE-like features
- **Performance**: Fast startup and execution, even with many plugins
- **Cross-platform**: Works consistently across Windows, macOS, and Linux

## LazyVim Setup

LazyVim is a NeoVim configuration framework that provides sensible defaults and easy plugin management, making it ideal for beginners learning Vim.

### Installation

```bash
# Required dependencies
# - Neovim >= 0.9.0
# - Git >= 2.19.0
# - A Nerd Font (optional but recommended)

# Backup existing config (if any)
mv ~/.config/nvim ~/.config/nvim.bak
mv ~/.local/share/nvim ~/.local/share/nvim.bak

# Clone LazyVim starter
git clone https://github.com/LazyVim/starter ~/.config/nvim
rm -rf ~/.config/nvim/.git
```

### Sync Command

**Sync from CLI** → `nvim --headless "+Lazy! sync" +qa`

## Core Concepts

### Modes

NeoVim operates in different modes, each optimized for specific tasks:

- **Normal Mode**: Navigate and manipulate text (default mode)
- **Insert Mode**: Type and edit text like a traditional editor
- **Visual Mode**: Select text for operations
- **Command Mode**: Execute commands and search
- **Terminal Mode**: Interact with embedded terminal

### Buffers, Windows, and Tabs

- **Buffer**: A file loaded into memory
- **Window**: A viewport displaying a buffer
- **Tab**: A collection of windows

## Essential Vim Motions

### Basic Movement

```vim
" Character movement
h, j, k, l    " Left, down, up, right

" Word movement
w             " Next word beginning
b             " Previous word beginning
e             " Next word end

" Line movement
0             " Beginning of line
^             " First non-blank character
$             " End of line
g_            " Last non-blank character

" Screen movement
H             " Top of screen
M             " Middle of screen
L             " Bottom of screen
```

### Advanced Navigation

```vim
" Search and jump
f{char}       " Find character forward
F{char}       " Find character backward
t{char}       " To character forward
T{char}       " To character backward
;             " Repeat last f/F/t/T
,             " Repeat in opposite direction

" Paragraph and section
{             " Previous paragraph
}             " Next paragraph
gg            " Go to first line
G             " Go to last line
{number}G     " Go to line number

" Matching pairs
%             " Jump to matching bracket/parenthesis
```

### Text Objects

Text objects define what to operate on:

```vim
" Inner objects (content only)
iw            " Inner word
is            " Inner sentence
ip            " Inner paragraph
i"            " Inner quotes
i(            " Inner parentheses

" Around objects (includes delimiters)
aw            " Around word
as            " Around sentence
ap            " Around paragraph
a"            " Around quotes
a(            " Around parentheses
```

## Keybindings

| Key Combination            | Command                                        |
| -------------------------- | ---------------------------------------------- |
| `<leader>`                 | `<space>`                                      |
| **File Operations**        |
| `<leader>w`                | `<cmd>write<cr>`                               |
| `<leader>bq`               | `<cmd>bdelete<cr>`                             |
| `<leader>bl`               | `<cmd>buffer #<cr>`                            |
| **Navigation**             |
| `<leader>h`                | `^`                                            |
| `<leader>l`                | `g_`                                           |
| `<leader>a`                | `:keepjumps normal! ggVG<cr>`                  |
| **File Explorer**          |
| `<leader>e`                | `<cmd>NvimTreeToggle<cr>`                      |
| `<F2>`                     | `<cmd>Lexplore<cr>`                            |
| `<space><space>`           | `<F2>`                                         |
| **Copy/Paste System**      |
| `gy`                       | `"+y`                                          |
| `gp`                       | `"+p`                                          |
| `x`                        | `"_x`                                          |
| **Telescope (Fuzzy Finder)** |
| `<leader><space>`          | `<cmd>Telescope buffers<cr>`                   |
| `<leader>?`                | `<cmd>Telescope oldfiles<cr>`                  |
| `<leader>ff`               | `<cmd>Telescope find_files<cr>`                |
| `<leader>fg`               | `<cmd>Telescope live_grep<cr>`                 |
| `<leader>fd`               | `<cmd>Telescope diagnostics<cr>`               |
| `<leader>fs`               | `<cmd>Telescope current_buffer_fuzzy_find<cr>` |
| `<leader>fh`               | `<cmd>Telescope help_tags<cr>`                 |
| **Quick Actions**          |
| `<C-q>`                    | `:q!<CR>`                                      |
| `<F4>`                     | `:bd<CR>`                                      |
| **Centered Movement**      |
| `<C-d>`                    | `<C-d>zz`                                      |
| `<C-u>`                    | `<C-u>zz`                                      |
| `n`                        | `nzzzv`                                        |
| `N`                        | `Nzzzv`                                        |
| **Tab Navigation**         |
| `<Tab>`                    | `gt`                                           |
| `<S-Tab>`                  | `gT`                                           |
| `<S-t>`                    | `:tabnew<CR>`                                  |
| **Window Navigation**      |
| `<C-h>`                    | `<C-w>h`                                       |
| `<C-j>`                    | `<C-w>j`                                       |
| `<C-k>`                    | `<C-w>k`                                       |
| `<C-l>`                    | `<C-w>l`                                       |
| `<C-left>`                 | `<C-w>h`                                       |
| `<C-down>`                 | `<C-w>j`                                       |
| `<C-up>`                   | `<C-w>k`                                       |
| `<C-right>`                | `<C-w>l`                                       |
| **Terminal**               |
| `<A-t>`                    | `:sp term://pwsh<cr>i`                         |
| `tv`                       | `:lcd %:p:h<CR>:vsp term://pwsh<CR>i`          |
| `th`                       | `:lcd %:p:h<CR>:sp term://pwsh<CR>i`           |
| `<Esc>`                    | `<C-\\><C-n>`                                  |
| `:q!`                      | `<C-\\><C-n>:q!<CR>`                           |

## Common Workflows

### File Management

```vim
" Open file explorer
<leader>e

" Find files by name
<leader>ff

" Search within files
<leader>fg

" Switch between open buffers
<leader><space>

" Recently opened files
<leader>?
```

### Editing Operations

```vim
" Basic editing commands
i             " Insert before cursor
I             " Insert at beginning of line
a             " Insert after cursor
A             " Insert at end of line
o             " Open new line below
O             " Open new line above

" Deletion
x             " Delete character under cursor
dw            " Delete word
dd            " Delete line
D             " Delete to end of line

" Change operations
cw            " Change word
cc            " Change entire line
C             " Change to end of line

" Copy/paste
yy            " Copy (yank) line
p             " Paste after cursor
P             " Paste before cursor
```

### Search and Replace

```vim
" Search
/pattern      " Search forward
?pattern      " Search backward
*             " Search word under cursor forward
#             " Search word under cursor backward

" Replace
:s/old/new/g          " Replace in current line
:%s/old/new/g         " Replace in entire file
:%s/old/new/gc        " Replace with confirmation
```

## Plugin Ecosystem

### Essential Plugins (Included in LazyVim)

| Plugin | Description |
| ------ | ----------- |
| [lazy.nvim](https://github.com/folke/lazy.nvim) | Modern plugin manager with lazy loading |
| [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter) | Syntax highlighting and code understanding |
| [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim) | Fuzzy finder and picker |
| [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig) | Language Server Protocol configurations |
| [nvim-cmp](https://github.com/hrsh7th/nvim-cmp) | Autocompletion framework |

### My Current Plugins

| Author/Plugin | Description |
| ------------- | ----------- |
| [akinsho/bufferline.nvim](https://github.com/akinsho/bufferline.nvim) | A snazzy bufferline for Neovim |
| [akinsho/toggleterm.nvim](https://github.com/akinsho/toggleterm.nvim) | A neovim lua plugin to help easily manage multiple terminal windows |
| [ap/vim-css-color](https://github.com/ap/vim-css-color) | Preview colours in source code while editing |
| [editorconfig/editorconfig-vim](https://github.com/editorconfig/editorconfig-vim) | EditorConfig plugin for Vim |
| [folke/tokyonight.nvim](https://github.com/folke/tokyonight.nvim) | Clean, dark theme with multiple variants |
| [kyazdani42/nvim-tree.lua](https://github.com/kyazdani42/nvim-tree.lua) | A file explorer tree for neovim written in lua |
| [kyazdani42/nvim-web-devicons](https://github.com/kyazdani42/nvim-web-devicons) | Lua "fork" of vim-web-devicons for neovim |
| [lewis6991/gitsigns.nvim](https://github.com/lewis6991/gitsigns.nvim) | Git integration for buffers |
| [lukas-reineke/indent-blankline.nvim](https://github.com/lukas-reineke/indent-blankline.nvim) | Indent guides for Neovim |
| [numToStr/Comment.nvim](https://github.com/numToStr/Comment.nvim) | Smart and powerful comment plugin for neovim |
| [nvim-lua/plenary.nvim](https://github.com/nvim-lua/plenary.nvim) | All the lua functions I [they] don't want to write twice |
| [nvim-lualine/lualine.nvim](https://github.com/nvim-lualine/lualine.nvim) | neovim statusline plugin written in pure lua |
| [nvim-telescope/telescope.nvim](https://github.com/nvim-telescope/telescope.nvim) | Find, Filter, Preview, Pick. All lua, all the time |
| [nvim-treesitter/nvim-treesitter-textobjects](https://github.com/nvim-treesitter/nvim-treesitter-textobjects) | Syntax aware text-objects, select, move, swap, and peek support |
| [nvim-treesitter/nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter) | Nvim Treesitter configurations and abstraction layer |
| [ThePrimeagen/vim-be-good](https://github.com/ThePrimeagen/vim-be-good) | Nvim plugin designed to make you better at Vim Movements |
| [tpope/vim-fugitive](https://github.com/tpope/vim-fugitive) | A Git wrapper so awesome, it should be illegal |
| [vim-telescope/telescope-fzf-native.nvim](https://github.com/nvim-telescope/telescope-fzf-native.nvim) | FZF sorter for telescope written in C |
| [wellle/targets.vim](https://github.com/wellle/targets.vim) | Vim plugin that provides additional text objects |

## Configuration

### Basic Configuration Structure

LazyVim organizes configuration in `~/.config/nvim/lua/config/`:

```
~/.config/nvim/
├── lua/
│   ├── config/
│   │   ├── autocmds.lua    # Automatic commands
│   │   ├── keymaps.lua     # Key mappings
│   │   ├── lazy.lua        # Plugin manager setup
│   │   └── options.lua     # Editor options
│   └── plugins/            # Plugin configurations
├── init.lua                # Entry point
```

### Essential Options

```lua
-- Example options in ~/.config/nvim/lua/config/options.lua
vim.opt.number = true           -- Show line numbers
vim.opt.relativenumber = true   -- Relative line numbers
vim.opt.tabstop = 2            -- Number of spaces for tab
vim.opt.shiftwidth = 2         -- Number of spaces for indentation
vim.opt.expandtab = true       -- Use spaces instead of tabs
vim.opt.smartindent = true     -- Smart indentation
vim.opt.wrap = false           -- Disable line wrapping
vim.opt.ignorecase = true      -- Case insensitive searching
vim.opt.smartcase = true       -- Case sensitive if uppercase present
```

## Language Server Protocol (LSP)

LSP provides IDE-like features for any language with a language server:

### Features

- **Autocompletion**: Intelligent code completion
- **Diagnostics**: Real-time error detection
- **Go to definition**: Jump to function/variable definitions
- **Hover information**: Documentation on hover
- **Code actions**: Quick fixes and refactoring

### Common LSP Keybindings

```vim
gd            " Go to definition
gr            " Go to references
K             " Hover documentation
<leader>ca    " Code actions
<leader>rn    " Rename symbol
]d            " Next diagnostic
[d            " Previous diagnostic
```

### Language-Specific Setup

**Golang:**

```lua
-- LazyVim includes gopls by default
-- Additional tools via Mason:
-- - goimports (formatting)
-- - golangci-lint (linting)
-- - delve (debugging)
```

**Python:**

```lua
-- LazyVim supports multiple Python LSPs:
-- - pyright (default, fast type checking)
-- - pylsp (feature-rich alternative)
-- Additional tools:
-- - black (formatting)
-- - ruff (fast linting)
-- - debugpy (debugging)
```

## Migrating From VS Code

Coming from VS Code? Here's how to translate familiar concepts and workflows:

### Conceptual Mapping

| VS Code Feature | NeoVim Equivalent | Plugin/Method |
|----------------|-------------------|---------------|
| File Explorer | File Tree | nvim-tree, neo-tree |
| Command Palette | Fuzzy Finder | Telescope |
| Quick Open | Find Files | `<leader>ff` |
| Go to Symbol | LSP Symbols | `<leader>ss` |
| Find in Files | Live Grep | `<leader>fg` |
| Git Integration | Git Signs + Fugitive | gitsigns.nvim, vim-fugitive |
| Terminal | Integrated Terminal | toggleterm.nvim |
| Extensions | Plugins | lazy.nvim |
| IntelliSense | LSP + Completion | nvim-lspconfig, nvim-cmp |
| Debugger | DAP | nvim-dap |

### Workflow Translation

**Opening Files:**

```vim
" VS Code: Ctrl+P
" NeoVim: <leader>ff (find files)
<leader>ff
```

**Search Across Project:**

```vim
" VS Code: Ctrl+Shift+F
" NeoVim: <leader>fg (live grep)
<leader>fg
```

**Command Palette:**

```vim
" VS Code: Ctrl+Shift+P
" NeoVim: : (command mode) or <leader>sp (search commands)
:
```

**Multi-cursor (VS Code Ctrl+D equivalent):**

```vim
" Use visual block mode and substitution
" 1. Visual select text
" 2. :%s//replacement/g
" Or use vim-visual-multi plugin
```

### Easing the Transition

**Keep familiar shortcuts initially:**

```lua
-- In your keymaps.lua, you can add VS Code-like mappings
vim.keymap.set("n", "<C-p>", "<cmd>Telescope find_files<cr>")
vim.keymap.set("n", "<C-S-f>", "<cmd>Telescope live_grep<cr>")
vim.keymap.set("n", "<C-S-p>", "<cmd>Telescope commands<cr>")
```

**Recommended learning path:**
1. **Week 1**: Basic movements and file operations
2. **Week 2**: Text objects and basic editing commands
3. **Week 3**: Search/replace and Telescope workflows
4. **Week 4**: LSP features and debugging
5. **Ongoing**: Gradually remove VS Code-style mappings

**Common pain points and solutions:**
- **Mouse dependency**: Force yourself to use keyboard navigation
- **Visual mode confusion**: Practice `v`, `V`, and `<C-v>` selections
- **Command discoverability**: Use `:Telescope help_tags` to explore
- **Plugin overwhelm**: Start with LazyVim defaults, add gradually

## Learning Resources

### Practice and Improvement

- **vimtutor**: Built-in tutorial (`nvim +Tutor`)
- **vim-be-good**: Plugin for practicing Vim motions
- **Practical Vim** by Drew Neil: Excellent book for learning Vim patterns

### Online Resources

- [LazyVim Documentation](https://www.lazyvim.org/)
- [Neovim User Manual](https://neovim.io/doc/user/)
- [Learn Vimscript the Hard Way](https://learnvimscriptthehardway.stevelosh.com/)

## Popular Plugins to Explore

### Development & LSP

- **[nvim-dap](https://github.com/mfussenegger/nvim-dap)**: Debug Adapter Protocol support
- **[trouble.nvim](https://github.com/folke/trouble.nvim)**: Pretty diagnostics and references list
- **[null-ls.nvim](https://github.com/jose-elias-alvarez/null-ls.nvim)**: Inject LSP diagnostics, formatters, and code actions
- **[mason.nvim](https://github.com/williamboman/mason.nvim)**: Package manager for LSP servers, formatters, and linters

### File Management & Navigation

- **[neo-tree.nvim](https://github.com/nvim-neo-tree/neo-tree.nvim)**: Modern file explorer (alternative to nvim-tree)
- **[oil.nvim](https://github.com/stevearc/oil.nvim)**: Edit your filesystem like a buffer
- **[harpoon](https://github.com/ThePrimeagen/harpoon)**: Quick file navigation and marking
- **[vim-projectionist](https://github.com/tpope/vim-projectionist)**: Project-specific navigation and commands

### Text Editing & Manipulation

- **[vim-surround](https://github.com/tpope/vim-surround)**: Manipulate surrounding characters (quotes, brackets, etc.)
- **[vim-repeat](https://github.com/tpope/vim-repeat)**: Make `.` work with plugin commands
- **[vim-exchange](https://github.com/tommcdo/vim-exchange)**: Exchange two regions of text
- **[dial.nvim](https://github.com/monaqa/dial.nvim)**: Enhanced increment/decrement functionality

### Git Integration

- **[diffview.nvim](https://github.com/sindrets/diffview.nvim)**: Git diff viewer
- **[neogit](https://github.com/TimUntersberger/neogit)**: Magit-like Git interface
- **[octo.nvim](https://github.com/pwntester/octo.nvim)**: GitHub integration for issues and PRs

### UI & Appearance

- **[which-key.nvim](https://github.com/folke/which-key.nvim)**: Display available keybindings in popup
- **[noice.nvim](https://github.com/folke/noice.nvim)**: Modern UI for messages, cmdline, and popupmenu
- **[dressing.nvim](https://github.com/stevearc/dressing.nvim)**: Improve default vim.ui interfaces
- **[alpha-nvim](https://github.com/goolord/alpha-nvim)**: Customizable start screen

### Productivity & Workflow

- **[zen-mode.nvim](https://github.com/folke/zen-mode.nvim)**: Distraction-free writing
- **[twilight.nvim](https://github.com/folke/twilight.nvim)**: Dim inactive code sections
- **[todo-comments.nvim](https://github.com/folke/todo-comments.nvim)**: Highlight and search TODO comments
- **[vim-obsession](https://github.com/tpope/vim-obsession)**: Session management

### Language-Specific

- **[rust-tools.nvim](https://github.com/simrat39/rust-tools.nvim)**: Enhanced Rust development
- **[go.nvim](https://github.com/ray-x/go.nvim)**: Modern Go development plugin
- **[typescript.nvim](https://github.com/jose-elias-alvarez/typescript.nvim)**: Enhanced TypeScript support
- **[vim-markdown](https://github.com/preservim/vim-markdown)**: Markdown syntax and features

### Testing & Documentation

- **[neotest](https://github.com/nvim-neotest/neotest)**: Testing framework with language adapters
- **[neogen](https://github.com/danymat/neogen)**: Generate documentation annotations
- **[vim-test](https://github.com/vim-test/vim-test)**: Run tests from within Vim

## Troubleshooting

### Common Issues

**Plugins not loading:**

```vim
:Lazy sync        " Sync all plugins
:Lazy check       " Check for updates
:Lazy clean       " Remove unused plugins
```

**LSP not working:**

```vim
:LspInfo          " Check LSP status
:Mason            " Manage language servers
```

**Performance issues:**

```vim
:checkhealth      " Run health checks
:Lazy profile     " Check plugin startup times
```

### Getting Help

```vim
:help {topic}     " Built-in help system
:help telescope   " Plugin-specific help
:Telescope help_tags  " Search help topics
```

## Best Practices

### Learning Progression

1. **Master basic movements**: h, j, k, l, w, b, e
2. **Learn text objects**: iw, aw, ip, ap, i", a"
3. **Practice operations**: d, c, y with motions and text objects
4. **Explore plugins**: Start with file finder (Telescope)
5. **Customize gradually**: Add keybindings and options as needed

### Workflow Tips

- **Use relative line numbers**: Makes jumping with `{number}j/k` easier
- **Learn dot command**: Repeat last change with `.`
- **Use macros**: Record repetitive actions with `q{register}`
- **Stay in Normal mode**: Return to Normal mode frequently
- **Use search for navigation**: Often faster than scrolling

### Plugin Philosophy

- **Start minimal**: Add plugins as you identify specific needs
- **Understand before adding**: Learn what each plugin does
- **Configure incrementally**: Set up plugins one at a time
- **Read documentation**: Most issues come from misconfiguration

## Integration with Other Tools

### Version Control

- **Fugitive**: Git integration within NeoVim
- **Gitsigns**: Show Git changes in the gutter
- **Telescope**: Browse Git files and commits

### Terminal Integration

- **ToggleTerm**: Embedded terminal windows
- **LazyGit**: Terminal-based Git interface
- **Shell integration**: Use NeoVim as `$EDITOR` for [[Git]] commits

### Development Workflow

- **LSP**: Language-specific features and diagnostics
- **Formatters**: Automatic code formatting
- **Linters**: Code quality checks
- **Debuggers**: Integrated debugging support

NeoVim's power lies in its composability and the philosophy that efficient text editing comes from combining simple, powerful commands. The learning curve is steep initially, but the productivity gains compound over time as muscle memory develops. See [[Consistency|consistency`]] for the importance of regular practice in building these habits.
