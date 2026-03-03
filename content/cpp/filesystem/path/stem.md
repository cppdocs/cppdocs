---
title: "std::filesystem::path::stem"
source_path: "cpp/filesystem/path/stem"
category: "filesystem"
since: "C++17"
---

Returns the filename identified by the generic-format path stripped of its extension.

## Declarations
```cpp
path stem() const;
```
_(since C++17)_

## Return value
The stem of the filename identified by the path (i.e. the filename without the final extension).

## Example
```cpp
#include <filesystem>
#include <iostream>
namespace fs = std::filesystem;
 
int main()
{
    for (const fs::path p : {"/foo/bar.txt", "/foo/.bar", "foo.bar.baz.tar"})
        std::cout << "path: " << p << ", stem: " << p.stem() << '\n';
 
    std::cout << '\n';
 
    for (fs::path p = "foo.bar.baz.tar"; !p.extension().empty(); p = p.stem())
        std::cout << "path: " << p << ", extension: " << p.extension() << '\n';
}
```

## See also
- [filename](/cpp/filesystem/path/filename/)
- [extension](/cpp/filesystem/path/extension/)
