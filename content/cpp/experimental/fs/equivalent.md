---
title: "std::experimental::filesystem::equivalent"
source_path: "cpp/experimental/fs/equivalent"
header: "<experimental/filesystem>"
category: "experimental"
---

Checks whether the paths p1 and p2 refer to the same file or directory and have the same file status as determined by [status](/cpp/experimental/fs/status/) (symlinks are followed).

## Declarations
```cpp
bool equivalent( const path& p1, const path& p2 );
bool equivalent( const path& p1, const path& p2, error_code& ec );
```
_(filesystem TS)_

## Parameters
- `p1, p2`: paths to check for equivalence
- `ec`: out-parameter for error reporting in the non-throwing overload

## Return value
true if the p1 and p2 refer to the same file or directory and their file status is the same. false otherwise.

## Notes
Two paths are considered to resolve to the same file system entity if st_dev and st_ino of their POSIX [stat structure](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/sys_stat.h.html), obtained as if by POSIX [stat](https://pubs.opengroup.org/onlinepubs/9699919799/functions/stat.html), are equal (meaning, the files are located on the same device at the same location).

In particular, all hard links for the same file or directory are equivalent, and a symlink and its target on the same file system are equivalent.

## Example
```cpp
#include <cstdint>
#include <experimental/filesystem>
#include <iostream>
namespace fs = std::experimental::filesystem;
 
int main()
{
    // hard link equivalency
    fs::path p1 = ".";
    fs::path p2 = fs::current_path();
    if (fs::equivalent(p1, p2))
        std::cout << p1 << " is equivalent to " << p2 << '\n';
 
    // symlink equivalency
    fs::path p3 = "/lib/libc.so.6";
    fs::path p4 = p3.parent_path() / fs::read_symlink(p3);
    if (fs::equivalent(p3, p4))
        std::cout << p3 << " is equivalent to " << p4 << '\n';
}
```

## See also
- [statussymlink_status](/cpp/experimental/fs/status/)
