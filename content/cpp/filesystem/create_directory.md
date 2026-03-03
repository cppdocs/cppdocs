---
title: "std::filesystem::create_directory, std::filesystem::create_directories"
source_path: "cpp/filesystem/create_directory"
header: "<filesystem>"
category: "filesystem"
since: "C++17"
---

1,2) Creates the directory p as if by POSIX [mkdir()](https://pubs.opengroup.org/onlinepubs/9699919799/functions/mkdir.html) with a second argument of static_cast<int>([std::filesystem::perms::all](/cpp/filesystem/perms/)) (the parent directory must already exist). If the function fails because p resolves to an existing directory, no error is reported. Otherwise on failure an error is reported.

## Declarations
```cpp
bool create_directory( const std::filesystem::path& p );
```
_(since C++17)_

```cpp
bool create_directory( const std::filesystem::path& p, std::error_code& ec ) noexcept;
```
_(since C++17)_

```cpp
bool create_directory( const std::filesystem::path& p,
const std::filesystem::path& existing_p );
```
_(since C++17)_

```cpp
bool create_directory( const std::filesystem::path& p,
const std::filesystem::path& existing_p,
std::error_code& ec ) noexcept;
```
_(since C++17)_

```cpp
bool create_directories( const std::filesystem::path& p );
```
_(since C++17)_

```cpp
bool create_directories( const std::filesystem::path& p, std::error_code& ec );
```
_(since C++17)_

## Parameters
- `p`: the path to the new directory to create
- `existing_p`: the path to a directory to copy the attributes from
- `ec`: out-parameter for error reporting in the non-throwing overload

## Return value
true if a directory was newly created for the directory p resolves to, false otherwise.

## Notes
The attribute-preserving overload (3,4) is implicitly invoked by [copy()](/cpp/filesystem/copy/) when recursively copying directories. Its equivalent in boost.filesystem is [copy_directory](https://www.boost.org/doc/libs/1_57_0/libs/filesystem/doc/reference.html#copy_directory) (with argument order reversed).

## Example
```cpp
#include <cassert>
#include <cstdlib>
#include <filesystem>
 
int main()
{
    std::filesystem::current_path(std::filesystem::temp_directory_path());
 
    // Basic usage
    std::filesystem::create_directories("sandbox/1/2/a");
    std::filesystem::create_directory("sandbox/1/2/b");
 
    // Directory already exists (false returned, no error)
    assert(!std::filesystem::create_directory("sandbox/1/2/b"));
 
    // Permissions copying usage
    std::filesystem::permissions(
        "sandbox/1/2/b",
        std::filesystem::perms::others_all,
        std::filesystem::perm_options::remove
    );
    std::filesystem::create_directory("sandbox/1/2/c", "sandbox/1/2/b");
 
    std::system("ls -l sandbox/1/2");
    std::system("tree sandbox");
    std::filesystem::remove_all("sandbox");
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2935 | C++17 | error if target already exists but is not a directory | not error |
| LWG 3014 | C++17 | error_code overload of create_directories marked noexcept but can allocate memory | noexcept removed |
| P1164R1 | C++17 | creation failure caused by an existing non-directory file is not an error | made error |

## See also
- [create_symlinkcreate_directory_symlink](/cpp/filesystem/create_symlink/)
- [copy](/cpp/filesystem/copy/)
- [perms](/cpp/filesystem/perms/)
