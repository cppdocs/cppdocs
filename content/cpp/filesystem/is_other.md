---
title: "std::filesystem::is_other"
source_path: "cpp/filesystem/is_other"
header: "<filesystem>"
category: "filesystem"
since: "C++17"
---

Checks if the given file status or path corresponds to a file of type other type. That is, the file exists, but is neither regular file, nor directory nor a symlink.

## Declarations
```cpp
bool is_other( std::filesystem::file_status s ) noexcept;
```
_(since C++17)_

```cpp
bool is_other( const std::filesystem::path& p );
```
_(since C++17)_

```cpp
bool is_other( const std::filesystem::path& p, std::error_code& ec ) noexcept;
```
_(since C++17)_

## Parameters
- `s`: file status to check
- `p`: path to examine
- `ec`: error code to store the error status to

## Return value
true if the file indicated by p or if the type indicated s refers to a file that is not regular file, directory, or a symlink, false otherwise. The non-throwing overload returns false if an error occurs.

## Example
This section is incompleteReason: no example

## See also
- [statussymlink_status](/cpp/filesystem/status/)
- [file_status](/cpp/filesystem/file_status/)
- [status_known](/cpp/filesystem/status_known/)
- [is_block_file](/cpp/filesystem/is_block_file/)
- [is_character_file](/cpp/filesystem/is_character_file/)
- [is_directory](/cpp/filesystem/is_directory/)
- [is_fifo](/cpp/filesystem/is_fifo/)
- [is_regular_file](/cpp/filesystem/is_regular_file/)
- [is_socket](/cpp/filesystem/is_socket/)
- [is_symlink](/cpp/filesystem/is_symlink/)
- [exists](/cpp/filesystem/exists/)
- [is_other](/cpp/filesystem/directory_entry/is_other/)
