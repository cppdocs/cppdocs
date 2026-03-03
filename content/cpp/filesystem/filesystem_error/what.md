---
title: "std::filesystem::filesystem_error::what"
source_path: "cpp/filesystem/filesystem_error/what"
category: "filesystem"
since: "C++17"
---

Returns an explanatory byte string. This explanatory string contains the explanatory string passed at the time of construction. Implementations are encouraged to include the pathnames of [path1()](/cpp/filesystem/filesystem_error/path/) and [path2()](/cpp/filesystem/filesystem_error/path/) in native format and the [std::system_error::what()](/cpp/error/system_error/what/) string inside the returned string as well.

## Declarations
```cpp
const char* what() const noexcept override;
```
_(since C++17)_

## Return value
A C-stye explanatory byte string that contains the explanatory string passed at the time of construction.

## Example
```cpp
#include <cstdio>
#include <filesystem>
#include <iostream>
#include <string_view>
namespace fs = std::filesystem;
 
void explain(std::string_view note, fs::filesystem_error const& ex)
{
    std::cout << note << " exception:\n"
              << "what(): " << ex.what() << '\n'
              << "path1(): " << ex.path1() << ", path2(): "
              << ex.path2() << "\n\n";
}
 
int main()
{
    try
    {
        std::filesystem::rename("/dev", "/null");
    }
    catch(fs::filesystem_error const& ex)
    {
        explain("fs::rename()", ex);
    }
 
    for (auto const path : {"/bool", "/bin/cat", "/bin/mouse"})
        try
        {
            std::filesystem::create_directory(path);
        }
        catch(fs::filesystem_error const& ex)
        {
            explain("fs::create_directory()", ex);
        }
}
```
