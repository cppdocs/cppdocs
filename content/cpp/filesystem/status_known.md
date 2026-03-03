---
title: "std::filesystem::status_known"
source_path: "cpp/filesystem/status_known"
header: "<filesystem>"
category: "filesystem"
since: "C++17"
---

Checks if the given file status is known, equivalent to s.type() != file_type::none.

## Declarations
```cpp
bool status_known( std::filesystem::file_status s ) noexcept;
```
_(since C++17)_

## Parameters
- `s`: file status to check

## Return value
true if the given file status is a known file status.

## Notes
Despite the name, the function checks for the file status of [file_type::none](/cpp/filesystem/file_type/) (meaning an error occurred), not [file_type::unknown](/cpp/filesystem/file_type/) (meaning file exists, but its type cannot be determined).

## See also
- [statussymlink_status](/cpp/filesystem/status/)
- [statussymlink_status](/cpp/filesystem/directory_entry/status/)
