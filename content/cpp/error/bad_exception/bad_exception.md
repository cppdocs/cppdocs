---
title: "std::bad_exception::bad_exception"
source_path: "cpp/error/bad_exception/bad_exception"
category: "error"
---

Constructs new bad_exception object.

## Declarations
```cpp
bad_exception() throw();
```
_(until C++11)_

```cpp
bad_exception() noexcept;
```
_(since C++11) (constexpr since C++26)_

```cpp
bad_exception( const bad_exception& other ) throw();
```
_(until C++11)_

```cpp
bad_exception( const bad_exception& other ) noexcept;
```
_(since C++11) (constexpr since C++26)_

## Parameters
- `other`: bad_exception object to initialize with
