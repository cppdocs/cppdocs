---
title: "std::filesystem::copy_file"
source_path: "cpp/filesystem/copy_file"
header: "<filesystem>"
category: "filesystem"
since: "C++17"
---

1,2) The default, equivalent to (3,4) with copy_options::none used as options.

## Declarations
```cpp
bool copy_file( const std::filesystem::path& from,
const std::filesystem::path& to );
```
_(since C++17)_

```cpp
bool copy_file( const std::filesystem::path& from,
const std::filesystem::path& to,
std::error_code& ec );
```
_(since C++17)_

```cpp
bool copy_file( const std::filesystem::path& from,
const std::filesystem::path& to,
std::filesystem::copy_options options );
```
_(since C++17)_

```cpp
bool copy_file( const std::filesystem::path& from,
const std::filesystem::path& to,
std::filesystem::copy_options options,
std::error_code& ec );
```
_(since C++17)_

## Parameters
- `from`: path to the source file
- `to`: path to the target file
- `ec`: out-parameter for error reporting in the non-throwing overload

## Return value
true if the file was copied, false otherwise.

## Notes
The functions involve at most one direct or indirect call to [filesystem::status(to)](/cpp/filesystem/status/) (used both to determine if the file exists, and, for filesystem::copy_options::update_existing option, its last write time).

Error is reported when filesystem::copy_file is used to copy a directory: use [filesystem::copy](/cpp/filesystem/copy/) for that.

filesystem::copy_file follows symlinks: use [filesystem::copy_symlink](/cpp/filesystem/copy_symlink/) or [filesystem::copy](/cpp/filesystem/copy/) with filesystem::copy_options::copy_symlinks for that.

## Example
```cpp
#include <filesystem>
#include <fstream>
#include <iostream>
namespace fs = std::filesystem;
 
int main()
{
    fs::create_directory("sandbox");
    std::ofstream("sandbox/file1.txt").put('a');
 
    fs::copy_file("sandbox/file1.txt", "sandbox/file2.txt");
 
    // now there are two files in sandbox:
    std::cout << "file1.txt holds: "
              << std::ifstream("sandbox/file1.txt").rdbuf() << '\n';
    std::cout << "file2.txt holds: "
              << std::ifstream("sandbox/file2.txt").rdbuf() << '\n';
 
    // fail to copy directory
    fs::create_directory("sandbox/abc");
    try
    {
        fs::copy_file("sandbox/abc", "sandbox/def");
    }
    catch (fs::filesystem_error& e)
    {
        std::cout << "Could not copy sandbox/abc: " << e.what() << '\n';
    }
    fs::remove_all("sandbox");
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3014 | C++17 | error_code overload marked noexcept but can allocate memory | noexcept removed |

## See also
- [copy_options](/cpp/filesystem/copy_options/)
- [copy_symlink](/cpp/filesystem/copy_symlink/)
- [copy](/cpp/filesystem/copy/)
