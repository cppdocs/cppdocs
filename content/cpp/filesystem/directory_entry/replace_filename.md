---
title: "std::filesystem::directory_entry::replace_filename"
source_path: "cpp/filesystem/directory_entry/replace_filename"
category: "filesystem"
since: "C++17"
---

Changes the filename of the directory entry.

## Declarations
```cpp
void replace_filename( const std::filesystem::path& p );
```
_(since C++17)_

```cpp
void replace_filename( const std::filesystem::path& p, std::error_code& ec );
```
_(since C++17)_

## Parameters
- `p`: the path to append to the parent path of the currently stored path
- `ec`: out-parameter for error reporting in the non-throwing overload

## Return value
(none)

## Example
```cpp
#include <filesystem>
#include <iostream>
 
int main()
{
    namespace fs = std::filesystem;
    {
        fs::directory_entry entry{"alpha"};
        std::cout << entry << '\n';
        entry.replace_filename("omega");
        std::cout << entry << '\n';
    }
    {
        fs::directory_entry entry{"/alpha/"};
        std::cout << entry << '\n';
        entry.replace_filename("omega");
        std::cout << entry << '\n';
    }
}
```

## See also
- [assign](/cpp/filesystem/directory_entry/assign/)
- [replace_filename](/cpp/filesystem/path/replace_filename/)
