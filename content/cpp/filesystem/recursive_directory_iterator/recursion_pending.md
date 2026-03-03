---
title: "std::filesystem::recursive_directory_iterator::recursion_pending"
source_path: "cpp/filesystem/recursive_directory_iterator/recursion_pending"
category: "filesystem"
since: "C++17"
---

Returns true if the next increment will cause the directory currently referred to by *this to be iterated into.

## Declarations
```cpp
bool recursion_pending() const;
```
_(since C++17)_

## Return value
true if the next increment will iterate into the currently referred directory, false otherwise.

## Example
This section is incompleteReason: no example
