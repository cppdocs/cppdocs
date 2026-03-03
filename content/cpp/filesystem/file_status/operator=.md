---
title: "std::filesystem::file_status::operator="
source_path: "cpp/filesystem/file_status/operator"
category: "filesystem"
since: "C++17"
---

Copy- or move-assigns another file status object.

## Declarations
```cpp
file_status& operator=( const file_status& other ) noexcept = default;
```
_(since C++17)_

```cpp
file_status& operator=( file_status&& other ) noexcept = default;
```
_(since C++17)_

## Parameters
- `other`: another file_status object to assign

## Return value
*this

## Example
This section is incompleteReason: no example
