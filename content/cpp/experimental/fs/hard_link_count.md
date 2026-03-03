---
title: "std::experimental::filesystem::hard_link_count"
source_path: "cpp/experimental/fs/hard_link_count"
header: "<experimental/filesystem>"
category: "experimental"
---

Returns the number of hard links for the filesystem object identified by path p.

## Declarations
```cpp
std::uintmax_t hard_link_count( const path& p );
std::uintmax_t hard_link_count( const path& p, error_code& ec );
```
_(filesystem TS)_

## Parameters
- `p`: path to examine
- `ec`: out-parameter for error reporting in the non-throwing overload

## Return value
The number of hard links for p.

## Example
```cpp
#include <experimental/filesystem>
#include <iostream>
namespace fs = std::experimental::filesystem;
 
int main()
{
    // On a POSIX-style filesystem, each directory has at least 2 hard links:
    // itself and the special member pathname "."
    fs::path p = fs::current_path();
    std::cout << "Number of hard links for current path is "
              << fs::hard_link_count(p) << '\n';
 
    // each ".." is a hard link to the parent directory, so the total number
    // of hard links for any directory is 2 plus number of direct subdirectories
    p = fs::current_path() / ".."; // each dot-dot is a hard link to parent
    std::cout << "Number of hard links for .. is "
              << fs::hard_link_count(p) << '\n';
}
```

## See also
- [create_hard_link](/cpp/experimental/fs/create_hard_link/)
