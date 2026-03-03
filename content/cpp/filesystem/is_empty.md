---
title: "std::filesystem::is_empty"
source_path: "cpp/filesystem/is_empty"
header: "<filesystem>"
category: "filesystem"
since: "C++17"
---

Checks whether the given path refers to an empty file or directory.

## Declarations
```cpp
bool is_empty( const std::filesystem::path& p );
```
_(since C++17)_

```cpp
bool is_empty( const std::filesystem::path& p, std::error_code& ec );
```
_(since C++17)_

## Parameters
- `p`: path to examine
- `ec`: error code to modify in case of error

## Return value
true if the path indicated by p refers to an empty file or directory, false otherwise. The non-throwing overload returns false if an error occurs.

## Example
```cpp
#include <cstdio>
#include <filesystem>
#include <fstream>
#include <iostream>
 
int main()
{
    namespace fs = std::filesystem;
 
    const fs::path tmp_dir{fs::temp_directory_path()};
    std::cout << std::boolalpha
              << "Temp dir: " << tmp_dir << '\n'
              << "is_empty(): " << fs::is_empty(tmp_dir) << '\n';
 
    const fs::path tmp_name{tmp_dir / std::tmpnam(nullptr)};
    std::cout << "Temp file: " << tmp_name << '\n';
 
    std::ofstream file{tmp_name.string()};
    std::cout << "is_empty(): " << fs::is_empty(tmp_name) << '\n';
    file << "cppreference.com";
    file.flush();
    std::cout << "is_empty(): " << fs::is_empty(tmp_name) << '\n'
              << "file_size(): " << fs::file_size(tmp_name) << '\n';
    file.close();
    fs::remove(tmp_name);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3013 | C++17 | error_code overload marked noexcept but can allocate memory | noexcept removed |

## See also
- [statussymlink_status](/cpp/filesystem/status/)
- [exists](/cpp/filesystem/exists/)
