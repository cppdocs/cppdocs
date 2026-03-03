---
title: "std::tmpfile"
source_path: "cpp/io/c/tmpfile"
header: "<cstdio>"
category: "io"
---

Creates and opens a temporary file with a unique auto-generated filename.

## Declarations
```cpp
std::FILE* tmpfile();
```

## Return value
The associated file stream or a null pointer if an error has occurred.

## Notes
On some implementations (e.g. older Linux), this function actually creates, opens, and immediately deletes the file from the file system: as long as an open file descriptor to a deleted file is held by a program, the file exists, but since it was deleted, its name does not appear in any directory, so that no other process can open it. Once the file descriptor is closed, or once the program terminates (normally or abnormally), the space occupied by the file is reclaimed by the filesystem. Newer Linux (since 3.11 or later, depending on filesystem) creates such invisible temporary files in one step, via special flag in the [open()](https://man7.org/linux/man-pages/man2/open.2.html) syscall.

On some implementations (e.g. Windows), elevated privileges are required as the function may create the temporary file in a system directory.

## Example
```cpp
#include <cstdio>
#include <cstdlib>
#include <filesystem>
#include <iostream>
namespace fs = std::filesystem;
 
int main()
{
    std::cout << "TMP_MAX = " << TMP_MAX << '\n'
              << "FOPEN_MAX = " << FOPEN_MAX << '\n';
    std::FILE* tmpf = std::tmpfile();
    std::fputs("Hello, world", tmpf);
    std::rewind(tmpf);
    char buf[6];
    std::fgets(buf, sizeof buf, tmpf);
    std::cout << buf << '\n';
 
    // Linux-specific method to display the tmpfile name
    std::cout << fs::read_symlink(
                     fs::path("/proc/self/fd") / std::to_string(fileno(tmpf))
                 ) << '\n';
}
```

## See also
- [tmpnam](/cpp/io/c/tmpnam/)
- [temp_directory_path](/cpp/filesystem/temp_directory_path/)
- [C documentation](/c/io/tmpfile/)
