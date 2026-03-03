---
title: "std::filesystem::path::remove_filename"
source_path: "cpp/filesystem/path/remove_filename"
category: "filesystem"
since: "C++17"
---

Removes a single generic-format filename component (as returned by [filename](/cpp/filesystem/path/filename/)) from the given generic-format path.

## Declarations
```cpp
path& remove_filename();
```
_(since C++17)_

## Return value
*this

## Example
```cpp
#include <filesystem>
#include <iostream>
namespace fs = std::filesystem;
 
int main()
{
    fs::path p;
    std::cout << std::boolalpha
              << (p = "foo/bar").remove_filename() << '\t' << p.has_filename() << '\n'
              << (p = "foo/").remove_filename() << '\t' << p.has_filename() << '\n'
              << (p = "/foo").remove_filename() << '\t' << p.has_filename() << '\n'
              << (p = "/").remove_filename() << '\t' << p.has_filename() << '\n'
              << (p = "").remove_filename() << '\t' << p.has_filename() << '\n';
}
```

## See also
- [filename](/cpp/filesystem/path/filename/)
- [replace_filename](/cpp/filesystem/path/replace_filename/)
- [has_filename](/cpp/filesystem/path/has_path/)
