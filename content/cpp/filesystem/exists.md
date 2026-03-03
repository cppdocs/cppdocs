---
title: "std::filesystem::exists"
source_path: "cpp/filesystem/exists"
header: "<filesystem>"
category: "filesystem"
since: "C++17"
---

Checks if the given file status or path corresponds to an existing file or directory.

## Declarations
```cpp
bool exists( std::filesystem::file_status s ) noexcept;
```
_(since C++17)_

```cpp
bool exists( const std::filesystem::path& p );
```
_(since C++17)_

```cpp
bool exists( const std::filesystem::path& p, std::error_code& ec ) noexcept;
```
_(since C++17)_

## Parameters
- `s`: file status to check
- `p`: path to examine
- `ec`: out-parameter for error reporting in the non-throwing overload

## Return value
true if the given path or file status corresponds to an existing file or directory, false otherwise.

## Notes
The information provided by this function is usually also provided as a byproduct of directory iteration. During directory iteration, calling exists(*iterator) is less efficient than exists(iterator->status()).

## Example
```cpp
#include <cstdint>
#include <filesystem>
#include <fstream>
#include <iostream>
namespace fs = std::filesystem;
 
void demo_exists(const fs::path& p, fs::file_status s = fs::file_status{})
{
    std::cout << p;
    if (fs::status_known(s) ? fs::exists(s) : fs::exists(p))
        std::cout << " exists\n";
    else
        std::cout << " does not exist\n";
}
 
int main()
{
    const fs::path sandbox{"sandbox"};
    fs::create_directory(sandbox);
    std::ofstream{sandbox/"file"}; // create regular file
    fs::create_symlink("non-existing", sandbox/"symlink");
 
    demo_exists(sandbox);
 
    for (const auto& entry : fs::directory_iterator(sandbox))
        demo_exists(entry, entry.status()); // use cached status from directory entry
 
    fs::remove_all(sandbox);
}
```

## See also
- [statussymlink_status](/cpp/filesystem/status/)
- [file_status](/cpp/filesystem/file_status/)
- [exists](/cpp/filesystem/directory_entry/exists/)
