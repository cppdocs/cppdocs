---
title: "std::experimental::filesystem::path::root_name"
source_path: "cpp/experimental/fs/path/root_name"
category: "experimental"
---

Returns the root name of the path. If the path does not include root name, returns path().

## Declarations
```cpp
path root_name() const;
```
_(filesystem TS)_

## Return value
The root name of the path.

## Example
```cpp
#include <experimental/filesystem>
#include <iostream>
namespace fs = std::experimental::filesystem;
 
int main()
{
    std::cout << "Current root name is: " << fs::current_path().root_name() << '\n';
}
```

## See also
- [root_directory](/cpp/experimental/fs/path/root_directory/)
- [root_path](/cpp/experimental/fs/path/root_path/)
