---
title: Go (Golang)
description: "A statically typed, compiled language designed at Google for building simple, reliable, and efficient software."
compartir: true
tags: [backend, language, systems, concurrency]
---

Go (often referred to as Golang) is a statically typed, compiled programming language designed at Google. It is known for its simplicity, strong performance, and excellent support for concurrent programming, making it a popular choice for backend services, command-line tools, and network applications.

> [!info]
> Go's core philosophy emphasizes simplicity, readability, and efficiency. It provides a small, orthogonal set of features that can be combined in powerful ways.

## Core Philosophy

Go was created to address the challenges of software development at scale. Its design goals include:
- **Simplicity and Readability**: A minimal syntax and clean feature set make Go easy to learn and read.
- **High Performance**: As a compiled language, Go applications are fast and have a small memory footprint.
- **Built-in Concurrency**: Goroutines and channels provide a simple yet powerful model for concurrent programming.
- **Fast Compilation**: The toolchain is designed for speed, improving developer productivity.

## Essential Syntax

### Hello, World

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, world!")
}
```

### Variables and Types

Go is statically typed, but it offers type inference using the `:=` syntax.

```go
// Explicitly typed variable
var name string = "Go"

// Type inference
version := 1.18

// Constants
const Pi = 3.14
```

### Control Structures

```go
// If-else statement
if version > 1.17 {
    fmt.Println("Generics are supported!")
} else {
    fmt.Println("No generics yet.")
}

// For loop (the only looping construct)
for i := 0; i < 5; i++ {
    fmt.Println(i)
}
```

### Functions

```go
// A simple function
func add(a int, b int) int {
    return a + b
}

// Functions can return multiple values
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("cannot divide by zero")
    }
    return a / b, nil
}
```

## Key Features

### Concurrency

Go's concurrency model is one of its most famous features.
- **Goroutines**: Lightweight threads managed by the Go runtime.
- **Channels**: Typed conduits for communication between goroutines.

```go
func main() {
    messages := make(chan string)

    go func() {
        messages <- "ping"
    }()

    msg := <-messages
    fmt.Println(msg) // "ping"
}
```

### Packages and Modules

Go code is organized into packages. Go modules are used for managing dependencies.

```bash
# Initialize a new module
go mod init example.com/mymodule

# Add a new dependency
go get github.com/gin-gonic/gin
```

### Structs and Interfaces

Go uses structs for data structures and interfaces for defining behavior.

```go
// Struct definition
type Rectangle struct {
    Width  float64
    Height float64
}

// Interface definition
type Shape interface {
    Area() float64
}

// Method implementation
func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}
```

### Error Handling

Go has a built-in `error` type and encourages explicit error checking.

```go
result, err := divide(10, 0)
if err != nil {
    // Handle the error
    log.Fatal(err)
}
```

## Standard Library and Tooling

Go includes a rich standard library with packages for networking, I/O, JSON parsing, and more. The `go` command provides a powerful set of tools for building, testing, and formatting code.

- **`go build`**: Compiles packages and dependencies.
- **`go test`**: Runs tests.
- **`go fmt`**: Formats code according to Go's conventions.
- **`go run`**: Compiles and runs the main package.

Go's simplicity, performance, and strong concurrency support make it an excellent choice for building scalable backend systems, network services, and powerful CLI tools. Its robust standard library and modern toolchain streamline the development process from start to finish.
