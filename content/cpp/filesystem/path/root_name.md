---
title: "std::filesystem::path::root_name"
source_path: "cpp/filesystem/path/root_name"
category: "filesystem"
since: "C++17"
---

Returns the root name of the generic-format path. If the path (in generic format) does not include root name, returns path().

## Declarations
```cpp
path root_name() const;
```
_(since C++17)_

## Return value
The root name of the path.

## Example
```cpp
#include <filesystem>
#include <iostream>
namespace fs = std::filesystem;
 
int main()
{
    std::cout << "Current root name is: " << fs::current_path().root_name() << '\n';
}
```

## See also
- [root_directory](/cpp/filesystem/path/root_directory/)
- [root_path](/cpp/filesystem/path/root_path/)
