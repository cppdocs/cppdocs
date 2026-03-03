---
title: "std::experimental::filesystem::remove, std::experimental::filesystem::remove_all"
source_path: "cpp/experimental/fs/remove"
header: "<experimental/filesystem>"
category: "experimental"
---

1) The file or empty directory identified by the path p is deleted as if by the POSIX [remove](https://pubs.opengroup.org/onlinepubs/9699919799/functions/remove.html). Symlinks are not followed (symlink is removed, not its target).

## Declarations
```cpp
bool remove( const path& p );
bool remove( const path& p, error_code& ec );
```
_(filesystem TS)_

```cpp
std::uintmax_t remove_all( const path& p );
std::uintmax_t remove_all( const path& p, error_code& ec );
```
_(filesystem TS)_

## Parameters
- `p`: path to delete
- `ec`: out-parameter for error reporting in the non-throwing overload

## Notes
On POSIX systems, this function typically calls unlink and rmdir as needed, on Windows RemoveDirectoryW and DeleteFileW.

## Example
```cpp
#include <cstdint>
#include <experimental/filesystem>
#include <iostream>
namespace fs = std::experimental::filesystem;
 
int main()
{
    fs::path dir = fs::temp_directory_path();
    fs::create_directories(dir / "abcdef/example");
    std::uintmax_t n = fs::remove_all(dir / "abcdef");
    std::cout << "Deleted " << n << " files or directories\n";
}
```

## See also
- [remove](/cpp/io/c/remove/)
