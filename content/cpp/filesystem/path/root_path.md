---
title: "std::filesystem::path::root_path"
source_path: "cpp/filesystem/path/root_path"
category: "filesystem"
since: "C++17"
---

Returns the root path of the path. If the path does not include root path, returns path().

## Declarations
```cpp
path root_path() const;
```
_(since C++17)_

## Return value
The root path of the path.

## Example
```cpp
#include <filesystem>
#include <iostream>
namespace fs = std::filesystem;
 
int main()
{
    std::cout << "Current root path is: " << fs::current_path().root_path() << '\n';
}
```

## See also
- [root_name](/cpp/filesystem/path/root_name/)
- [root_directory](/cpp/filesystem/path/root_directory/)
