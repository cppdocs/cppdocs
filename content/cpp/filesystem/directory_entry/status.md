---
title: "std::filesystem::directory_entry::status, std::filesystem::directory_entry::symlink_status"
source_path: "cpp/filesystem/directory_entry/status"
category: "filesystem"
since: "C++17"
---

1,2) Returns status of the entry, as if determined by a [filesystem::status](/cpp/filesystem/status/) call (symlinks are followed to their targets).

## Declarations
```cpp
std::filesystem::file_status status() const;
```
_(since C++17)_

```cpp
std::filesystem::file_status status( std::error_code& ec ) const noexcept;
```
_(since C++17)_

```cpp
std::filesystem::file_status symlink_status() const;
```
_(since C++17)_

```cpp
std::filesystem::file_status symlink_status( std::error_code& ec ) const noexcept;
```
_(since C++17)_

## Parameters
- `ec`: out-parameter for error reporting in the non-throwing overload

## Return value
The status of the file referred to by the entry.

## Notes
Many low-level OS APIs for directory traversal retrieve file attributes along with the next directory entry. The constructors and the non-const member functions of [std::filesystem::directory_iterator](/cpp/filesystem/directory_iterator/) store these attributes, if any, in the pointed-to [std::filesystem::directory_entry](/cpp/filesystem/directory_entry/) without calling [directory_entry::refresh](/cpp/filesystem/directory_entry/refresh/), which makes it possible to examine the attributes of the directory entries as they are being iterated over, without making additional system calls.

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
    // alternative: switch(s.type()) { case fs::file_type::regular: ...}
    if (fs::is_regular_file(s))
        std::cout << " is a regular file\n";
    if (fs::is_directory(s))
        std::cout << " is a directory\n";
    if (fs::is_block_file(s))
        std::cout << " is a block device\n";
    if (fs::is_character_file(s))
        std::cout << " is a character device\n";
    if (fs::is_fifo(s))
        std::cout << " is a named IPC pipe\n";
    if (fs::is_socket(s))
        std::cout << " is a named IPC socket\n";
    if (fs::is_symlink(s))
        std::cout << " is a symlink\n";
    if (!fs::exists(s))
        std::cout << " does not exist\n";
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
- [refresh](/cpp/filesystem/directory_entry/refresh/)
- [exists](/cpp/filesystem/directory_entry/exists/)
- [is_block_file](/cpp/filesystem/directory_entry/is_block_file/)
- [is_character_file](/cpp/filesystem/directory_entry/is_character_file/)
- [is_directory](/cpp/filesystem/directory_entry/is_directory/)
- [is_fifo](/cpp/filesystem/directory_entry/is_fifo/)
- [is_other](/cpp/filesystem/directory_entry/is_other/)
- [is_regular_file](/cpp/filesystem/directory_entry/is_regular_file/)
- [is_socket](/cpp/filesystem/directory_entry/is_socket/)
- [is_symlink](/cpp/filesystem/directory_entry/is_symlink/)
- [file_size](/cpp/filesystem/directory_entry/file_size/)
- [hard_link_count](/cpp/filesystem/directory_entry/hard_link_count/)
- [last_write_time](/cpp/filesystem/directory_entry/last_write_time/)
