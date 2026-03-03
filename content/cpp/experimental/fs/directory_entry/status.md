---
title: "std::experimental::filesystem::directory_entry::status, std::experimental::filesystem::directory_entry::symlink_status"
source_path: "cpp/experimental/fs/directory_entry/status"
category: "experimental"
---

1) Returns the potentially cached status of the entry, as if determined by a [status](/cpp/experimental/fs/status/) call (symlinks are followed to their targets).

## Declarations
```cpp
file_status status() const;
file_status status( error_code& ec ) const;
```
_(filesystem TS)_

```cpp
file_status symlink_status() const;
file_status symlink_status( error_code& ec ) const;
```
_(filesystem TS)_

## Parameters
- `ec`: out-parameter for error reporting in the non-throwing overload

## Return value
The status of the file referred to by the entry.

## Notes
The file status information is usually provided as a byproduct of directory iteration, in which case it is cached and may be obtained by these member functions without the cost of an additional system call. During directory iteration, calling status is unnecessary and accessors such as is_directory should be called with the cached status value, not with a path.

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
- [statussymlink_status](/cpp/experimental/fs/status/)
- [status_known](/cpp/experimental/fs/status_known/)
- [is_block_file](/cpp/experimental/fs/is_block_file/)
- [is_character_file](/cpp/experimental/fs/is_character_file/)
- [is_directory](/cpp/experimental/fs/is_directory/)
- [is_fifo](/cpp/experimental/fs/is_fifo/)
- [is_other](/cpp/experimental/fs/is_other/)
- [is_regular_file](/cpp/experimental/fs/is_regular_file/)
- [is_socket](/cpp/experimental/fs/is_socket/)
- [is_symlink](/cpp/experimental/fs/is_symlink/)
