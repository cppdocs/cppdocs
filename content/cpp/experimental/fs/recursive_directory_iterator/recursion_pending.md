---
title: "std::experimental::filesystem::recursive_directory_iterator::recursion_pending"
source_path: "cpp/experimental/fs/recursive_directory_iterator/recursion_pending"
category: "experimental"
---

Returns true if the next increment will cause the directory currently referred to by *this to be iterated into.

## Declarations
```cpp
bool recursion_pending() const;
```
_(filesystem TS)_

## Return value
true if the next increment will iterate into the currently referred directory, false otherwise.
