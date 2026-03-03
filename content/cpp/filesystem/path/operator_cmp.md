---
title: "operator==,!=,<,<=,>,>=,<=>(std::filesystem::path)"
source_path: "cpp/filesystem/path/operator_cmp"
category: "filesystem"
since: "C++17"
---

Compares two paths lexicographically.

## Declarations
```cpp
friend bool operator==( const path& lhs, const path& rhs ) noexcept;
```
_(since C++17)_

```cpp
friend bool operator!=( const path& lhs, const path& rhs ) noexcept;
```
_(since C++17) (until C++20)_

```cpp
friend bool operator<( const path& lhs, const path& rhs ) noexcept;
```
_(since C++17) (until C++20)_

```cpp
friend bool operator<=( const path& lhs, const path& rhs ) noexcept;
```
_(since C++17) (until C++20)_

```cpp
friend bool operator>( const path& lhs, const path& rhs ) noexcept;
```
_(since C++17) (until C++20)_

```cpp
friend bool operator>=( const path& lhs, const path& rhs ) noexcept;
```
_(since C++17) (until C++20)_

```cpp
friend std::strong_ordering
operator<=>( const path& lhs, const path& rhs ) noexcept;
```
_(since C++20)_

## Parameters
- `lhs, rhs`: the paths to compare

## Notes
Path equality and equivalence have different semantics.

In the case of equality, as determined by operator==, only lexical representations are compared. Therefore, path("a") == path("b") is never true.

In the case of equivalence, as determined by [std::filesystem::equivalent()](/cpp/filesystem/equivalent/), it is checked whether two paths resolve to the same file system object. Thus equivalent("a", "b") will return true if the paths resolve to the same file.

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3065 | C++17 | allowed comparison of everything convertible to path in the presence of a using-directive | made hidden friend |

## See also
- [compare](/cpp/filesystem/path/compare/)
- [equivalent](/cpp/filesystem/equivalent/)
