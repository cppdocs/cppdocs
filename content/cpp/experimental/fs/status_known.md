---
title: "std::experimental::filesystem::status_known"
source_path: "cpp/experimental/fs/status_known"
header: "<experimental/filesystem>"
category: "experimental"
---

Checks if the given file status is known, Equivalent to s.type() != file_type::none.

## Declarations
```cpp
bool status_known( file_status s );
```
_(filesystem TS)_

## Parameters
- `s`: file status to check

## Return value
true if the given file status is an unknown file status.

## Notes
Despite the name, the function checks for the file status of file_type::none (meaning an error occurred), not file_type::unknown (meaning file exists, but its type cannot be determined).

## See also
- [statussymlink_status](/cpp/experimental/fs/status/)
- [statussymlink_status](/cpp/experimental/fs/directory_entry/status/)
