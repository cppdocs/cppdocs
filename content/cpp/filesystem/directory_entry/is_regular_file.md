---
title: "std::filesystem::directory_entry::is_regular_file"
source_path: "cpp/filesystem/directory_entry/is_regular_file"
category: "filesystem"
since: "C++17"
---

Checks whether the pointed-to object is a regular file. Effectively returns:

## Declarations
```cpp
bool is_regular_file() const;
```
_(since C++17)_

```cpp
bool is_regular_file( std::error_code& ec ) const noexcept;
```
_(since C++17)_

## Parameters
- `ec`: out-parameter for error reporting in the non-throwing overload

## Return value
true if the referred-to filesystem object is a regular file, false otherwise.

## Example
```cpp
#include <filesystem>
#include <iostream>
#include <string>
 
namespace fs = std::filesystem;
 
int main(int argc, const char* argv[])
{
    // Print out all regular files in a directory 'dir'.
    try
    {
        const auto dir{argc == 2 ? fs::path{argv[1]} : fs::current_path()};
 
        std::cout << "Current dir: " << dir << '\n'
                  << std::string(40, '-') << '\n';
 
        for (fs::directory_entry const& entry : fs::directory_iterator(dir))
            if (entry.is_regular_file())
                std::cout << entry.path().filename() << '\n';
    }
    catch(const fs::filesystem_error& e)
    {
        std::cout << e.what() << '\n';
    }
}
```

## See also
- [is_regular_file](/cpp/filesystem/is_regular_file/)
