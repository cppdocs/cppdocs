---
title: "std::filesystem::directory_entry::operator="
source_path: "cpp/filesystem/directory_entry/operator"
category: "filesystem"
since: "C++17"
---

Replaces the contents of the directory entry (path and cached attributes, if any) with the contents of other.

## Declarations
```cpp
directory_entry& operator=( const directory_entry& other ) = default;
```
_(since C++17)_

```cpp
directory_entry& operator=( directory_entry&& other ) noexcept = default;
```
_(since C++17)_

## Parameters
- `other`: other directory_entry

## Return value
*this

## Example
This section is incompleteReason: no example

## See also
- [assign](/cpp/filesystem/directory_entry/assign/)
