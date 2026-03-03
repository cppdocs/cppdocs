---
title: "std::experimental::filesystem::current_path"
source_path: "cpp/experimental/fs/current_path"
header: "<experimental/filesystem>"
category: "experimental"
---

Returns or changes the current path.

## Declarations
```cpp
path current_path();
```
_(filesystem TS)_

```cpp
path current_path( error_code& ec );
```
_(filesystem TS)_

```cpp
void current_path( const path& p );
```
_(filesystem TS)_

```cpp
void current_path( const path& p, error_code& ec );
```
_(filesystem TS)_

## Parameters
- `p`: path to change the current working directory to
- `ec`: out-parameter for error reporting in the non-throwing overloads

## Notes
The current working directory is the directory that is used as the starting location in path resolution for relative paths. Single current working directory is associated with entire process.

The current working directory is a dangerous global state of the program. Behavior of various file input/output related functions are affected by the value of the current path. The current path may be unexpectedly changed by any component of the program, including various external libraries or other threads.
