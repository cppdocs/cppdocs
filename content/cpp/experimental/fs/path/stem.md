---
title: "std::experimental::filesystem::path::stem"
source_path: "cpp/experimental/fs/path/stem"
category: "experimental"
---

Returns the filename identified by the path stripped of its extension.

## Declarations
```cpp
path stem() const;
```
_(filesystem TS)_

## Return value
The stem of the filename identified by the path.

## Example
```cpp
#include <experimental/filesystem>
#include <iostream>
namespace fs = std::experimental::filesystem;
 
int main()
{
    std::cout << fs::path("/foo/bar.txt").stem() << '\n'
              << fs::path("/foo/.bar").stem() << '\n';
 
    for (fs::path p = "foo.bar.baz.tar"; !p.extension().empty(); p = p.stem())
        std::cout << p.extension() << '\n';
}
```

## See also
- [filename](/cpp/experimental/fs/path/filename/)
- [extension](/cpp/experimental/fs/path/extension/)
