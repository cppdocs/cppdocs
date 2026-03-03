---
title: "std::filesystem::path::begin, std::filesystem::path::end"
source_path: "cpp/filesystem/path/begin"
category: "filesystem"
since: "C++17"
---

1) Returns an iterator to the first element of the path. If the path is empty, the returned iterator is equal to end().

## Declarations
```cpp
iterator begin() const;
```
_(since C++17)_

```cpp
iterator end() const;
```
_(since C++17)_

## Example
```cpp
#include <filesystem>
#include <iostream>
namespace fs = std::filesystem;
 
int main()
{
    const fs::path p = 
#   ifdef _WIN32
        "C:\\users\\abcdef\\AppData\\Local\\Temp\\";
#   else
        "/home/user/.config/Cppcheck/Cppcheck-GUI.conf";
#   endif
    std::cout << "Examining the path " << p << " through iterators gives\n";
    for (auto it = p.begin(); it != p.end(); ++it)
        std::cout << *it << " │ ";
    std::cout << '\n';
}
```
