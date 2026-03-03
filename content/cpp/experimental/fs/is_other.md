---
title: "std::experimental::filesystem::is_other"
source_path: "cpp/experimental/fs/is_other"
header: "<experimental/filesystem>"
category: "experimental"
---

Checks if the given file status or path corresponds to a file of type other type. That is, the file exists, but is neither regular file, nor directory nor a symlink.

## Declarations
```cpp
bool is_other( file_status s );
```
_(filesystem TS)_

```cpp
bool is_other( const path& p );
```
_(filesystem TS)_

```cpp
bool is_other( const path& p, error_code& ec );
```
_(filesystem TS)_

## Parameters
- `s`: file status to check
- `p`: path to examine
- `ec`: error code to store the error status to

## Return value
true if the given path or file status corresponds to a other file, false otherwise.
