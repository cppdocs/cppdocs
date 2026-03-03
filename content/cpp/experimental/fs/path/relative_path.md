---
title: "std::experimental::filesystem::path::relative_path"
source_path: "cpp/experimental/fs/path/relative_path"
category: "experimental"
---

Returns path relative to [root path](/cpp/experimental/fs/path/root_path/). If *this is an empty path, returns an empty path.

## Declarations
```cpp
path relative_path() const;
```
_(filesystem TS)_

## Return value
Path relative to the [root path](/cpp/experimental/fs/path/root_path/).

## Example
```cpp
#include <experimental/filesystem>
#include <iostream>
namespace fs = std::experimental::filesystem;
 
int main()
{
    fs::path p = fs::current_path();
 
    std::cout << "The current path " << p << " decomposes into:\n"
              << "root-path " << p.root_path() << '\n'
              << "relative path " << p.relative_path() << '\n';
}
```

## See also
- [root_name](/cpp/experimental/fs/path/root_name/)
- [root_directory](/cpp/experimental/fs/path/root_directory/)
- [root_path](/cpp/experimental/fs/path/root_path/)
