---
title: "std::filesystem::directory_entry::exists"
source_path: "cpp/filesystem/directory_entry/exists"
category: "filesystem"
since: "C++17"
---

Checks whether the pointed-to object exists. Effectively returns:

## Declarations
```cpp
bool exists() const;
```
_(since C++17)_

```cpp
bool exists( std::error_code& ec ) const noexcept;
```
_(since C++17)_

## Parameters
- `ec`: out-parameter for error reporting in the non-throwing overload

## Return value
true if the referred-to filesystem object exists.

## Example
```cpp
#include <filesystem>
#include <iostream>
 
int main()
{
    for (auto const str:
    {
        "/usr/bin/cat",
        "/usr/bin/mouse",
        "/usr/bin/python",
        "/usr/bin/bison",
        "/usr/bin/yacc",
        "/usr/bin/c++",
    })
    {
        std::filesystem::directory_entry entry{str};
 
        std::cout << "directory entry " << entry
                  << (entry.exists() ? " exists\n" : " does not exist\n");
    }
}
```

## See also
- [exists](/cpp/filesystem/exists/)
