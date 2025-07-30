---
title: Lua
description: "A lightweight, high-level, multi-paradigm programming language designed primarily for embedded use in applications."
compartir: true
tags: [scripting, language, embedded, gamedev]
---

Lua is a powerful, fast, lightweight, and embeddable scripting language developed in Brazil. It is designed to be a simple and flexible language that can be easily integrated into other applications to extend their functionality. Lua is widely used in game development, application scripting, and web servers.

> [!info]
> Lua's design philosophy prioritizes simplicity, portability, and speed. It has a small C core, making it extremely easy to embed in other programs.

## Core Philosophy

Lua's development is guided by a few key principles:
- **Simplicity**: The language has a small set of core concepts that can be combined in powerful ways.
- **Portability**: Lua is written in clean ANSI C and runs on a wide range of platforms.
- **Extensibility**: Lua is designed to be extended, both from within Lua code and by C code from the host application.
- **Embeddability**: The C API makes it easy to embed Lua in an application.

## Essential Syntax

### Hello, World

```lua
print("Hello, world!")
```

### Variables

By default, variables in Lua are global. You should use the `local` keyword to limit their scope.

```lua
-- Global variable (avoid)
name = "Lua"

-- Local variable (preferred)
local version = 5.4
local is_fast = true
```

### Tables

The `table` is the only data structure in Lua. It can be used to represent arrays, dictionaries (hash maps), and objects.

```lua
-- As an array (1-based indexing)
local list = {1, 2, 3}
print(list[1]) -- 1

-- As a dictionary
local person = {
    name = "Alice",
    age = 30
}
print(person.name) -- "Alice"
```

### Control Structures

```lua
-- If-then-else statement
if version > 5.3 then
    print("Modern Lua")
else
    print("Older Lua")
end

-- For loop
for i = 1, 3 do
    print(i)
end
```

### Functions

Functions are first-class citizens in Lua.

```lua
local function greet(name)
    return "Hello, " .. name .. "!" -- '..' is the string concatenation operator
end

print(greet("World"))
```

## Key Features

### Metatables

Metatables are a powerful feature that allows you to change the behavior of tables. You can define custom behavior for operations like addition, indexing, and function calls using metamethods.

```lua
local my_table = {}
local metatable = {
    __index = function(table, key)
        return "default value"
    end
}
setmetatable(my_table, metatable)

print(my_table.non_existent_key) -- "default value"
```

### Coroutines

Lua supports coroutines for cooperative multitasking, which are especially useful in game development for managing concurrent tasks without the complexity of threads.

### C API

Lua's C API is a key feature that allows for deep integration with applications written in C or C++. This is how host applications can call Lua functions and vice-versa.

## Use Cases

Lua's flexibility and performance make it popular in several domains:
- **Game Development**: Used as a scripting engine in many games, including *World of Warcraft*, *Roblox*, and engines like [[Love|LÖVE 2D]].
- **Application Scripting**: Extends applications like [[Neovim]] (for plugins), Redis (for scripts), and Wireshark (for protocol dissectors).
- **Web Development**: Used in frameworks like OpenResty, which is a web platform built on Nginx and LuaJIT.

Lua's small size, high speed, and ease of integration make it a perfect choice for developers who need to add a flexible scripting layer to their applications. Its simple syntax and powerful data structures provide a robust foundation for building complex logic in an embedded environment.
