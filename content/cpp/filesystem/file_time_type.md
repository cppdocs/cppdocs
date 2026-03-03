---
title: "std::filesystem::file_time_type"
source_path: "cpp/filesystem/file_time_type"
header: "<filesystem>"
category: "filesystem"
since: "C++20"
---

Represents file time.

## Declarations
```cpp
using file_time_type = std::chrono::time_point</*trivial-clock*/>;
```
_(since C++17) (until C++20)_

```cpp
using file_time_type = std::chrono::time_point<std::chrono::file_clock>;
```
_(since C++20)_

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
- [last_write_time](/cpp/filesystem/last_write_time/)
