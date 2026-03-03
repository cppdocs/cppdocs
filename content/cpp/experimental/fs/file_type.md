---
title: "std::experimental::filesystem::file_type"
source_path: "cpp/experimental/fs/file_type"
header: "<experimental/filesystem>"
category: "experimental"
---

Indicates a type of a file or directory a path refers to.

## Declarations
```cpp
enum class file_type {
none = 0,
not_found = -1,
regular = 1,
directory = 2,
symlink = 3,
block = 4,
character = 5,
fifo = 6,
socket = 7,
unknown = 8
};
```
_(filesystem TS)_
