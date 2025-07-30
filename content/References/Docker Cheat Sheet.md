---
title: Docker Cheat Sheet
description: "A quick reference for common Docker and Docker Compose commands."
compartir: true
tags: [docker, tools, cheat-sheet, containerization, devops]
---

This cheat sheet provides a quick reference for common [[Docker]] and Docker Compose commands.

## Image Management

```bash
# Build an image from a Dockerfile
docker build -t <image_name>:<tag> .

# List all local images
docker images

# Remove an image
docker rmi <image_id_or_name>

# Pull an image from a registry (e.g., Docker Hub)
docker pull <image_name>:<tag>

# Push an image to a registry
docker push <image_name>:<tag>
```

## Container Management

```bash
# Create and run a container from an image
docker run <image_name>

# Run a container in detached mode (in the background)
docker run -d <image_name>

# Run a container and map a port
docker run -p <host_port>:<container_port> <image_name>

# Run a container with a volume mount
docker run -v /path/on/host:/path/in/container <image_name>

# List running containers
docker ps

# List all containers (running and stopped)
docker ps -a

# Stop a running container
docker stop <container_id_or_name>

# Start a stopped container
docker start <container_id_or_name>

# Remove a stopped container
docker rm <container_id_or_name>

# View logs of a container
docker logs <container_id_or_name>

# Execute a command inside a running container
docker exec -it <container_id_or_name> /bin/bash
```

## Docker Compose

Manage multi-container applications using a `docker-compose.yml` file.

```bash
# Build services and start containers in detached mode
docker-compose up -d --build

# Start existing containers
docker-compose start

# Stop running containers
docker-compose stop

# Stop and remove containers, networks, and volumes
docker-compose down

# List services
docker-compose ps

# View logs from all services
docker-compose logs -f

# Execute a command in a service container
docker-compose exec <service_name> /bin/bash
```

## System and Cleanup

```bash
# Show Docker disk usage
docker system df

# Remove all stopped containers, unused networks, and dangling images
docker system prune

# Remove all unused local volumes
docker volume prune
```

## Dockerfile Basics

Common instructions for your `Dockerfile`.

```dockerfile
# Set the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy files from host to container
COPY package.json .

# Run a command during the build process
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose a port
EXPOSE 3000

# Command to run when the container starts
CMD ["node", "server.js"]
```
