---
title: "std::filesystem::path::filename"
source_path: "cpp/filesystem/path/filename"
category: "filesystem"
since: "C++17"
---

Returns the generic-format filename component of the path.

## Declarations
```cpp
path filename() const;
```
_(since C++17)_

## Return value
The filename identified by the path.

## Example
```cpp
#include <filesystem>
#include <iostream>
namespace fs = std::filesystem;
 
int main()
{
    std::cout << fs::path("/foo/bar.txt").filename() << '\n'
              << fs::path("/foo/.bar").filename() << '\n'
              << fs::path("/foo/bar/").filename() << '\n'
              << fs::path("/foo/.").filename() << '\n'
              << fs::path("/foo/..").filename() << '\n'
              << fs::path(".").filename() << '\n'
              << fs::path("..").filename() << '\n'
              << fs::path("/").filename() << '\n'
              << fs::path("//host").filename() << '\n';
}
```

## See also
- [extension](/cpp/filesystem/path/extension/)
- [stem](/cpp/filesystem/path/stem/)
- [replace_filename](/cpp/filesystem/path/replace_filename/)
- [has_filename](/cpp/filesystem/path/has_path/)
