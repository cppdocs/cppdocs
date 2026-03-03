---
title: "std::filesystem::status, std::filesystem::symlink_status"
source_path: "cpp/filesystem/status"
header: "<filesystem>"
category: "filesystem"
since: "C++17"
---

1,2) Determines the type and attributes of the filesystem object identified by p as if by POSIX [stat](https://pubs.opengroup.org/onlinepubs/9799919799/functions/stat.html) (symlinks are followed to their targets). In the following description, prms is the result of (m & perms::mask), where m is obtained as if by taking st_mode from the POSIX struct stat and converting it to the type [std::filesystem::perms](/cpp/filesystem/perms/).
If p is a regular file (as if by POSIX S_ISREG), returns file_status(file_type::regular, prms).If p is a directory (as if by POSIX S_ISDIR), returns file_status(file_type::directory, prms).If p is a block special file (as if by POSIX S_ISBLK), returns file_status(file_type::block, prms).If p is a character special file (as if by POSIX S_ISCHR), returns file_status(file_type::character, prms).If p is a fifo or pipe file (as if by POSIX S_ISFIFO), returns file_status(file_type::fifo, prms).If p is a socket (as if by POSIX S_ISSOCK), returns file_status(file_type::socket, prms).If p has an implementation-defined file type, returns file_status(file_type::A, prms) where A is the implementation-defined [file_type](/cpp/filesystem/file_type/) constant for that type.If p does not exist, returns file_status(file_type::not_found).If p exists but file attributes cannot be determined, e.g. due to lack of permissions, returns file_status(file_type::unknown).If errors prevent even knowing whether p exists, the non-throwing overload sets ec and returns file_status(file_type::none), and the throwing overload throws filesystem_error.Otherwise, returns file_status(file_type::unknown, prms).

## Declarations
```cpp
std::filesystem::file_status status( const std::filesystem::path& p );
```
_(since C++17)_

```cpp
std::filesystem::file_status status( const std::filesystem::path& p,
std::error_code& ec ) noexcept;
```
_(since C++17)_

```cpp
std::filesystem::file_status symlink_status( const std::filesystem::path& p );
```
_(since C++17)_

```cpp
std::filesystem::file_status symlink_status( const std::filesystem::path& p,
std::error_code& ec ) noexcept;
```
_(since C++17)_

## Parameters
- `p`: path to examine
- `ec`: out-parameter for error reporting in the non-throwing overload

## Return value
The file status (a [filesystem::file_status](/cpp/filesystem/file_status/) object).

## Notes
The information provided by this function is usually also provided as a byproduct of directory iteration, and may be obtained by the member functions of [filesystem::directory_entry](/cpp/filesystem/directory_entry/). During directory iteration, calling status again is unnecessary.

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
- [file_status](/cpp/filesystem/file_status/)
- [status_known](/cpp/filesystem/status_known/)
- [is_block_file](/cpp/filesystem/is_block_file/)
- [is_character_file](/cpp/filesystem/is_character_file/)
- [is_directory](/cpp/filesystem/is_directory/)
- [is_fifo](/cpp/filesystem/is_fifo/)
- [is_other](/cpp/filesystem/is_other/)
- [is_regular_file](/cpp/filesystem/is_regular_file/)
- [is_socket](/cpp/filesystem/is_socket/)
- [is_symlink](/cpp/filesystem/is_symlink/)
- [exists](/cpp/filesystem/exists/)
- [statussymlink_status](/cpp/filesystem/directory_entry/status/)
