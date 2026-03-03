---
title: "std::experimental::filesystem::status, std::experimental::filesystem::symlink_status"
source_path: "cpp/experimental/fs/status"
header: "<experimental/filesystem>"
category: "experimental"
---

1) Determines the type and attributes of the filesystem object identified by p as if by POSIX [stat](https://pubs.opengroup.org/onlinepubs/9699919799/functions/stat.html) (symlinks are followed to their targets).
If p is a regular file, returns file_status(file_type::regular).If p is a directory, returns file_status(file_type::directory).If p is a block special file, returns file_status(file_type::block).If p is a character special file, returns file_status(file_type::character).If p is a fifo or pipe file, returns file_status(file_type::fifo).If p is a socket, returns file_status(file_type::socket).If p does not exist, returns file_status(file_type::not_found).If p exists but file attributes cannot be determined, e.g. due to lack of permissions, returns file_status(file_type::unknown).If errors prevent even knowing whether p exists, the non-throwing overload sets ec and returns file_status(file_type::none), and the throwing overload throws filesystem_error.Otherwise, returns file_status(file_type::unknown).

## Declarations
```cpp
file_status status( const path& p );
file_status status( const path& p, error_code& ec ) noexcept;
```
_(filesystem TS)_

```cpp
file_status symlink_status( const path& p );
file_status symlink_status( const path& p, error_code& ec ) noexcept;
```
_(filesystem TS)_

## Parameters
- `p`: path to examine
- `ec`: out-parameter for error reporting in the non-throwing overload

## Return value
The file status (a [file_status](/cpp/experimental/fs/file_status/) object).

## Notes
The information provided by this function is usually also provided as a byproduct of directory iteration, and may be obtained by the member functions of [directory_entry](/cpp/experimental/fs/directory_entry/). During directory iteration, calling status again is unnecessary.

## Example
```cpp
#include <cstdio>
#include <cstring>
#include <experimental/filesystem>
#include <fstream>
#include <iostream>
#include <sys/socket.h>
#include <sys/stat.h>
#include <sys/un.h>
#include <unistd.h>
 
namespace fs = std::experimental::filesystem;
 
void demo_status(const fs::path& p, fs::file_status s)
{
    std::cout << p;
    // alternative: switch(s.type()) { case fs::file_type::regular: ... }
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
    std::ofstream("sandbox/file"); // create regular file
    fs::create_directory("sandbox/dir");
    mkfifo("sandbox/pipe", 0644);
    struct sockaddr_un addr;
    addr.sun_family = AF_UNIX;
    std::strcpy(addr.sun_path, "sandbox/sock");
    int fd = socket(PF_UNIX, SOCK_STREAM, 0);
    bind(fd, (struct sockaddr*)&addr, sizeof addr);
    fs::create_symlink("file", "sandbox/symlink");
 
    // demo different status accessors
    for (auto it = fs::directory_iterator("sandbox"); it != fs::directory_iterator(); ++it)
        demo_status(*it, it->symlink_status()); // use cached status from directory entry
    demo_status("dev/null", fs::status("/dev/null")); // direct calls to status
    demo_status("dev/sda", fs::status("/dev/sda"));
    demo_status("sandbox/no", fs::status("/sandbox/no"));
 
    // cleanup
    close(fd);
    fs::remove_all("sandbox");
}
```

## See also
- [file_status](/cpp/experimental/fs/file_status/)
- [status_known](/cpp/experimental/fs/status_known/)
- [is_block_file](/cpp/experimental/fs/is_block_file/)
- [is_character_file](/cpp/experimental/fs/is_character_file/)
- [is_directory](/cpp/experimental/fs/is_directory/)
- [is_fifo](/cpp/experimental/fs/is_fifo/)
- [is_other](/cpp/experimental/fs/is_other/)
- [is_regular_file](/cpp/experimental/fs/is_regular_file/)
- [is_socket](/cpp/experimental/fs/is_socket/)
- [is_symlink](/cpp/experimental/fs/is_symlink/)
- [exists](/cpp/experimental/fs/exists/)
- [statussymlink_status](/cpp/experimental/fs/directory_entry/status/)
