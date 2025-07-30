---
title: Static Site Generators
description: "Tools that generate a complete, static HTML-based website from raw data and templates, offering speed, security, and simplicity."
compartir: true
tags: [web-development, tools, jamstack, markdown]
---

Static Site Generators (SSGs) are applications that take your content, apply it to templates, and generate a set of purely static HTML, CSS, and JavaScript files. These files can then be served directly from a web server or a Content Delivery Network (CDN), resulting in websites that are incredibly fast, secure, and simple to host.

> [!info]
> SSGs are a core component of the **Jamstack** (JavaScript, APIs, and Markup) architecture, which aims to make the web faster, more secure, and easier to scale.

## Core Philosophy

The fundamental idea behind SSGs is to do as much work as possible at build time, rather than request time.
- **Performance**: Since the HTML is pre-built, there is no server-side processing or database query needed to serve a page.
- **Security**: With no database or complex server-side logic to attack, the surface area for vulnerabilities is dramatically reduced.
- **Simplicity**: Hosting is as simple as placing files on a server. This also makes deployment and versioning straightforward with tools like [[Git]].

## How They Work

The typical SSG workflow is:
1.  **Content Creation**: You write content in a markup language like [[Markdown]].
2.  **Templating**: You create reusable templates (e.g., for headers, footers, page layouts) using a templating engine.
3.  **Build Process**: You run the SSG's build command. It reads the content, processes it through the templates, and generates the final static site.
4.  **Deployment**: You deploy the resulting `public` or `dist` folder to a web host.

## Popular Static Site Generators

The SSG ecosystem is vast, with options available for many different programming languages and use cases.

- **Next.js**: A React framework that excels at static and server-rendered applications.
- **Hugo**: Written in [[Golang|Go]], known for its incredible build speed.
- **Eleventy (11ty)**: A simpler, flexible generator written in JavaScript.
- **Jekyll**: One of the originals, written in Ruby and powers GitHub Pages.
- **[[zola|Zola]]**: A fast and flexible SSG written in Rust.

## Common Use Cases

SSGs are an excellent choice for content-driven websites, such as:
- Blogs and personal websites
- Documentation sites
- Marketing and brochure websites
- Portfolios

While they were traditionally used for sites with content that changes infrequently, modern SSGs combined with CI/CD and webhooks can now handle dynamic data and frequent updates, making them suitable for a wider range of applications.