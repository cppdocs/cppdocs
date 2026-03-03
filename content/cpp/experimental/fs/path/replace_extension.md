---
title: "std::experimental::filesystem::path::replace_extension"
source_path: "cpp/experimental/fs/path/replace_extension"
category: "experimental"
---

Replaces the extension with replacement or removes it when the default value of replacement is used.

## Declarations
```cpp
path& replace_extension( const path& replacement = path() );
```
_(filesystem TS)_

## Parameters
- `replacement`: the extension to replace with

## Return value
*this

## Example
```cpp
#include <experimental/filesystem>
#include <iostream>
namespace fs = std::experimental::filesystem;
 
int main()
{
    fs::path p = "/foo/bar.jpeg";
    std::cout << "Was: " << p << '\n';
    p.replace_extension(".jpg");
    std::cout << "Now: " << p << '\n';
}
```

## See also
- [extension](/cpp/experimental/fs/path/extension/)
- [filename](/cpp/experimental/fs/path/filename/)
- [stem](/cpp/experimental/fs/path/stem/)
- [has_extension](/cpp/experimental/fs/path/has_path/)
