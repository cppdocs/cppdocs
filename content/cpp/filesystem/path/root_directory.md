---
title: "std::filesystem::path::root_directory"
source_path: "cpp/filesystem/path/root_directory"
category: "filesystem"
since: "C++17"
---

Returns the root directory of the generic-format path. If the path (in generic format) does not include root directory, returns path().

## Declarations
```cpp
path root_directory() const;
```
_(since C++17)_

## Return value
The root directory of the path.

## Example
```cpp
#include <filesystem>
#include <iostream>
namespace fs = std::filesystem;
 
int main()
{
    fs::path p = fs::current_path();
 
    std::cout << "The current path " << p << " decomposes into:\n"
              << "root name " << p.root_name() << '\n'
              << "root directory " << p.root_directory() << '\n'
              << "relative path " << p.relative_path() << '\n';
}
```

## See also
- [root_name](/cpp/filesystem/path/root_name/)
- [root_path](/cpp/filesystem/path/root_path/)
