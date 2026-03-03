---
title: "std::experimental::filesystem::path::root_path"
source_path: "cpp/experimental/fs/path/root_path"
category: "experimental"
---

Returns the root path of the path. If the path does not include root path, returns path().

## Declarations
```cpp
path root_path() const;
```
_(filesystem TS)_

## Return value
The root path of the path.

## Example
```cpp
#include <experimental/filesystem>
#include <iostream>
namespace fs = std::experimental::filesystem;
 
int main()
{
    std::cout << "Current root path is: " << fs::current_path().root_path() << '\n';
}
```

## See also
- [root_name](/cpp/experimental/fs/path/root_name/)
- [root_directory](/cpp/experimental/fs/path/root_directory/)
