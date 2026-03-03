---
title: "std::experimental::filesystem::is_directory"
source_path: "cpp/experimental/fs/is_directory"
header: "<experimental/filesystem>"
category: "experimental"
---

Checks if the given file status or path corresponds to a directory.

## Declarations
```cpp
bool is_directory( file_status s );
```
_(filesystem TS)_

```cpp
bool is_directory( const path& p );
```
_(filesystem TS)_

```cpp
bool is_directory( const path& p, error_code& ec );
```
_(filesystem TS)_

## Parameters
- `s`: file status to check
- `p`: path to query
- `ec`: error code to modify in case of errors

## Return value
true if the given path or file status corresponds to a directory, false otherwise.
