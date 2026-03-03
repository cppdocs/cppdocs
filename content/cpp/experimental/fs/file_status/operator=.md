---
title: "std::experimental::filesystem::file_status::operator="
source_path: "cpp/experimental/fs/file_status/operator"
category: "experimental"
---

Copy- or move-assigns another file type object.

## Declarations
```cpp
file_status& operator=( const file_status& other ) = default;
```
_(filesystem TS)_

```cpp
file_status& operator=( file_status&& other ) = default;
```
_(filesystem TS)_

## Return value
*this
