---
title: "std::filesystem::last_write_time"
source_path: "cpp/filesystem/last_write_time"
header: "<filesystem>"
category: "filesystem"
since: "C++17"
---

1,2) Returns the time of the last modification of p, determined as if by accessing the member st_mtime of the POSIX [stat](https://pubs.opengroup.org/onlinepubs/9699919799/functions/stat.html) (symlinks are followed).
The non-throwing overload returns file_time_type::min() on errors.

## Declarations
```cpp
std::filesystem::file_time_type last_write_time( const std::filesystem::path& p );
```
_(since C++17)_

```cpp
std::filesystem::file_time_type last_write_time( const std::filesystem::path& p,
std::error_code& ec ) noexcept;
```
_(since C++17)_

```cpp
void last_write_time( const std::filesystem::path& p,
std::filesystem::file_time_type new_time );
```
_(since C++17)_

```cpp
void last_write_time( const std::filesystem::path& p,
std::filesystem::file_time_type new_time,
std::error_code& ec ) noexcept;
```
_(since C++17)_

## Parameters
- `p`: path to examine or modify
- `new_time`: new modification time
- `ec`: out-parameter for error reporting in the non-throwing overload

## Notes
It is not guaranteed that immediately after setting the write time, the value returned by (1,2) is the same as what was passed as the argument to (3,4) because the file system's time may be more granular than [filesystem::file_time_type](/cpp/filesystem/file_time_type/).

## Example
```cpp
#include <chrono>
#include <filesystem>
#include <format>
#include <fstream>
#include <iostream>
 
using namespace std::chrono_literals;
 
int main()
{
    auto p = std::filesystem::temp_directory_path() / "example.bin";
    std::ofstream{p.c_str()}.put('a'); // create file
 
    std::filesystem::file_time_type ftime = std::filesystem::last_write_time(p);
    std::cout << std::format("File write time is {}\n", ftime);
 
    // move file write time 1 hour to the future
    std::filesystem::last_write_time(p, ftime + 1h);
 
    // read back from the filesystem
    ftime = std::filesystem::last_write_time(p);
    std::cout << std::format("File write time is {}\n", ftime);
 
    std::filesystem::remove(p);
}
```

## See also
- [file_time_type](/cpp/filesystem/file_time_type/)
- [last_write_time](/cpp/filesystem/directory_entry/last_write_time/)
