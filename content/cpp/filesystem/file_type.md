---
title: "std::filesystem::file_type"
source_path: "cpp/filesystem/file_type"
header: "<filesystem>"
category: "filesystem"
since: "C++17"
---

file_type defines constants that indicate a type of a file or directory a path refers to. The value of the enumerators are distinct.

## Declarations
```cpp
enum class file_type {
none = /* unspecified */,
not_found = /* unspecified */,
regular = /* unspecified */,
directory = /* unspecified */,
symlink = /* unspecified */,
block = /* unspecified */,
character = /* unspecified */,
fifo = /* unspecified */,
socket = /* unspecified */,
unknown = /* unspecified */,
/* implementation-defined */
};
```
_(since C++17)_

## Example
```cpp
#include <cstdio>
#include <cstring>
#include <filesystem>
#include <fstream>
#include <iostream>
#include <sys/socket.h>
#include <sys/stat.h>
#include <sys/un.h>
#include <unistd.h>
 
namespace fs = std::filesystem;
 
void demo_status(const fs::path& p, fs::file_status s)
{
    std::cout << p;
    switch (s.type())
    {
        case fs::file_type::none:
            std::cout << " has `not-evaluated-yet` type";
            break;
        case fs::file_type::not_found:
            std::cout << " does not exist";
            break;
        case fs::file_type::regular:
            std::cout << " is a regular file";
            break;
        case fs::file_type::directory:
            std::cout << " is a directory";
            break;
        case fs::file_type::symlink:
            std::cout << " is a symlink";
            break;
        case fs::file_type::block:
            std::cout << " is a block device";
            break;
        case fs::file_type::character:
            std::cout << " is a character device";
            break;
        case fs::file_type::fifo:
            std::cout << " is a named IPC pipe";
            break;
        case fs::file_type::socket:
            std::cout << " is a named IPC socket";
            break;
        case fs::file_type::unknown:
            std::cout << " has `unknown` type";
            break;
        default:
            std::cout << " has `implementation-defined` type";
            break;
    }
    std::cout << '\n';
}
 
int main()
{
    // create files of different kinds
    fs::create_directory("sandbox");
    fs::create_directory("sandbox/dir");
    std::ofstream{"sandbox/file"}; // create regular file
    fs::create_symlink("file", "sandbox/symlink");
 
    mkfifo("sandbox/pipe", 0644);
    sockaddr_un addr;
    addr.sun_family = AF_UNIX;
    std::strcpy(addr.sun_path, "sandbox/sock");
    int fd = socket(PF_UNIX, SOCK_STREAM, 0);
    bind(fd, reinterpret_cast<sockaddr*>(&addr), sizeof addr);
 
    // demo different status accessors
    for (auto it{fs::directory_iterator("sandbox")}; it != fs::directory_iterator(); ++it)
        demo_status(*it, it->symlink_status()); // use cached status from directory entry
    demo_status("/dev/null", fs::status("/dev/null")); // direct calls to status
    demo_status("/dev/sda", fs::status("/dev/sda"));
    demo_status("sandbox/no", fs::status("/sandbox/no"));
 
    // cleanup (prefer std::unique_ptr-based custom deleters)
    close(fd);
    fs::remove_all("sandbox");
}
```

## See also
- [file_status](/cpp/filesystem/file_status/)
- [is_block_file](/cpp/filesystem/is_block_file/)
- [is_character_file](/cpp/filesystem/is_character_file/)
- [is_directory](/cpp/filesystem/is_directory/)
- [is_fifo](/cpp/filesystem/is_fifo/)
- [is_other](/cpp/filesystem/is_other/)
- [is_socket](/cpp/filesystem/is_socket/)
- [is_symlink](/cpp/filesystem/is_symlink/)
- [is_regular_file](/cpp/filesystem/directory_entry/is_regular_file/)
