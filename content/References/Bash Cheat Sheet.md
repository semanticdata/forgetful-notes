---
title: Bash Cheat Sheet
description: "A quick reference for Bash commands, scripting syntax, and shell navigation."
compartir: true
tags: [bash, cli, cheat-sheet, shell, scripting]
---

This cheat sheet provides a quick reference for common [[Bash]] commands and scripting constructs.

## Basic File and Directory Commands

```bash
ls          # List files and directories
ls -al      # List in long format, including hidden files

cd <dir>    # Change directory
cd ..       # Go up one directory
cd ~        # Go to home directory

pwd         # Print working directory

mkdir <dir> # Create a new directory

cp <src> <dest>   # Copy a file
cp -r <src> <dest>  # Copy a directory recursively

mv <src> <dest>   # Move or rename a file/directory

rm <file>   # Remove a file
rm -r <dir> # Remove a directory recursively
rm -rf <dir># Force remove without prompting (use with caution)

touch <file># Create an empty file or update its timestamp
```

## Variables and Scripting

```bash
#!/bin/bash

# Variable assignment (no spaces around =)
NAME="World"

# Using a variable
echo "Hello, $NAME"

# Read user input
echo "Enter your name:"
read USER_INPUT
echo "Hello, $USER_INPUT"
```

## Control Flow

### If Statement

```bash
if [ "$NAME" == "World" ]; then
    echo "It is World."
elif [ -f "file.txt" ]; then
    echo "file.txt exists."
else
    echo "Condition not met."
fi
```

### For Loop

```bash
for i in {1..5}; do
    echo "Number: $i"
done

for file in *; do
    echo "File: $file"
done
```

## Command Chaining and Redirection

- **`&&`**: Run next command only if the previous one succeeds.
- **`||`**: Run next command only if the previous one fails.
- **`|`**: Pipe the output of one command to the input of another.

```bash
# Chaining
mkdir temp && cd temp

# Piping
ls -l | grep ".txt"

# Redirection
ls > file_list.txt      # Write output to file (overwrite)
ls >> file_list.txt     # Append output to file
ls > /dev/null          # Discard output
command 2> error.log    # Redirect stderr to a file
command &> output.log   # Redirect stdout and stderr
```

## Searching and Finding

- **`grep`**: Search for patterns in text.
- **`find`**: Search for files and directories.

```bash
# Find text in a file (case-sensitive)
grep "error" log.txt

# Find text recursively in a directory, ignoring case
grep -ri "error" ./logs

# Find all files named "config.json" in the current directory
find . -name "config.json"

# Find all directories
find . -type d
```

## Shell Shortcuts

- **`Ctrl + C`**: Kill the current process.
- **`Ctrl + R`**: Reverse search through command history.
- **`Ctrl + A`**: Move cursor to the beginning of the line.
- **`Ctrl + E`**: Move cursor to the end of the line.
- **`!!`**: Execute the last command.
