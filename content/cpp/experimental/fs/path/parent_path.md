---
title: "std::experimental::filesystem::path::parent_path"
source_path: "cpp/experimental/fs/path/parent_path"
category: "experimental"
---

Returns the path to the parent directory. Returns empty path if empty() or there's only a single element in the path (begin() == --end()).

## Declarations
```cpp
path parent_path() const;
```
_(filesystem TS)_

## Return value
The path to the parent directory.

## Example
```cpp
#include <experimental/filesystem>
#include <iostream>
namespace fs = std::experimental::filesystem;
 
int main()
{
    for (fs::path p : {"/var/tmp/example.txt", "/", "/var/tmp/."})
        std::cout << "The parent path of " << p
                  << " is " << p.parent_path() << '\n';
}
```
