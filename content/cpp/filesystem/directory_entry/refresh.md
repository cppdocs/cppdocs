---
title: "std::filesystem::directory_entry::refresh"
source_path: "cpp/filesystem/directory_entry/refresh"
category: "filesystem"
since: "C++17"
---

Examines the filesystem object referred to by this directory entry and stores its attributes for retrieval with [status](/cpp/filesystem/directory_entry/status/), [exists](/cpp/filesystem/directory_entry/exists/), [is_regular_file](/cpp/filesystem/directory_entry/is_regular_file/), and other status accessors.

## Declarations
```cpp
void refresh();
```
_(since C++17)_

```cpp
void refresh( std::error_code& ec ) noexcept;
```
_(since C++17)_

## Parameters
- `ec`: out-parameter for error reporting in the non-throwing overload

## Return value
(none)

## Notes
Many low-level OS APIs for directory traversal retrieve file attributes along with the next directory entry. The constructors and the non-const member functions of [std::filesystem::directory_iterator](/cpp/filesystem/directory_iterator/) store these attributes, if any, in the pointed-to [std::filesystem::directory_entry](/cpp/filesystem/directory_entry/) without calling directory_entry::refresh, which makes it possible to examine the attributes of the directory entries as they are being iterated over, without making additional system calls.

## Example
This section is incompleteReason: no example

## See also
- [statussymlink_status](/cpp/filesystem/directory_entry/status/)
- [exists](/cpp/filesystem/directory_entry/exists/)
- [is_block_file](/cpp/filesystem/directory_entry/is_block_file/)
- [is_character_file](/cpp/filesystem/directory_entry/is_character_file/)
- [is_directory](/cpp/filesystem/directory_entry/is_directory/)
- [is_fifo](/cpp/filesystem/directory_entry/is_fifo/)
- [is_other](/cpp/filesystem/directory_entry/is_other/)
- [is_regular_file](/cpp/filesystem/directory_entry/is_regular_file/)
- [is_socket](/cpp/filesystem/directory_entry/is_socket/)
- [is_symlink](/cpp/filesystem/directory_entry/is_symlink/)
- [file_size](/cpp/filesystem/directory_entry/file_size/)
- [hard_link_count](/cpp/filesystem/directory_entry/hard_link_count/)
- [last_write_time](/cpp/filesystem/directory_entry/last_write_time/)
