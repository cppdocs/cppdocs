---
title: "std::filesystem::read_symlink"
source_path: "cpp/filesystem/read_symlink"
header: "<filesystem>"
category: "filesystem"
since: "C++17"
---

If the path p refers to a symbolic link, returns a new path object which refers to the target of that symbolic link.

## Declarations
```cpp
std::filesystem::path read_symlink( const std::filesystem::path& p );
```
_(since C++17)_

```cpp
std::filesystem::path read_symlink( const std::filesystem::path& p,
std::error_code& ec );
```
_(since C++17)_

## Parameters
- `p`: path to a symlink
- `ec`: out-parameter for error reporting in the non-throwing overload

## Return value
The target of the symlink (which may not necessarily exist).

## Example
```cpp
#include <filesystem>
#include <iostream>
 
namespace fs = std::filesystem;
 
int main()
{
    for (fs::path p : {"/usr/bin/gcc", "/bin/cat", "/bin/mouse"})
    {
        std::cout << p;
        fs::exists(p) ?
            fs::is_symlink(p) ?
                std::cout << " -> " << fs::read_symlink(p) << '\n' :
                std::cout << " exists but it is not a symlink\n" :
            std::cout << " does not exist\n";
    }
}
```

## See also
- [is_symlink](/cpp/filesystem/is_symlink/)
- [create_symlinkcreate_directory_symlink](/cpp/filesystem/create_symlink/)
- [copy_symlink](/cpp/filesystem/copy_symlink/)
- [statussymlink_status](/cpp/filesystem/status/)
