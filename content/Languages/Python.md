---
title: Python
description: "A high-level, interpreted programming language known for its readability, simplicity, and extensive standard library."
compartir: true
tags: [backend, language, scripting, data-science]
---

Python is a high-level, interpreted programming language created by Guido van Rossum. It is celebrated for its clean syntax, readability, and "batteries-included" philosophy, which provides an extensive standard library. Python's versatility makes it a top choice for web development, data science, automation, and more.

> [!info]
> The Zen of Python, a collection of 19 guiding principles, emphasizes readability, simplicity, and explicitness. You can read it by typing `import this` in a Python interpreter.

## Core Philosophy

Python's design philosophy is centered on:
- **Readability Counts**: Code is read more often than it is written. Python's syntax is designed to be clean and uncluttered.
- **Simplicity**: "Simple is better than complex." Python allows developers to express concepts in fewer lines of code than many other languages.
- **Explicit is Better Than Implicit**: The language's behavior should be clear and obvious.

## Essential Syntax

### Hello, World

```python
print("Hello, world!")
```

### Variables and Dynamic Typing

Python is dynamically typed, meaning you don't need to declare a variable's type.

```python
name = "Python"  # string
version = 3.10   # float
is_awesome = True # boolean
```

### Data Structures

Python includes several built-in data structures.
```python
# List (mutable)
my_list = [1, "a", 3.14]

# Tuple (immutable)
my_tuple = (1, "a", 3.14)

# Dictionary (key-value pairs)
my_dict = {"name": "Python", "version": 3.10}
```

### Control Flow

```python
# If-elif-else statement
if version > 3:
    print("Modern Python")
elif version == 2:
    print("Legacy Python")
else:
    print("Ancient Python")

# For loop
for item in my_list:
    print(item)
```

### Functions

```python
def greet(name):
    """This is a docstring explaining the function."""
    return f"Hello, {name}!"

print(greet("World"))
```

## Key Features

### Object-Oriented Programming

Everything in Python is an object. It fully supports OOP principles like inheritance, polymorphism, and encapsulation.

```python
class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self):
        return "Woof!"
```

### Modules and Packages

Python's package manager, `pip`, provides access to a vast ecosystem of third-party libraries on the Python Package Index (PyPI).

```bash
# Install a package
pip install requests

# Use it in your code
import requests
response = requests.get("https://api.github.com")
```

### List Comprehensions

A concise way to create lists.

```python
squares = [x**2 for x in range(10)]
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

## Ecosystem and Frameworks

Python's large community has produced a rich ecosystem of tools and frameworks:
- **Web Development**: Django, Flask, FastAPI
- **Data Science**: NumPy, Pandas, Matplotlib, Seaborn
- **Machine Learning**: Scikit-learn, TensorFlow, PyTorch
- **Automation**: Selenium, Beautiful Soup, Scrapy

## Integration

Python is often called a "glue language" for its ability to connect different systems. It excels at:
- **Scripting**: Automating repetitive tasks on a system.
- **Backend Development**: Powering the server-side logic of web applications.
- **Data Analysis**: Processing, analyzing, and visualizing large datasets.

With its gentle learning curve and powerful capabilities, Python is a versatile language suitable for beginners and experts alike. Its extensive libraries and active community make it a powerful tool for nearly any programming task, from simple scripts to complex machine learning models. For a quick reference, see the [[Python Cheat Sheet]].
