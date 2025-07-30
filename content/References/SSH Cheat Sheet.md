---
title: SSH Cheat Sheet
description: "A quick reference for SSH commands, authentication, and file transfers."
compartir: true
tags: [ssh, cli, cheat-sheet, security, networking]
---

This cheat sheet provides a quick reference for common [[SSH|SSH]] commands and configurations.

## Basic Connection

```bash
# Connect to a remote host with a specific username
ssh <username>@<remote_host>

# Connect to a host on a specific port
ssh -p <port_number> <username>@<remote_host>
```

## Authentication with Keys

Using SSH keys is more secure than using passwords.

```bash
# Generate a new SSH key pair (RSA)
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

# Copy your public key to a remote host
ssh-copy-id <username>@<remote_host>

# Connect using a specific private key
ssh -i /path/to/your/private_key <username>@<remote_host>
```

## Configuration File (`~/.ssh/config`)

Simplify connections by creating aliases for hosts.

```
# ~/.ssh/config

Host my-server
    HostName 192.168.1.100
    User admin
    Port 2222
    IdentityFile ~/.ssh/id_rsa_server

Host github
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_rsa_github
```

Now you can connect with `ssh my-server`.

## File Transfer (SCP and SFTP)

Securely copy files and directories between hosts.

### SCP (Secure Copy)

Simple and fast for single file transfers.

```bash
# Copy a local file to a remote host
scp /path/to/local/file.txt my-server:/remote/path/

# Copy a file from a remote host to local
scp my-server:/remote/path/file.txt /local/path/

# Copy a directory recursively
scp -r /path/to/local/dir my-server:/remote/path/
```

### SFTP (SSH File Transfer Protocol)

Provides an interactive session for more complex file operations.

```bash
# Start an interactive SFTP session
sftp my-server
```

Once in the SFTP session, you can use commands like:
- `ls`, `pwd`, `cd` (for the remote system)
- `lls`, `lpwd`, `lcd` (for the local system)
- `get <remote_file>` (download a file)
- `put <local_file>` (upload a file)
- `quit` (to exit)

## Port Forwarding (Tunneling)

Securely forward network traffic.

```bash
# Local Port Forwarding
# Access a service on the remote network (e.g., a database on port 5432)
# by connecting to localhost:8000 on your machine.
ssh -L 8000:localhost:5432 my-server

# Remote Port Forwarding
# Expose a service on your local machine (e.g., a web server on port 3000)
# to the remote server on port 8080.
ssh -R 8080:localhost:3000 my-server
```
