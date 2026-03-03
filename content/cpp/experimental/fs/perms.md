---
title: "std::experimental::filesystem::perms"
source_path: "cpp/experimental/fs/perms"
header: "<experimental/filesystem>"
category: "experimental"
---

This type represents file access permissions. perms satisfies the requirements of [BitmaskType](/cpp/named_req/bitmasktype/) (which means the bitwise operators operator&, operator|, operator^, operator~, operator&=, operator|=, and operator^= are defined for this type).

## Declarations
```cpp
enum class perms;
```
_(filesystem TS)_

## Notes
Permissions may not necessarily be implemented as bits, but they are treated that way conceptually.

Some permission bits may be ignored on some systems, and changing some bits may automatically change others (e.g. on platforms without owner/group/all distinction, setting any of the three write bits set all three).

## Example
```cpp
#include <bitset>
#include <experimental/filesystem>
#include <fstream>
#include <iostream>
namespace fs = std::experimental::filesystem;
 
void demo_perms(fs::perms p)
{
     std::cout << ((p & fs::perms::owner_read) != fs::perms::none ? "r" : "-")
               << ((p & fs::perms::owner_write) != fs::perms::none ? "w" : "-")
               << ((p & fs::perms::owner_exec) != fs::perms::none ? "x" : "-")
               << ((p & fs::perms::group_read) != fs::perms::none ? "r" : "-")
               << ((p & fs::perms::group_write) != fs::perms::none ? "w" : "-")
               << ((p & fs::perms::group_exec) != fs::perms::none ? "x" : "-")
               << ((p & fs::perms::others_read) != fs::perms::none ? "r" : "-")
               << ((p & fs::perms::others_write) != fs::perms::none ? "w" : "-")
               << ((p & fs::perms::others_exec) != fs::perms::none ? "x" : "-")
               << '\n';
}
 
int main()
{
    std::ofstream("test.txt"); // create file
 
    std::cout << "Created file with permissions: ";
    demo_perms(fs::status("test.txt").permissions());
 
    fs::permissions("test.txt", fs::perms::add_perms |
                                fs::perms::owner_all | fs::perms::group_all);
 
    std::cout << "After adding o+rwx and g+rwx:  ";
    demo_perms(fs::status("test.txt").permissions());
 
    fs::remove("test.txt");
}
```

## See also
- [statussymlink_status](/cpp/experimental/fs/status/)
- [permissions](/cpp/experimental/fs/permissions/)
