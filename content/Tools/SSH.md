---
title: SSH (Secure Shell)
description: "A cryptographic network protocol for operating network services securely over an unsecured network."
compartir: true
tags: [cli, networking, security, tools]
---

SSH, or Secure Shell, is a protocol used to securely log into and manage remote systems. It provides a secure channel over an unsecured network in a client-server architecture, enabling command-line access, file transfers, and tunneling of other network protocols.

> [!info]
> SSH uses strong encryption to protect the confidentiality and integrity of data exchanged between the client and server, making it an essential tool for system administration and secure development workflows.

## Core Concepts

- **Client-Server Model**: An SSH client on one machine connects to an SSH server running on another.
- **Authentication**: SSH uses strong authentication methods, most commonly passwords or public-key cryptography.
- **Public-Key Cryptography**: This is the recommended authentication method. The user has a private key (kept secret) and a public key (placed on the server). The server can authenticate the user by verifying that they possess the corresponding private key.

## Key Features

### Secure Remote Access
The primary use of SSH is to get a shell prompt on a remote machine.

```bash
# Connect to a remote server using a username
ssh username@remote_host

# Connect using a specific private key
ssh -i /path/to/private_key username@remote_host
```

### Secure File Transfer (SCP and SFTP)
SSH provides protocols for secure file transfers:
- **SCP (Secure Copy Protocol)**: For simple file copying.
- **SFTP (SSH File Transfer Protocol)**: A more robust protocol that allows for a range of file operations.

```bash
# Copy a local file to a remote server with SCP
scp /path/to/local/file.txt username@remote_host:/remote/path/

# Copy a remote file to the local machine
scp username@remote_host:/remote/path/file.txt /local/path/
```

### Port Forwarding (Tunneling)
SSH can forward network traffic from a port on the client machine to a port on the server machine, or vice-versa. This is useful for securing traffic of other protocols or accessing services behind a firewall.

```bash
# Local Port Forwarding
# Access a service on remote_host:8080 via localhost:8000
ssh -L 8000:localhost:8080 username@remote_host
```

## SSH Configuration

The SSH client can be configured using the `~/.ssh/config` file to simplify connections and manage multiple hosts.

```
# ~/.ssh/config

Host webserver
    HostName 192.168.1.10
    User admin
    Port 2222
    IdentityFile ~/.ssh/id_rsa_webserver

Host github
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_rsa_github
```

With this configuration, you can connect simply by typing `ssh webserver`.

SSH is a fundamental tool for anyone working with remote servers, cloud computing, or [[Git]]. Its robust security features and versatility make it an indispensable part of modern development and system administration.