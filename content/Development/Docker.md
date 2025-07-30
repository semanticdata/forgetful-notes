---
title: Docker
description: "An open platform for developing, shipping, and running applications in isolated environments called containers."
compartir: true
tags: [containerization, development, devops, tools]
---

Docker is an open-source platform that enables developers to automate the deployment, scaling, and management of applications within lightweight, portable containers. A container packages up an application's code, runtime, system tools, and libraries, ensuring it runs consistently across different computing environments.

> [!info]
> Docker's core innovation is making containerization accessible and easy to use, which has revolutionized modern software development and DevOps practices.

## Core Philosophy

Docker's philosophy is centered on the idea that applications should be portable and self-contained.
- **Consistency**: "It works on my machine" is no longer a problem. A container runs the same everywhere.
- **Isolation**: Containers run in isolated environments, preventing conflicts between dependencies.
- **Efficiency**: Containers are lightweight because they share the host system's kernel, starting faster and using fewer resources than virtual machines.

## Key Concepts

### Dockerfile

A `Dockerfile` is a text file that contains instructions for building a Docker image. It specifies the base image, dependencies, commands, and other configuration needed for the application.

```dockerfile
# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Define the command to run the app
CMD [ "node", "server.js" ]
```

### Image

A Docker image is a read-only template used to create containers. Images are built from a `Dockerfile` and can be stored and shared via a registry like Docker Hub.

### Container

A container is a runnable instance of an image. You can create, start, stop, move, or delete containers using the Docker API or CLI.

### Docker Compose

Docker Compose is a tool for defining and running multi-container Docker applications. With a `docker-compose.yml` file, you can configure all of your application's services, networks, and volumes in one place.

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "8080:8080"
  redis:
    image: "redis:alpine"
```

## Essential Commands

```bash
# Build an image from a Dockerfile
docker build -t my-app .

# Run a container from an image
docker run -p 8080:8080 my-app

# List running containers
docker ps

# List all images
docker images

# Stop a container
docker stop <container_id>

# Use Docker Compose to start services
docker-compose up

# Stop services with Docker Compose
docker-compose down
```

## Use Cases

- **Microservices**: Each service can be deployed in its own container, allowing for independent scaling and updates.
- **CI/CD Pipelines**: Docker ensures a consistent environment for building, testing, and deploying applications.
- **Local Development**: Replicate the production environment on a developer's machine to reduce inconsistencies.

Docker has become an essential tool in modern software development, providing a standardized way to build and run applications. It integrates seamlessly with version control systems like [[Git]] and is a cornerstone of CI/CD workflows.
