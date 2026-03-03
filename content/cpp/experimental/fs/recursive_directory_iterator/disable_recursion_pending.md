---
title: "std::experimental::filesystem::recursive_directory_iterator::disable_recursion_pending"
source_path: "cpp/experimental/fs/recursive_directory_iterator/disable_recursion_pending"
category: "experimental"
---

Disables recursion to the currently referred subdirectory, if any.

## Declarations
```cpp
void disable_recursion_pending();
```
_(filesystem TS)_

## Return value
(none)

## Example
```cpp
#include <experimental/filesystem>
#include <fstream>
#include <iostream>
#include <string>
namespace fs = std::experimental::filesystem;
 
int main()
{
    fs::create_directories("sandbox/a/b/c");
    fs::create_directories("sandbox/a/b/d/e");
    std::ofstream("sandbox/a/b/file1.txt");
    fs::create_symlink("a", "sandbox/syma");
    for (auto i = fs::recursive_directory_iterator("sandbox");
             i != fs::recursive_directory_iterator(); ++i)
    {
        std::cout << std::string(i.depth(), ' ') << *i;
        if (fs::is_symlink(i->symlink_status()))
            std::cout << " -> " << fs::read_symlink(*i);
        std::cout << '\n';
 
        // do not descend into "b"
        if (i->path().filename() == "b")
            i.disable_recursion_pending();
    }
    fs::remove_all("sandbox");
}
```

## See also
- [recursion_pending](/cpp/experimental/fs/recursive_directory_iterator/recursion_pending/)
- [incrementoperator++](/cpp/experimental/fs/recursive_directory_iterator/increment/)
