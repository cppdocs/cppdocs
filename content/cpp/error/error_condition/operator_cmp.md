---
title: "operator==,!=,<,<=>(std::error_condition)"
source_path: "cpp/error/error_condition/operator_cmp"
header: "<system_error>"
category: "error"
since: "C++11"
---

Compares two error conditions.

## Declarations
```cpp
bool operator==( const std::error_condition& lhs,
const std::error_condition& rhs ) noexcept;
```
_(since C++11)_

```cpp
bool operator!=( const std::error_condition& lhs,
const std::error_condition& rhs ) noexcept;
```
_(since C++11) (until C++20)_

```cpp
bool operator<( const std::error_condition& lhs,
const std::error_condition& rhs ) noexcept;
```
_(since C++11) (until C++20)_

```cpp
std::strong_ordering operator<=>( const std::error_condition& lhs,
const std::error_condition& rhs ) noexcept;
```
_(since C++20)_

```cpp
bool operator==( const std::error_code& code,
const std::error_condition& cond ) noexcept;
```
_(since C++11)_

```cpp
bool operator==( const std::error_condition& cond,
const std::error_code& code ) noexcept;
```
_(since C++11) (until C++20)_

```cpp
bool operator!=( const std::error_code& code,
const std::error_condition& cond ) noexcept;
```
_(since C++11) (until C++20)_

```cpp
bool operator!=( const std::error_condition& cond,
const std::error_code& code ) noexcept;
```
_(since C++11) (until C++20)_

## Parameters
- `lhs, rhs, cond`: error conditions to compare
- `code`: the error code to compare

## See also
- [equivalent](/cpp/error/error_category/equivalent/)
- [operator==operator!=operator<operator<=>](/cpp/error/error_code/operator_cmp/)
