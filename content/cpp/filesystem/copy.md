---
title: "std::filesystem::copy"
source_path: "cpp/filesystem/copy"
header: "<filesystem>"
category: "filesystem"
since: "C++17"
---

Copies files and directories, with a variety of options.

## Declarations
```cpp
void copy( const std::filesystem::path& from,
const std::filesystem::path& to );
```
_(since C++17)_

```cpp
void copy( const std::filesystem::path& from,
const std::filesystem::path& to,
std::error_code& ec );
```
_(since C++17)_

```cpp
void copy( const std::filesystem::path& from,
const std::filesystem::path& to,
std::filesystem::copy_options options );
```
_(since C++17)_

```cpp
void copy( const std::filesystem::path& from,
const std::filesystem::path& to,
std::filesystem::copy_options options,
std::error_code& ec );
```
_(since C++17)_

## Parameters
- `from`: path to the source file, directory, or symlink
- `to`: path to the target file, directory, or symlink
- `ec`: out-parameter for error reporting in the non-throwing overload

## Return value
(none)

## Notes
The default behavior when copying directories is the non-recursive copy: the files are copied, but not the subdirectories:

While with copy_options::recursive, the subdirectories are also copied, with their content, recursively.

## Example
```cpp
#include <cstdlib>
#include <filesystem>
#include <fstream>
#include <iostream>
namespace fs = std::filesystem;
 
int main()
{
    fs::create_directories("sandbox/dir/subdir");
    std::ofstream("sandbox/file1.txt").put('a');
    fs::copy("sandbox/file1.txt", "sandbox/file2.txt"); // copy file
    fs::copy("sandbox/dir", "sandbox/dir2"); // copy directory (non-recursive)
    const auto copyOptions = fs::copy_options::update_existing
                           | fs::copy_options::recursive
                           | fs::copy_options::directories_only
                           ;
    fs::copy("sandbox", "sandbox_copy", copyOptions); 
    static_cast<void>(std::system("tree"));
    fs::remove_all("sandbox");
    fs::remove_all("sandbox_copy");
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3013 | C++17 | error_code overload marked noexcept but can allocate memory | noexcept removed |
| LWG 2682 | C++17 | attempting to create a symlink for a directory succeeds but does nothing | reports an error |

## See also
- [copy_options](/cpp/filesystem/copy_options/)
- [copy_symlink](/cpp/filesystem/copy_symlink/)
- [copy_file](/cpp/filesystem/copy_file/)
