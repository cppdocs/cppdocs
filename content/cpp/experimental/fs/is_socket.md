---
title: "std::experimental::filesystem::is_socket"
source_path: "cpp/experimental/fs/is_socket"
header: "<experimental/filesystem>"
category: "experimental"
---

Checks if the given file status or path corresponds to a named IPC socket, as if determined by the POSIX [S_IFSOCK](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/sys_stat.h.html).

## Declarations
```cpp
bool is_socket( file_status s );
```
_(filesystem TS)_

```cpp
bool is_socket( const path& p );
bool is_socket( const path& p, error_code& ec );
```
_(filesystem TS)_

## Parameters
- `s`: file status to check
- `p`: path to examine
- `ec`: out-parameter for error reporting in the non-throwing overload

## Return value
true if the file indicated by p or if the type indicated s refers to a named socket. The non-throwing overload returns false if an error occurs.

## Notes
Named sockets are UNIX domain sockets constructed with [socket](https://pubs.opengroup.org/onlinepubs/9699919799/functions/socket.html) and [bind](https://pubs.opengroup.org/onlinepubs/9699919799/functions/bind.html) POSIX APIs, which may be used for advanced interprocess communication. In particular, they may be used to transport open file descriptors from one running process to another.

The information provided by this function is usually also provided as a byproduct of directory iteration. During directory iteration, calling is_socket(*iterator) is less efficient than is_socket(iterator->status()).

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
- [statussymlink_status](/cpp/experimental/fs/status/)
- [file_status](/cpp/experimental/fs/file_status/)
- [status_known](/cpp/experimental/fs/status_known/)
- [is_block_file](/cpp/experimental/fs/is_block_file/)
- [is_character_file](/cpp/experimental/fs/is_character_file/)
- [is_directory](/cpp/experimental/fs/is_directory/)
- [is_fifo](/cpp/experimental/fs/is_fifo/)
- [is_other](/cpp/experimental/fs/is_other/)
- [is_regular_file](/cpp/experimental/fs/is_regular_file/)
- [is_symlink](/cpp/experimental/fs/is_symlink/)
- [exists](/cpp/experimental/fs/exists/)
- [statussymlink_status](/cpp/experimental/fs/directory_entry/status/)
