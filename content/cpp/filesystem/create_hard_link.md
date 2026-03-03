---
title: "std::filesystem::create_hard_link"
source_path: "cpp/filesystem/create_hard_link"
header: "<filesystem>"
category: "filesystem"
since: "C++17"
---

Creates a hard link link with its target set to target as if by POSIX [link()](https://pubs.opengroup.org/onlinepubs/9699919799/functions/link.html): the pathname target must exist.

## Declarations
```cpp
void create_hard_link( const std::filesystem::path& target,
const std::filesystem::path& link );
```
_(since C++17)_

```cpp
void create_hard_link( const std::filesystem::path& target,
const std::filesystem::path& link,
std::error_code& ec ) noexcept;
```
_(since C++17)_

## Parameters
- `target`: path of the file or directory to link to
- `link`: path of the new hard link
- `ec`: out-parameter for error reporting in the non-throwing overload

## Return value
(none)

## Notes
Some operating systems do not support hard links at all or support them only for regular files.

Some file systems do not support hard links regardless of the operating system: the FAT file system used on memory cards and flash drives, for example.

Some file systems limit the number of links per file.

Hardlinking to directories is typically restricted to the superuser.

Hard links typically cannot cross filesystem boundaries.

The special pathname dot (".") is a hard link to its parent directory. The special pathname dot-dot ".." is a hard link to the directory that is the parent of its parent.

## Example
```cpp
#include <filesystem>
#include <fstream>
#include <iostream>
namespace fs = std::filesystem;
 
int main()
{
    fs::create_directories("sandbox/subdir");
    std::ofstream("sandbox/a").put('a'); // create regular file
    fs::create_hard_link("sandbox/a", "sandbox/b");
    fs::remove("sandbox/a");
    // read from the original file via surviving hard link
    char c = std::ifstream("sandbox/b").get();
    std::cout << c << '\n';
    fs::remove_all("sandbox");
}
```

## See also
- [create_symlinkcreate_directory_symlink](/cpp/filesystem/create_symlink/)
- [hard_link_count](/cpp/filesystem/hard_link_count/)
