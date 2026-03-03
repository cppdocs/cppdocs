---
title: "std::error_category::operator==,!=,<,<=>"
source_path: "cpp/error/error_category/operator_cmp"
category: "error"
since: "C++11"
---

Compares to another error category.

## Declarations
```cpp
bool operator==( const error_category& rhs ) const noexcept;
```
_(since C++11)_

```cpp
bool operator!=( const error_category& rhs ) const noexcept;
```
_(since C++11) (until C++20)_

```cpp
bool operator<( const error_category& rhs ) const noexcept;
```
_(since C++11) (until C++20)_

```cpp
std::strong_ordering operator<=>( const error_category& rhs ) const noexcept;
```
_(since C++20)_

## Parameters
- `rhs`: specifies the error_category to compare
