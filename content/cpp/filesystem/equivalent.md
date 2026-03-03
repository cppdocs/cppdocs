---
title: "std::filesystem::equivalent"
source_path: "cpp/filesystem/equivalent"
header: "<filesystem>"
category: "filesystem"
since: "C++17"
---

Checks whether the paths p1 and p2 resolve to the same file system entity.

## Declarations
```cpp
bool equivalent( const std::filesystem::path& p1,
const std::filesystem::path& p2 );
```
_(since C++17)_

```cpp
bool equivalent( const std::filesystem::path& p1,
const std::filesystem::path& p2,
std::error_code& ec ) noexcept;
```
_(since C++17)_

## Parameters
- `p1, p2`: paths to check for equivalence
- `ec`: out-parameter for error reporting in the non-throwing overload

## Return value
true if the p1 and p2 refer to the same file or directory and their file status is the same. false otherwise.

## Notes
Two paths are considered to resolve to the same file system entity if the two candidate entities the paths resolve to are located on the same device at the same location. For POSIX, this means that the st_dev and st_ino members of their POSIX [stat structure](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/sys_stat.h.html), obtained as if by POSIX [stat()](https://pubs.opengroup.org/onlinepubs/9699919799/functions/stat.html), are equal.

In particular, all hard links for the same file or directory are equivalent, and a symlink and its target on the same file system are equivalent.

## Example
```cpp
#include <cstdint>
#include <filesystem>
#include <iostream>
namespace fs = std::filesystem;
 
int main()
{
    // hard link equivalency
    fs::path p1 = ".";
    fs::path p2 = fs::current_path();
    if (fs::equivalent(p1, p2))
        std::cout << p1 << " is equivalent to " << p2 << '\n';
 
    // symlink equivalency
    for (const fs::path lib : {"/lib/libc.so.6", "/lib/x86_64-linux-gnu/libc.so.6"})
    {
        try
        {
            p2 = lib.parent_path() / fs::read_symlink(lib);
        }
        catch (std::filesystem::filesystem_error const& ex)
        {
            std::cout << ex.what() << '\n';
            continue;
        }
 
        if (fs::equivalent(lib, p2))
            std::cout << lib << " is equivalent to " << p2 << '\n';
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2937 | C++17 | error condition specified incorrectly | corrected |

## See also
- [compare](/cpp/filesystem/path/compare/)
- [operator==operator!=operator<operator<=operator>operator>=operator<=>](/cpp/filesystem/path/operator_cmp/)
- [statussymlink_status](/cpp/filesystem/status/)
