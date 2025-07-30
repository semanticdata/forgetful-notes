---
title: Python Cheat Sheet
description: "A quick reference for core Python syntax, data structures, control flow, and other common features."
compartir: true
tags: [python, language, cheat-sheet, development]
---

This cheat sheet provides a quick reference for the most common syntax and features in the [[Python]] programming language. For a more detailed explanation, see the main [[Python]] note.

## Syntax and Variables

Python uses indentation to define code blocks. Variables are dynamically typed.

```python
# This is a comment
name = "Alice"  # String
age = 30         # Integer
height = 5.8     # Float
is_student = True # Boolean
data = None      # NoneType
```

## Data Types and Structures

### Primitives

```python
# Numbers
int_num = 100
float_num = 10.5

# Strings
my_string = "Hello, World!"

# Booleans
is_true = True
is_false = False
```

### Data Structures

**Lists**: Ordered, mutable collections.
```python
my_list = [1, "apple", 3.14]
my_list.append("banana")
print(my_list[1])  # 'apple'
```

**Tuples**: Ordered, immutable collections.
```python
my_tuple = (1, "apple", 3.14)
print(my_tuple[0]) # 1
```

**Dictionaries**: Unordered, mutable key-value pairs.
```python
my_dict = {"name": "Bob", "age": 25}
print(my_dict["name"]) # 'Bob'
my_dict["city"] = "New York"
```

**Sets**: Unordered, mutable collections of unique elements.
```python
my_set = {1, 2, 3, 3, 4}
# my_set is {1, 2, 3, 4}
my_set.add(5)
```

## Operators

### Arithmetic

```python
5 + 2  # Addition -> 7
5 - 2  # Subtraction -> 3
5 * 2  # Multiplication -> 10
5 / 2  # Division -> 2.5
5 // 2 # Floor Division -> 2
5 % 2  # Modulus -> 1
5 ** 2 # Exponentiation -> 25
```

### Comparison

```python
a, b = 5, 10
a == b # False
a != b # True
a > b  # False
a <= b # True
```

### Logical

```python
(5 > 2) and (10 > 5) # True
(5 > 2) or (5 > 10)  # True
not (5 > 2)          # False
```

## Control Flow

### Conditional Statements

```python
score = 85
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
else:
    print("C")
# Output: B
```

### Loops

**For Loop**: Iterates over a sequence.
```python
for i in range(5): # 0 to 4
    print(i)

for fruit in ["apple", "banana"]:
    print(fruit)
```

**While Loop**: Executes as long as a condition is true.
```python
count = 0
while count < 5:
    print(count)
    count += 1
```

## Functions

Functions are defined with the `def` keyword.

```python
def greet(name):
    """A function to greet someone."""
    return f"Hello, {name}!"

message = greet("World")
print(message) # "Hello, World!"
```

## List Comprehensions

A concise way to create lists.

```python
# Create a list of squares from 0 to 9
squares = [x**2 for x in range(10)]
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# Create a list of even numbers
evens = [x for x in range(10) if x % 2 == 0]
# [0, 2, 4, 6, 8]
```

## Working with Files

Using `with` is recommended as it handles closing the file automatically.

```python
# Writing to a file
with open("file.txt", "w") as f:
    f.write("Hello, file!\n")

# Reading from a file
with open("file.txt", "r") as f:
    content = f.read()
    print(content)
```

## Exception Handling

Handle errors gracefully using `try...except` blocks.

```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
finally:
    print("Execution finished.")
```