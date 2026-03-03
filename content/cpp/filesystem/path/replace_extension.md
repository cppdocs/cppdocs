---
title: "std::filesystem::path::replace_extension"
source_path: "cpp/filesystem/path/replace_extension"
category: "filesystem"
since: "C++17"
---

Replaces the extension with replacement or removes it when the default value of replacement is used.

## Declarations
```cpp
path& replace_extension( const path& replacement = path() );
```
_(since C++17)_

## Parameters
- `replacement`: the extension to replace with

## Return value
*this

## Notes
The type of replacement is [std::filesystem::path](/cpp/filesystem/path/) even though it is not intended to represent an object on the file system in order to correctly account for the filesystem character encoding.

## Example
```cpp
#include <filesystem>
#include <iomanip>
#include <iostream>
#include <utility>
 
int main()
{
    const int width1{18}, width2{11}; // columns' width
 
    std::cout << std::left << std::setw(width1) << "Path:"
              << std::setw(width2) << "Ext:" << "Result:\n";
    for (const auto& [p, e] : {
            std::make_pair("/foo/bar.jpg", ".png"),
            {"/foo/bar.jpg", "png"},
            {"/foo/bar.jpg", "."},
            {"/foo/bar.jpg", ""},
            {"/foo/bar.", "png"},
            {"/foo/bar", ".png"},
            {"/foo/bar", "png"},
            {"/foo/bar", "."},
            {"/foo/bar", ""},
            {"/foo/.", ".png"},
            {"/foo/.", "png"},
            {"/foo/.", "."},
            {"/foo/.", ""},
            {"/foo/", ".png"},
            {"/foo/", "png"}})
    {
        std::filesystem::path path{p}, ext{e};
        std::cout << std::setw(width1) << path << std::setw(width2) << ext;
        path.replace_extension(ext);
        std::cout << path << '\n';
    }
}
```

## See also
- [extension](/cpp/filesystem/path/extension/)
- [filename](/cpp/filesystem/path/filename/)
- [stem](/cpp/filesystem/path/stem/)
- [has_extension](/cpp/filesystem/path/has_path/)
