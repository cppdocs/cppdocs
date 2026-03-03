---
title: "std::experimental::filesystem::space_info"
source_path: "cpp/experimental/fs/space_info"
header: "<experimental/filesystem>"
category: "experimental"
---

Represents the filesystem information as determined by [space](/cpp/experimental/fs/space/).

## Declarations
```cpp
struct space_info {
uintmax_t capacity;
uintmax_t free;
uintmax_t available;
};
```
_(filesystem TS)_

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
- [space](/cpp/experimental/fs/space/)
