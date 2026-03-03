---
title: "std::filesystem::recursive_directory_iterator::depth"
source_path: "cpp/filesystem/recursive_directory_iterator/depth"
category: "filesystem"
since: "C++17"
---

Returns the number of directories from the starting directory to the currently iterated directory, i.e. the current depth of the directory hierarchy.

## Declarations
```cpp
int depth() const;
```
_(since C++17)_

## Return value
Current depth of the directory hierarchy.

## Example
```cpp
#include <filesystem>
#include <fstream>
#include <iostream>
#include <string>
namespace fs = std::filesystem;
 
int main()
{
    fs::current_path(fs::temp_directory_path());
    fs::create_directories("sandbox/a/b/c");
    fs::create_directories("sandbox/a/b/d/e");
    std::ofstream("sandbox/a/b/file1.txt");
    fs::create_symlink("a", "sandbox/syma");
    for (auto i = fs::recursive_directory_iterator("sandbox");
         i != fs::recursive_directory_iterator();
         ++i)
    {
        std::cout << std::string(i.depth() << 1, ' ') << *i;
        if (fs::is_symlink(i->symlink_status()))
            std::cout << " -> " << fs::read_symlink(*i);
        std::cout << '\n';
    }
    fs::remove_all("sandbox");
}
```
