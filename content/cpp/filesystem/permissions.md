---
title: "std::filesystem::permissions"
source_path: "cpp/filesystem/permissions"
header: "<filesystem>"
category: "filesystem"
since: "C++17"
---

Changes access permissions of the file to which p resolves, as if by POSIX [fchmodat](https://pubs.opengroup.org/onlinepubs/9699919799/functions/fchmodat.html). Symlinks are followed unless perm_options::nofollow is set in opts.

## Declarations
```cpp
void permissions( const std::filesystem::path& p,
std::filesystem::perms prms,
std::filesystem::perm_options opts = perm_options::replace );
```
_(since C++17)_

```cpp
void permissions( const std::filesystem::path& p,
std::filesystem::perms prms,
std::error_code& ec ) noexcept;
```
_(since C++17)_

```cpp
void permissions( const std::filesystem::path& p,
std::filesystem::perms prms,
std::filesystem::perm_options opts,
std::error_code& ec );
```
_(since C++17)_

## Parameters
- `p`: path to examine
- `prms`: permissions to set, add, or remove
- `opts`: options controlling the action taken by this function
- `ec`: out-parameter for error reporting in the non-throwing overload

## Return value
(none)

## Notes
Permissions may not necessarily be implemented as bits, but they are treated that way conceptually.

Some permission bits may be ignored on some systems, and changing some bits may automatically change others (e.g. on platforms without owner/group/all distinction, setting any of the three write bits set all three).

## Example
```cpp
#include <filesystem>
#include <fstream>
#include <iostream>
 
void demo_perms(std::filesystem::perms p)
{
    using std::filesystem::perms;
    auto show = [=](char op, perms perm)
    {
        std::cout << (perms::none == (perm & p) ? '-' : op);
    };
    show('r', perms::owner_read);
    show('w', perms::owner_write);
    show('x', perms::owner_exec);
    show('r', perms::group_read);
    show('w', perms::group_write);
    show('x', perms::group_exec);
    show('r', perms::others_read);
    show('w', perms::others_write);
    show('x', perms::others_exec);
    std::cout << '\n';
}
 
int main()
{
    std::ofstream("test.txt"); // create file
 
    std::cout << "Created file with permissions: ";
    demo_perms(std::filesystem::status("test.txt").permissions());
 
    std::filesystem::permissions(
        "test.txt",
        std::filesystem::perms::owner_all | std::filesystem::perms::group_all,
        std::filesystem::perm_options::add
    );
 
    std::cout << "After adding u+rwx and g+rwx:  ";
    demo_perms(std::filesystem::status("test.txt").permissions());
 
    std::filesystem::remove("test.txt");
}
```

## See also
- [perms](/cpp/filesystem/perms/)
- [statussymlink_status](/cpp/filesystem/status/)
