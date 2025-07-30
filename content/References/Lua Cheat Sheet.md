---
title: Lua Cheat Sheet
description: "A quick reference for core Lua syntax, data structures, control flow, and other common features."
compartir: true
tags: [lua, language, cheat-sheet, development, scripting]
---

This cheat sheet provides a quick reference for the most common syntax and features in the [[Lua]] programming language.

## Syntax and Variables

Lua is dynamically typed. Variables are global by default; use `local` for lexical scoping.

```lua
-- This is a single-line comment

--[[ This is a
     multi-line comment --]]

-- Use 'local' to avoid creating global variables
local name = "Lua"      -- String
local version = 5.4     -- Number (float)
local is_fast = true    -- Boolean
local data = nil        -- Nil (Lua's null type)
```

## Data Types and Structures

### Primitives

```lua
local my_string = "Hello"
local my_number = 42
local my_boolean = false
local my_nil = nil
```

### Tables

The `table` is the only data structure in Lua. It can represent arrays, dictionaries, and objects.

**As an array (1-based indexing)**:
```lua
local my_list = {"apple", "banana", "cherry"}
print(my_list[1]) -- "apple"
```

**As a dictionary (hash map)**:
```lua
local person = {
    name = "Alice",
    age = 30
}
print(person.name) -- "Alice"
print(person["age"]) -- 30
```

## Operators

### Arithmetic

```lua
5 + 2  -- 7
5 * 2  -- 10
5 / 2  -- 2.5
5 ^ 2  -- 25 (Exponentiation)
5 % 2  -- 1 (Modulo)
"Hello" .. " " .. "World" -- "Hello World" (Concatenation)
```

### Comparison and Logical

```lua
-- Comparison: == ~= < > <= >=
-- Note: ~= means "not equal to"

-- Logical: and, or, not
(5 > 2) and (2 > 5) -- false
```

## Control Flow

### Conditional Statements

```lua
if version > 5.3 then
    print("Modern Lua")
elif version == 5.3 then
    print("Classic Lua")
else
    print("Older Lua")
end
```

### Loops

**For Loop**:
```lua
-- Numeric for loop
for i = 1, 5 do
    print(i)
end

-- Generic for loop (for tables)
for key, value in pairs(person) do
    print(key, value)
end
```

**While Loop**:
```lua
local count = 0
while count < 5 do
    print(count)
    count = count + 1
end
```

## Functions

Functions are first-class citizens and are defined with the `function` keyword.

```lua
local function greet(name)
    return "Hello, " .. name .. "!"
end

print(greet("World"))
```

## Metatables

Metatables allow you to modify the behavior of tables.

```lua
local my_table = {}
local metatable = {
    -- This metamethod is called for missing keys
    __index = function(tbl, key)
        return "Default Value"
    end
}
setmetatable(my_table, metatable)

print(my_table.some_key) -- "Default Value"
```
