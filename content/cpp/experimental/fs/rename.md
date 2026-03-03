---
title: "std::experimental::filesystem::rename"
source_path: "cpp/experimental/fs/rename"
header: "<experimental/filesystem>"
category: "experimental"
---

Moves or renames the filesystem object identified by old_p to new_p as if by the POSIX [rename](https://pubs.opengroup.org/onlinepubs/9699919799/functions/rename.html):

## Declarations
```cpp
void rename( const path& old_p, const path& new_p );
void rename( const path& old_p, const path& new_p, std::error_code& ec );
```
_(filesystem TS)_

## Parameters
- `old_p`: path to move or rename
- `new_p`: target path for the move/rename operation
- `ec`: out-parameter for error reporting in the non-throwing overload

## Return value
(none)

## Example
```cpp
#include <experimental/filesystem>
#include <fstream>
#include <iostream>
namespace fs = std::experimental::filesystem;
 
int main()
{
    fs::path p = fs::current_path() / "sandbox";
    fs::create_directories(p/"from");
    std::ofstream(p/"from/file1.txt").put('a');
    fs::create_directory(p/"to");
 
//  fs::rename(p/"from/file1.txt", p/"to/"); // error: to is a directory
    fs::rename(p/"from/file1.txt", p/"to/file2.txt"); // OK
//  fs::rename(p/"from", p/"to"); // error: to is not empty
    fs::rename(p/"from", p/"to/subdir"); // OK
 
    fs::remove_all(p);
}
```

## See also
- [rename](/cpp/io/c/rename/)
- [removeremove_all](/cpp/experimental/fs/remove/)
