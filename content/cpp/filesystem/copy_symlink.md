---
title: "std::filesystem::copy_symlink"
source_path: "cpp/filesystem/copy_symlink"
header: "<filesystem>"
category: "filesystem"
since: "C++17"
---

Copies a symlink to another location.

## Declarations
```cpp
void copy_symlink( const std::filesystem::path& from,
const std::filesystem::path& to);
```
_(since C++17)_

```cpp
void copy_symlink( const std::filesystem::path& from,
const std::filesystem::path& to,
std::error_code& ec ) noexcept;
```
_(since C++17)_

## Parameters
- `from`: path to a symbolic link to copy
- `to`: destination path of the new symlink
- `ec`: out-parameter for error reporting in the non-throwing overload

## Return value
(none)

## Example
This section is incompleteReason: no example

## See also
- [copy](/cpp/filesystem/copy/)
- [copy_file](/cpp/filesystem/copy_file/)
- [create_symlinkcreate_directory_symlink](/cpp/filesystem/create_symlink/)
- [read_symlink](/cpp/filesystem/read_symlink/)
