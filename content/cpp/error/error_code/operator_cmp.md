---
title: "std::operator==,!=,<,<=>(std::error_code)"
source_path: "cpp/error/error_code/operator_cmp"
header: "<system_error>"
category: "error"
since: "C++11"
---

Compares two error code objects.

## Declarations
```cpp
bool operator==( const std::error_code& lhs,
const std::error_code& rhs ) noexcept;
```
_(since C++11)_

```cpp
bool operator!=( const std::error_code& lhs,
const std::error_code& rhs ) noexcept;
```
_(since C++11) (until C++20)_

```cpp
bool operator<( const std::error_code& lhs,
const std::error_code& rhs ) noexcept;
```
_(since C++11) (until C++20)_

```cpp
std::strong_ordering operator<=>( const std::error_code& lhs,
const std::error_code& rhs ) noexcept;
```
_(since C++20)_

## Parameters
- `lhs, rhs`: error codes to compare

## See also
- [category](/cpp/error/error_code/category/)
- [value](/cpp/error/error_code/value/)
- [operator==operator!=operator<operator<=>](/cpp/error/error_condition/operator_cmp/)
