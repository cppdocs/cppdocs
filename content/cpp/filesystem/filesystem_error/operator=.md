---
title: "std::filesystem::filesystem_error::operator="
source_path: "cpp/filesystem/filesystem_error/operator"
category: "filesystem"
since: "C++17"
---

Assigns the contents with those of other. If *this and other both have dynamic type std::filesystem::filesystem_error then [std::strcmp](/cpp/string/byte/strcmp/)(what(), other.what()) == 0 after assignment.

## Declarations
```cpp
filesystem_error& operator=( const filesystem_error& other ) noexcept;
```
_(since C++17)_

## Parameters
- `other`: another filesystem_error object to assign with

## Return value
*this

## Notes
Typical implementations store path objects referenced by path1() and path2() in a reference-counted storage. As a result, *this and other usually share their path objects after assignment.

## Example
This section is incompleteReason: no example
