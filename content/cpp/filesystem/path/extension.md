---
title: "std::filesystem::path::extension"
source_path: "cpp/filesystem/path/extension"
category: "filesystem"
since: "C++17"
---

Returns the extension of the filename component of the generic-format view of *this.

## Declarations
```cpp
path extension() const;
```
_(since C++17)_

## Return value
The extension of the current pathname or an empty path if there's no extension.

## Notes
The extension as returned by this function includes a period to make it possible to distinguish the file that ends with a period (function returns ".") from a file with no extension (function returns "").

On a non-POSIX system, it is possible that p.stem() + p.extension() != p.filename() even though generic-format versions are the same.

## Example
```cpp
#include <filesystem>
#include <iostream>
namespace fs = std::filesystem;
 
int main()
{
    std::cout << fs::path("/foo/bar.txt").extension() << '\n'
              << fs::path("/foo/bar.").extension() << '\n'
              << fs::path("/foo/bar").extension() << '\n'
              << fs::path("/foo/bar.txt/bar.cc").extension() << '\n'
              << fs::path("/foo/bar.txt/bar.").extension() << '\n'
              << fs::path("/foo/bar.txt/bar").extension() << '\n'
              << fs::path("/foo/.").extension() << '\n'
              << fs::path("/foo/..").extension() << '\n'
              << fs::path("/foo/.hidden").extension() << '\n'
              << fs::path("/foo/..bar").extension() << '\n';
}
```

## See also
- [filename](/cpp/filesystem/path/filename/)
- [stem](/cpp/filesystem/path/stem/)
- [replace_extension](/cpp/filesystem/path/replace_extension/)
- [has_extension](/cpp/filesystem/path/has_path/)
