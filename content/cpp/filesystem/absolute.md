---
title: "std::filesystem::absolute"
source_path: "cpp/filesystem/absolute"
header: "<filesystem>"
category: "filesystem"
since: "C++17"
---

Returns a path referencing the same file system location as p, for which [filesystem::path::is_absolute()](/cpp/filesystem/path/is_absrel/) is true.

## Declarations
```cpp
path absolute( const std::filesystem::path& p );
```
_(since C++17)_

```cpp
path absolute( const std::filesystem::path& p, std::error_code& ec );
```
_(since C++17)_

## Parameters
- `p`: path to convert to absolute form
- `ec`: out-parameter for error reporting in the non-throwing overload

## Return value
Returns an absolute (although not necessarily canonical) pathname referencing the same file as p.

## Notes
Implementations are encouraged to not consider p not existing to be an error.

For POSIX-based operating systems, std::filesystem::absolute(p) is equivalent to [std::filesystem::current_path](/cpp/filesystem/current_path/)() / p except for when p is the empty path.

For Windows, std::filesystem::absolute may be implemented as a call to [GetFullPathNameW](https://learn.microsoft.com/en-us/windows/win32/api/fileapi/nf-fileapi-getfullpathnamew).

## Example
```cpp
#include <filesystem>
#include <iostream>
namespace fs = std::filesystem;
 
int main()
{
    std::filesystem::path p = "foo.c";
    std::cout << "Current path is " << std::filesystem::current_path() << '\n';
    std::cout << "Absolute path for " << p << " is " << fs::absolute(p) << '\n';
}
```

## See also
- [canonicalweakly_canonical](/cpp/filesystem/canonical/)
- [relativeproximate](/cpp/filesystem/relative/)
