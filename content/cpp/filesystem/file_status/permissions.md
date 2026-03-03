---
title: "std::filesystem::file_status::permissions"
source_path: "cpp/filesystem/file_status/permissions"
category: "filesystem"
since: "C++17"
---

Accesses the file permissions information.

## Declarations
```cpp
std::filesystem::perms permissions() const noexcept;
```
_(since C++17)_

```cpp
void permissions( std::filesystem::perms perm ) noexcept;
```
_(since C++17)_

## Parameters
- `perm`: file permissions to set to

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
