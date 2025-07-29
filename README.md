# 🌱 Forgetful Notes

![code size](https://img.shields.io/github/languages/code-size/semanticdata/forgetful-notes) ![repository size](https://img.shields.io/github/repo-size/semanticdata/forgetful-notes) ![commits](https://img.shields.io/github/commit-activity/t/semanticdata/forgetful-notes) ![last commit](https://img.shields.io/github/last-commit/semanticdata/forgetful-notes) ![is website up?](https://img.shields.io/website/https/forgetfulnotes.com.svg)

[Forgetful Notes](https://forgetfulnotes.com) is my _digital garden_ of knowledge. It serves as a platform for my learning and creative endeavours. A space for thinking through, building upon, and coming back to.

[![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)](https://forgetfulnotes.com/) [![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)](https://forgetful-notes.vercel.app/)

## ✨ Features

- ✅ Fast Natural-Language Search
- ✅ Bidirectional Backlinks
- ✅ Floating Link Previews
- ✅ Admonition-style Callouts
- ✅ Markdown Links and Wikilinks Support
- ✅ Latex Support

## ⚡ Quick start

### 1. Clone repo

```sh
git clone https://github.com/semanticdata/forgetful-notes.git
```

### 2. Install dependencies

```sh
pnpm install
```

### 3. Run the project locally

```sh
pnpm start
```

## 👨🏼‍💻 Useful Commands

### Update Quartz

```sh
npm run update
```

### Sync changes

```sh
npm run sync
```

### Read about a command

```sh
npx quartz <command> --help
```

## 🎨 Customization

You can add custom CSS code within `/quartz/styles/custom.scss`. You will then need to uncomment line 4 of `/quartz/styles/base.scss` to have it take effect.

| Used in: |                       Font Family                        |                              Previous Font                               |
| -------- | :------------------------------------------------------: | :----------------------------------------------------------------------: |
| Headers  |    [Bitter](https://fonts.google.com/specimen/Bitter)    | [Schibsted Grotesk](https://fonts.google.com/specimen/Schibsted+Grotesk) |
| Body     |   [Poppins](https://fonts.google.com/specimen/Poppins)   |    [Source Sans Pro](https://fonts.google.com/specimen/Source+Sans+3)    |
| Code     | [Fira Mono](https://fonts.google.com/specimen/Fira+Mono) |     [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono)     |

## 🛠️ Technology

The site uses various technologies cobbled together. Here's a few of them:

- [Quartz](https://github.com/jackyzha0/quartz): a fast, batteries-included static-site generator.
- [TypeScript](https://github.com/microsoft/TypeScript): superset of JavaScript that compiles to clean JavaScript output.
- [Preact](https://preactjs.com/): fast 3kB alternative to React with the same modern API.
- [esbuild](https://esbuild.github.io/): an extremely fast JavaScript bundler and minifier.
- [D3.js](https://d3js.org/): data-driven documents for interactive visualizations.
- [Shiki](https://shiki.matsu.io/): a beautiful syntax highlighter.
- [KaTeX](https://katex.org/) & [MathJax](https://www.mathjax.org/): mathematical notation rendering.
- [FlexSearch](https://github.com/nextapps-de/flexsearch): full-text search library.
- [Remark](https://remark.js.org/) & [Rehype](https://github.com/rehypejs/rehype): unified ecosystem for processing markdown and HTML.
- [Sass](https://github.com/sass/sass): makes CSS fun!
- [Prettier](https://github.com/prettier/prettier): an opinionated code formatter.

All content for the site is written in _Markdown_ within [Obsidian](https://obsidian.md/)—an extensible, flexible note-taking app. To export the notes from Obsidian, I rely on the [GitHub Publisher](https://github.com/ObsidianPublisher) plugin.

## 🚀 Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch. A backup deployment is also available on Vercel.

## 🤝 Contributing

This is a personal digital garden, but if you notice any issues or have suggestions:

1. Check existing [issues](https://github.com/semanticdata/forgetful-notes/issues)
2. Open a new issue with detailed information
3. For content suggestions, feel free to reach out via the website's contact methods

## 📝 Issues & Support

Found a bug or have a question? 

**For site-specific issues:** Please [open an issue](https://github.com/semanticdata/forgetful-notes/issues/new) with:
- Clear description of the problem
- Steps to reproduce (if applicable)
- Your browser and OS information

**For Quartz-related issues:** If the issue is with Quartz itself (the static site generator), please report it in the [Quartz repository](https://github.com/jackyzha0/quartz/issues) instead.

## © License

Source code in this repository is available under the [MIT License](LICENSE).
