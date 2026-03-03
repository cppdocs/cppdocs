---
title: "std::filesystem::directory_entry::directory_entry"
source_path: "cpp/filesystem/directory_entry/directory_entry"
category: "filesystem"
since: "C++17"
---

Constructs a new directory_entry object.

## Declarations
```cpp
directory_entry() noexcept = default;
```
_(since C++17)_

```cpp
directory_entry( const directory_entry& ) = default;
```
_(since C++17)_

```cpp
directory_entry( directory_entry&& ) noexcept = default;
```
_(since C++17)_

```cpp
explicit directory_entry( const std::filesystem::path& p );
```
_(since C++17)_

```cpp
directory_entry( const std::filesystem::path& p, std::error_code& ec );
```
_(since C++17)_

## Parameters
- `p`: path to the filesystem object to which the directory entry will refer
- `ec`: out-parameter for error reporting in the non-throwing overload

## Example
This section is incompleteReason: no example
