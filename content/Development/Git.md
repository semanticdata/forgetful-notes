---
title: Git
description: Distributed version control system for tracking changes in source code during software development.
compartir: true
category: Development Tools
tags: [development, tools, version-control]
---

Git is a distributed version control system designed to handle everything from small to very large projects with speed and efficiency. Created by Linus Torvalds in 2005, Git tracks changes in files and coordinates work among multiple developers.

## Core Concepts

### Repository (Repo)

A Git repository contains the complete history of a project, including all files, commits, and branches. Repositories can be local (on your machine) or remote (hosted on services like GitHub, GitLab, or Bitbucket).

### Working Directory, Staging Area, and Repository

Git uses a three-stage workflow:
- **Working Directory**: Where you edit files
- **Staging Area (Index)**: Where you prepare changes for commit
- **Repository**: Where committed changes are permanently stored

### Commits

A commit is a snapshot of your project at a specific point in time. Each commit has a unique hash identifier and contains metadata like author, timestamp, and commit message.

### Branches

Branches allow you to diverge from the main line of development and work on features independently. The default branch is typically called `main` or `master`.

## Essential Commands

### Repository Setup

```bash
# Initialize a new repository
git init

# Clone an existing repository
git clone <repository-url>

# Add remote repository
git remote add origin <repository-url>
```

### Basic Workflow

```bash
# Check repository status
git status

# Add files to staging area
git add <filename>
git add .  # Add all changes
git add -A  # Add all changes including deletions

# Commit changes
git commit -m "Descriptive commit message"
git commit -am "Add and commit in one step"  # For tracked files only

# Push changes to remote repository
git push origin <branch-name>
git push  # Push to default upstream branch
```

### Viewing History

```bash
# View commit history
git log
git log --oneline  # Condensed view
git log --graph --oneline --all  # Visual branch representation

# Show changes in a commit
git show <commit-hash>

# View differences
git diff  # Working directory vs staging area
git diff --staged  # Staging area vs last commit
git diff <commit1> <commit2>  # Between two commits
```

### Branch Management

```bash
# List branches
git branch  # Local branches
git branch -r  # Remote branches
git branch -a  # All branches

# Create and switch to new branch
git checkout -b <branch-name>
git switch -c <branch-name>  # Modern alternative

# Switch between branches
git checkout <branch-name>
git switch <branch-name>  # Modern alternative

# Merge branches
git checkout main
git merge <feature-branch>

# Delete branch
git branch -d <branch-name>  # Safe delete
git branch -D <branch-name>  # Force delete
```

### Remote Operations

```bash
# Fetch changes from remote
git fetch origin

# Pull changes (fetch + merge)
git pull origin <branch-name>
git pull  # From default upstream

# Push new branch to remote
git push -u origin <branch-name>
```

### Undoing Changes

```bash
# Discard changes in working directory
git checkout -- <filename>
git restore <filename>  # Modern alternative

# Unstage files
git reset HEAD <filename>
git restore --staged <filename>  # Modern alternative

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Revert a commit (creates new commit)
git revert <commit-hash>
```

## Advanced Workflows

### Rebasing

Rebasing rewrites commit history by moving commits to a new base commit, creating a cleaner, linear history.

```bash
# Rebase current branch onto main
git rebase main

# Interactive rebase (edit last 3 commits)
git rebase -i HEAD~3

# Continue after resolving conflicts
git rebase --continue

# Abort rebase
git rebase --abort
```

### Stashing

Temporarily save changes without committing them.

```bash
# Stash current changes
git stash
git stash save "Work in progress on feature X"

# List stashes
git stash list

# Apply stash
git stash apply  # Keep stash in list
git stash pop    # Apply and remove from list

# Apply specific stash
git stash apply stash@{2}
```

### Cherry-picking

Apply specific commits from one branch to another.

```bash
# Apply a specific commit to current branch
git cherry-pick <commit-hash>

# Cherry-pick without committing
git cherry-pick -n <commit-hash>
```

## Git Configuration

### Global Configuration

```bash
# Set user information
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Set default editor
git config --global core.editor "nvim"

# Set default branch name
git config --global init.defaultBranch main

# Enable color output
git config --global color.ui auto
```

### Useful Aliases

```bash
# Add helpful aliases
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual '!gitk'
```

## Best Practices

### Commit Messages

Follow the conventional commit format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Examples:**

```
feat(auth): add user login functionality

Implement JWT-based authentication with email and password.
Includes password validation and remember me option.

Closes #123
```

### Branching Strategy

- **main/master**: Production-ready code
- **develop**: Integration branch for features
- **feature/**: Feature development branches
- **hotfix/**: Emergency fixes for production
- **release/**: Preparation for new releases

### File Management

```bash
# Create .gitignore file for common exclusions
echo "node_modules/" >> .gitignore
echo ".env" >> .gitignore
echo "*.log" >> .gitignore
echo ".DS_Store" >> .gitignore
```

## Common Scenarios

### Resolving Merge Conflicts

```bash
# When conflicts occur during merge
git status  # See conflicted files
# Edit files to resolve conflicts
git add <resolved-files>
git commit  # Complete the merge
```

### Collaborating with Others

```bash
# Update your local repository
git fetch origin
git pull origin main

# Create feature branch
git checkout -b feature/new-functionality

# Work on feature, commit changes
git add .
git commit -m "Add new functionality"

# Push feature branch
git push -u origin feature/new-functionality

# Create pull request on GitHub/GitLab
# After review and merge, clean up
git checkout main
git pull origin main
git branch -d feature/new-functionality
```

### Emergency Hotfix

```bash
# Create hotfix from main
git checkout main
git pull origin main
git checkout -b hotfix/critical-bug-fix

# Fix the issue and commit
git add .
git commit -m "hotfix: resolve critical security vulnerability"

# Push and create immediate pull request
git push -u origin hotfix/critical-bug-fix
```

## Troubleshooting

### Common Issues

**Accidentally committed to wrong branch:**

```bash
git reset --soft HEAD~1  # Undo commit, keep changes
git stash                # Stash changes
git checkout correct-branch
git stash pop            # Apply changes to correct branch
```

**Need to change last commit message:**

```bash
git commit --amend -m "Corrected commit message"
```

**Remove file from Git but keep locally:**

```bash
git rm --cached <filename>
git commit -m "Remove file from version control"
```

## Integration and Related Tools

Git integrates seamlessly with development workflows and has many complementary tools:

**Workflow Integration:**
- **Code editors**: VS Code, [[Neovim]], and other editors with Git plugins
- **CI/CD pipelines**: GitHub Actions, GitLab CI for automated testing and deployment
- **Project management**: Issue tracking and pull requests for collaborative development
- **Code quality**: Pre-commit hooks with linters and formatters

**Alternative Interfaces:**
- **GitHub CLI**: Command-line interface for GitHub operations
- **GitKraken**: Visual Git client with branch visualization
- **SourceTree**: Free Git GUI for Windows and Mac
- **lazygit**: Terminal-based Git interface with intuitive navigation
