---
title: "std::experimental::filesystem::last_write_time"
source_path: "cpp/experimental/fs/last_write_time"
header: "<experimental/filesystem>"
category: "experimental"
---

1) Returns the time of the last modification of p, determined as if by accessing the member st_mtime of the POSIX [stat](https://pubs.opengroup.org/onlinepubs/9699919799/functions/stat.html) (symlinks are followed).
The non-throwing overload returns file_time_type::min() on errors.

## Declarations
```cpp
file_time_type last_write_time( const path& p );
file_time_type last_write_time( const path& p, error_code& ec )
```
_(filesystem TS)_

```cpp
void last_write_time( const path& p, file_time_type new_time );
void last_write_time( const path& p, file_time_type new_time, error_code& ec );
```
_(filesystem TS)_

## Parameters
- `p`: path to examine or modify
- `new_time`: new modification time
- `ec`: out-parameter for error reporting in the non-throwing overload

## Notes
It is not guaranteed that immediately after setting the write time, the value returned by (1) is the same as what was passed as the argument to (2) because the file system's time may be more granular than file_time_type.

## Example
```cpp
#include <chrono>
#include <experimental/filesystem>
#include <fstream>
#include <iomanip>
#include <iostream>
namespace fs = std::experimental::filesystem;
using namespace std::chrono_literals;
 
int main()
{
    fs::path p = fs::current_path() / "example.bin";
    std::ofstream(p.c_str()).put('a'); // create file
    auto ftime = fs::last_write_time(p);
 
    std::time_t cftime = decltype(ftime)::clock::to_time_t(ftime); // assuming system_clock
    std::cout << "File write time is " << std::asctime(std::localtime(&cftime)) << '\n';
 
    fs::last_write_time(p, ftime + 1h); // move file write time 1 hour to the future
    ftime = fs::last_write_time(p); // read back from the filesystem
 
    cftime = decltype(ftime)::clock::to_time_t(ftime);
    std::cout << "File write time is " << std::asctime(std::localtime(&cftime)) << '\n';
    fs::remove(p);
}
```

## See also
- [file_time_type](/cpp/experimental/fs/file_time_type/)
