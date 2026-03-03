---
title: "std::experimental::filesystem::copy_symlink"
source_path: "cpp/experimental/fs/copy_symlink"
header: "<experimental/filesystem>"
category: "experimental"
---

Copies a symlink to another location.

## Declarations
```cpp
void copy_symlink( const path& from, const path& to );
```
_(filesystem TS)_

```cpp
void copy_symlink( const path& from, const path& to,
error_code& ec );
```
_(filesystem TS)_

## Parameters
- `from`: path to a symbolic link to copy
- `to`: destination path of the new symlink
- `ec`: out-parameter for error reporting in the non-throwing overload

## Return value
(none)

## See also
- [copy](/cpp/experimental/fs/copy/)
- [copy_file](/cpp/experimental/fs/copy_file/)
- [create_symlinkcreate_directory_symlink](/cpp/experimental/fs/create_symlink/)
- [read_symlink](/cpp/experimental/fs/read_symlink/)
