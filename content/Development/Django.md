---
title: Django
description: "A high-level Python web framework that encourages rapid development and clean, pragmatic design."
compartir: true
tags: [python, backend, framework, web-development]
---

Django is a free and open-source [[Python]] web framework that follows the model-template-views (MTV) architectural pattern. It is known for its "batteries-included" philosophy, providing developers with a vast array of tools and features needed for building robust web applications out of the box.

> [!info]
> Django's primary goal is to simplify the creation of complex, database-driven websites. It emphasizes reusability of components, less code, and rapid development.

## Core Philosophy

- **Batteries-Included**: Django provides built-in solutions for common web development tasks, including an ORM, admin interface, authentication, and more.
- **Don't Repeat Yourself (DRY)**: The framework is designed to help developers reuse code and avoid redundancy.
- **Convention over Configuration**: Django makes assumptions about the best way to do things, which helps speed up development by reducing the number of decisions a developer needs to make.

## Key Features

- **Object-Relational Mapper (ORM)**: Allows you to interact with your database, like PostgreSQL or SQLite, using Python code instead of writing raw SQL.
- **Admin Interface**: Django automatically generates a production-ready admin interface for managing your application's data.
- **Authentication and Permissions**: Includes a built-in user authentication system with support for permissions and groups.
- **Template Engine**: A powerful template language for generating [[HTML]] dynamically.
- **Security**: Provides built-in protection against common security threats like Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), and SQL injection.

## The Model-Template-Views (MTV) Pattern

Django's architecture consists of three main parts:
- **Model**: The single, definitive source of your data. It defines the data structure and behavior.
- **View**: The business logic layer. A view receives an HTTP request, processes it, and returns an HTTP response.
- **Template**: The presentation layer. It defines the structure of a page and how data from the view should be displayed.

## Getting Started

```bash
# Install Django
pip install Django

# Create a new project
django-admin startproject myproject

# Create a new app within the project
cd myproject
python manage.py startapp myapp

# Run the development server
python manage.py runserver
```

Django is a powerful and mature framework ideal for building content-heavy, scalable, and secure web applications. Its comprehensive feature set and excellent documentation make it a popular choice for projects ranging from content management systems to social networks.