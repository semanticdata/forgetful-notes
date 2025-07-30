---
title: Go (Golang) Cheat Sheet
description: "A quick reference for core Go syntax, data structures, control flow, and concurrency."
compartir: true
tags: [golang, language, cheat-sheet, development]
---

This cheat sheet provides a quick reference for the most common syntax and features in the [[Golang|Go]] programming language.

## Syntax and Variables

Go is statically typed and requires explicit package and import declarations.

```go
package main

import "fmt"

// A comment

// Variable with explicit type
var name string = "Go"

// Short variable declaration (type inferred)
version := 1.18

// Constant
const Pi = 3.14
```

## Data Types and Structures

### Primitives

```go
var myInt int = 100
var myFloat float64 = 3.14
var myString string = "Hello"
var myBool bool = true
```

### Data Structures

**Structs**: Composite types that group together variables.
```go
type Person struct {
    Name string
    Age  int
}

var p Person = Person{Name: "Alice", Age: 30}
```

**Arrays**: Fixed-size collections.
```go
var arr [3]int = [3]int{1, 2, 3}
```

**Slices**: Dynamically-sized, flexible view into an array's elements.
```go
mySlice := []int{1, 2, 3}
mySlice = append(mySlice, 4)
```

**Maps**: Key-value pairs (like dictionaries).
```go
myMap := make(map[string]int)
myMap["key"] = 100
```

## Operators

Go has standard arithmetic, comparison, and logical operators.

```go
// Arithmetic: + - * / %
// Comparison: == != < > <= >=
// Logical: && || !
```

## Control Flow

### Conditional Statements

```go
if version > 1.17 {
    fmt.Println("Generics!")
} else {
    fmt.Println("No generics.")
}
```

### Loops

Go has only one looping construct: the `for` loop.

```go
// Standard for loop
for i := 0; i < 5; i++ {
    fmt.Println(i)
}

// As a while loop
sum := 1
for sum < 100 {
    sum += sum
}

// Infinite loop
for {
    // ...
}
```

## Functions

Functions are defined with the `func` keyword and can return multiple values.

```go
func add(a int, b int) int {
    return a + b
}

// Multiple return values
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return a / b, nil
}
```

## Error Handling

Errors are returned as the last value from a function.

```go
result, err := divide(10, 2)
if err != nil {
    // Handle the error
    log.Fatal(err)
}
fmt.Println(result)
```

## Concurrency

Go's concurrency model is based on goroutines and channels.

- **Goroutine**: A lightweight thread of execution.
- **Channel**: A typed conduit for communication between goroutines.

```go
// Start a new goroutine
go myFunction()

// Create a channel
ch := make(chan int)

// Send to a channel
ch <- 1

// Receive from a channel
value := <-ch
```
