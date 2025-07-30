---
title: Git Cheat Sheet
description: "A quick reference for essential Git commands for version control."
compartir: true
tags: [git, version-control, cheat-sheet, development, tools]
---

This cheat sheet provides a quick reference for the most common commands in [[Git]].

## Setup and Initialization

Configure Git and initialize a new or existing repository.

```bash
# Configure your name and email
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

# Initialize a new local repository
git init

# Clone a remote repository
git clone <repository_url>
```

## Staging and Committing

Manage changes to files.

```bash
# Check the status of your working directory
git status

# Add a file to the staging area
git add <file_name>

# Add all changed files to the staging area
git add .

# Commit staged changes with a message
git commit -m "Your descriptive commit message"

# Add all tracked files and commit in one step
git commit -am "Your message"
```

## Branching and Merging

Work with branches to manage features and fixes.

```bash
# List all local branches
git branch

# Create a new branch
git branch <branch_name>

# Switch to a different branch
git checkout <branch_name>
# Modern alternative: git switch <branch_name>

# Create and switch to a new branch
git checkout -b <new_branch_name>
# Modern alternative: git switch -c <new_branch_name>

# Merge changes from another branch into the current branch
git merge <branch_to_merge>

# Delete a local branch
git branch -d <branch_name>
```

## Remote Operations

Sync your local repository with a remote one (like GitHub).

```bash
# List configured remote repositories
git remote -v

# Fetch changes from a remote repository
git fetch <remote_name>

# Fetch and merge changes from the remote
git pull <remote_name> <branch_name>

# Push your committed changes to a remote repository
git push <remote_name> <branch_name>

# Push a new branch to the remote for the first time
git push -u <remote_name> <branch_name>
```

## Inspecting History

View project history and differences.

```bash
# View the commit history
git log

# View a condensed log
git log --oneline --graph

# Show changes between your working directory and the last commit
git diff

# Show changes between the staging area and the last commit
git diff --staged

# Show the changes made in a specific commit
git show <commit_hash>
```

## Undoing Changes

Correct mistakes and revert changes.

```bash
# Revert changes in a file to how it was in the last commit
git checkout -- <file_name>
# Modern alternative: git restore <file_name>

# Unstage a file
git reset <file_name>
# Modern alternative: git restore --staged <file_name>

# Create a new commit that undoes the changes of a previous commit
git revert <commit_hash>

# Reset to a previous commit, discarding all changes since
git reset --hard <commit_hash>
```

## Stashing

Temporarily save uncommitted changes.

```bash
# Stash your current changes
git stash

# List all stashes
git stash list

# Apply the most recent stash and remove it from the list
git stash pop

# Apply the most recent stash but keep it in the list
git stash apply
```
