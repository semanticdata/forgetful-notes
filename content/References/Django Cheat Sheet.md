---
title: Django Cheat Sheet
description: "A quick reference for common Django commands, ORM queries, and template tags."
compartir: true
tags: [django, python, cheat-sheet, framework, web-development]
---

This cheat sheet provides a quick reference for common commands and syntax in the [[Django]] framework.

## Project and App Management

Commands run with `manage.py`.

```bash
# Create a new Django project
django-admin startproject <project_name>

# Create a new app within a project
python manage.py startapp <app_name>

# Run the development server
python manage.py runserver

# Create database tables for your models
python manage.py migrate

# Create migration files from changes to your models
python manage.py makemigrations

# Open the Django shell
python manage.py shell

# Create a superuser for the admin interface
python manage.py createsuperuser
```

## Models and ORM

Define your data models in `models.py`.

```python
from django.db import models

class MyModel(models.Model):
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
```

### Common Field Types
- `CharField`, `TextField`
- `IntegerField`, `FloatField`
- `BooleanField`
- `DateTimeField`, `DateField`
- `ForeignKey`, `ManyToManyField`, `OneToOneField`

### QuerySet API

Interact with your data.

```python
# Get all objects
MyModel.objects.all()

# Get a single object (raises DoesNotExist if not found)
MyModel.objects.get(id=1)

# Filter objects (returns a QuerySet)
MyModel.objects.filter(is_active=True)

# Exclude objects
MyModel.objects.exclude(name__startswith='A')

# Order results
MyModel.objects.order_by('-created_at') # Descending

# Create a new object
MyModel.objects.create(name="New Item")

# Update objects
MyModel.objects.filter(id=1).update(name="Updated Name")

# Delete an object
item = MyModel.objects.get(id=1)
item.delete()
```

### Field Lookups
- `exact`, `iexact` (case-insensitive)
- `contains`, `icontains`
- `startswith`, `endswith`
- `gt`, `gte`, `lt`, `lte` (greater/less than)
- `in`

## Views and URLS

**Function-Based View** (`views.py`):
```python
from django.shortcuts import render

def my_view(request):
    context = {'items': MyModel.objects.all()}
    return render(request, 'myapp/template.html', context)
```

**URL Configuration** (`urls.py`):
```python
from django.urls import path
from . import views

urlpatterns = [
    path('items/', views.my_view, name='item-list'),
]
```

## Templates

Use the Django Template Language inside your HTML files.

```html
<!-- Display a variable -->
{{ item.name }}

<!-- Loop through a list -->
<ul>
{% for item in items %}
    <li>{{ item.name }}</li>
{% endfor %}
</ul>

<!-- Conditional logic -->
{% if user.is_authenticated %}
    <p>Welcome, {{ user.username }}!</p>
{% else %}
    <a href="{% url 'login' %}">Log in</a>
{% endif %}

<!-- URL reversing -->
<a href="{% url 'item-list' %}">View all items</a>
```

### Common Template Filters
- `{{ value|length }}`
- `{{ value|date:"Y-m-d" }}`
- `{{ value|truncatewords:10 }}`
- `{{ value|default:"Nothing" }}`
