---
title: "std::experimental::filesystem::path::replace_filename"
source_path: "cpp/experimental/fs/path/replace_filename"
category: "experimental"
---

Replaces a single filename component with replacement.

## Declarations
```cpp
path& replace_filename( const path& replacement );
```
_(filesystem TS)_

## Return value
*this

## Example
```cpp
#include <experimental/filesystem>
#include <iostream>
namespace fs = std::experimental::filesystem;
 
int main()
{
    std::cout << fs::path("/foo").replace_filename("bar") << '\n'
              << fs::path("/").replace_filename("bar") << '\n';
}
```

## See also
- [replace_extension](/cpp/experimental/fs/path/replace_extension/)
- [filename](/cpp/experimental/fs/path/filename/)
- [remove_filename](/cpp/experimental/fs/path/remove_filename/)
- [has_filename](/cpp/experimental/fs/path/has_path/)
