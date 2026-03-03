---
title: "std::experimental::filesystem::path::filename"
source_path: "cpp/experimental/fs/path/filename"
category: "experimental"
---

Returns the filename component of the path.

## Declarations
```cpp
path filename() const;
```
_(filesystem TS)_

## Return value
The filename identified by the path.

## Example
```cpp
#include <experimental/filesystem>
#include <iostream>
namespace fs = std::experimental::filesystem;
 
int main()
{
    std::cout << fs::path("/foo/bar.txt").filename() << '\n'
              << fs::path("/foo/.bar").filename() << '\n'
              << fs::path("/foo/bar/").filename() << '\n'
              << fs::path("/foo/.").filename() << '\n'
              << fs::path("/foo/..").filename() << '\n'
              << fs::path(".").filename() << '\n'
              << fs::path("..").filename() << '\n'
              << fs::path("/").filename() << '\n';
}
```

## See also
- [extension](/cpp/experimental/fs/path/extension/)
- [stem](/cpp/experimental/fs/path/stem/)
- [replace_filename](/cpp/experimental/fs/path/replace_filename/)
- [has_filename](/cpp/experimental/fs/path/has_path/)
