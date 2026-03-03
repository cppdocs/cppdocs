---
title: "std::experimental::filesystem::exists"
source_path: "cpp/experimental/fs/exists"
header: "<experimental/filesystem>"
category: "experimental"
---

Checks if the given file status or path corresponds to an existing file or directory.

## Declarations
```cpp
bool exists( file_status s )
```
_(filesystem TS)_

```cpp
bool exists( const path& p );
bool exists( const path& p, error_code& ec )
```
_(filesystem TS)_

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
#include <experimental/filesystem>
#include <fstream>
#include <iostream>
namespace fs = std::experimental::filesystem;
 
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
    fs::create_directory("sandbox");
    std::ofstream("sandbox/file"); // create regular file
    fs::create_symlink("non-existing", "sandbox/symlink");
 
    demo_exists("sandbox");
    for (auto it = fs::directory_iterator("sandbox"); it != fs::directory_iterator(); ++it)
        demo_exists(*it, it->status()); // use cached status from directory entry
    fs::remove_all("sandbox");
}
```

## See also
- [statussymlink_status](/cpp/experimental/fs/status/)
- [file_status](/cpp/experimental/fs/file_status/)
- [statussymlink_status](/cpp/experimental/fs/directory_entry/status/)
