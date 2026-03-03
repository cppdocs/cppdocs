---
title: "std::experimental::filesystem::is_empty"
source_path: "cpp/experimental/fs/is_empty"
header: "<experimental/filesystem>"
category: "experimental"
---

Checks whether the given path refers to an empty file or directory.

## Declarations
```cpp
bool is_empty( const path& p );
```
_(filesystem TS)_

```cpp
bool is_empty( const path& p, error_code& ec );
```
_(filesystem TS)_

## Parameters
- `p`: path to examine
- `ec`: error code to modify in case of error

## Return value
true if p refers to an empty file or directory, false otherwise.
