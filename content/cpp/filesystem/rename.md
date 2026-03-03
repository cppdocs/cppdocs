---
title: "std::filesystem::rename"
source_path: "cpp/filesystem/rename"
header: "<filesystem>"
category: "filesystem"
since: "C++17"
---

Moves or renames the filesystem object identified by old_p to new_p as if by the POSIX [rename](https://pubs.opengroup.org/onlinepubs/9699919799/functions/rename.html):

## Declarations
```cpp
void rename( const std::filesystem::path& old_p,
const std::filesystem::path& new_p );
```
_(since C++17)_

```cpp
void rename( const std::filesystem::path& old_p,
const std::filesystem::path& new_p,
std::error_code& ec ) noexcept;
```
_(since C++17)_

## Parameters
- `old_p`: path to move or rename
- `new_p`: target path for the move/rename operation
- `ec`: out-parameter for error reporting in the non-throwing overload

## Return value
(none)

## Example
```cpp
#include <filesystem>
#include <fstream>
namespace fs = std::filesystem;
 
int main()
{
    std::filesystem::path p = std::filesystem::current_path() / "sandbox";
    std::filesystem::create_directories(p / "from");
    std::ofstream{ p / "from/file1.txt" }.put('a');
    std::filesystem::create_directory(p / "to");
 
//  fs::rename(p / "from/file1.txt", p / "to/"); // error: "to" is a directory
    fs::rename(p / "from/file1.txt", p / "to/file2.txt"); // OK
//  fs::rename(p / "from", p / "to"); // error: "to" is not empty
    fs::rename(p / "from", p / "to/subdir"); // OK
 
    std::filesystem::remove_all(p);
}
```

## See also
- [rename](/cpp/io/c/rename/)
- [removeremove_all](/cpp/filesystem/remove/)
