---
title: "std::experimental::filesystem::file_size"
source_path: "cpp/experimental/fs/file_size"
header: "<experimental/filesystem>"
category: "experimental"
---

Returns the size of the regular file p, determined as if by reading the st_size member of the structure obtained by POSIX [stat](https://pubs.opengroup.org/onlinepubs/9699919799/functions/stat.html) (symlinks are followed).

## Declarations
```cpp
std::uintmax_t file_size( const path& p );
std::uintmax_t file_size( const path& p, error_code& ec );
```
_(filesystem TS)_

## Parameters
- `p`: path to examine
- `ec`: out-parameter for error reporting in the non-throwing overload

## Return value
The size of the file, in bytes.

## Example
```cpp
#include <experimental/filesystem>
#include <fstream>
#include <iostream>
namespace fs = std::experimental::filesystem;
 
int main()
{
    fs::path p = fs::current_path() / "example.bin";
    std::ofstream(p).put('a'); // create file of size 1
    std::cout << "File size = " << fs::file_size(p) << '\n';
    fs::remove(p);
 
    try
    {
        fs::file_size("/dev"); // attempt to get size of a directory
    }
    catch (fs::filesystem_error& e)
    {
        std::cout << e.what() << '\n';
    }        
}
```

## See also
- [resize_file](/cpp/experimental/fs/resize_file/)
- [space](/cpp/experimental/fs/space/)
