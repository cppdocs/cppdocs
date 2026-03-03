---
title: "std::experimental::filesystem::is_regular_file"
source_path: "cpp/experimental/fs/is_regular_file"
header: "<experimental/filesystem>"
category: "experimental"
---

Checks if the given file status or path corresponds to a regular file.

## Declarations
```cpp
bool is_regular_file( file_status s );
```
_(filesystem TS)_

```cpp
bool is_regular_file( const path& p );
```
_(filesystem TS)_

```cpp
bool is_regular_file( const path& p, error_code& ec );
```
_(filesystem TS)_

## Parameters
- `s`: file status to check
- `p`: path to examine
- `ec`: error code to store the error status to

## Return value
true if the given path or file status corresponds to a regular link, false otherwise.
