---
title: "std::filesystem::filesystem_error"
source_path: "cpp/filesystem/filesystem_error"
header: "<filesystem>"
category: "filesystem"
since: "C++17"
---

The class std::filesystem::filesystem_error defines an exception object that is thrown on failure by the throwing overloads of the functions in the filesystem library.

## Declarations
```cpp
class filesystem_error;
```
_(since C++17)_

## Notes
In order to ensure that copy functions of filesystem_error are noexcept, typical implementations store an object holding the return value of [what()](/cpp/filesystem/filesystem_error/what/) and two [std::filesystem::path](/cpp/filesystem/path/) objects referenced by [path1()](/cpp/filesystem/filesystem_error/path/) and [path2()](/cpp/filesystem/filesystem_error/path/) respectively in a separately-allocated reference-counted storage.

Currently the [MS STL implementation](https://github.com/microsoft/STL/blob/master/stl/inc/filesystem#L1749) is non-conforming: objects mentioned above are stored directly in the filesystem object, which makes the copy functions not noexcept.

## Example
```cpp
#include <filesystem>
#include <iostream>
#include <system_error>
 
int main()
{
    const std::filesystem::path from{"/none1/a"}, to{"/none2/b"};
 
    try
    {
        std::filesystem::copy_file(from, to); // throws: files do not exist
    }
    catch (std::filesystem::filesystem_error const& ex)
    {
        std::cout << "what():  " << ex.what() << '\n'
                  << "path1(): " << ex.path1() << '\n'
                  << "path2(): " << ex.path2() << '\n'
                  << "code().value():    " << ex.code().value() << '\n'
                  << "code().message():  " << ex.code().message() << '\n'
                  << "code().category(): " << ex.code().category().name() << '\n';
    }
 
    // All functions have non-throwing equivalents
    std::error_code ec;
    std::filesystem::copy_file(from, to, ec); // does not throw
    std::cout << "\nNon-throwing form sets error_code: " << ec.message() << '\n';
}
```
