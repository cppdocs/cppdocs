---
title: "std::filesystem::path::relative_path"
source_path: "cpp/filesystem/path/relative_path"
category: "filesystem"
since: "C++17"
---

Returns path relative to root-path, that is, a pathname composed of every generic-format component of *this after root-path. If *this is an empty path, returns an empty path.

## Declarations
```cpp
path relative_path() const;
```
_(since C++17)_

## Return value
Path relative to the [root path](/cpp/filesystem/path/root_path/).

## Example
```cpp
#include <filesystem>
#include <iostream>
namespace fs = std::filesystem;
 
int main()
{
    fs::path p = fs::current_path();
 
    std::cout << "The current path " << p << " decomposes into:\n"
              << "root-path " << p.root_path() << '\n'
              << "relative path " << p.relative_path() << '\n';
}
```

## See also
- [root_name](/cpp/filesystem/path/root_name/)
- [root_directory](/cpp/filesystem/path/root_directory/)
- [root_path](/cpp/filesystem/path/root_path/)
