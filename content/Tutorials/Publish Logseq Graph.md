---
title: "Publish a Logseq Graph to GitHub Pages"
description: "Step-by-step guide on how to publish your Logseq graph to GitHub Pages."
date: "2024-07-22"
compartir: true
category: Tutorials
tags: [tutorial]
---

> [!note]
> Logseq</a> is an open-source, Markdown-based knowledge management and note-taking tool that emphasizes bidirectional linking and block-level editing to facilitate non-linear, interconnected thought.

Step-by-step guide on how to publish your Logseq graph to GitHub Pages. We use the [workflow](https://github.com/semanticdata/logseq-starter-graph/blob/main/.github/workflows/logseq-validate-publish.yml) provided with my [Logseq Starter](https://github.com/semanticdata/logseq-starter-graph) project.

---

## 1. Open the Repository Settings

At the top of the repository, click **Settings**.

![repository settings](https://raw.githubusercontent.com/semanticdata/logseq-starter-graph/main/assets/repository-settings.png)

## 2. Navigate to the Pages Section

On the left sidebar, click **Pages** under *Code and automation*.

![source branch](https://raw.githubusercontent.com/semanticdata/logseq-starter-graph/main/assets/source-branch.png)

## 3. Configure GitHub Pages Source to GitHub Actions

Under the *Build and deployment* section, under **Source**, change it from **Deploy from a branch** to **GitHub Actions**.

![source actions](https://raw.githubusercontent.com/semanticdata/logseq-starter-graph/main/assets/source-actions.png)

## 4. Navigate to the Actions Section

At the top of the repository, click **Actions**.

![repository actions](https://raw.githubusercontent.com/semanticdata/logseq-starter-graph/main/assets/repository-actions.png)

## 5. Run the Workflow for the First Time

On the left sidebar, click the workflow name (**Validate and Publish Logseq Graph to GitHub Pages**).

![action summary](https://raw.githubusercontent.com/semanticdata/logseq-starter-graph/main/assets/action-summary.png)

On the right, click **Run workflow**, then click on the new **Run workflow** (blue) button.

![action runs](https://raw.githubusercontent.com/semanticdata/logseq-starter-graph/main/assets/action-runs.png)

## 6. Be Patient

Please be patient.The first time you run the workflow, it will take *several minutes* to complete. Subsequent runs will be *faster*.

Take a look at the first run for my repository:

![action duration](https://raw.githubusercontent.com/semanticdata/logseq-starter-graph/main/assets/action-duration.png)

Over 11 minutes!

But as you can see in the next screenshot, the next time you run the workflow, it will be much faster.

![action faster](https://raw.githubusercontent.com/semanticdata/logseq-starter-graph/main/assets/action-faster.png)

Just over 1 minute!

## 7. Use your GitHub Pages website url

Back at the repository landing page, click the ⚙ (Gear) icon to edit the repository details.

![repository sidebar](https://raw.githubusercontent.com/semanticdata/logseq-starter-graph/main/assets/repository-sidebar.png)

Under *Website*, click **Use your GitHub Pages website**.

![repository details](https://raw.githubusercontent.com/semanticdata/logseq-starter-graph/main/assets/repository-details.png)

It will populate the URL field with your own GitHub Pages website address. It should look like `https://your-username.github.io/logseq-starter-graph/`.

![repository url](https://raw.githubusercontent.com/semanticdata/logseq-starter-graph/main/assets/repository-url.png)

> [!note]
> This is a good time to add a description to your project.

## 8. Save Changes

Save your changes and take a look at your repository details.

![repository details filled](https://raw.githubusercontent.com/semanticdata/logseq-starter-graph/main/assets/repository-details-filled.png)

Enjoy using the Logseq Starter Graph!
