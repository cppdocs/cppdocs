---
title: "std::experimental::filesystem::path::remove_filename"
source_path: "cpp/experimental/fs/path/remove_filename"
category: "experimental"
---

Removes a single filename component.

## Declarations
```cpp
path& remove_filename()
```
_(filesystem TS)_

## Return value
*this

## Example
```cpp
#include <experimental/filesystem>
#include <iostream>
namespace fs = std::experimental::filesystem;
 
int main()
{
    std::cout << fs::path("/foo").remove_filename() << '\n'
              << fs::path("/").remove_filename() << '\n';
}
```

## See also
- [filename](/cpp/experimental/fs/path/filename/)
- [replace_filename](/cpp/experimental/fs/path/replace_filename/)
- [has_filename](/cpp/experimental/fs/path/has_path/)
