---
title: "std::filesystem::path::parent_path"
source_path: "cpp/filesystem/path/parent_path"
category: "filesystem"
since: "C++17"
---

Returns the path to the parent directory.

## Declarations
```cpp
path parent_path() const;
```
_(since C++17)_

## Return value
The path to the parent directory, or a copy of *this if not has_relative_path().

## Example
```cpp
#include <filesystem>
#include <iostream>
namespace fs = std::filesystem;
 
int main()
{
    for (fs::path p : {"/var/tmp/example.txt", "/", "/var/tmp/."})
        std::cout << "The parent path of " << p
                  << " is " << p.parent_path() << '\n';
}
```

## See also
- [root_name](/cpp/filesystem/path/root_name/)
- [root_directory](/cpp/filesystem/path/root_directory/)
- [root_path](/cpp/filesystem/path/root_path/)
