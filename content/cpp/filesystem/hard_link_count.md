---
title: "std::filesystem::hard_link_count"
source_path: "cpp/filesystem/hard_link_count"
header: "<filesystem>"
category: "filesystem"
since: "C++17"
---

Returns the number of hard links for the filesystem object identified by path p.

## Declarations
```cpp
std::uintmax_t hard_link_count( const std::filesystem::path& p );
```
_(since C++17)_

```cpp
std::uintmax_t hard_link_count( const std::filesystem::path& p,
std::error_code& ec ) noexcept;
```
_(since C++17)_

## Parameters
- `p`: path to examine
- `ec`: out-parameter for error reporting in the non-throwing overload

## Return value
The number of hard links for p.

## Example
```cpp
#include <filesystem>
#include <iostream>
namespace fs = std::filesystem;
 
int main()
{
    // On a POSIX-style filesystem, each directory has at least 2 hard links:
    // itself and the special member pathname "."
    fs::path p = fs::current_path();
    std::cout << "Number of hard links for current path is "
              << fs::hard_link_count(p) << '\n';
 
    // Each ".." is a hard link to the parent directory, so the total number
    // of hard links for any directory is 2 plus number of direct subdirectories
    p = fs::current_path() / ".."; // Each dot-dot is a hard link to parent
    std::cout << "Number of hard links for .. is "
              << fs::hard_link_count(p) << '\n';
}
```

## See also
- [create_hard_link](/cpp/filesystem/create_hard_link/)
- [hard_link_count](/cpp/filesystem/directory_entry/hard_link_count/)
