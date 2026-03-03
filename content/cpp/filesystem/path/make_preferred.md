---
title: "std::filesystem::path::make_preferred"
source_path: "cpp/filesystem/path/make_preferred"
category: "filesystem"
since: "C++17"
---

Converts all directory separators in the generic-format view of the path to the preferred directory separator.

## Declarations
```cpp
path& make_preferred();
```
_(since C++17)_

## Return value
*this

## Example
```cpp
#include <filesystem>
#include <iostream>
 
int main()
{
    std::filesystem::path
        windows_path("a\\b\\c"),
        posix_path("a/b/c");
 
    std::cout
        << "Windows path: "
        << windows_path << " -> "
        << windows_path.make_preferred() << '\n'
        << "POSIX path: "
        << posix_path << " -> "
        << posix_path.make_preferred() << '\n';
}
```
