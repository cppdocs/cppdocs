---
title: "std::experimental::filesystem::create_directory, std::experimental::filesystem::create_directories"
source_path: "cpp/experimental/fs/create_directory"
header: "<experimental/filesystem>"
category: "experimental"
---

1) Creates the directory p as if by POSIX [mkdir()](https://pubs.opengroup.org/onlinepubs/9699919799/functions/mkdir.html) with a second argument of static_cast<int>(fs::perms::all) (the parent directory must already exist). If p already exists and is already a directory, the function does nothing (this condition is not treated as an error).

## Declarations
```cpp
bool create_directory( const path& p );
bool create_directory( const path& p, error_code& ec );
```
_(filesystem TS)_

```cpp
bool create_directory( const path& p, const path& existing_p );
bool create_directory( const path& p, const path& existing_p, error_code& ec );
```
_(filesystem TS)_

```cpp
bool create_directories( const path& p );
bool create_directories( const path& p, error_code& ec );
```
_(filesystem TS)_

## Parameters
- `p`: the path to the new directory to create
- `existing_p`: the path to a directory to copy the attributes from
- `ec`: out-parameter for error reporting in the non-throwing overload

## Notes
The attribute-preserving overload (2) is implicitly invoked by [copy()](/cpp/experimental/fs/copy/) when recursively copying directories. Its equivalent in boost.filesystem is [copy_directory](https://www.boost.org/doc/libs/1_57_0/libs/filesystem/doc/reference.html#copy_directory) (with argument order reversed).

## Example
```cpp
#include <cstdlib>
#include <experimental/filesystem>
#include <fstream>
#include <iostream>
namespace fs = std::experimental::filesystem;
 
int main()
{
    fs::create_directories("sandbox/1/2/a");
    fs::create_directory("sandbox/1/2/b");
    fs::permissions("sandbox/1/2/b", fs::perms::remove_perms | fs::perms::others_all);
    fs::create_directory("sandbox/1/2/c", "sandbox/1/2/b");
    std::system("ls -l sandbox/1/2");
    fs::remove_all("sandbox");
}
```

## See also
- [create_symlinkcreate_directory_symlink](/cpp/experimental/fs/create_symlink/)
- [copy](/cpp/experimental/fs/copy/)
- [perms](/cpp/experimental/fs/perms/)
