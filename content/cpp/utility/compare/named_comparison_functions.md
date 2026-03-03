---
title: "std::is_eq, std::is_neq, std::is_lt, std::is_gt, std::is_lteq, std::is_gteq"
source_path: "cpp/utility/compare/named_comparison_functions"
header: "<compare>"
category: "utility"
since: "C++20"
---

These functions take a result of 3-way comparison and convert it to the result of one of the six relational operators

## Declarations
```cpp
constexpr bool is_eq( std::partial_ordering cmp ) noexcept;
```
_(since C++20)_

```cpp
constexpr bool is_neq( std::partial_ordering cmp ) noexcept;
```
_(since C++20)_

```cpp
constexpr bool is_lt( std::partial_ordering cmp ) noexcept;
```
_(since C++20)_

```cpp
constexpr bool is_lteq( std::partial_ordering cmp ) noexcept;
```
_(since C++20)_

```cpp
constexpr bool is_gt( std::partial_ordering cmp ) noexcept;
```
_(since C++20)_

```cpp
constexpr bool is_gteq( std::partial_ordering cmp ) noexcept;
```
_(since C++20)_

## Parameters
- `cmp`: result of 3-way comparison

## Return value
bool result of the corresponding relational operation

## Example
This section is incompleteReason: no example

## See also
- [partial_ordering](/cpp/utility/compare/partial_ordering/)
