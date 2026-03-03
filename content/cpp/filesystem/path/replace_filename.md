---
title: "std::filesystem::path::replace_filename"
source_path: "cpp/filesystem/path/replace_filename"
category: "filesystem"
since: "C++17"
---

Replaces a single filename component with replacement.

## Declarations
```cpp
path& replace_filename( const path& replacement );
```
_(since C++17)_

## Parameters
- `replacement`: path used for replacing the filename component

## Return value
*this

## Example
```cpp
#include <filesystem>
#include <iostream>
namespace fs = std::filesystem;
 
int main()
{
    std::cout << fs::path("/foo").replace_filename("bar") << '\n'
              << fs::path("/").replace_filename("bar") << '\n'
              << fs::path("").replace_filename("pub") << '\n';
}
```

## See also
- [replace_extension](/cpp/filesystem/path/replace_extension/)
- [filename](/cpp/filesystem/path/filename/)
- [remove_filename](/cpp/filesystem/path/remove_filename/)
- [has_filename](/cpp/filesystem/path/has_path/)
