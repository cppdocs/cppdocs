---
title: "std::experimental::filesystem::read_symlink"
source_path: "cpp/experimental/fs/read_symlink"
header: "<experimental/filesystem>"
category: "experimental"
---

If the path p refers to a symbolic link, returns a new path object which refers to the target of that symbolic link.

## Declarations
```cpp
path read_symlink( const path& p );
path read_symlink( const path& p, error_code& ec );
```
_(filesystem TS)_

## Parameters
- `p`: path to a symlink
- `ec`: out-parameter for error reporting in the non-throwing overload

## Return value
The target of the symlink (which may not necessarily exist).

## Example
```cpp
#include <experimental/filesystem>
#include <iostream>
namespace fs = std::experimental::filesystem;
 
int main()
{
    // on a typical Linux system, /lib/libc.so.6 is a symlink
    fs::path p = "/lib/libc.so.6";
    if (exists(p) && is_symlink(p))
        std::cout << p << " -> " << read_symlink(p) << '\n';
    else
        std::cout << p << " does not exist or is not a symlink\n";
}
```

## See also
- [is_symlink](/cpp/experimental/fs/is_symlink/)
- [create_symlinkcreate_directory_symlink](/cpp/experimental/fs/create_symlink/)
- [copy_symlink](/cpp/experimental/fs/copy_symlink/)
- [statussymlink_status](/cpp/experimental/fs/status/)
