---
title: "std::experimental::filesystem::filesystem_error::filesystem_error"
source_path: "cpp/experimental/fs/filesystem_error/filesystem_error"
category: "experimental"
---

Constructs a new filesystem error object. The explanatory string is set to what_arg, error code is set to ec and optionally, the paths that were involved in the operation that resulted in the error, are set to p1 and p2.

## Declarations
```cpp
filesystem_error( const string& what_arg, error_code ec );
```
_(filesystem TS)_

```cpp
filesystem_error( const string& what_arg, const path& p1, error_code ec );
```
_(filesystem TS)_

```cpp
filesystem_error( const string& what_arg, const path& p1, const path& p2, error_code ec );
```
_(filesystem TS)_
