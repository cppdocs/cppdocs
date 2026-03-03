---
title: "std::experimental::filesystem::space"
source_path: "cpp/experimental/fs/space"
header: "<experimental/filesystem>"
category: "experimental"
---

Determines the information about the filesystem on which the pathname p is located, as if by POSIX [statvfs](https://pubs.opengroup.org/onlinepubs/9699919799/functions/statvfs.html).

## Declarations
```cpp
space_info space( const path& p );
space_info space( const path& p, error_code& ec ) noexcept;
```
_(filesystem TS)_

## Parameters
- `p`: path to examine
- `ec`: out-parameter for error reporting in the non-throwing overload

## Return value
The filesystem information (a [space_info](/cpp/experimental/fs/space_info/) object).

## Notes
space_info.available may be less than space_info.free.

## Example
```cpp
#include <experimental/filesystem>
#include <iostream>
namespace fs = std::experimental::filesystem;
 
int main()
{
    fs::space_info devi = fs::space("/dev/null");
    fs::space_info tmpi = fs::space("/tmp");
 
    std::cout << "         Capacity         Free    Available\n"
              << "/dev:   " << devi.capacity << "   "
              << devi.free << "   " << devi.available << '\n'
              << "/tmp: " << tmpi.capacity << ' '
              << tmpi.free << ' ' << tmpi.available << '\n';
}
```

## See also
- [space_info](/cpp/experimental/fs/space_info/)
