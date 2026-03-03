---
title: "operator<<(std::filesystem::directory_entry)"
source_path: "cpp/filesystem/directory_entry/operator"
category: "filesystem"
since: "C++17"
---

Performs stream output on the directory entry d. Equivalent to return os << d.path();.

## Declarations
```cpp
template< class CharT, class Traits >
friend std::basic_ostream<CharT,Traits>&
operator<<( std::basic_ostream<CharT,Traits>& os, const directory_entry& d );
```
_(since C++17)_

## Parameters
- `os`: stream to perform output on
- `d`: directory_entry to be inserted

## Return value
os

## Example
```cpp
#include <filesystem>
#include <iostream>
namespace fs = std::filesystem;
 
int main()
{
    const auto entries = {fs::directory_entry{fs::current_path()},
                          fs::directory_entry{fs::temp_directory_path()}};
 
    for (const fs::directory_entry& de : entries)
        std::cout << de << '\n';
}
```

## See also
- [operator<<operator>>](/cpp/filesystem/path/operator_ltltgtgt/)
