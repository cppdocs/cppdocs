---
title: "std::filesystem::directory_entry::is_socket"
source_path: "cpp/filesystem/directory_entry/is_socket"
category: "filesystem"
since: "C++17"
---

Checks whether the pointed-to object is a named socket. Effectively returns:

## Declarations
```cpp
bool is_socket() const;
```
_(since C++17)_

```cpp
bool is_socket( std::error_code& ec ) const noexcept;
```
_(since C++17)_

## Parameters
- `ec`: out-parameter for error reporting in the non-throwing overload

## Return value
true if the referred-to filesystem object is a named socket, false otherwise.

## Example
```cpp
#include <cstdio>
#include <cstring>
#include <filesystem>
#include <fstream>
#include <functional>
#include <iostream>
#include <memory>
#include <sys/socket.h>
#include <sys/stat.h>
#include <sys/un.h>
#include <unistd.h>
 
namespace fs = std::filesystem;
 
void print_entry_type(const std::filesystem::directory_entry& entry)
{
    std::cout << entry.path() << ": ";
 
    if (!entry.exists())
        std::cout << "does not exist ";
    if (entry.is_block_file())
        std::cout << "is a block device ";
    if (entry.is_character_file())
        std::cout << "is a character device ";
    if (entry.is_directory())
        std::cout << "is a directory ";
    if (entry.is_fifo())
        std::cout << "is a named IPC pipe ";
    if (entry.is_regular_file())
        std::cout << "is a regular file ";
    if (entry.is_socket())
        std::cout << "is a named IPC socket ";
    if (entry.is_symlink())
        std::cout << "(a symlink)";
    if (entry.is_other())
        std::cout << "(an `other` file)";
 
    std::cout << '\n';
}
 
template<typename Type, typename Fun>
class scoped_cleanup
{
    std::unique_ptr<Type, std::function<void(const Type*)>> u;
 
public:
    scoped_cleanup(Type* ptr, Fun fun) : u{ptr, std::move(fun)} {}
};
 
int main()
{
    // Create files of different kinds.
    std::filesystem::current_path(fs::temp_directory_path());
    const std::filesystem::path sandbox{"sandbox"};
    scoped_cleanup remove_all_at_exit{&sandbox, [](const fs::path* p)
    {
        std::cout << "cleanup: remove_all(" << *p << ")\n";
        fs::remove_all(*p);
    }};
    std::filesystem::create_directory(sandbox);
    std::ofstream{sandbox/"file"}; // Creates a regular file
    std::filesystem::create_directory(sandbox/"dir");
 
    mkfifo((sandbox/"pipe").string().data(), 0644);
    struct sockaddr_un addr; addr.sun_family = AF_UNIX;
 
    std::strcpy(addr.sun_path, (sandbox/"sock").string().data());
    int fd{socket(PF_UNIX, SOCK_STREAM, 0)};
    scoped_cleanup close_socket_at_exit{&fd, [](const int* f)
    {
        std::cout << "cleanup: close socket #" << *f << '\n';
        close(*f);
    }};
    bind(fd, reinterpret_cast<sockaddr*>(std::addressof(addr)), sizeof addr);
 
    fs::create_symlink("file", sandbox/"symlink");
 
    for (std::filesystem::directory_entry entry: fs::directory_iterator(sandbox))
        print_entry_type(entry);
 
    // Request file system objects status directly:
    for (const char* str : {"/dev/null", "/dev/cpu", "/usr/include/c++",
                            "/usr/include/asm", "/usr/include/time.h"})
        print_entry_type(fs::directory_entry{str});
 
} // Cleanup via scoped_cleanup objects
```

## See also
- [is_socket](/cpp/filesystem/is_socket/)
