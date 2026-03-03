---
title: "std::experimental::filesystem::create_symlink, std::experimental::filesystem::create_directory_symlink"
source_path: "cpp/experimental/fs/create_symlink"
header: "<experimental/filesystem>"
category: "experimental"
---

Creates a symbolic link link with its target set to target as if by POSIX [symlink()](https://pubs.opengroup.org/onlinepubs/9699919799/functions/symlink.html): the pathname target may be invalid or non-existing.

## Declarations
```cpp
void create_symlink( const path& target, const path& link );
void create_symlink( const path& target, const path& link, error_code& ec );
```
_(filesystem TS)_

```cpp
void create_directory_symlink( const path& target, const path& link );
void create_directory_symlink( const path& target, const path& link, error_code& ec );
```
_(filesystem TS)_

## Parameters
- `target`: path to point the symlink to, does not have to exist
- `link`: path of the new symbolic link
- `ec`: out-parameter for error reporting in the non-throwing overload

## Return value
(none)

## Notes
Some operating systems do not support symbolic links at all or support them only for regular files.

Some file systems do not support symbolic links regardless of the operating system, for example the FAT system used on some memory cards and flash drives.

Like a hard link, a symbolic link allows a file to have multiple logical names. The presence of a hard link guarantees the existence of a file, even after the original name has been removed. A symbolic link provides no such assurance; in fact, the file named by the target argument need not exist when the link is created. A symbolic link can cross file system boundaries.

## Example
```cpp
#include <experimental/filesystem>
#include <iostream>
namespace fs = std::experimental::filesystem;
 
int main()
{
    fs::create_directories("sandbox/subdir");
    fs::create_symlink("target", "sandbox/sym1");
    fs::create_directory_symlink("subdir", "sandbox/sym2");
 
    for (auto it = fs::directory_iterator("sandbox"); it != fs::directory_iterator(); ++it)
        if (is_symlink(it->symlink_status()))
            std::cout << *it << "->" << read_symlink(*it) << '\n';
 
    fs::remove_all("sandbox");
}
```

## See also
- [statussymlink_status](/cpp/experimental/fs/status/)
- [read_symlink](/cpp/experimental/fs/read_symlink/)
- [create_hard_link](/cpp/experimental/fs/create_hard_link/)
