---
title: "std::filesystem::filesystem_error::filesystem_error"
source_path: "cpp/filesystem/filesystem_error/filesystem_error"
category: "filesystem"
since: "C++17"
---

Constructs a new filesystem_error object.

## Declarations
```cpp
filesystem_error( const std::string& what_arg,
std::error_code ec );
```
_(since C++17)_

```cpp
filesystem_error( const std::string& what_arg,
const std::filesystem::path& p1,
std::error_code ec );
```
_(since C++17)_

```cpp
filesystem_error( const std::string& what_arg,
const std::filesystem::path& p1,
const std::filesystem::path& p2,
std::error_code ec );
```
_(since C++17)_

```cpp
filesystem_error( const filesystem_error& other ) noexcept;
```
_(since C++17)_

## Parameters
- `what_arg`: explanatory string
- `ec`: error code for the specific operating system dependent error
- `p1, p2`: paths involved in the operation raising system error
- `other`: another filesystem_error object to copy

## Notes
Because copying std::filesystem::filesystem_error is not permitted to throw exceptions, the explanatory string is typically stored internally in a separately-allocated reference-counted storage. This is also why there is no constructor taking std::string&&: it would have to copy the content anyway.

Typical implementations also store path objects referenced by [path1()](/cpp/filesystem/filesystem_error/path/) and [path2()](/cpp/filesystem/filesystem_error/path/) in the reference-counted storage.

## Example
This section is incompleteReason: no example
