---
title: "std::experimental::filesystem::path::extension"
source_path: "cpp/experimental/fs/path/extension"
category: "experimental"
---

Returns the extension of the filename component of the path *this.

## Declarations
```cpp
path extension() const;
```
_(filesystem TS)_

## Return value
The extension of the current pathname or an empty path if there's no extension.

## Notes
The extension as returned by this function includes a period to make it possible to distinguish the file that ends with a period (function returns ".") from a file with no extension (function returns "").

For any path p, p.stem()+p.extension() == p.filename().

## Example
```cpp
#include <experimental/filesystem>
#include <iostream>
namespace fs = std::experimental::filesystem;
 
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
              << fs::path("/foo/.hidden").extension() << '\n';
}
```

## See also
- [filename](/cpp/experimental/fs/path/filename/)
- [stem](/cpp/experimental/fs/path/stem/)
- [replace_extension](/cpp/experimental/fs/path/replace_extension/)
- [has_extension](/cpp/experimental/fs/path/has_path/)
