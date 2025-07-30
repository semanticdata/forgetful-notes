---
title: Tailscale
description: "A zero-config VPN service that creates a secure, private network between your devices using the WireGuard protocol."
compartir: true
tags: [networking, security, vpn, software]
---

Tailscale is a modern VPN (Virtual Private Network) service that makes it easy to create a secure, peer-to-peer network between your computers, servers, and cloud instances. It uses the high-performance WireGuard protocol to build a flat, private network (a "tailnet") where every device can talk to every other device directly, as if they were on the same local network.

> [!info]
> Unlike traditional VPNs that route all traffic through a central gateway, Tailscale creates a mesh network. This peer-to-peer architecture results in lower latency and higher throughput.

## Core Philosophy

- **Zero Configuration**: Tailscale aims to be "zero-config." It handles complex network configuration automatically, including encryption key rotation and firewall traversal.
- **Identity-Based Networking**: Access is based on identity, not IP addresses. Tailscale integrates with existing identity providers (like Google, Microsoft, GitHub) to authenticate users and devices.
- **Security First**: All traffic on a tailnet is end-to-end encrypted.

## Key Features

- **Mesh Network**: Creates direct, encrypted tunnels between devices, reducing latency.
- **MagicDNS**: Automatically assigns memorable hostnames to devices on your tailnet, so you can connect to `my-server` instead of an IP address.
- **Access Control Lists (ACLs)**: Define fine-grained rules about which users and devices can connect to each other.
- **Cross-Platform**: Works on Linux, Windows, macOS, iOS, Android, and more.

## How It Works

1.  **Authentication**: You log in to Tailscale using an existing identity provider.
2.  **Coordination Server**: A central coordination server manages public keys and orchestrates connections between your devices.
3.  **Peer-to-Peer Connection**: Tailscale uses various NAT traversal techniques (like STUN, and DERP relays if direct connection fails) to establish a direct, encrypted WireGuard tunnel between your devices. Your data does not pass through Tailscale's servers.

## Use Cases

- **Remote Access**: Securely connect to your work or home machines from anywhere.
- **Development Environments**: Connect your local machine directly to staging servers or cloud databases without exposing them to the public internet.
- **Private Services**: Host services (like a [[Git]] server or a wiki) that are only accessible to devices on your tailnet.
- **Connecting Teams**: Create a shared network for a team of developers to access internal resources securely.

Tailscale simplifies the process of creating secure private networks, making it a powerful tool for individual developers, remote teams, and organizations that need to connect distributed devices and services securely.