---
title: "std::filesystem::remove, std::filesystem::remove_all"
source_path: "cpp/filesystem/remove"
header: "<filesystem>"
category: "filesystem"
since: "C++17"
---

1,2) The file or empty directory identified by the path p is deleted as if by the POSIX [remove](https://pubs.opengroup.org/onlinepubs/9699919799/functions/remove.html). Symlinks are not followed (symlink is removed, not its target).

## Declarations
```cpp
bool remove( const std::filesystem::path& p );
```
_(since C++17)_

```cpp
bool remove( const std::filesystem::path& p, std::error_code& ec ) noexcept;
```
_(since C++17)_

```cpp
std::uintmax_t remove_all( const std::filesystem::path& p );
```
_(since C++17)_

```cpp
std::uintmax_t remove_all( const std::filesystem::path& p, std::error_code& ec );
```
_(since C++17)_

## Parameters
- `p`: path to delete
- `ec`: out-parameter for error reporting in the non-throwing overload.

## Notes
On POSIX systems, this function typically calls [unlink](https://pubs.opengroup.org/onlinepubs/9699919799/functions/unlink.html) and [rmdir](https://pubs.opengroup.org/onlinepubs/9699919799/functions/rmdir.html) as needed, on Windows [DeleteFileW](https://learn.microsoft.com/en-us/windows/win32/api/fileapi/nf-fileapi-deletefilew) and [RemoveDirectoryW](https://learn.microsoft.com/en-us/windows/win32/api/fileapi/nf-fileapi-removedirectoryw).

If p did not exist, this function returns false and does not report an error.

## Example
```cpp
#include <cstdint>
#include <filesystem>
#include <fstream>
#include <iostream>
 
int main()
{
    namespace fs = std::filesystem;
    std::cout << std::boolalpha;
 
    fs::path tmp{std::filesystem::temp_directory_path()};
 
    const auto O_O{"O_O"};
    std::ofstream{tmp / O_O} << O_O; // creates file containing O_O
    std::cout << "remove(): " << fs::remove(tmp / O_O) << '\n'; // success
    std::cout << "remove(): " << fs::remove(tmp / O_O) << '\n'; // fail
 
    std::filesystem::create_directories(tmp / "abcdef/example");
    const std::uintmax_t n{fs::remove_all(tmp / "abcdef")};
    std::cout << "remove_all(): " << n << " files or directories\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3014 | C++17 | error_code overload of remove_all marked noexcept but can allocate memory | noexcept removed |

## See also
- [remove](/cpp/io/c/remove/)
