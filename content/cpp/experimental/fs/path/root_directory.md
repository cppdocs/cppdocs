---
title: "std::experimental::filesystem::path::root_directory"
source_path: "cpp/experimental/fs/path/root_directory"
category: "experimental"
---

Returns the root directory of the path. If the path does not include root name, returns path().

## Declarations
```cpp
path root_directory() const;
```
_(filesystem TS)_

## Return value
The root directory of the path.

## Example
```cpp
#include <experimental/filesystem>
#include <iostream>
namespace fs = std::experimental::filesystem;
 
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
- [root_name](/cpp/experimental/fs/path/root_name/)
- [root_path](/cpp/experimental/fs/path/root_path/)
