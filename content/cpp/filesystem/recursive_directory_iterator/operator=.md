---
title: "std::filesystem::recursive_directory_iterator::operator="
source_path: "cpp/filesystem/recursive_directory_iterator/operator"
category: "filesystem"
since: "C++17"
---

Assigns a recursive directory iterator.

## Declarations
```cpp
recursive_directory_iterator& operator=( const recursive_directory_iterator& other ) = default;
```
_(since C++17)_

```cpp
recursive_directory_iterator& operator=( recursive_directory_iterator&& other ) = default;
```
_(since C++17)_

## Parameters
- `other`: another directory iterator to assign

## Return value
*this
