---
title: "std::experimental::filesystem::file_time_type"
source_path: "cpp/experimental/fs/file_time_type"
header: "<experimental/filesystem>"
category: "experimental"
---

Represents file time. trivial-clock is an implementation-defined type that satisfies [TrivialClock](/cpp/named_req/trivialclock/) and is sufficient to represent the resolution and range of the file time values offered by the filesystem.

## Declarations
```cpp
using file_time_type = chrono::time_point</*trivial-clock*/>;
```
_(filesystem TS)_

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
- [last_write_time](/cpp/experimental/fs/last_write_time/)
